// From https://docs.asciidoctor.org/asciidoctor.js/latest/extend/extensions/compile-ruby-extension/

const fs = require('fs')
const Builder = require('opal-compiler').Builder
// Opal object will be available on the global scope

const builder = Builder.create()
builder.appendPaths('.')
const result = builder.build('vuid-expander.rb')
fs.writeFileSync('vuid-expander.js', result.toString(), 'utf8')
