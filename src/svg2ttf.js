const svg2ttf = require('svg2ttf')
const fs = require('fs')

module.exports = class Svg2TTF {
  constructor() {

  }

  static start() {
    const svg = svg2ttf(fs.readFileSync('./dist/svgs/iconfont.svg', 'utf8'), {})
    fs.writeFileSync('./dist/fonts/iconfont.ttf', Buffer.from(svg.buffer))
    console.log(`./dist/fonts/iconfont.ttf created.`)
  }
}
