import React, { useCallback } from "react";
import { CLICKED_TABLE } from "./TicTacToe";

const Td = React.memo(({ cellData, rowIndex, cellIndex, dispatch, win }) => {
  const handleOnClick = useCallback(() => {
    if (cellData || win) {
      return;
    }
    dispatch({
      type: CLICKED_TABLE,
      row: rowIndex,
      cell: cellIndex,
    });
  }, [cellData, win]);

  return <td onClick={handleOnClick}>{cellData}</td>;
});
export default Td;
