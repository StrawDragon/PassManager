const path = require("path");

module.exports = function (rootPath){ return {
    devServer: {
        port: 8888,
        contentBase: path.resolve(rootPath, "dist")
    },
    devtool: "cheap-module-source-map"
} };