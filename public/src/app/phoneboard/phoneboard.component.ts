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

  constructor(private _router:Router, private _connection:ConnectionService) {
    _connection.observedGame.subscribe(
      (updatedGame) => {this.game = updatedGame},
      (err) => console.log(err)
    )
    _connection.observedBuzzInStatus.subscribe(
      (currentBuzzerMode) => {this.buzzermode = currentBuzzerMode; console.log("buzzer mode in phone vies",this.buzzermode)},
      (err) => console.log(err)
    )

    _connection.observedGameReady.subscribe(
      (currentReadiness) => {this.ready = currentReadiness},
      (err)=> console.log(err)
    )

    _connection.observedTurnStatus.subscribe(
      (currentTurnStatus) => {this.myTurn = currentTurnStatus},
      (err)=>console.log(err)
    )

    _connection.observedBuzzedInPlayer.subscribe(
      (currentlyBuzzedIn) => {if(currentlyBuzzedIn) {this.buzzedInPlayer = currentlyBuzzedIn}}
    )
   }

  ngOnInit() {
  }

  choose(category) {
     this.questions = category.questions
  }

  valueChosen(question) {
    this._connection.displayQuestion(question)
    this.questions = []
    this._connection.observedBuzzInStatus.next(true)
  }

  buzzin() {
    this._connection.buzzIn()
  }

}
