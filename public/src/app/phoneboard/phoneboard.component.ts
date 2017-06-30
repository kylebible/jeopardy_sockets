import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConnectionService } from "app/connection.service";

@Component({
  selector: 'app-phoneboard',
  templateUrl: './phoneboard.component.html',
  styleUrls: ['./phoneboard.component.css']
})
export class PhoneboardComponent implements OnInit {
  game = []
  questions = []
  buzzermode = false;
  myTurn = false;
  ready = false;
  buzzedInPlayer = ""
  canAnswer = true;
  DJMode = false;
  myDJMode = false
  player;
  maxWager = 500
  question;
  wager;

  constructor(private _router:Router, private _connection:ConnectionService) {
    _connection.observedGame.subscribe(
      (updatedGame) => {this.game = updatedGame},
      (err) => console.log(err)
    )
    _connection.observedQuestionView.subscribe(
      (currentQuestion) => this.question = currentQuestion,
      (err) =>console.log(err)
    )
    _connection.observedBuzzInStatus.subscribe(
      (currentBuzzerMode) => {this.buzzermode = currentBuzzerMode; if(this.myDJMode && this.buzzermode) {this.buzzin()}},
      (err) => console.log(err)
    )

    _connection.observedGameReady.subscribe( 
      (currentReadiness) => {if (currentReadiness !=null) {this.ready = currentReadiness}},
      (err)=> console.log(err)
    )

    _connection.observedTurnStatus.subscribe(
      (currentTurnStatus) => {this.myTurn = currentTurnStatus},
      (err)=>console.log(err)
    )

    _connection.observedBuzzedInPlayer.subscribe(
      (currentlyBuzzedIn) => { if(currentlyBuzzedIn) {this.buzzedInPlayer = currentlyBuzzedIn} else {this.buzzedInPlayer = ""}},
      (err)=>console.log(err)
    )

    _connection.observedAnswerStatus.subscribe(
      (currentAnswerStatus)=> {if (currentAnswerStatus != null){this.canAnswer = currentAnswerStatus}; console.log("cananswer",this.canAnswer)},
      (err)=> console.log(err)
    )

    _connection.observedCurrentPlayer.subscribe(
          (currentPlayer) => {if(currentPlayer) {this.player = currentPlayer; if(this.player.score < 500) {this.maxWager = 500} else {this.maxWager = this.player.score}}},
      (err)=>console.log(err)
    )

    _connection.observedDJStatus.subscribe(
      (status) => {if (status != null && this.myTurn) {this.myDJMode = status} else if (status!= null) {this.DJMode = status} }
    )

    //TO DO: resolve current answer status when question resets
   }

  ngOnInit() {
  }

  choose(category) {
     this.questions = category.questions
  }


  submitDJWager() {
    this._connection.submitDJWager(this.wager)
    this.wager = null
  }

  buzzin() {
    this._connection.buzzIn()
    this.canAnswer = false
  }

}
