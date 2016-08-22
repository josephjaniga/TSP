var path = require('path'),
    webpack = require('webpack');

// In webpack.config.js
module.exports = {
    devtool: 'source-map',
    entry: {
        "bundle.js":[
            'babel-polyfill',
            './src/index.js'
        ],
        "web-entry.js":[
            'babel-polyfill',
            './src/web-entry.js'
        ]
    },
    module: {
        loaders: [
            {
                test:/\.jsx?$/,
                include: path.resolve(__dirname + '/src'),
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    output: {
        filename: "[name]",
        path: __dirname + '/dist',
        pathinfo: true
    }
};