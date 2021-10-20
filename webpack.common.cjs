const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

let browserConfig = {
  entry: {
    main: {
      import: "./src/client.js",
      library: {
        name: "WebrtcConn",
        type: "commonjs",
      },
    },
  },
  /*
  entry: ,
  output: {
    // libraryTarget: "umd",
    // umdNamedDefine: true,
    // path: path.resolve(__dirname, "dist"),
    // filename: "bundle.js",
  },
  */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].cjs",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new Dotenv(),
  ],
  resolve: {
    fallback: {
      fs: false,
      path: false,
      http: false,
      https: false,
      crypto: false,
      buffer: false,
      util: false,
      stream: false,
      net: false,
    },
  },
};

let nodeConfig = {
  entry: {
    main: {
      import: "./src/client.js",
      library: {
        name: "WebrtcConn",
        type: "commonjs",
      },
    },
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].cjs",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.node$/i,
        use: "node-loader",
      },
    ],
  },
};

// TODO: make this works for both browser & node
// module.exports = [browserConfig, nodeConfig];
module.exports = [nodeConfig];
