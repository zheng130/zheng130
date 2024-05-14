const JSZip = require('jszip');
const path = require('path');
const RawSource = require('webpack-sources').RawSource;
const zip = new JSZip();
const source = new RawSource('console.log("Hello, World!")')
var glob = require("glob")
const fs = require('fs')
const { parse } = require('node-html-parser');
// module.exports = class ZipPlugin1 {
//     constructor(options) {
//         this.options = options;
//     }

//     apply(compiler) {
//         compiler.hooks.emit.tapAsync('urlPatter', (compilation, callback) => {
//             // const folder = zip.folder(this.options.filename);
//             let url = this.options.filePath
//             for (let filename in compilation.assets) {
//                 const source = compilation.assets[filename].source();
//                 console.log(filename,':', url+'/1111.html')
//                 if (filename.includes('html')) {
//                     if (fs.existsSync(url+'/1111.html')) {

//                         fs.writeFileSync(url+'/1111.html' , source, (err) => {
    
//                         })
//                     }

//                 }
//                 // folder.file(filename, source);
//             }
//             // console.log(1, this.options.filePath)
//             // let url = this.options.filePath
//             // fs.readFile(url+'/index.html', 'utf-8', (err, d) => {
//             //     console.log(1, err, d, url+'/index.html')
//             // })
//             // glob(this.options.filePath+'/**/*.{html,js,css}',{}, function(r,b) {
//             //     console.log(1,r,b, url)
//             // })
//             // zip.generateAsync({
//             //     type: 'nodebuffer'
//             // }).then((content) => {
//             //     const outputPath = path.join(
//             //         compilation.options.output.path, 
//             //         this.options.filename + '.zip'
//             //     );

//             //     const outputRelativePath = path.relative(
//             //         compilation.options.output.path,
//             //         outputPath
//             //     );
//             //     compilation.assets[outputRelativePath] = new RawSource(content);
               
//             // });
//             callback();
//         });
//     }
// }

module.exports = class urlPatter {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
      compiler.hooks.assetEmitted.tap('urlPatter', (file, { content, source, outputPath, compilation, targetPath }) => {
        // console.log(file, this.options.filePath+ '/'+file);
        if (file.includes('html')) {
            if (fs.lstatSync(this.options.filePath).isDirectory()) {
              glob(this.options.filePath+ '/index.html', function(a,b) {
                fs.readFile(b[0], 'utf-8', function(r,data) {
                  let root = parse(data)
                  // console.log(3, root.querySelector('head').childNodes)
                  let arr = root.querySelector('head').childNodes;
                  let b = arr.map((item, i) => {
                    return item.rawTagName == 'link'?item.rawAttrs:''
                  })
                  b = b.filter(d=>d)
                  // console.log(b)
                  let html = parse('<div><p>Hello, world!</p></div>')
                  let dd= html.querySelector('p')
                  const text = dd.text;
                  const newElement = parse(`<span>New Element</span>`);
                  html.appendChild(newElement)
                  console.log(1, html.toString())
              })
              })
                // fs.readFileSync(this.options.filePath+ '/'+file, 'utf-8', function(data) {
                //     console.log(1, data)
                // })
            }
        }
      });
    }
  }