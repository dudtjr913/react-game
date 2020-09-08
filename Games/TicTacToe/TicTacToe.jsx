import React, { useCallback } from "react";
import { useReducer, useEffect } from "react";
import Table from "./Table";
import "./tictactoe.css";

const initialState = {
  winner: "",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  turn: "O",
  recentCell: [-1, -1],
  draw: false,
};

export const CLICKED_TABLE = "CLICKED_TABLE";
const TURN_CHANGE = "TURN_CHANGE";
const WINNER = "WINNER";
const RESET_GAME = "RESET_GAME";
const DRAW_GAME = "DRAW_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case CLICKED_TABLE: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state, //
        tableData, //
        recentCell: [action.row, action.cell],
      };
    }
    case TURN_CHANGE:
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    case WINNER:
      return {
        ...state,
        winner: state.turn,
      };
    case RESET_GAME:
      return {
        ...state,
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
        turn: "O",
        winner: "",
        draw: false,
      };
    case DRAW_GAME:
      return {
        ...state,
        draw: true,
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { recentCell, tableData, turn, winner, draw } = state;
  useEffect(() => {
    let win = false;
    const [row, cell] = recentCell;
    if (row < 0 || cell < 0) {
      return;
    }
    if (
      tableData[row][0] === turn &&
      tableData[row][1] === turn &&
      tableData[row][2] === turn
    ) {
      win = true;
    } else if (
      tableData[0][cell] === turn &&
      tableData[1][cell] === turn &&
      tableData[2][cell] === turn
    ) {
      win = true;
    } else if (
      tableData[0][0] === turn &&
      tableData[1][1] === turn &&
      tableData[2][2] === turn
    ) {
      win = true;
    } else if (
      tableData[0][2] === turn &&
      tableData[1][1] === turn &&
      tableData[2][0] === turn
    ) {
      win = true;
    }
    if (win) {
      dispatch({
        type: WINNER,
      });
      return;
    }
    let draw = true;
    tableData.forEach((row) => {
      row.forEach((cell) => {
        if (cell == false) {
          draw = false;
        }
      });
    });
    if (draw) {
      dispatch({
        type: DRAW_GAME,
      });
      return;
    } else {
      dispatch({
        type: TURN_CHANGE,
      });
    }
  }, [recentCell]);

  const handleOnReset = useCallback(() => {
    dispatch({
      type: RESET_GAME,
    });
  }, []);
  return (
    <>
      <Table tableData={state.tableData} dispatch={dispatch} win={winner} />
      {winner && (
        <>
          <span>{winner}가 승리하였습니다.</span>{" "}
          <button onClick={handleOnReset}>다시하기</button>
        </>
      )}
      {draw && (
        <>
          <span>무승부입니다.</span>
          <button onClick={handleOnReset}>다시하기</button>
        </>
      )}
    </>
  );
};

export default TicTacToe;
