import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { ConnectionService } from "app/connection.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private url = 'https://jeopardysockets.herokuapp.com';  
  private socket;
  private message;

      constructor (private _connection: ConnectionService) {
        this.socket = io.connect()
        this._connection.getSockets().subscribe(message => {
        this.message = message
        console.log("we did it!",this.message)
        
    })
      }

  buttonPush() {
    this.socket.emit('button_press', {data: "this is some data"})
  }

  
}
