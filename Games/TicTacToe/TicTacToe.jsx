import React from "react";
import Table from "./Table";
import { useReducer, useEffect } from "react";
import "./tictactoe.css";

const initialState = {
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  win: false,
  winner: "",
  recentCell: [-1, -1],
};

export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
const WINNER = "WINNER";
const RESET_GAME = "RESET_GAME";
const RESET_MESSAGE = "RESET_MESSAGE";

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    case WINNER:
      return {
        ...state,
        win: true,
        winner: action.winner,
      };
    case RESET_GAME:
      return {
        ...state,
        turn: "O",
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, recentCell, turn, win, winner } = state;

  useEffect(() => {
    const [row, cell] = recentCell;
    let win = false;
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
      tableData[0][2] == turn &&
      tableData[1][1] == turn &&
      tableData[2][0] == turn
    ) {
      win = true;
    }
    let draw = true;
    if (win) {
      dispatch({
        type: WINNER,
        winner: turn,
      });
      dispatch({
        type: RESET_GAME,
      });
    } else if (!win) {
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if (cell == false) {
            draw = false;
          }
        });
      });
      if (draw) {
        dispatch({
          type: RESET_GAME,
        });
      } else if (!draw) {
        dispatch({
          type: CHANGE_TURN,
        });
      }
    }
  }, [recentCell]);

  return (
    <>
      <Table tableData={tableData} dispatch={dispatch} />
      {win && `${winner}이 승리하였습니다.`}
    </>
  );
};

export default TicTacToe;
