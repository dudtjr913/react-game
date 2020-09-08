import React from "react";
import Td from "./Td";

const Tr = React.memo(({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((data, i) => (
          <Td
            key={i}
            rowIndex={rowIndex}
            cellIndex={i}
            cellData={rowData[i]}
            dispatch={dispatch}
          />
        ))}
    </tr>
  );
});
export default Tr;
