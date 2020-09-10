import React, { useContext, useCallback } from "react";
import {
  TableContext,
  CODE,
  OPEN_CELL,
  OPEN_MINE,
  RIGHT_1,
  RIGHT_2,
  RIGHT_3,
} from "./Mine";

const Td = ({ cellIndex, rowIndex }) => {
  const { tableData, dispatch, stop } = useContext(TableContext);

  const getStyleTd = (code) => {
    switch (code) {
      case CODE.MINE:
      case CODE.NORMAL:
        return { backgroundColor: "#444" };
      case CODE.OPENED:
      case CODE.CLICKED_MINE:
        return { backgroundColor: "white" };
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return { backgroundColor: "yellow" };
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        return { backgroundColor: "red" };
      default:
        return { backgroundColor: "white" };
    }
  };

  const getTextTd = useCallback((code) => {
    switch (code) {
      case CODE.NORMAL:
        return "";
      case CODE.MINE:
        return "X";
      case CODE.CLICKED_MINE:
        return "펑 ";
      case CODE.OPENED:
        return "";
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return "?";
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        return "!";
      default:
        return "";
    }
  }, []);

  const openCell = useCallback(() => {
    if (stop) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.FLAG_MINE:
      case CODE.CLICKED_MINE:
      case CODE.QUESTION:
        return;
      case CODE.NORMAL:
        return dispatch({
          type: OPEN_CELL,
          row: rowIndex,
          cell: cellIndex,
        });
      case CODE.MINE:
        return dispatch({
          type: OPEN_MINE,
          row: rowIndex,
          cell: cellIndex,
        });
    }
  }, [tableData[rowIndex][cellIndex], stop]);

  const RightMouseOnClick = useCallback(
    (e) => {
      e.preventDefault();
      if (stop) {
        return;
      }
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          return dispatch({
            type: RIGHT_1,
            row: rowIndex,
            cell: cellIndex,
          });
        case CODE.FLAG:
        case CODE.FLAG_MINE:
          return dispatch({
            type: RIGHT_2,
            row: rowIndex,
            cell: cellIndex,
          });
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
          return dispatch({
            type: RIGHT_3,
            row: rowIndex,
            cell: cellIndex,
          });
      }
    },
    [tableData[rowIndex][cellIndex], stop]
  );

  const handleOnDrag = useCallback(() => {
    return false;
  });

  return (
    <td
      onClick={openCell}
      onContextMenu={RightMouseOnClick}
      className="td"
      onDragStart={handleOnDrag}
      style={getStyleTd(tableData[rowIndex][cellIndex])}
    >
      {getTextTd(tableData[rowIndex][cellIndex])}
    </td>
  );
};

export default Td;
