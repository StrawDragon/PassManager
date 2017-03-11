const path = require("path");
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (rootPath){
    return {
        entry: {
            index: "./src/init.js"
        },
        output: {
            path: path.resolve(rootPath, "dist"),
                filename: "[name].js"
        },
        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                include: path.resolve(rootPath, "src"),
                exclude: /node_modules/
            }, {
                test: /\.(less)$/,
                loader: extractTextPlugin.extract({ loader:[ 'css-loader', 'less-loader'], fallbackLoader: 'style-loader' })
            }]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new extractTextPlugin("css/app.css")
        ]
    }
};