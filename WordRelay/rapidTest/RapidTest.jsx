const React = require("react");

const RandomNumber = () => {
  const times = [1000, 2000, 3000, 4000, 5000];
  const time = times[Math.floor(Math.random() * 5)];
  return time;
};

class RapidTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "green",
      start: false,
      ms: "",
      result: [],
    };
  }

  handleOnClick = () => {
    if (this.state.start === false) {
      const time = RandomNumber();
      this.setState({
        color: "red",
        start: true,
      });
      setTimeout(() => {
        this.setState({
          color: "blue",
          ms: Date.now(),
        });
      }, time);
    }
    if (this.state.start === true && this.state.color === "blue") {
      this.setState({
        start: false,
        color: "green",
      });
      this.setState((prevState) => {
        return {
          result: [...prevState.result, Date.now() - this.state.ms],
        };
      });
    }
  };

  handleOnReset = () => {
    this.setState({
      color: "green",
      start: false,
      ms: "",
      result: [],
    });
  };

  handleOnDrag = () => {
    return false;
  };

  render() {
    return (
      <>
        <div
          onClick={this.handleOnClick}
          style={{
            backgroundColor: this.state.color,
            width: "30vw",
            height: "40vh",
            textAlign: "center",
            fontSize: "30px",
            userSelect: "none",
          }}
        >
          {this.state.color === "green"
            ? "클릭해서 시작하세요!"
            : this.state.color === "red"
            ? "파란색이 되면 눌러주세요"
            : "클릭하세요!!!!!!!!"}
        </div>
        <div>
          평균 응답시간 :{" "}
          {this.state.result.length === 0
            ? 0
            : (
                this.state.result.reduce((a, b) => a + b) /
                this.state.result.length
              ).toFixed(2) / 1}
          ms
        </div>
        <button onClick={this.handleOnReset}>Reset</button>
      </>
    );
  }
}

module.exports = RapidTest;
