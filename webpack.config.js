const webpack = require("webpack");
const merge = require("lodash/merge");

const PRODUCTION = process.env.NODE_ENV === 'production';

const base = require("./webpack/base").call(this, __dirname);
const dev = require("./webpack/dev").call(this, __dirname);
const prod = require("./webpack/prod").call(this, __dirname);

module.exports = merge(base, PRODUCTION ? prod : dev);