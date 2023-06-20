import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExternalTemplateRemotesPlugin from "external-remotes-plugin";
import pckJson from "../package.json" assert { type: "json" };
import pkg from "webpack";
const { container } = pkg;
const __dirname = path.resolve();

const config = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", "ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "assets/bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new container.ModuleFederationPlugin(
      {
        name: "mainApp",
        /*
         * remotes: has an url for micro app
         */
        remotes: {
          microapp1: "microapp1@[microapp1Url]/microapp1.js",
          microapp2: "microapp2@[microapp2Url]/microapp2.js",
        },
        shared: {
          ...pckJson.dependencies,
          react: {
            singleton: true,
            requiredVersion: pckJson.dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: pckJson.dependencies["react-dom"],
          },
        },
      },
      
    ),
    new ExternalTemplateRemotesPlugin(),
  ],
};

export default config;
