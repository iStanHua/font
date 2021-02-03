const opentype = require('opentype.js')
const fs = require('fs')

module.exports = class Opentype {
  constructor() {

  }

  static start() {
    const font = opentype.loadSync('./fonts/Aref Ruqaa-Bold.ttf')
    const path = font.getPath('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 0, 60, 60)

    const name = `./dist/svgs/opentype.svg`

    fs.writeFileSync(name, `<?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${path.toSVG()}</svg>`)
    console.log(`${name} created.`)
  }
}
