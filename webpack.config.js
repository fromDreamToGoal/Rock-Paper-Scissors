const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.html',
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
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|png)$/i,
                type: 'asset/resource',
            },
        ],
    },
} 