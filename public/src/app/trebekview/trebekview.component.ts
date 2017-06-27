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
   }

  ngOnInit() {
  }

  trebekready() {
    console.log('trebekready')
    this._connection.trebekready()
  }

}
