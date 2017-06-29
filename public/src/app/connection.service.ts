import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs'
import * as io from 'socket.io-client';
import { Http } from "@angular/http";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { Router } from "@angular/router";
import 'rxjs'
declare var process:any

@Injectable()
export class ConnectionService implements OnDestroy {
  port = 8000
  private url = 'http://localhost:' + this.port; 
  // private url = 'https://jeopardysockets.herokuapp.com';
  socket;
  socketSubscription = new BehaviorSubject(null)
  observedData = new BehaviorSubject(null)
  observedGame = new BehaviorSubject(null)
  observedGameView = new BehaviorSubject(null)
  observedQuestionView = new BehaviorSubject(null)
  observedBuzzInStatus = new BehaviorSubject(null)
  observedTurnStatus = new BehaviorSubject(null)
  observedPlayers = new BehaviorSubject(null)
  observedGameReady = new BehaviorSubject(null)
  observedBuzzedInPlayer = new BehaviorSubject(null)
  observedPlayersTurn = new BehaviorSubject(null)
  observedEligiblePlayers = new BehaviorSubject(null)
  observedAnswerStatus = new BehaviorSubject(null)
  observedCurrentPlayer = new BehaviorSubject(null)
  observedTrebekPresence = new BehaviorSubject(null)
  buzzedinplayer: object;
  question;
  

  //todo on connect give new player game info


  constructor(private _http: Http, private _cookie:CookieService, private _router:Router) {
      this.observedQuestionView.subscribe(
        (currentQuestion) => {this.question = currentQuestion},
        (err) => console.log(err)
      )

      this.socket = io(this.url);
      this.socket.on('update_game', function (response) {
      this.observedGame.next(response)
    }.bind(this));
    
      this.socket.on('syncGame',function(game) {
        this.observedGame.next(game.game)
        this.observedPlayers.next(game.players)
      }.bind(this))

      this.socket.on('new_game', function(response) {
      for (var i of response) {
        for (var j of i["questions"]) {
          console.log(i["name"],j["value"])
        }
      }
      console.log('new game',response)
      this.observedGame.next(response)
      }.bind(this))

      this.socket.on('player_joined', function(response) {
        console.log(response)
         var player = response[this.socket.id]
        console.log("player",player)
        this.observedCurrentPlayer.next(player)
        this.observedPlayers.next(response)
        console.log(this.observedPlayers.value)
      }.bind(this))

      this.socket.on('show-question', function(question) {
        console.log('question to show',question)
        this.observedQuestionView.next(question)
      }.bind(this))

      this.socket.on('updateBuzzer', function(status) {
        console.log('updating buzzer, socket.on',status)
        this.observedBuzzInStatus.next(status)
      }.bind(this))

      this.socket.on('buzzIn', function(player) {
        console.log('buzzed in player',player)
        this.buzzedinplayer = player
        if (player.id == this.socket.id) {
          this.observedBuzzedInPlayer.next("You")
        }
        else {this.observedBuzzedInPlayer.next(player.userName)}
      }.bind(this))
    
      this.socket.on('ready', function(status) {
        this.observedGameReady.next(status)
      }.bind(this))

      this.socket.on('firstTurn',function(player) {
        console.log("socket",this.socket.id)
        console.log("player's turn",player)
        if (this.socket.id == player.id) {
          this.observedTurnStatus.next(true)
        }
        console.log(player)
        this.observedPlayersTurn.next(player.userName)
      }.bind(this))

      this.socket.on('correct-Answer', function(player) {
        if (this.socket.id == player.id) {
          this.observedTurnStatus.next(true)
        }
        else {
          this.observedTurnStatus.next(false)
        }
        console.log("question value: ",this.question,typeof this.question['value'])
        console.log("player score before: ",this.observedPlayers['value'])
        // console.log("question value: ",this.observedQuestionView['value']['value'])
        // console.log("player score before: ",this.observedPlayers)
        this.observedPlayers["value"][player.id]["score"] += this.question['value']
        console.log("player score after", this.observedPlayers['value'])
        this.updateScores(this.observedPlayers.value)
        this.observedPlayersTurn.next(player.userName)
        this.observedBuzzedInPlayer.next("")
        this.observedBuzzInStatus.next(false)
        this.buzzedinplayer = null
        this.observedQuestionView.next(null)
        this.observedAnswerStatus.next(true)
      }.bind(this))

      this.socket.on('eligiblePlayers', function(players) {
        console.log("players",players)
        this.observedEligiblePlayers.next(players)
      }.bind(this))

      this.socket.on('playerIncorrect', function(players) {
        console.log("incorrect players",this.observedPlayers["value"])
        console.log("incorrect player",this.buzzedinplayer)
        this.observedPlayers["value"][this.buzzedinplayer["id"]]["score"] -= this.question['value']
        // console.log(this.observedPlayers["value"][this.buzzedinplayer["id"]]["score"])
        console.log("incorrect answer. Players Left: ",players)
        if (Object.keys(players).length<1) {
          console.log("no players left")
          this.observedQuestionView.next(null)
          this.observedAnswerStatus.next(true)
          this.observedBuzzInStatus.next(false)
        }
        else if(this.socket.id in players) {
          this.observedBuzzInStatus.next(true)
          this.observedAnswerStatus.next(true)
        }
        else {
          this.observedBuzzInStatus.next(true)
          this.observedAnswerStatus.next(false)
        }
        this.observedBuzzedInPlayer.next("")
        this.buzzedinplayer = null
        
      }.bind(this))

      this.socket.on('updatePlayers',function(updatedPlayers) {
        this.observedPlayers.next(updatedPlayers)
        this.observedCurrentPlayer.next(updatedPlayers[this.socket.id])
      }.bind(this))

      this.socket.on('trebekPresent', function() {
        this.observedTrebekPresence.next(true)
      }.bind(this))
        
      this.socket.on('giveUp', function() {
        this.observedQuestionView.next(null)
        this.observedAnswerStatus.next(true)
        this.observedBuzzInStatus.next(false)
      }.bind(this))


      this.socket.on('resetServer',function() {
        console.log("in socket")
        window.location.replace('/')
      }.bind(this))
      

   }

  

