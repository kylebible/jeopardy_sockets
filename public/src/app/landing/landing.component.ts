import { Component, OnInit } from '@angular/core';
import { ConnectionService } from "app/connection.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _connection: ConnectionService) { }

  ngOnInit() {
  }

  getGame() {
    console.log("get game")
    this._connection.startNewGame()
  }

  joinGame() {
    console.log('join game')
    this._connection.joinGame()
  }

}
