const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/bundle.entry.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.less$/,
                use: [ 'style-loader', { 
                    loader: 'css-loader', 
                    options: { 
                        importLoaders: 1 
                    } 
                }, 'less-loader' ]
            },
            { 
               test: /\.(png|jpg|gif)$/, 
               loader: 'url-loader',
                query: {
                    limit: 4096
                } 
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.less']
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
};