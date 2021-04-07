const path = require("path");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCSSExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}
