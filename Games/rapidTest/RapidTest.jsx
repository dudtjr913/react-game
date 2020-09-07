const React = require("react");
require("./RapidTest.css");

const RandomNumber = () => {
  const times = [1000, 2000, 3000, 4000, 5000];
  const time = times[Math.floor(Math.random() * 5)];
  return time;
};

class RapidTest extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      result: [],
      hurry: "",
    };
  }

  startGame;
  startTime;
  endTime;

  handleOnClick = () => {
    if (this.state.start === 0) {
      const time = RandomNumber();
      this.setState({
        start: 1,
        hurry: "",
      });
      this.startGame = setTimeout(() => {
        this.setState({
          start: 2,
        });
        this.startTime = new Date();
      }, time);
    } else if (this.state.start === 1) {
      this.setState({
        hurry: "이런! 성급하셨군요! 다시 도전해주세요.",
        start: 0,
      });
      clearTimeout(this.startGame);
    } else if (this.state.start === 2) {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          result: [...prevState.result, this.endTime - this.startTime],
          start: 0,
        };
      });
    }
  };

  handleOnReset = () => {
    this.setState({
      start: 0,
      result: [],
      hurry: "",
    });
  };

  resultAverage = () => {
    const { result } = this.state;
    if (result.length === 0) {
      return null;
    }
    return (
      <div>
        평균 응답시간 :
        {(result.reduce((a, b) => a + b) / result.length).toFixed(2) / 1}
        ms
        <div>
          <button onClick={this.handleOnReset}>Reset</button>
        </div>
      </div>
    );
  };

  render() {
    const { start, hurry } = this.state;
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
            onClick={this.handleOnClick}
          >
            {start === 0
              ? "시작하려면 클릭하세요!"
              : start === 1
              ? "파란색이 되면 클릭하세요!"
              : "클릭하세요!!!!"}
          </div>
        </div>
        <div>{hurry}</div>
        {this.resultAverage()}
      </>
    );
  }
}

module.exports = RapidTest;
