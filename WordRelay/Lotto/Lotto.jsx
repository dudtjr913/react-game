const React = require("react");
require("./Lotto.css");
const LottoProps = require("./LottoProps");

const makeNumber = () => {
  console.log("makeNumber");
  const numbers = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const lottoNumber = [];
  while (lottoNumber.length < 7) {
    lottoNumber.push(
      numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]
    );
  }
  return lottoNumber;
};

class Lotto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      bonusNumber: 0,
      redo: false,
    };
  }
  lottoInterval;
  lottoNumber = makeNumber();
  lottoSetTimeout;

  gameStart = () => {
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
        redo: true,
      });
    }, 7000);
  };

  componentDidMount() {
    this.gameStart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.numbers.length === 5) {
      clearInterval(this.lottoInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.lottoInterval);
    clearTimeout(this.lottoSetTimeout);
  }

  handleOnReset = () => {
    clearInterval(this.lottoInterval);
    clearTimeout(this.lottoSetTimeout);
    this.setState({
      numbers: [],
      bonusNumber: 0,
      redo: false,
    });
    this.lottoNumber = makeNumber();
    this.gameStart();
  };

  render() {
    const { numbers, bonusNumber, redo } = this.state;
    return (
      <>
        <div>당첨숫자</div>
        {numbers.map((v, i) => {
          return <LottoProps number={v} key={i} />;
        })}
        <div>보너스</div>
        {bonusNumber !== 0 && <LottoProps number={bonusNumber} />}
        <div>
          {redo && <button onClick={this.handleOnReset}>다시하기</button>}
        </div>
      </>
    );
  }
}

module.exports = Lotto;
