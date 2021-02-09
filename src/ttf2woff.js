const ttf2woff = require('ttf2woff')
const fs = require('fs')

module.exports = class TTF2Woff {
  constructor() {

  }

  static start() {
    let input = fs.readFileSync('./fonts/Feronia.ttf')
    fs.writeFileSync('./dist/fonts/Feronia.woff', ttf2woff(input))
    console.log(`./dist/fonts/Feronia.woff created.`)
  }
}
