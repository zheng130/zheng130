// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const https = require('https');
const axios = require('axios');
const fetch = require('node-fetch');

// let cookie = "wd_guid=fd929c37-6faf-4b6c-a5b1-219b905b6db6; historyState=state; _bl_uid=5al8jsXjqF8s630XOu4I62ylF2zz; lastCity=101010100; wt2=D1VNa9NuKs_DVv8i8IEPOC8sTXVbDQXmuPf4tqSEGMzb0-gJWSX7PT52Xrk-QGeZ7lNVhrbPPhG1J18Kzc4Buiw~~; wbg=0; zp_at=MDQDSBs9HBfI_x7W8SjtXbf9fw_0x6Vqsfw-P6nDKvo~; sid=sem_pz_bdpc_dasou_title; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1710166292,1710220210,1710726737,1710985446; __zp_seo_uuid__=869ac9ff-dd8d-4d5a-a6d0-1232308d0992; __l=r=https%3A%2F%2Fwww.zhipin.com%2Fweb%2Fcommon%2Fsecurity-check.html%3Fseed%3D5T8aNnET77iHAhpapE5vaRmUvs0IYLAlMzIrAV8guZs%253D%26name%3Dd31df56d%26ts%3D1710985445464%26callbackUrl%3Dhttps%253A%252F%252Fwww.zhipin.com%252Fbeijing%252F%253Fsid%253Dsem_pz_bdpc_dasou_title&l=%2Fcitysite%2Fbeijing%2F%3Fsid%3Dsem_pz_bdpc_dasou_title&s=1; __g=sem_pz_bdpc_dasou_title; __c=1710985446; __a=83918824.1708936069.1710847864.1710985446.280.10.22.22; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1710992143; __zp_stoken__=d4eefPTfDl8OETMK%2BSiwZEBMHBzcnQjcrGT89K0NDQz03PUlJPTdFIzctxILCtzTCqsOPY8OSL0AwNz08QD1JPUNFIDdJxYXCtzw%2BNsKhw4IywqXDj1fDh1fDjcOCGMO6w4IMw4EYMRbDjMK9LzLCjcOAQkQ%2FQsK8wrfCpMOEwr7CvcKiwrfCu8K3wqDDiUQ3QkA4SBJeGA1IN1FRVxZNZVBlXFkQWVNNLUJDPEPDrMOoxIA2SREMDgwaCw4MDhgRDA4ZBxYTGRMNEQwODBo4PcKqw4LDt3vEucSRw7%2FEqsKeVcKQwqLEg1nDvV7CocOFwqVHU8KzwpxUwqTCvMKpwq5RwrjCo1ZhWlPCvlhSeMK9VcKCXW9wcsK8wr%2FCiA%2FDghoOaF8aaEgPxIHCocOH; geek_zp_token=V1Q9MhFuX701ZgXdJozxQRKyKy7z3Uwg~~; __zp_sname__=d31df56d; __zp_sseed__=5T8aNnET77iHAhpapE5vaeuXVQRpBqtL6bacyGmFDEQ=; __zp_sts__=1711001133676";
// let get = function(e) {
//     var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
//     return (t = cookie.match(n)) ? unescape(t[2]) : null
// };
// axios({
//     method: 'get',
//     url: 'https://www.zhipin.com/wapi/zpgeek/search/joblist.json?scene=1&query=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88&city=101010100&experience=&payType=&partTime=&degree=&industry=&scale=&stage=&position=&jobType=&salary=&multiBusinessDistrict=&multiSubway=&page=6&pageSize=30',
//     headers: {
//         "accept": "application/json, text/plain, */*",
//         "accept-language": "zh-CN,zh;q=0.9",
//         "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"macOS\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "token": "JGRLiB8c2qRi5x8",
//         "traceid": "92C44024-659F-4C78-AA43-91FA481CBA2F",
//         "x-requested-with": "XMLHttpRequest",
//         "zp_token": "V1Q9MhFuX701ZgXdJozh0YKyy36jrXww~~"
//     },
// }).then((res, rej) => {
//     console.log(8, res.data, get('geek_zp_token'))
// }).catch((err) => {
//     // console.log('error:', err)
// })


fetch("https://www.zhipin.com/wapi/zpgeek/search/joblist.json?scene=1&query=前端开发工程师&city=101010100&experience=&payType=&partTime=&degree=&industry=&scale=&stage=&position=&jobType=&salary=&multiBusinessDistrict=&multiSubway=&page=6&pageSize=30", {
  "headers": {
    ":authority":"www.zhipin.com",
    // "path":"/wapi/zpgeek/search/joblist.json?scene=1&query=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88&city=101010100&experience=&payType=&partTime=&degree=&industry=&scale=&stage=&position=&jobType=&salary=&multiBusinessDistrict=&multiSubway=&page=6&pageSize=30",
    // "scheme":"https",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "sec-ch-ua": "Chromium;v=122, Not(A:Brand;v=24, Google Chrome;v=122",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "token": "JGRLiB8c2qRi5x8",
    "traceid": "92C44024-659F-4C78-AA43-91FA481CBA2F",
    "x-requested-with": "XMLHttpRequest",
    // "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "zp_token": "V1Q9MhFuX701ZgXdJozh0YKyy36jrXww~~"
  },
  "referrer": "https://www.zhipin.com/web/geek/job?query=前端开发工程师&city=101010100&page=6",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(response => {
  if (response.ok) {
    return response.json(); // 指定返回数据为JSON格式
  }
  throw new Error('Network response was not ok.');
})
.then(data => console.log(data)) // 处理解析后的数据


