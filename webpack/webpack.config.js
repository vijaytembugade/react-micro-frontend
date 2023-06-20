import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const config = async (envVariables) => {
  console.log(envVariables);
  const { env } = envVariables;
  const { config } = await import(`./webpack.${env}.js`);
  const finalConfig = merge(commonConfig, config);
  return finalConfig;
};

export default config;
