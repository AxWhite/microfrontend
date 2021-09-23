const { ModuleFederationPlugin } = require("webpack").container;
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  // entry: "./src/index",
  mode: "development",
  // devtool: "source-map",
  // optimization: {
  //   minimize: false,
  // },
  devServer: {
    // hot: true,
    // static: path.join(__dirname, "dist"),
    port: 8082,
    // liveReload: false,
  },
  // output: {
  //   publicPath: "auto",
  //   clean: true,
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
          plugins: [require.resolve("react-refresh/babel")],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [  
    new ModuleFederationPlugin({
      name: "details",
      filename: "remoteEntry.js",
      exposes: {
        './DetailsIndex': './src/index',
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/],
    }),
  ],
};