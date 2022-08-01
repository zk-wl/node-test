const fs = require('fs')

//2.调用 fs.readFile() 方法读取文件

fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    console.log(err)
    console.log("--------");
    console.log(dataStr)
})