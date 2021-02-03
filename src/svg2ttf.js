const svg2ttf = require('svg2ttf')
const fs = require('fs')

module.exports = class Svg2TTF {
  constructor() {

  }

  static start() {
    const ttf = svg2ttf(fs.readFileSync('./dist/svgs/myfont.svg', 'utf8'), {})
    console.log(ttf)
    fs.writeFileSync('./dist/fonts/myfont.ttf', Buffer.from(ttf.buffer))
    console.log(`./dist/fonts/myfont.ttf created.`)
  }
}
