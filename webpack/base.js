const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (rootPath){
    return {
        entry: {
            app: path.resolve(rootPath, 'src/init.js')
        },
        output: {
            path: path.resolve(rootPath, "dist"),
                filename: "js/[name].js"
        },
        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    loaders: ['babel-loader'],
                    include: path.resolve(rootPath, "src"),
                    exclude: /node_modules/
                },
                {
                    test: /\.(less)$/,
                    loader: ExtractTextPlugin.extract({ loader:[ 'css-loader', 'less-loader'], fallbackLoader: 'style-loader' })
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [path.resolve(rootPath, 'src'), 'node_modules']
        },
        plugins: [
            new ExtractTextPlugin("css/app.css")
        ]
    }
};