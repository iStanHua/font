const ttf2svg = require('ttf2svg')
const fs = require('fs')

module.exports = class TTF2Svg {
  constructor() {

  }

  static start() {
    fs.readFile('./dist/fonts/newYear.ttf', function (err, buffer) {
      if (!!err) throw err

      var svgContent = ttf2svg(buffer)
      fs.writeFileSync('./dist/svgs/newYear.svg', svgContent)
      console.log(`./dist/svgs/newYear.svg created.`)
    })
  }
}
