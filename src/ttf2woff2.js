const ttf2woff2 = require('ttf2woff2')
const fs = require('fs')

module.exports = class Ttf2Woff2 {
  constructor() {

  }

  static start() {
    let input = fs.readFileSync('./fonts/Feronia.ttf')
    fs.writeFileSync('./dist/Feronia.woff2', ttf2woff2(input))
    console.log(`./dist/Feronia.woff2 created.`)
  }
}
