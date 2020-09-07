const React = require("react");

const TicComponent = ({ click, select, text }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td onClick={click}>{text}</td>
            <td onClick={click}>{text}</td>
            <td onClick={click}>{text}</td>
          </tr>
          <tr>
            <td onClick={click}>{text}</td>
            <td onClick={click}>{text}</td>
            <td onClick={click}>{text}</td>
          </tr>
          <tr>
            <td onClick={click}>{text}</td>
            <td onClick={click}>{text}</td>
            <td onClick={click}>{text}</td>
          </tr>
        </tbody>
      </table>
      <div>
        O, X를 선택하시오.
        <button onClick={select} value="O">
          O
        </button>
        <button onClick={select} value="X">
          X
        </button>
      </div>
    </>
  );
};
module.exports = TicComponent;
