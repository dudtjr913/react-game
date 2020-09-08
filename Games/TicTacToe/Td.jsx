import React from "react";
import { useCallback, useState } from "react";
import { CLICK_CELL, CHANGE_TURN } from "./TicTacToe";

const Td = React.memo(({ cellIndex, rowIndex, cellData, dispatch }) => {
  const handleClick = useCallback(() => {
    if (cellData) {
      return;
    }
    dispatch({
      type: CLICK_CELL,
      cell: cellIndex,
      row: rowIndex,
    });
  }, [cellData]);
  return <td onClick={handleClick}>{cellData}</td>;
});
export default Td;
