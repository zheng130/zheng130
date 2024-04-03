const express = require("express");
const app = express();
const Vue = require("vue");
const path = require('path')
const vueServerRender = require("vue-server-renderer").createRenderer();

app.get('*', (request, response) => {
    const vueApp = new Vue({
        data:{
           message: "hello, ssr"
        },
        template: require('fs').readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
        // template: `<h1>{{message}}</h1>`
    });

    response.status(404);
    response.setHeader("Content-type", "text/html;charset-utf-8");
    vueServerRender.renderToString(vueApp).then((html) => {
        response.end(html);
    }).catch(err => console.log(err))
})


app.listen(3001, () => {
    console.log('服务已开启')
})