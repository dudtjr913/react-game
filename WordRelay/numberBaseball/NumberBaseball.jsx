const React = require("react");
const { useState, useCallback, useRef, useEffect } = require("react");
const QuestionChange = require("./QuestionChange");

const createNumber = () => {
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const fourNumbers = [];
  for (let i = 0; i < 4; i++) {
    const oneNumber = allNumbers.splice(
      Math.floor(Math.random() * (9 - i)),
      1
    )[0];
    fourNumbers.push(oneNumber);
  }
  console.log(fourNumbers);
  return fourNumbers;
};

const NumberBaseball = () => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [value, setValue] = useState("");
  const [start, setStart] = useState(false);
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState([]);

  const handleOnClick = useCallback(() => {
    if (start) {
      setStart(false);
      setNumber("");
      return;
    }
    setStart(true);
    setResult("");
    setNumber(createNumber);
  }, [start]);

  const handleOnChangeInput = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStrike(0);
    setBall(0);
    let copyNumber = [];
    for (let i = 0; i < 4; i++) {
      if (parseInt(value[i]) === number[i]) {
        setStrike((strike) => {
          return strike + 1;
        });
      } else {
        copyNumber.push(parseInt(number.slice(i, i + 1)));
      }
    }
    for (let i = 0; i < copyNumber.length; i++) {
      if (value.includes(copyNumber[i])) {
        setBall((ball) => {
          return ball + 1;
        });
      }
    }
    console.log(strike, ball);
    setValue("");
  };

  if (strike === 4) {
    setResult(`${strike}스트라이크 정답`);
    setStrike(0);
    setBall(0);
    handleOnClick();
  }

  return (
    <>
      <div>
        숫자야구
        <button onClick={handleOnClick}>{start ? "중지" : "시작"}</button>
      </div>
      <div>
        {strike}스트라이크 {ball}볼
      </div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          maxLength="4"
          value={value}
          onChange={handleOnChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
      {console.log(tries)}
      <ul>
        {tries.map((value, i) => {
          return (
            <li>
              <QuestionChange tries={value} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

module.exports = NumberBaseball;
