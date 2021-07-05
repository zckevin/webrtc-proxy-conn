const path = require("path");
const webpack = require("webpack");

let browserConfig = {
  entry: {
    main: {
      import: "./src/index.js",
      library: {
        name: "WebrtcConn",
        type: "commonjs",
      },
    },
    web: {
      import: "./src/web.js",
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
    filename: "[name].js",
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
    path: path.resolve(__dirname, "dist"),
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
