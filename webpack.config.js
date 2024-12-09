const path = require('path');

module.exports = {
    mode: 'development',
    entry: './code/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|png)$/i,
                type: 'asset/resource',
            },
        ],
    },
} 