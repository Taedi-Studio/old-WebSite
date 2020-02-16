const path = require('path').resolve()
const { readdir } = require('fs')

module.exports = () => {
  const layouts = {}

  readdir(path + '/layouts', (err, files) => {
    files.forEach((file) => {
      
    })
  })

  // Options ------
  layout.meta = layout.meta.replace(/{{name}}/g, 'Teaddy Studio').replace(/{{description}}/g, 'Description') 
}
