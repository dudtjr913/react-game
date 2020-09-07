const React = require("react");
const { Link } = require("react-router-dom");
require("./link.css");

const Links = () => {
  return (
    <div className="link">
      <div>
        <Link className="linkStyle" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="linkStyle" to="/tictactoe">
          틱택토
        </Link>
      </div>
      <div>
        <Link className="linkStyle" to="/RSP">
          가위바위보
        </Link>
      </div>
      <div>
        <Link className="linkStyle" to="/lotto">
          로또
        </Link>
      </div>
      <div>
        <Link className="linkStyle" to="/rapid">
          반응속도 테스트
        </Link>
      </div>
      <div>
        <Link className="linkStyle" to="/wordrelay">
          끝말잇기
        </Link>
      </div>
      <div>
        <Link className="linkStyle" to="/baseball">
          숫자야구
        </Link>
      </div>
    </div>
  );
};

module.exports = Links;
