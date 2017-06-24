const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public/dist')))

const port = process.env.PORT || 8000

var routes_setter = require('./server/config/routes.js')

routes_setter(app);

var server = app.listen(port, function() {
  console.log("listening on port"+port);
})

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  socket.on('button_press', function(data) {
    console.log('someone pressed a button',data)
    io.emit('server_response', {response: "sockets are the best!"})
  })
})