const webfont = require('webfont').default
const fs = require('fs')

module.exports = class Webfont {
  constructor() {

  }

  static start() {
    let name = 'newYear'
    webfont({
      files: `./dist/svgs/${name}/*.svg`,
      fontName: name,
    }).then((result) => {
      result.config.formats.forEach(f => {
        let fileName = `./dist/webfont/${name}.${f}`

        if (f === 'svg') fs.writeFileSync(fileName, result.svg)
        else fs.writeFileSync(fileName, Buffer.from(result[f].buffer))

        console.log(`${fileName} created.`)
      })
      return result
    }).catch((error) => {
      console.log(error)
    })
  }
}
