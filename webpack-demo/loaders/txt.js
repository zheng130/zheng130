const loaderUtils = require("loader-utils");
const fs = require('fs');
const path = require('path');


module.exports = function (source) {
  return `module.exports = ${JSON.stringify(source)}`;
}