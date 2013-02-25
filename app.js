/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

// Start listening for incoming connections on specified port
var port = process.env.PORT || 3000;
app.listen(port)

// Render some console log output
console.log("Listening on port " + port);