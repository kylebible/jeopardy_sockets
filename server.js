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
var game = [];
var ready = false
var trebekready = false;
var trebekPresent = false;
var eligiblePlayers = {}

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  
    if (players[socket.id]== undefined && game.length >1) {
      console.log('syncing new player')
      socket.emit('syncGame',{game: game, players: players})
      if (trebekPresent) {
        socket.emit('trebekPresent')
      }
      if (ready) {
        socket.emit('ready', true)
      }
    }


  console.log(socket.id);
  socket.on('player_joined', function(player) {
    console.log('player_joined')
    players[socket.id] = player;
    players[socket.id].id = socket.id
    players[socket.id].score = 0
    console.log("Player " + player.userName + " with id: " + socket.id + " has joined.");
    for (var key in players) {
            console.log("Players: " + key + " : " + players[key].userName);
        }
    socket.emit('player_joined',players)
    io.emit('updatePlayers',players)
  })

  socket.on('trebekPresent', function() {
    trebekPresent = true
    io.emit('trebekPresent')
  })

  socket.on('trebekready', function() {
    console.log('trebekready)')
    trebekready = true
    eligiblePlayers = JSON.parse(JSON.stringify(players))
    if (Object.keys(players).length >= 2 && trebekready) {
        io.emit('ready', true)
        ready = true
        io.emit('firstTurn',players[Object.keys(players)[0]])
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
                        newgame = categories(newgame)
                        game = newgame
                        io.emit('new_game',game)
                        console.log('game-emitted',game)
                    }
                })
            }
        })

  })

  socket.on('get_game',function() {
    console.log('updating-game',game)
    socket.emit('update_game',game)
  })

  socket.on('update_game',function(updatedGame) {
    game = updatedGame
    socket.broadcast.emit('update_game',game)
  })

  socket.on('display-question',function(question) {
    socket.broadcast.emit('show-question',question)
    socket.broadcast.emit('updateBuzzer',true)
  })

  socket.on('disconnect',function() {
    console.log('disconnection',socket.id)
    if (players[socket.id] != null) {
      io.emit('playerLeft',players[socket.id])
      delete players[socket.id]

      for (var key in players) {
        console.log("players remaining:" + key + " : " + players[key].userName);
      }

      if (Object.keys(players).length < 2) {
        io.emit('ready', false)
      }
    }

  })

  socket.on('player_buzzed_in', function() {
      console.log("buzzed in!!",players,socket.id)
      io.emit('buzzIn',players[socket.id])
      io.emit('updateBuzzer',false)
    })

    socket.on('resetServer', function() {
      console.log('server resetting')
      players={}
      game = []
      trebekready = false
      trebekPresent = false
      eligiblePlayers = {}
      io.emit('resetServer')
    })

    socket.on('correctAnswer', function(player) {
      eligiblePlayers = JSON.parse(JSON.stringify(players))
      io.emit('correct-Answer',player)
    })

    socket.on('giveUp', function() {
      io.emit('giveUp')
    })

    socket.on('resetEligiblePlayers',function() {
      eligiblePlayers = JSON.parse(JSON.stringify(players))
      console.log('eligible players',eligiblePlayers)
      io.emit('eligibilePlayers',players)
    })

    socket.on('playerIncorrect', function(player) {
      console.log(socket.id,player)
      console.log('player incorrect',eligiblePlayers)
      delete eligiblePlayers[player]
      console.log('player incorrect',eligiblePlayers)
      io.emit('playerIncorrect',eligiblePlayers)
    })

    socket.on('updateScores', function(updatedPlayers) {
      players = updatedPlayers
      io.emit('updatePlayers',players)
    })


})

function categories(found_game) {
  var titleArr =[]
  var arr=[]
  var dict = {}
  var doubleJeopardyQs = {}
  while (Object.keys(doubleJeopardyQs).length < 2) {
    var idx = Math.floor(Math.random()*60)
    if (!doubleJeopardyQs[idx]) {
      doubleJeopardyQs[idx] = true
    }
  }
  for (var [index, i] of found_game.entries()) {
    if (i.invalid>0) {
      i["asked"] = true
    }
    if (index in doubleJeopardyQs) {
      i["doubleJeopardy"] = true
      console.log(i)
    }
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
  // for (var k of arr) {
  //   k.questions.sort(function(a,b) {
  //     return a.value > b.value
  //   })
  // }
  return arr
}