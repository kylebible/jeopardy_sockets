import { Component, OnInit } from '@angular/core';
import { ConnectionService } from "app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  game = []
  players;
  numberPlayers = 0
  trebekPresence = false

  constructor(private _connection: ConnectionService, private _router:Router) {
    _connection.observedGame.subscribe(
      (currentGame)=> this.game = currentGame,
      (err)=>console.log(err)
    )
    _connection.observedPlayers.subscribe(
      (currentPlayers) => {
        this.players = currentPlayers;
        if(this.players) {
          this.numberPlayers = Object.keys(this.players).length
        }
      },
      (err) => console.log(err)
    )
    _connection.observedTrebekPresence.subscribe(
      (presence) => {if (presence) {this.trebekPresence = true}},
      (err)=>console.log(err)
    )
  }
  
  

  ngOnInit() {
  }

  getGame() {
    console.log("get game")
    this._connection.startNewGame()
    this._router.navigate(['/gameboard'])
  }

  trebekPresent() {
    this._connection.trebekPresent()
  }

}
