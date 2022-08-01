const fs = require('fs')

// fs.writeFile('./files/2.txt','你好',function(err){
//     // console.log(err);
//     if(err){
//         return console.log("写入文件失败" + err.message);
//     }
//     console.log("写入文件成功");
// })


fs.writeFile('./files/3.xt','你吃饭了吗',function(err){
    if(err){
        return console.log("写入文件失败" + err.message);
    }
    console.log('写入文件成功');
})