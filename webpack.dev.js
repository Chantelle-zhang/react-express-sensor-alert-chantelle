const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './src',
        open: true,
        port: 3000,
        hot: true,
        proxy: {
            '/api/monitor': {
                target: 'http://localhost:5000',
                changeOrigin:true
            }
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    }
}

module.exports = merge(commonConfig, devConfig);
