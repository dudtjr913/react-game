const React = require("react");

const RockProps = React.memo(({ choice, result }) => {
  return (
    <>
      <button onClick={choice("rock")}>바위</button>
      <button onClick={choice("scissors")}>가위</button>
      <button onClick={choice("paper")}>보</button>
      <div>{result}</div>
    </>
  );
});

module.exports = RockProps;
