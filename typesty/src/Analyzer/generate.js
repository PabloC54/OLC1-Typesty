const fs = require('fs')
const js = require('jison')
const { Parser } = js

const generate_analyzer = () => {
  const gr = fs.readFileSync('typesty/src/Analyzer/grammar.jison', 'utf8')
  const parserSource = '/* eslint-disable */\n' + new Parser(gr).generate()

  fs.writeFileSync('typesty/src/Analyzer/analyzer.js', parserSource)
  console.log('generated!')
}

generate_analyzer()
