const TextToSVG = require('text-to-svg');
const fs = require('fs');

const textToSVG = TextToSVG.loadSync('./fonts/handlee-v8-latin-regular.ttf');

const attributes = {stroke: 'black'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
const text = 'sTy'
const svg = textToSVG.getSVG(text, options);

fs.writeFileSync(`./svgs/${text}.svg`,`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">${svg}` )
console.log(`./svg/${text}.svg created.`)