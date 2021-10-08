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
    web: {
      import: "./tests/web.js",
      library: {
        name: "WebrtcConn",
        type: "umd",
      },
    },
  },
  /*
  entry: ,
  output: {
    // libraryTarget: "umd",
    // umdNamedDefine: true,
    // path: path.resolve(__dirname, "lib"),
    // filename: "bundle.js",
  },
  */
  output: {
    path: path.resolve(__dirname, "lib"),
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
    },
  },
};

let nodeConfig = {
  entry: "./src/server.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "bundle.node.js",
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

module.exports = [browserConfig];
