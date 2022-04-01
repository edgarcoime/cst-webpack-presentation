const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let htmlPageNames = ["page1", "page2"];
let multipleHtmlPages = htmlPageNames.map(htmlPageName => {
  return new HtmlWebpackPlugin({
    template: `./src/${htmlPageName}.html`,
    filename: `${htmlPageName}.html`,
    chunks: [htmlPageName]
  });
});

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "js", "bootstrap.js"),
    page1: path.resolve(__dirname, "src", "js", "page1.js"),
    page2: path.resolve(__dirname, "src", "js", "page2.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My first generated html!",
      template: "./src/index.html",
      chunks: ["main"]
    }),
  ].concat(multipleHtmlPages),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  experiments: {
    asyncWebAssembly: true,
  }
}