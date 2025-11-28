import { LynxEncodePlugin, LynxTemplatePlugin } from '../../../../src';
import { CssExtractRspackPlugin } from '@rspack/core';

/** @type {import('@rspack/core').Configuration} */
export default {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          CssExtractRspackPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  output: {
    chunkFilename: 'async/[name].js',
  },
  plugins: [
    new CssExtractRspackPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new LynxTemplatePlugin({ filename: 'main.tasm' }),
    new LynxEncodePlugin(),
  ],
};
