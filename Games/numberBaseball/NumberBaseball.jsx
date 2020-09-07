const React = require("react");
const { useState, useCallback, useEffect } = require("react");
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
      setStrike(0);
      setBall(0);
      return;
    }
    setStart(true);
    setResult("");
    setValue("");
    setNumber("");
    setStrike(0);
    setBall(0);
    setTries([]);
    setNumber(createNumber);
  }, [start]);

  const handleOnChangeInput = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!start) {
        setResult("게임을 시작해주세요");
        setValue("");
        setNumber("");
        setStrike(0);
        setBall(0);
        setTries([]);
        return;
      }
      if (value === "") {
        return;
      }
      let strikeNum = 0;
      let ballNum = 0;
      let copyNumber = [];
      for (let i = 0; i < 4; i++) {
        if (parseInt(value[i]) === number[i]) {
          strikeNum++;
        } else {
          copyNumber.push(parseInt(number.slice(i, i + 1)));
        }
      }
      for (let i = 0; i < copyNumber.length; i++) {
        if (value.includes(copyNumber[i])) {
          ballNum++;
        }
      }
      setStrike(strikeNum);
      setBall(ballNum);
      setValue("");
      if (strikeNum === 4) {
        setResult("딩동댕");
        setStart(false);
      }

      setTries([...tries, { strike: strikeNum, ball: ballNum }]);
      if (tries.length === 9 && strikeNum !== 4) {
        setStart(false);
        setResult("땡!! 다시 도전하세요");
      }
    },
    [value, number]
  );

  useEffect(() => {
    console.log("RENDER");
  });
  return (
    <>
      <div>
        숫자야구
        <button onClick={handleOnClick}>{start ? "끝내기" : "시작"}</button>
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
      <ul>
        {tries.map((value, i) => (
          <QuestionChange key={i} tries={value} i={i + 1} />
        ))}
      </ul>
    </>
  );
};

module.exports = NumberBaseball;
