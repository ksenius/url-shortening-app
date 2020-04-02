const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  stats: 'minimal',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    hot: true,
    open: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: `
                @import "@assets/scss/helpers/_variables.scss"; 
                @import "@assets/scss/helpers/_mixins.scss";
              `,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
