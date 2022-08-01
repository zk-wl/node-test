const http = require('http')

const server = http.createServer()

server.on('request',function(req,res){
    console.log('有人请求服务器');

})

server.listen(80,function(){
    console.log('server rnning at http://127.0.0.1:80');
})