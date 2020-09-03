const React = require("react");
const { useState, useCallback, useRef } = React;

const WordRelayHooks = () => {
  const [question, setQuestion] = useState("끝말잇기");
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value[0] === question[question.length - 1]) {
        setResult("딩동댕");
        setQuestion(value);
        setValue("");
      } else {
        setResult("땡");
        setValue("");
      }
      inputRef.current.focus();
    },
    [value]
  );

  return (
    <>
      <div>{question}</div>
      <form onSubmit={handleOnSubmit}>
        {console.log(value)}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
        />
        <button>입력!!!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelayHooks;
