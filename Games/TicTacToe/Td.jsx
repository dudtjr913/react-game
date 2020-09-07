const React = require("react");
const { useCallback } = require("react");

const Td = ({ cellIndex, rowIndex }) => {
  handleClick = useCallback(() => {
    console.log(cellIndex, rowIndex);
  }, []);
  return <td onClick={handleClick}></td>;
};
module.exports = Td;
