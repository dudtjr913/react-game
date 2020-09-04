const React = require("react");

const QuestionChange = ({ i, tries, key }) => {
  return (
    <span>
      시도{i} : {tries.strike}스트라이크 {tries.ball}볼
    </span>
  );
};

module.exports = QuestionChange;
