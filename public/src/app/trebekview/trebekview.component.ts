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
  //this.numberPlayers = Object.keys(this.players).length

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
      (currentlybuzzedin) => {if (currentlybuzzedin) {this.buzzedInPlayer = currentlybuzzedin}},
      (err) => console.log(err)
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

}
