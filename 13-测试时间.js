const t = require('./wangliang-tools/index.js')

const nt = t.dateFormat(new Date())
console.log(nt);
console.log('-----------');

// const moment = require('moment')

// const dt = moment().format('YYYY-MM-DD HH:mm:ss')
// console.log(dt);

// const wang = require('./wangliang-tools')

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
const str = t.htmlEscape(htmlStr);
console.log(str);
console.log('-----------');



const tr = t.htmlUnEscape(str)
console.log(tr);