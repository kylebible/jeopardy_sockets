const http = require('http')
const request = require('request')
var game = []

module.exports = {
    newgame: function(req,res) {
        request('http://jservice.io/api/random',function(err,response,data) {
            if (err) {
                console.log(err)
            }
            else {
                var date = JSON.parse(data)[0].airdate
                request('http://jservice.io/api/clues?min_date='+date+'&max_date='+date, function(err,response,data) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        var newgame = JSON.parse(data)
                        newgame = categories(game)
                        game = newgame
                    }
                })
            }
        })
    },
    getgame: function(req,res) {
        console.log(game)
    }
  
}

function categories(game) {
  var titleArr =[]
  var arr=[]
  var dict = {}
  for (var i of game) {
    if (!dict[i.category.title]) {
      titleArr.push(i.category.title)
      dict[i.category.title] = []
      dict[i.category.title].push(i)
    }
    else {
      dict[i.category.title].push(i)
    }
  }
  for (var j of titleArr) {
    arr.push({name: j,questions:dict[j]})
  }
  return arr
}
