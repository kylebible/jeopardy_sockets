import { Component, OnInit } from '@angular/core';
import { ConnectionService } from "app/connection.service";

@Component({
  selector: 'app-trebekview',
  templateUrl: './trebekview.component.html',
  styleUrls: ['./trebekview.component.css']
})
export class TrebekviewComponent implements OnInit {
  players = {}
  numberPlayers = 0
  ready = false
  playerTurn = ""
  buzzedInPlayer = ""
  answer= ""
  //this.numberPlayers = Object.keys(this.players).length

  //TO DO: make ready? not appear when not enough players

  constructor(private _connection:ConnectionService) {
    this._connection.observedPlayers.subscribe(
      (currentPlayers)=> {
        this.players = currentPlayers;
        if(this.players) {
          this.numberPlayers = Object.keys(this.players).length
        }
      },
      (err) => console.log(err)
    )
    this._connection.observedGameReady.subscribe(
      (readyStatus) => this.ready = readyStatus,
      (err) => console.log(err)
    )
    this._connection.observedPlayersTurn.subscribe(
      (currentPlayer) => this.playerTurn = currentPlayer,
      (err) => console.log(err)
    )
    this._connection.observedBuzzedInPlayer.subscribe(
      (currentlybuzzedin) => {console.log('buzzedinplayer',this.buzzedInPlayer); if (currentlybuzzedin) {this.buzzedInPlayer = currentlybuzzedin} else {this.buzzedInPlayer = ""} console.log('currentlybuzzedin',this.buzzedInPlayer)},
      (err) => console.log(err)
    )

    this._connection.observedQuestionView.subscribe(
      (currentQuestion) => {if (currentQuestion){this.answer = currentQuestion.answer} else {this.answer = ""}}
    )
   }

  ngOnInit() {
  }

  trebekready() {
    console.log('trebekready')
    this._connection.trebekready()
  }

  resetServer() {
    this._connection.resetServer()
  }

  correct() {
    console.log('correct clicked')
    this._connection.playerCorrect()
  }

  incorrect() {
    this._connection.playerIncorrect()
  }
}
