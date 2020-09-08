import React from "react";
import Tr from "./Tr";

const Table = React.memo(({ tableData, dispatch, win }) => {
  return (
    <table>
      <tbody>
        {tableData.map((tr, i) => (
          <Tr key={i} rowData={tr} rowIndex={i} win={win} dispatch={dispatch} />
        ))}
      </tbody>
    </table>
  );
});
export default Table;
