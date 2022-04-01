const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "bootstrap.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My first generated html!",
      template: "./src/index.html",
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  }
}