const path = require("path");

module.export = {
  name: "WordRelay-setting",
  mode: "development", // 실서비스 시 production
  devtool: "eval", // 빠르게 한다
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["../WordRelay/client"],
  }, // 입력

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, // 출력
};
