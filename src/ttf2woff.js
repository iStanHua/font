const ttf2woff = require('ttf2woff')
const fs = require('fs')

module.exports = class Ttf2Woff {
  constructor() {

  }

  static start() {
    let input = fs.readFileSync('./fonts/Feronia.ttf')
    fs.writeFileSync('./dist/Feronia.woff', ttf2woff(input))
    console.log(`./dist/Feronia.woff created.`)
  }
}
