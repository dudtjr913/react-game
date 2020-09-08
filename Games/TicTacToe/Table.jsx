import React from "react";
import Tr from "./Tr";

const Table = React.memo(({ tableData, dispatch }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((data, i) => (
            <Tr
              key={i}
              rowData={tableData[i]}
              rowIndex={i}
              dispatch={dispatch}
            />
          ))}
      </tbody>
    </table>
  );
});
export default Table;
