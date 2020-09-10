import React, {
  useReducer,
  useCallback,
  createContext,
  useMemo,
  useRef,
  useEffect,
} from "react";
import Table from "./Table";
import Form from "./Form";
import "./Mine.css";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
};

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
  stop: true,
});

const initialState = {
  tableData: [],
  timer: 0,
  value: {
    row: "",
    cell: "",
    mine: "",
  },
  win: false,
  result: "",
  openedCount: 0,
  stop: true,
};

const plantMine = (row, cell, mine) => {
  const candidates = Array(row * cell)
    .fill()
    .map((arr, i) => {
      return i;
    });
  const mineShuffle = [];
  while (candidates.length > row * cell - mine) {
    mineShuffle.push(
      candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0]
    );
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }
  for (let m = 0; m < mineShuffle.length; m++) {
    const mineRow = Math.floor(mineShuffle[m] / cell);
    const mineCell = mineShuffle[m] % cell;
    data[mineRow][mineCell] = CODE.MINE;
  }
  return data;
};

const CHANGE_VALUE = "CHANGE_VALUE";
export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const OPEN_MINE = "OPEN_MINE";
export const RIGHT_1 = "RIGHT_1";
export const RIGHT_2 = "RIGHT_2";
export const RIGHT_3 = "RIGHT_3";
const PLUS_TIME = "PLUS_TIME";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case START_GAME:
      return {
        ...state,
        value: {
          row: action.row,
          cell: action.cell,
          mine: action.mine,
        },
        tableData: plantMine(action.row, action.cell, action.mine),
        stop: false,
        openedCount: 0,
        result: "",
        timer: 0,
      };
    case OPEN_CELL: {
      const openData = [...state.tableData];
      openData.forEach((v, i) => {
        openData[i] = [...state.tableData[i]];
      });
      const checked = [];
      let openedCount = 0;
      const checkedAround = (row, cell) => {
        if (
          cell < 0 ||
          cell >= openData[0].length ||
          row < 0 ||
          row >= openData.length ||
          openData[row][cell] >= 0
        ) {
          return;
        }
        if (
          [
            CODE.MINE,
            CODE.QUESTION_MINE,
            CODE.FLAG_MINE,
            CODE.FLAG,
            CODE.QUESTION,
          ].includes(openData[row][cell])
        ) {
          return;
        }
        if (checked.includes(row + "," + cell)) {
          return;
        } else {
          checked.push(row + "," + cell);
        }
        openedCount += 1;
        let around = [];
        if (openData[row - 1]) {
          around = around.concat(
            openData[row - 1][cell - 1],
            openData[row - 1][cell],
            openData[row - 1][cell + 1]
          );
        }
        around = around.concat(
          openData[row][cell - 1],
          openData[row][cell + 1]
        );
        if (openData[row + 1]) {
          around = around.concat(
            openData[row + 1][cell - 1],
            openData[row + 1][cell],
            openData[row + 1][cell + 1]
          );
        }
        const count = around.filter((v) =>
          [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)
        ).length;

        if (count === 0) {
          const near = [];
          if (row > -1) {
            if (row - 1 > -1) {
              near.push([row - 1, cell - 1]);
              near.push([row - 1, cell]);
              near.push([row - 1, cell + 1]);
            }
            near.push([row, cell - 1]);
            near.push([row, cell + 1]);
            if (row + 1 < openData.length) {
              near.push([row + 1, cell - 1]);
              near.push([row + 1, cell]);
              near.push([row + 1, cell + 1]);
            }
          }
          near.forEach((v) => {
            if (openData[v[0]][v[1]] !== CODE.OPENED) {
              checkedAround(v[0], v[1]);
            }
          });
        }
        openData[row][cell] = count;
      };
      checkedAround(action.row, action.cell);
      let win = false;
      let result = "";
      let stop = false;
      if (
        state.value.row * state.value.cell - state.value.mine ===
        state.openedCount + openedCount
      ) {
        stop = true;
        win = true;
        result = `${state.timer}초 걸렸습니다. 승리!!`;
      }
      return {
        ...state,
        tableData: openData,
        openedCount: state.openedCount + openedCount,
        win,
        result,
        stop,
      };
    }
    case OPEN_MINE: {
      const openData = [...state.tableData];
      openData[action.row] = [...openData[action.row]];
      openData[action.row][action.cell] = CODE.CLICKED_MINE;
      return {
        ...state,
        tableData: openData,
        stop: true,
        result: "패배!!",
      };
    }
    case RIGHT_1: {
      const openData = [...state.tableData];
      openData[action.row] = [...openData[action.row]];
      if (openData[action.row][action.cell] === CODE.MINE) {
        openData[action.row][action.cell] = CODE.FLAG_MINE;
      } else {
        openData[action.row][action.cell] = CODE.FLAG;
      }
      return {
        ...state,
        tableData: openData,
      };
    }
    case RIGHT_2: {
      const openData = [...state.tableData];
      openData[action.row] = [...openData[action.row]];
      if (openData[action.row][action.cell] === CODE.FLAG_MINE) {
        openData[action.row][action.cell] = CODE.QUESTION_MINE;
      } else {
        openData[action.row][action.cell] = CODE.QUESTION;
      }
      return {
        ...state,
        tableData: openData,
      };
    }
    case RIGHT_3: {
      const openData = [...state.tableData];
      openData[action.row] = [...openData[action.row]];
      if (openData[action.row][action.cell] === CODE.QUESTION_MINE) {
        openData[action.row][action.cell] = CODE.MINE;
      } else {
        openData[action.row][action.cell] = CODE.NORMAL;
      }
      return {
        ...state,
        tableData: openData,
      };
    }
    case PLUS_TIME:
      return {
        ...state,
        timer: state.timer + 1,
      };
    default:
      return state;
  }
};

const Mine = React.memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer;
    if (!state.stop) {
      timer = setInterval(() => {
        dispatch({
          type: PLUS_TIME,
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [state.stop]);

  const value = useMemo(
    () => ({ dispatch, tableData: state.tableData, stop: state.stop }),
    [state.tableData, state.stop]
  );

  return (
    <>
      <TableContext.Provider value={value}>
        <Form />
        <Table />
      </TableContext.Provider>
      <div>{`시간 : ${state.timer}`}</div>
      <div>{state.result}</div>
    </>
  );
});

export default Mine;
