import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import NumberBaseball from "./Games/numberBaseball/NumberBaseball";
import { HashRouter, Route } from "react-router-dom";

import Home from "./Home";
import Links from "./Link";

import Rock from "./Games/RockScissorsPaper/Rock";
import RockHooks from "./Games/RockScissorsPaper/RockHooks";

import Mine from "./Games/MineSearch/Mine";

import WordRelayClass from "./Games/WordRelayGame/WordRelayClass";
import WordRelayHooks from "./Games/WordRelayGame/WordRelayHooks";
import RapidTest from "./Games/rapidTest/RapidTest";
import RapidTestHooks from "./Games/rapidTest/RapidTestHooks";

import Lotto from "./Games/Lotto/Lotto";
import LottoHooks from "./Games/Lotto/LottoHooks";

import TicTacToe from "./Games/TicTacToe/TicTacToe";

const HotTic = hot(TicTacToe);
const HotLotto = hot(Lotto);
const HotLottoHooks = hot(LottoHooks);
const HotRock = hot(Rock);
const HotRockHooks = hot(RockHooks);
const HotRapid = hot(RapidTest);
const HotRapidHooks = hot(RapidTestHooks);
const HotWord = hot(WordRelayHooks);
const HotBaseball = hot(NumberBaseball);
const HotMine = hot(Mine);

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
      <HotRockHooks />
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
    <Route path="/minesearch">
      <HotMine />
    </Route>
  </HashRouter>,
  document.querySelector("#root")
);
