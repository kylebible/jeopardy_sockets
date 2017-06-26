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
  private socket;
  private game;
  private message;

      constructor (private _connection: ConnectionService) {
        this.socket = io.connect()
        this._connection.getSockets().subscribe(message => {
        this.message = message
        console.log("we did it!",this.message)
        
    })
      }

    

  
}
