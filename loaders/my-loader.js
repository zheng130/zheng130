const loaderUtils = require("loader-utils");
const fs = require('fs');
const path = require('path');


module.exports = function(source,map,meta) {
    const options = loaderUtils.getOptions(this);
   const callback = this.async();
   fs.readFile(path.resolve(__dirname, '../src/3.lss'), function(err, data) {
        if (err) {
            callback(err, '')
        }
        callback(null, `export default ${JSON.stringify(data.toString())}`)
    })
    return `export default ${JSON.stringify(source)};`
}