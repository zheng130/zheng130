const https = require('https');
const fs = require('fs');
const crypto = require('crypto-js');
const { default: axios } = require('axios');

const url = "https://ke.qq.com/cgi-bin/qcloud/get_dk?edk=CiBTCBR0e6OC17gtsRvE61oi93hu33JhcTR7wzIpRPe0uBCO08TAChiaoOvUBCokOTMyNDg4YmItOWZjYS00MzFiLWJiYjItNjFmMDhjYjNlYmM3&fileId=387702306493093647&keySource=VodBuildInKMS&token=dWluPTE0NDExNTE5OTY5NjU2MTI0MTtleHQ9ZWU0NWM3NzQ0NDYzY2Q3ODg4ODQ1OTg1Y2IwZGMwZDkwMDNiNjQwYzViYjRhMGNlNmE4OTEwMDVkNTU4Y2IxNGY2YTljZjUwMDAzNmU1ZmViMjRhZmYxMDNkNDI5ZTkyNGIxNjFlNDFmYmFjZTc2ZDNiOTY0ZWU1Mjk4OTcwZTdjMTM5MTZiOWFkM2VlYzBiO3VpZF90eXBlPTI7dWlkX29yaWdpbl91aWRfdHlwZT0yO3VpZF9vcmlnaW5fYXV0aF90eXBlPTI7dWlkX2FwcGlkPTE0MDAwMDAwMDg7Y2lkPTU4OTI2ODk7dGVybV9pZD0xMDYxMDk5NzE7dm9kX3R5cGU9MDtwbGF0Zm9ybT0z";
// const url = 'https://www.baidu.com'
const iv = Buffer.from("00000000000000000000000000000000", 'hex');
axios.get(url).then((res) => {
    console.log(1)
}).catch(() => {
    console.log(8)
})
