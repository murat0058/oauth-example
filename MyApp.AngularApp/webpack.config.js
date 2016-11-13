var path = require('path');

module.exports = {
    entry: './src/bootstrap.ts',
    output: {
        path: __dirname + '/wwwroot',
        filename: 'bundle.js',
        sourceMapFilename: '[file].js.map'
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        alias: {
            decorators: path.resolve(__dirname, 'src', 'decorators', 'index.ts')
        }
    },
    module: {
        loaders: [
          { test: /\.ts$/, loader: 'ts-loader' },
          { test: /\.less$/, loader: 'style!css!less' },
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.html$/, loader: 'html-loader' },
          { test: /\.(png|jpg)$/, loader: 'file-loader' },
          { test: /\.ico$/, loader: 'file-loader' },
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    }
}
