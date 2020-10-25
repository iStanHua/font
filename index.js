const TextToSVG = require('text-to-svg')
const fs = require('fs')

class App {
  constructor() {

  }

  init() {

    const ttfList = []

    fs.readdirSync('./fonts').forEach((file) => {
      ttfList.push(file)
    })

    ttfList.forEach(t => {
      const textToSVG = TextToSVG.loadSync(`./fonts/${t}`)
      const text = 'T'
      const svg = textToSVG.getSVG(text, {
        x: 0,
        y: 0,
        fontSize: 72,
        anchor: 'top',
        attributes: {
          stroke: 'black'
        }
      })

      fs.writeFileSync(`./svgs/${text}_${t}.svg`, `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">${svg}`)

      console.log(`./svg/${text}_${t}.svg created.`)

    })
  }
}

new App().init()
