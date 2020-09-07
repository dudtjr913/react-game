const React = require("react");
const TicComponent = require("./TicComponent");
require("./tictactoe.css");

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleOnSelect = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleOnClick = (e) => {
    console.dir(e.target);
    if (this.state.text === "O") {
      this.setState({
        text: "X",
      });
    } else if (this.state.text === "X") {
      this.setState({
        text: "O",
      });
    }
  };
  render() {
    return (
      <TicComponent
        click={this.handleOnClick}
        select={this.handleOnSelect}
        text={this.state.text}
      />
    );
  }
}

module.exports = TicTacToe;
