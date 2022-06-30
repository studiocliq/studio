const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
          }
        }
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      src: path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
  devServer: {
    host: 'localhost',
    port: port,
    static: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
  ],
}