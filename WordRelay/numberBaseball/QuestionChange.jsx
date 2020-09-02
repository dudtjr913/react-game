const React = require("react");
const { useState, useCallback, useRef } = require("react");

const QuestionChange = ({ start }) => {
  return (
    <div>
      {start}
      {console.log(start)}
    </div>
  );
};

module.exports = QuestionChange;
