// Copyrifht (C) 2017 Jay Kelkar <jkelkar@gmail.com>

let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let port = 8080

app.get('*', function (req, res, next) {
  console.log('-> ', req.url)
  // console.log(app.root)
  next()
})
app.root = __dirname
app.set('port', process.env.PORT || port)
app.use('/static', express.static(app.root + '/static'))
app.use('/node_modules', express.static(app.root + '/node_modules'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(app.root + '/index.html')
})
// off to the races
app.listen(port)
console.log('listening on port ' + port)
