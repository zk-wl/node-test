const express = require('express')

const app = express()

app.listen(80,() => {
    console.log("express server running at http://127.0.0.1")
})

app.use(express.static('./clock'))

app.use('clock',express.static('./clock'))