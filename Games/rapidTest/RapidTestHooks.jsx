const React = require("react");
const { useState, useCallback, useRef } = require("react");
require("./RapidTest.css");

const RandomNumber = () => {
  const times = [1000, 2000, 3000, 4000, 5000];
  const time = times[Math.floor(Math.random() * 5)];
  return time;
};

const RapidTestHooks = () => {
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const [hurry, setHurry] = useState("");
  let startGame = useRef(null);
  let startTime = useRef(null);
  let endTime = useRef(null);

  const handleOnClick = useCallback(() => {
    if (start === 0) {
      const time = RandomNumber();
      setStart(1);
      setHurry("");
      startGame.current = setTimeout(() => {
        setStart(2);
        startTime.current = new Date();
      }, time);
    } else if (start === 1) {
      setHurry("이런! 성급하셨군요! 다시 도전해주세요.");
      setStart(0);
      clearTimeout(startGame.current);
    } else if (start === 2) {
      endTime.current = new Date();
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
      setStart(0);
    }
  }, [start, result]);

  const handleOnReset = useCallback(() => {
    setStart(0);
    setResult([]);
    setHurry("");
  }, []);

  const resultAverage = useCallback(() => {
    if (result.length === 0) {
      return null;
    }
    return (
      <div>
        평균 응답시간 :
        {(result.reduce((a, b) => a + b) / result.length).toFixed(2) / 1}
        ms
        <div>
          <button onClick={handleOnReset}>Reset</button>
        </div>
      </div>
    );
  }, [result]);

  return (
    <>
      <div className="RapidDiv">
        <div
          className={
            start === 0
              ? "RapidDivGreen"
              : start === 1
              ? "RapidDivRed"
              : "RapidDivBlue"
          }
          onClick={handleOnClick}
        >
          {start === 0
            ? "시작하려면 클릭하세요!"
            : start === 1
            ? "파란색이 되면 클릭하세요!"
            : "클릭하세요!!!!"}
        </div>
      </div>
      <div>{hurry}</div>
      {resultAverage()}
    </>
  );
};
module.exports = RapidTestHooks;
