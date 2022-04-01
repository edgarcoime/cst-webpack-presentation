const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "bootstrap.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
  },
  experiments: {
    asyncWebAssembly: true,
  }
}