const webpack = require('webpack');
const path = require('path');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
    mode: 'development',

    resolve: {
        extensions: ['.ts', '.js'],
    },

    entry: {
        'app': './src/main.ts',
    },

    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: 'dist/',
        filename: 'bundle.js',
    },

    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            mainPath: 'src/main.ts',
            sourceMap: true,
        }),
    ],

    module: {
        rules: [
            {test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/, use: ['@ngtools/webpack']},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loaders: ['raw-loader', 'sass-loader']},
            {test: /\.scss$/, exclude: /node_modules/, loaders: ['raw-loader', 'sass-loader']}
        ],
    },

    devServer: {
        historyApiFallback: true
    },
};



