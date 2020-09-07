const React = require("react");
const Table = require("./Table");
require("./tictactoe.css");

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  }

  render() {
    return <Table tableData={this.state.tableData} />;
  }
}

module.exports = TicTacToe;
