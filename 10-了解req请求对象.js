const http = require('http')

const server = http.createServer()

server.on('request',(req,res) => {
    // const url = req.url 

    // const method = req.method

    const str = `你的请求地址是：${req.url} , 你的请求方法是：${req.method}`

    res.setHeader('Content-Type','text/html; charset=utf-8')
    // console.log(str);

    res.end(str)
})

server.listen(80, () => {

    console.log('server running at http://127.0.0.1')
})