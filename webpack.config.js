const path = require("path");
const extCSS = require("mini-css-extract-plugin");
const miniCSS = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          extCSS.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new extCSS()
  ],
  optimization: {
    minimizer: [
      new miniCSS
    ]
  }
}
