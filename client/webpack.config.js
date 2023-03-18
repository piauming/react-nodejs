const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // entry: './src/index.tsx',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name][contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'React Webpack App',
            filename: 'index.html',
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        port: "3000",
        static: './',
        open: true,
        hot: true,
        compress: true,
        liveReload: true,
        historyApiFallback: true
    }
}