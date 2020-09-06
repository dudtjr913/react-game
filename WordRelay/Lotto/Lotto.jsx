const React = require("react");
require("./Lotto.css");

const makeNumber = () => {
  const numbers = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const lottoNumber = [];
  const lottoColor = ["yellow", "red", "green"];
  while (lottoNumber.length < 7) {
    lottoNumber.push({
      numbers: numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0],
      color: lottoColor[Math.floor(Math.random() * 3)],
    });
  }
  return lottoNumber;
};

class Lotto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      bonusNumber: "",
    };
  }
  lottoInterval;
  lottoNumber = makeNumber();
  lottoSetTimeout;

  componentDidMount() {
    this.lottoInterval = setInterval(() => {
      this.setState((prevState) => {
        return {
          numbers: [...prevState.numbers, this.lottoNumber.pop()],
        };
      });
    }, 1000);
    this.lottoSetTimeout = setTimeout(() => {
      this.setState({
        bonusNumber: this.lottoNumber[0],
      });
    }, 7000);
  }

  componentDidUpdate() {
    if (this.state.numbers.length === 6) {
      clearInterval(this.lottoInterval);
    }
  }

  handleOnReset = () => {
    clearInterval(this.lottoInterval);
    clearTimeout(this.lottoSetTimeout);
    this.setState({
      numbers: [],
      bonusNumber: "",
    });
    this.lottoNumber = makeNumber();
    this.lottoInterval = setInterval(() => {
      this.setState((prevState) => {
        return {
          numbers: [...prevState.numbers, this.lottoNumber.pop()],
        };
      });
    }, 1000);
    this.lottoSetTimeout = setTimeout(() => {
      this.setState({
        bonusNumber: this.lottoNumber[0],
      });
    }, 7000);
  };

  render() {
    const { numbers, bonusNumber } = this.state;
    return (
      <>
        <div>당첨숫자</div>
        {numbers.map((v, i) => {
          return (
            <span className={`lottoSpan ${v.color}`} key={i}>
              {v.numbers}
            </span>
          );
        })}
        <div>보너스</div>
        <span
          className={`lottoSpan ${bonusNumber.color}`}
          style={
            !bonusNumber ? { display: "none" } : { display: "inline-block" }
          }
        >
          {bonusNumber.numbers}
        </span>
        <div>
          <button onClick={this.handleOnReset}>다시하기</button>
        </div>
      </>
    );
  }
}

module.exports = Lotto;
