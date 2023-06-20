import webpack from 'webpack';
export const config = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.environment': JSON.stringify('production'),
    }),
  ],
};
