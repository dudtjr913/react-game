const React = require("react");

class Rock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: "rock",
      result: "",
    };
  }

  gameInterval;
  gameSetTimeout;

  gameStart = () => {
    this.gameInterval = setInterval(() => {
      if (this.state.shape === "rock") {
        this.setState({
          shape: "scissors",
        });
      } else if (this.state.shape === "scissors") {
        this.setState({
          shape: "paper",
        });
      } else {
        this.setState({
          shape: "rock",
        });
      }
    }, 800);
  };

  componentDidMount() {
    this.gameStart();
  }

  handleRock = () => {
    clearInterval(this.gameInterval);
    clearTimeout(this.gameSetTimeout);
    this.state.shape === "rock"
      ? this.setState({ result: "비겼습니다." })
      : this.state.shape === "scissors"
      ? this.setState({ result: "이겼습니다." })
      : this.setState({ result: "졌습니다." });
    this.gameSetTimeout = setTimeout(() => {
      this.gameStart();
    }, 800);
  };
  handleScissors = () => {
    clearInterval(this.gameInterval);
    clearTimeout(this.gameSetTimeout);
    this.state.shape === "rock"
      ? this.setState({ result: "졌습니다." })
      : this.state.shape === "scissors"
      ? this.setState({ result: "비겼습니다." })
      : this.setState({ result: "이겼습니다." });
    this.gameSetTimeout = setTimeout(() => {
      this.gameStart();
    }, 800);
  };
  handlePaper = () => {
    clearInterval(this.gameInterval);
    clearTimeout(this.gameSetTimeout);
    this.state.shape === "rock"
      ? this.setState({ result: "이겼습니다." })
      : this.state.shape === "scissors"
      ? this.setState({ result: "졌습니다." })
      : this.setState({ result: "비겼습니다." });
    this.gameSetTimeout = setTimeout(() => {
      this.gameStart();
    }, 800);
  };

  render() {
    return (
      <>
        <div>{this.state.shape}</div>
        <div>
          <button
            onClick={this.handleRock}
            style={{ marginRight: "3px", width: "7vw" }}
          >
            바위
          </button>
          <button
            onClick={this.handleScissors}
            style={{ marginRight: "3px", width: "7vw" }}
          >
            가위
          </button>
          <button
            onClick={this.handlePaper}
            style={{ marginRight: "3px", width: "7vw" }}
          >
            보
          </button>
        </div>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = Rock;
