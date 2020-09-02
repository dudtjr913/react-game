const React = require("react");
const ReactDOM = require("react-dom");
const { hot } = require("react-hot-loader/root");
const NumberBaseball = require("./numberBaseball/NumberBaseball");

const WordRelayClass = require("./WordRelayClass");
const WordRelayHooks = require("./WordRelayHooks");
const HotWord = hot(WordRelayHooks);
const HotBaseball = hot(NumberBaseball);

ReactDOM.render(
  <>
    <HotWord />
    <p></p>
    <p></p>
    <p></p>
    <HotBaseball />
  </>,
  document.querySelector("#root")
);
