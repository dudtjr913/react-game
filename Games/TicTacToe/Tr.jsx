import React from "react";
import Td from "./Td";

const Tr = React.memo(({ rowData, rowIndex, dispatch, win }) => {
  return (
    <tr>
      {rowData.map((td, i) => (
        <Td
          key={i}
          cellData={td}
          cellIndex={i}
          rowIndex={rowIndex}
          win={win}
          dispatch={dispatch}
        />
      ))}
    </tr>
  );
});
export default Tr;
