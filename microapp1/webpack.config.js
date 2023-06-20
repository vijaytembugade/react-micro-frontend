import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pkg from 'webpack';
const { container } = pkg;
const __dirname = path.resolve();
import pckJson from './package.json' assert { type: "json" };



const webpackConfig = (envVariables) => {
  const { env } = envVariables;
  const config = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
      extensions: ['.tsx', 'ts', '.js', '.jsx'],
    },
    devServer: {
      port: 3001,
      open: false,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    mode: env === 'dev' ? 'development' : 'production',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'assets/bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
      }),
      new pkg.DefinePlugin({
        'process.env.environment': JSON.stringify(env),
      }),
      new container.ModuleFederationPlugin({
        name: 'microapp1',
        filename: 'microapp1.js', // name to be exposed
        library: { type: "var", name: "microapp1" },
        exposes: {
          './App': './src/App', // expose the application to outer world
        },
        remotes: {
          mainApp: 'mainApp',
        },
        shared: {
          ...pckJson.dependencies,
          react: { singleton: true,  requiredVersion: pckJson.dependencies['react'] },
          'react-dom': { singleton: true,  requiredVersion: pckJson.dependencies['react-dom']},
        },
      }),
    ],
  };

  return config;
}


export default webpackConfig;
