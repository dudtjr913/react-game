const React = require("react");
const ReactDOM = require("react-dom");
const { hot } = require("react-hot-loader/root");
const NumberBaseball = require("./WordRelay/numberBaseball/NumberBaseball");

const Rock = require("./WordRelay/RockScissorsPaper/Rock");
const RockHooks = require("./WordRelay/RockScissorsPaper/RockHooks");

const WordRelayClass = require("./WordRelay/WordRelayClass");
const WordRelayHooks = require("./WordRelay/WordRelayHooks");
const RapidTest = require("./WordRelay/rapidTest/RapidTest");
const RapidTestHooks = require("./WordRelay/rapidTest/RapidTestHooks");

const Lotto = require("./WordRelay/Lotto/Lotto");
const LottoHooks = require("./WordRelay/Lotto/LottoHooks");

const HotLotto = hot(Lotto);
const HotLottoHooks = hot(LottoHooks);
const HotRock = hot(Rock);
const HotRockHooks = hot(RockHooks);
const HotRapid = hot(RapidTest);
const HotRapidHooks = hot(RapidTestHooks);
const HotWord = hot(WordRelayHooks);
const HotBaseball = hot(NumberBaseball);

ReactDOM.render(
  <>
    <HotLottoHooks />
    {/* <HotRock />
     <HotRapidHooks />
    <HotWord />
    <p></p>
    <p></p>
    <p></p>
   <HotBaseball /> */}
  </>,
  document.querySelector("#root")
);
