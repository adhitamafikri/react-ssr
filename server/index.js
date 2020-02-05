const path = require('path')
const express = require('express')
require('dotenv/config')

const app = express()

app.use(express.static('public/dist'))

app.use('*', function(req, res, next) {
  const filename = 'index.html'
  const options = {
    root: path.resolve(__dirname, '../public/dist')
  }
  res.sendFile(filename, options, function(error) {
    if (error) next(error)
    else console.log('sent: ', filename)
  })
})

app.listen(process.env.APP_PORT || '5010', function() {
  console.log('app running on PORT', process.env.APP_PORT)
})
