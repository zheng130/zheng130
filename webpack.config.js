const path = require('path');
const selfPlugin = require('./plugins/selfPlugin')
// const ZipPlugin = require('./plugins/zipPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

function setMPA () {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));
    console.log(entryFiles)
    Object.keys(entryFiles)
        .map((index) => {
            const entryFile = entryFiles[index];
            // '/Users/cpselvis/my-project/src/index/index.js'

            const match = entryFile.match(/src\/(.*)\/index\.js/);
            const pageName = match && match[1];

            entry[pageName] = entryFile;
            htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    inlineSource: '.css$',
                    template: path.join(__dirname, `src/${pageName}/index.html`),
                    filename: `${pageName}.html`,
                    chunks: ['vendors', pageName],
                    inject: true,
                    minify: {
                        html5: true,
                        collapseWhitespace: true,
                        preserveLineBreaks: false,
                        minifyCSS: true,
                        minifyJS: true,
                        removeComments: false
                    }
                })
            );
        });
    
    return entry
}
// setMPA()
module.exports = {
    entry: './a.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'none',
    plugins: [
        new selfPlugin({
            filename: 'offline'
        }),
        // new HtmlWebpackPlugin({
        //     title: 'My App',
        //     filename: 'admin.html'
        // })
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.(png|jpeg|gif)$/i,
    //             use: [
    //                     {
    //                     loader: 'url-loader',
    //                     options: {
    //                         limit: 1000,
    //                     },
    //                 },
    //             ],
    //         },
    //         {

    //             test: /\.lss$/,
    //             use: [
    //                 {
    //                     loader: path.resolve('./loaders/my-loader'),
    //                     options: {
    //                         name: 1000,
    //                     },
    //                 }
    //             ],
    //         },
    //     ],

    // }
}