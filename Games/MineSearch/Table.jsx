import React, { useContext, useMemo } from "react";
import Tr from "./Tr";
import { TableContext } from "./Mine";

const Table = React.memo(() => {
  const { tableData } = useContext(TableContext);
  return (
    <table className="table">
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr key={i} rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
});

export default Table;
