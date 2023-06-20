import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.environment': JSON.stringify('development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
