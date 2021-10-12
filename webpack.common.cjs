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

// module.exports = [browserConfig];
module.exports = [nodeConfig];
