"use strict";

var xml2js = require("xml2js");
var __slice = Array.prototype.slice;

var promisify = (fn) => {
    return function (str) {
        var context = this;

        return new Promise((resolve, reject) => {
            fn.call(context, str, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve.apply(this, __slice.call(arguments, 1));
                }
            });
        });
    }
};

xml2js.Parser.prototype.parseString = promisify(xml2js.Parser.prototype.parseString);

exports = module.exports = xml2js;