  updategame(data) {
    this.observedGame.next(data)
  }

  updateScores(players) {
    this.socket.emit('updateScores',players)
  }

  joinGame(username) {
    this.socket.emit('player_joined', {userName: username})
  }

  getGame() {
    this.socket.emit('get_game')
  }

//gets a random game, takes the airdate, and grabs all categories and questions from that airdate
  startNewGame() {
    console.log('starting game')
    this.socket.emit('new_game')
  }

  displayQuestion(question) {
    this.socket.emit('display-question',question)
  }

  disconnect() {
    this.socket.disconnect()
  }

  ngOnDestroy() {
    localStorage.clear()
  }

  updateSocketGame(game) {
    this.socket.emit('update_game',game)
  }

  buzzIn() {
    console.log('buzzing in')
    this.socket.emit('player_buzzed_in')
  }

  trebekready() {
    this.socket.emit('trebekready')
  }
  
  resetServer() {
    console.log('resetting')
    this.socket.emit('resetServer')
  }

  playerCorrect() {
    console.log('emitting playercorrect to server')
    this.socket.emit('correctAnswer',this.buzzedinplayer)
    this.resetEligiblePlayers()
  }

  playerIncorrect() {
    console.log("buzzed in guy",this.buzzedinplayer)
    this.socket.emit('playerIncorrect',this.buzzedinplayer["id"])
  }

  resetEligiblePlayers() {
    this.socket.emit('resetEligiblePlayers')
  }

  trebekPresent() {
    this.socket.emit('trebekPresent')
  }

  giveUp() {
    this.socket.emit('giveUp')
    this.socket.emit('resetEligiblePlayers')
  }

}
