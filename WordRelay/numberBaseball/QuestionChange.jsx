const React = require("react");
const PropTypes = require("prop-types");
const { useEffect } = require("react");

const QuestionChange = React.memo(({ i, tries }) => {
  useEffect(() => {
    console.log("asd");
  });
  return (
    <li>
      <div>
        시도{i} : {tries.strike}스트라이크 {tries.ball}볼
      </div>
    </li>
  );
});

QuestionChange.propTypes = {
  i: PropTypes.number.isRequired,
  tries: PropTypes.objectOf(PropTypes.number).isRequired,
};

module.exports = QuestionChange;
