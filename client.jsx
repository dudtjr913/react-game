const React = require("react");
const ReactDOM = require("react-dom");
const { hot } = require("react-hot-loader/root");
const NumberBaseball = require("./Games/numberBaseball/NumberBaseball");
const { HashRouter, Route } = require("react-router-dom");

const Home = require("./Home");
const Links = require("./Link");

const Rock = require("./Games/RockScissorsPaper/Rock");
const RockHooks = require("./Games/RockScissorsPaper/RockHooks");

const WordRelayClass = require("./Games/WordRelayGame/WordRelayClass");
const WordRelayHooks = require("./Games/WordRelayGame/WordRelayHooks");
const RapidTest = require("./Games/rapidTest/RapidTest");
const RapidTestHooks = require("./Games/rapidTest/RapidTestHooks");

const Lotto = require("./Games/Lotto/Lotto");
const LottoHooks = require("./Games/Lotto/LottoHooks");

const TicTacToe = require("./Games/TicTacToe/TicTacToe");

const HotTic = hot(TicTacToe);
const HotLotto = hot(Lotto);
const HotLottoHooks = hot(LottoHooks);
const HotRock = hot(Rock);
const HotRockHooks = hot(RockHooks);
const HotRapid = hot(RapidTest);
const HotRapidHooks = hot(RapidTestHooks);
const HotWord = hot(WordRelayHooks);
const HotBaseball = hot(NumberBaseball);

ReactDOM.render(
  <HashRouter>
    <Links />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/tictactoe">
      <HotTic />
    </Route>
    <Route path="/rsp">
      <HotRock />
    </Route>
    <Route path="/lotto">
      <HotLottoHooks />
    </Route>
    <Route path="/rapid">
      <HotRapidHooks />
    </Route>
    <Route path="/wordrelay">
      <HotWord />
    </Route>
    <Route path="/baseball">
      <HotBaseball />
    </Route>
  </HashRouter>,
  document.querySelector("#root")
);
