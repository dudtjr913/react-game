const React = require("react");
require("./Rock.css");

const score = {
  rock: 1,
  scissors: 0,
  paper: -1,
};

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
    }, 100);
  };

  componentDidMount() {
    this.gameStart();
  }

  componentWillUnmount() {
    clearInterval(this.gameInterval);
  }

  handleResult = (choice) => {
    clearInterval(this.gameInterval);
    clearTimeout(this.gameSetTimeout);
    const myChoice = score[choice];
    const computerChoice = score[this.state.shape];
    const diff = myChoice - computerChoice;
    if (diff === 0) {
      this.setState({
        result: "비겼습니다.",
      });
    } else if ([-2, 1].includes(diff)) {
      this.setState({
        result: "이겼습니다.",
      });
    } else {
      this.setState({
        result: "졌습니다.",
      });
    }
    this.gameSetTimeout = setTimeout(() => {
      this.gameStart();
    }, 1000);
  };

  render() {
    return (
      <>
        <div className={this.state.shape}></div>
        <div>
          <button onClick={() => this.handleResult("rock")}>바위</button>
          <button onClick={() => this.handleResult("scissors")}>가위</button>
          <button onClick={() => this.handleResult("paper")}>보</button>
        </div>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = Rock;
