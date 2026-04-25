// bài toán đồng bộ , vậy đồng bộ là gì , sử dụng callBack để xử lý 
let fileData = null
const readFileData = (callBBack) => {
    setTimeout(() => {
        console.log('Xin chaof ca nha')
        fileData = "longmoidev"
        callBBack(fileData)
    }, 3000)
}

readFileData(() => {
    console.log('ket qua la  :', fileData)
})