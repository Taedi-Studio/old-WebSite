const fs = require('fs')
const cors = require('cors')
const path = require('path').resolve()
const { renderFile } = require('ejs')
const express = require('express')

const app = express()
app.use(cors())

const settings = require(path + '/json/settings.json')

let meta = fs.readFileSync(path + '/page/meta.html').toString('utf-8')
let navbar = fs.readFileSync(path + '/page/navbar.html').toString('utf-8')

app.get('/', (req, res) => {
  renderFile(path + '/page/index.ejs', { meta, navbar }, (err, str) => {
    if (err) console.log(err)
    else res.send(str)
  })
})

app.listen(settings.port, () => {
  console.log('Teaddy Studio Official Website is running on http://localhost:' + settings.port)
})