 
 import { onMounted } from "vue";
const add = () => {
    return 1
}
type Optinos = {
    el: string
}
const useBaseImg = (optinos:Optinos):Promise<{baseUrl:string}> => {
    return new Promise((resolve, reject) => {
        onMounted(() => {
            let img = document.querySelector(optinos.el) as HTMLImageElement;
            img.onload = () => {
                resolve({
                    baseUrl: base64(img)
                })
            }
        })
        const base64 = (el:HTMLImageElement) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = el.width;
            canvas.height = el.height;
            ctx?.drawImage(el, 0, 0, el.width, el.height);
            // 获取图片的base64编码数据     
            const base64Data = canvas.toDataURL('image/png');
            return base64Data;
        }
    })
}
export {
    add,
    useBaseImg
}