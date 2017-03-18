const webpack = require("webpack");
const cloneDeep = require("lodash/cloneDeep");
const isObject = require("lodash/isObject");
const isArray = require("lodash/isArray");
const PRODUCTION = process.env.NODE_ENV === 'production';

const base = require("./webpack/base").call(this, __dirname);
const dev = require("./webpack/dev").call(this, __dirname);
const prod = require("./webpack/prod").call(this, __dirname);

function merge(object, source) {
    let mergedObject = cloneDeep(object);
    for(let key in source) {
        if(isArray(object[key])) {
            mergedObject[key] = object[key].concat(source[key]);
        } else if(isObject(object[key])) {
            mergedObject[key] = merge(object[key], source[key]);
        } else {
            mergedObject[key] = cloneDeep(source[key]);
        }
    }
    return mergedObject;
}

const config = merge(base, PRODUCTION ? prod : dev);
module.exports = config;