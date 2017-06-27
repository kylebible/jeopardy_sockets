import { Component, OnInit } from '@angular/core';
import { ConnectionService } from "app/connection.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username = ""

  constructor(private _connection:ConnectionService,private _router:Router) { }

  ngOnInit() {
  }

  joinGame() {
    console.log('join game')
    this._connection.joinGame(this.username)
    this._connection.getGame()
    this._router.navigate(['/phoneboard'])
  }

}
