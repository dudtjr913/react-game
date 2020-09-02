const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "끝말잇기",
      result: "",
      value: "",
    };
  }

  handleInputChange = (e) => {
    console.log(`value : ${e.target.value}`);
    console.log(`currentValue : ${e.currentTarget.value}`);
    this.setState({ value: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.value[0] ===
      this.state.question[this.state.question.length - 1]
    ) {
      this.setState({
        result: "딩동댕",
        question: this.state.value,
        value: "",
      });
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
    }
    this.inputRef.focus();
  };

  inputRef;

  onInputRef = (ref) => {
    this.inputRef = ref;
  };

  render() {
    return (
      <>
        <div>{this.state.question}</div>
        <form onSubmit={this.handleOnSubmit}>
          {console.log(this.state.value)}
          <input
            ref={this.onInputRef}
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
