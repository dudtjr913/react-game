const React = require("react");

const LottoProps = React.memo(({ number }) => {
  let backgroundColor;
  if (number < 10) {
    backgroundColor = "yellow";
  } else if (number < 20) {
    backgroundColor = "green";
  } else if (number < 30) {
    backgroundColor = "red";
  } else if (number < 40) {
    backgroundColor = "orange";
  } else {
    backgroundColor = "gray";
  }
  return (
    <span style={{ backgroundColor }} className="lottoSpan">
      {number}
    </span>
  );
});

module.exports = LottoProps;
