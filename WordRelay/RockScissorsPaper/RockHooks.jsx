const React = require("react");
const RockProps = require("./RockProps");
const { useState, useCallback, useEffect, useRef } = require("react");
require("./Rock.css");

const score = {
  rock: 1,
  scissors: 0,
  paper: -1,
};

const RockHooks = () => {
  const [shape, setShape] = useState("rock");
  const [result, setResult] = useState("");
  const gameInterval = useRef();
  const gameSetTimeout = useRef();

  const gameStart = () => {
    if (shape === "rock") {
      setShape("scissors");
    } else if (shape === "scissors") {
      setShape("paper");
    } else {
      setShape("rock");
    }
  };

  useEffect(() => {
    gameInterval.current = setInterval(gameStart, 100);
    return () => {
      clearInterval(gameInterval.current);
    };
  }, [shape]);

  const handleResult = useCallback(
    (choice) => () => {
      clearInterval(gameInterval.current);
      clearTimeout(gameSetTimeout.current);
      const myChoice = score[choice];
      const computerChoice = score[shape];
      const diff = myChoice - computerChoice;
      if (diff === 0) {
        setResult("비겼습니다.");
      } else if ([-2, 1].includes(diff)) {
        setResult("이겼습니다.");
      } else {
        setResult("졌습니다.");
      }
      gameSetTimeout.current = setTimeout(() => {
        gameInterval.current = setInterval(gameStart, 100);
      }, 1000);
    },
    [gameSetTimeout.current, gameInterval.current]
  );

  return (
    <>
      <div className={shape}></div>
      <div>
        <RockProps choice={handleResult} result={result} />
      </div>
    </>
  );
};

module.exports = RockHooks;
