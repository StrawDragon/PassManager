const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function (rootPath){ return {
    devtool: "cheap-module-source-map",
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        })
    ],
    watch: true
} };