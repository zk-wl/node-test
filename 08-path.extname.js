const path = require('path')

const fpath = '/a/b/c/index.html'

// const fullName = path.basename(fpath)
// console.log(fullName)

const fullName = path.extname(fpath)
console.log(fullName)