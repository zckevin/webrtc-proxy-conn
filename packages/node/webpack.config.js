const path = require('path');

const nodeConfig = {
  entry: {
    main: {
      import: "./src/index.ts",
      library: {
        name: "WebrtcConn",
        type: "commonjs",
      },
    },
    server: {
      import: "./src/server.ts",
      library: {
        type: "commonjs",
      },
    }
  },
  target: "node",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
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
  externals: {
    "wrtc": "commonjs wrtc",
  },
};

module.exports = nodeConfig;
