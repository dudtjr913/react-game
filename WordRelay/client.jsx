const React = require("react");
const ReactDOM = require("react-dom");
const { hot } = require("react-hot-loader/root");
const NumberBaseball = require("./numberBaseball/NumberBaseball");

const Rock = require("./RockScissorsPaper/Rock");

const WordRelayClass = require("./WordRelayClass");
const WordRelayHooks = require("./WordRelayHooks");
const RapidTest = require("./rapidTest/RapidTest");
const RapidTestHooks = require("./rapidTest/RapidTestHooks");

const HotRock = hot(Rock);
const HotRapid = hot(RapidTest);
const HotRapidHooks = hot(RapidTestHooks);
const HotWord = hot(WordRelayHooks);
const HotBaseball = hot(NumberBaseball);

ReactDOM.render(
  <>
    <HotRock />
    {/* <HotRapidHooks />
    <HotWord />
    <p></p>
    <p></p>
    <p></p>
   <HotBaseball /> */}
  </>,
  document.querySelector("#root")
);
