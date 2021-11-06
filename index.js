const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/hoge', (req, res) => {
  res.send('Hoge')
})

app.get('/fuga', (req, res) => {
  res.send('Fuga')
})

const port = '8080'
app.listen(port, () => {
  console.log(`app start listen port ${port}`)
})

module.exports.handler = serverless(app)