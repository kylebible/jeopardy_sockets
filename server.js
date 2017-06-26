const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request')
const app = express();

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public/dist')))

const port = process.env.PORT || 8000

var routes_setter = require('./server/config/routes.js')

routes_setter(app);

var server = app.listen(port, function() {
  console.log("listening on port"+port);
})

var players = {}
var game = []

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

  socket.on('new_game', function() {
    console.log('receiving new_game')
    request('http://jservice.io/api/random',function(err,response,random_clue) {
            if (err) {
                console.log(err)
            }
            else {
                var date = JSON.parse(random_clue)[0].airdate
                request('http://jservice.io/api/clues?min_date='+date+'&max_date='+date, function(err,response,random_game) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        var newgame = JSON.parse(random_game)
                        console.log("new_game",newgame)
                        newgame = categories(newgame)
                        console.log("new game after categories",newgame)
                        game = newgame
                        console.log("emitting game!", game)
                        io.emit('game_update',game)
                    }
                })
            }
        })
  })




  // socket.on('button_press', function(data) {
  //   console.log('someone pressed a button',data)
  //   io.emit('server_response', {response: "sockets are the best!"})
  // })


})

function categories(found_game) {
  console.log('in categories',found_game)
  var titleArr =[]
  var arr=[]
  var dict = {}
  for (var i of found_game) {
    if (!dict[i.category.title]) {
      titleArr.push(i.category.title)
      dict[i.category.title] = []
      if (dict[i.category.title].length<5) {
      dict[i.category.title].push(i)
      }
    }
    else {
      if (dict[i.category.title].length<5) {
      dict[i.category.title].push(i)
      }
    }
  }
  for (var j of titleArr) {
    arr.push({name: j,questions:dict[j]})
  }
  console.log("in categories",arr)
  return arr
}