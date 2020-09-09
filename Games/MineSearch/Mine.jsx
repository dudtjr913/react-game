import React, { useReducer, useCallback } from "react";
import Table from "./Table";
import Form from "./Form";

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

  return (
    <>
      <Form />
    </>
  );
};

export default Mine;
