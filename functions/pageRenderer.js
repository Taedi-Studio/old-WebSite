const layouts = require('./layoutRenderer')

module.exports = (app) => {
  // index(소개) 페이지
  app.get('/', (req, res) => {
    
    renderFile(path + '/page/index.ejs', { meta, navbar }, (err, str) => {
      if (err) console.log(err)
      else res.send(str)
    })
  })
} 
