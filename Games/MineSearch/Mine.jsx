import React, { useReducer, useCallback } from "react";
import Table from "./Table";

const initialState = {
  tableData: [],
  value: {
    row: "",
    cell: "",
    number: "",
  },
};

const CHANGE_VALUE = "CHANGE_VALUE";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

const Mine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnValue = useCallback(
    (e) => {
      const value = { ...state.value };
      if (e.target.id === "row") {
        value.row = e.target.value;
        dispatch({
          type: CHANGE_VALUE,
          value: value,
        });
      } else if (e.target.id === "cell") {
        value.cell = e.target.value;
        dispatch({
          type: CHANGE_VALUE,
          value: value,
        });
      } else if (e.target.id === "number") {
        value.number = e.target.value;
        dispatch({
          type: CHANGE_VALUE,
          value: value,
        });
      }
    },
    [state.value]
  );

  return (
    <>
      <input
        id="row"
        type="number"
        value={state.value.row}
        onChange={handleOnValue}
      />
      <input
        id="cell"
        type="number"
        value={state.value.cell}
        onChange={handleOnValue}
      />
      <input
        id="number"
        type="number"
        value={state.value.number}
        onChange={handleOnValue}
      />
    </>
  );
};

export default Mine;
