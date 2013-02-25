/*
 * Module dependencies
 */
var express = require('express')
  , http = require('http')
  , stylus = require('stylus')
  , nib = require('nib')
  , socketio = require('socket.io');

var app = express();
var server = http.createServer(app);

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function(req, res) {
  res.render('index',
    { title : 'Home' }
  )
});

// Start listening for incoming connections on specified port.
// This port setting is needed by Heroku or the app will not run.
var port = process.env.PORT || 3000;
//app.listen(port);
server.listen(port);

// Render some console log output
console.log("ScienceKit server listening for connections on port " + port);

// Starting socket.io
var io = socketio.listen(server).on('connection', function (socket) {
  socket.on('message', function (msg) {
    console.log('Message Received: ', msg);
    socket.broadcast.emit('message', msg);
  });
});

// assuming io is the Socket.IO server object
io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

// Render some console log output
console.log("ScienceKit server listening for socket/streaming connections on port " + port);