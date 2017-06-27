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

  

  constructor(private _http: Http, private _cookie:CookieService, private _router:Router) {
      this.socket = io(this.url);
      this.socket.on('update_game', function (response) {
      this.observedGame.next(response)
      }.bind(this));

      this.socket.on('new_game', function(response) {
      console.log('new game',response)
      this.observedGame.next(response)
      }.bind(this))

      this.socket.on('player_joined', function(response) {
        this.observedPlayers.next(response)
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

      this.socket.on('resetServer',function() {
        console.log("in socket")
        window.location.replace('/')
      }.bind(this))
        
      

   }

  

  updategame(data) {
    this.observedGame.next(data)
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

}
