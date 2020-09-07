const React = require("react");
const Tr = require("./Tr");

const Table = ({ tableData }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((data, i) => (
            <Tr key={i} cellData={tableData[i]} rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
};
module.exports = Table;
