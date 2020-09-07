const React = require("react");
const { useCallback, useMemo, useState, useRef, useEffect } = React;
const LottoProps = require("./LottoProps");
const { number } = require("prop-types");
require("./Lotto.css");

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

const LottoHooks = () => {
  const [numbers, setNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState(0);
  const [redo, setRedo] = useState(false);
  const lottoInterval = useRef();
  const lottoNumber = useMemo(() => makeNumber(), [redo]);
  const lottoSetTimeout = useRef();

  const gameStart = useCallback(() => {
    console.log("gameStart");
    lottoInterval.current = setInterval(() => {
      setNumbers((prevNumbers) => {
        return [...prevNumbers, lottoNumber.pop()];
      });
    }, 1000);
    lottoSetTimeout.current = setTimeout(() => {
      setBonusNumber(lottoNumber[0]);
      setRedo(true);
    }, 7000);
  }, [numbers, bonusNumber]);

  // const mounted = useRef(false);
  useEffect(() => {
    /*if (!mounted.current) {
      mounted.current = true;      ==> componentDidMount를 하지 않고 componentDidUpdate만 하고 싶을 때 쓰는 요령
    } else {                           필요 없는 값인 변수를 만들고, false를 true로 바꿔주면서 componentDidMount가 실행되고,
      //ajax요청                       그 후에는 메모리상에 true가 저장되어 있기 때문에 if부분이 실행되지 않고 else부분이 실행된다. 여기에 ajax요청을 하면 되겠다.
    }*/
    console.log("useEffect");
    if (numbers.length < 6) {
      gameStart();
    }
    if (numbers.length === 0) {
      return () => {
        clearInterval(lottoInterval.current);
      };
    } else {
      return () => {
        clearInterval(lottoInterval.current);
        clearTimeout(lottoSetTimeout.current);
      };
    }
  }, [numbers, bonusNumber]);

  const handleOnReset = useCallback(() => {
    clearInterval(lottoInterval.current);
    clearTimeout(lottoSetTimeout.current);
    setNumbers([]);
    setBonusNumber(0);
    setRedo(false);
    gameStart();
  }, []);

  return (
    <>
      <div>당첨숫자</div>
      {numbers.map((v, i) => {
        return <LottoProps number={v} key={i} />;
      })}
      <div>보너스</div>
      {bonusNumber !== 0 && <LottoProps number={bonusNumber} />}
      <div>{redo && <button onClick={handleOnReset}>다시하기</button>}</div>
    </>
  );
};

module.exports = LottoHooks;
