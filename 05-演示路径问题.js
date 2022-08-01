const fs = require('fs')

// fs.readFile('./files/1.txt','utf8', function(err,dataStr){
//     if(err){
//         return console.log("读取文件失败" + err.mesaage);
//     }
//     console.log("读取成功");
// })

// fs.readFile('F:\\VsCode\\node\\files\\1.txt','utf8', function(err,dataStr){
//     if(err){
//         return console.log("读取文件失败" + err.mesaage);
//     }
//     console.log("读取成功");
// })

fs.readFile(__dirname + '/files/1.txt','utf8', function(err,dataStr){
    if(err){
        return console.log("读取文件失败" + err.mesaage);
    }
    console.log("读取成功" + dataStr);
})