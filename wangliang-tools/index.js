//这是入口文件

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')



 
module.exports = {
    ...date,
    ...escape
    // htmlUnEscape
}