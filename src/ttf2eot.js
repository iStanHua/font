const ttf2eot = require('ttf2eot')
const fs = require('fs')

module.exports = class TTF2Eot {
  constructor() {

  }

  static start() {
    let input = fs.readFileSync('./dist/fonts/newYear.ttf')
    fs.writeFileSync('./dist/fonts/newYear.eot', ttf2eot(input))
    console.log(`./dist/fonts/newYear.eot created.`)
  }
}
