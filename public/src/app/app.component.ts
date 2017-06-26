import { Component, OnDestroy, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { ConnectionService } from "app/connection.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private socket;
  private game;
  private message;

      constructor (private _connection: ConnectionService) {
        // console.log('at app')
        // this._connection.getSockets().subscribe(message => {
        // this.message = message
        // console.log("we did it!",this.message)
        
    // })
      }

    ngOnDestroy() {
      // this.socket.disconnect()
    }

    ngOnInit() {

    }

    

  
}
