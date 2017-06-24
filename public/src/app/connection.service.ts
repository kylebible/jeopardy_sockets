import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ConnectionService {
  private socket;
  private url = 'https://jeopardysockets.herokuapp.com';

  constructor() { }

  getSockets() {
    let observable = new Observable(observer => {
      this.socket = io(this.url)
      this.socket.on('server_response', function (data){
      observer.next(data)
  });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }

}
