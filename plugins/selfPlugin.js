const JSZip = require('jszip');
const path = require('path');
const RawSource = require('webpack-sources').RawSource;
const zip = new JSZip();

module.exports =  class myPlugin {
  constructor(options) {
    this.options = options;
  }
    apply(compiler) {
      compiler.hooks.emit.tapAsync('selfPlugin', (compilation, callback) => {
        const folder = zip.folder(this.options.filename);
        for (let filename in compilation.assets) {
          const source = compilation.assets[filename].source();
          folder.file(filename, source);
          zip.generateAsync({
              type: 'nodebuffer'
          }).then((content) => {
            console.log(2,compilation.assets)
            const outputPath = path.join(
              compilation.options.output.path, 
              this.options.filename + '.zip'
            );

            // const outputRelativePath = path.relative(
            //     compilation.options.output.path,
            //     outputPath
            // );
            // compilation.assets[outputRelativePath] = new RawSource(content);

            // callback();
          });
      }
      });
    }
}