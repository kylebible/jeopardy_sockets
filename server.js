const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const game = require('./game.json')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public/dist')))

const port = process.env.PORT || 8000

var routes_setter = require('./server/config/routes.js')

routes_setter(app);

var server = app.listen(port, function() {
  console.log("listening on port"+port);
})

var players = {}

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  console.log(socket.id);

  socket.on('player_joined', function(player) {
    console.log('player_joined')
    players[socket.id] = player;
    players[socket.id].id = socket.id
    console.log("Player " + player.userName + " with id: " + socket.id + " has joined.");
    for (var key in players) {
            console.log("Players: " + key + " : " + players[key].userName);
        }
  })


  socket.on('button_press', function(data) {
    console.log('someone pressed a button',data)
    io.emit('server_response', {response: "sockets are the best!"})
  })
})