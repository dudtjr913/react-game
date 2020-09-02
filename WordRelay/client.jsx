const React = require("react");
const ReactDOM = require("react-dom");
const { hot } = require("react-hot-loader/root");

const WordRelayClass = require("./WordRelayClass");
const WordRelayHooks = require("./WordRelayHooks");
const Hot = hot(WordRelayHooks);

ReactDOM.render(<Hot />, document.querySelector("#root"));
