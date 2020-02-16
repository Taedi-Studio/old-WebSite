const fs = require('fs')
const cors = require('cors')
const path = require('path').resolve()
const express = require('express')
const { renderFile } = require('ejs')

const pageRenderer = require('./functions/pageRenderer')
const layoutRenderer = require('./functions/layoutRenderer')

const app = express()
app.use(cors())

const settings = require(path + '/data/settings.json')

const navbar = fs.readFileSync(path + '/page/navbar.html').toString('utf-8')
const metadata = fs.readFileSync(path + '/page/meta.html').toString('utf-8')

pageRenderer(app)

app.listen(settings.port, () => {
  console.log('Teaddy Studio Official Website is running on http://localhost:' + settings.port)
})