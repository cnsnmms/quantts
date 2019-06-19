const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: "source-map",
    entry: path.join(__dirname, '/src/test/test.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve('./lib/test')
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            { test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        // new HtmlWebpackPlugin({  // Also generate a test.html
        //     template: './src/index.html'
        //   })
    ]
};