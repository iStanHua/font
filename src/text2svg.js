const TextToSVG = require('text-to-svg')
const fs = require('fs')

module.exports = class Text2SVG {
  constructor() {

  }

  static start() {
    // this.batch()
    this.feronia()
  }

  static textToSVG(font, text) {
    const textToSVG = TextToSVG.loadSync(`./fonts/${font}`)
    const svg = textToSVG.getSVG(text, {
      x: 0,
      y: 0,
      fontSize: 64,
      letterSpacing: 0.5,
      anchor: 'top',
      attributes: {
        stroke: '#000000'
      }
    })
    const name = `./dist/svgs/${font}_${text}.svg`

    fs.writeFileSync(name, `<?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">${svg}`)
    console.log(`${name} created.`)
  }

  /**
   * 批量
   */
  static batch() {
    const ttfList = []
    fs.readdirSync('./fonts').forEach((file) => {
      ttfList.push(file)
    })

    ttfList.forEach(t => { this.textToSVG(t, 'T') })
  }

  /**
   * 单个字体
   */
  static feronia() {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.textToSVG('DIGITALDREAMFAT.ttf', chars)
    let pos = chars.length
    for (let i = 0; i < pos; i++) {
      this.textToSVG('DIGITALDREAMFAT.ttf', chars.charAt(i))
    }
  }
}
