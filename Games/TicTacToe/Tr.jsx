const React = require("react");
const Td = require("./Td");

const Tr = ({ cellData, rowIndex }) => {
  return (
    <tr>
      {Array(cellData.length)
        .fill()
        .map((data, i) => (
          <Td key={i} rowIndex={rowIndex} cellIndex={i} />
        ))}
    </tr>
  );
};
module.exports = Tr;
