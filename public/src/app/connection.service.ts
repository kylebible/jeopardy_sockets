import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs'
import * as io from 'socket.io-client';
import { Http } from "@angular/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()
export class ConnectionService {
  //private url = 'http://localhost:8000'; 
  private url = 'https://jeopardysockets.herokuapp.com';
  observedGame = new BehaviorSubject(null)

  //connect to socket on server
  socket = io(this.url) 

  constructor(private _http: Http, private _cookie:CookieService) { }

  updategame(data) {
    this.observedGame.next(data)
  }

  getSockets() {
    //make new observable for changes in sockets
    let observable = new Observable(observer => {
      

      //socket functions go here
      this.socket.on('server_response', function (data){
      observer.next(data)
      });
      
      return () => {
        this.socket.disconnect();
      }

    })
    return observable;
  }

  joinGame() {
    this.socket.emit('player_joined', {userName: "kbible"})
  }

  categories(game) {
  var titleArr =[]
  var arr=[]
  var dict = {}
  for (var i of game) {
    if (!dict[i.category.title]) {
      titleArr.push(i.category.title)
      dict[i.category.title] = []
      dict[i.category.title].push(i)
    }
    else {
      dict[i.category.title].push(i)
    }
  }
  for (var j of titleArr) {
    arr.push({name: j,questions:dict[j]})
  }
  console.log(arr)
  return arr
}


//gets a random game, takes the airdate, and grabs all categories and questions from that airdate
  startNewGame() {
    this._http.get('http://jservice.io/api/random')
    .map((data)=>{var date = data.json()[0].airdate;
      this._http.get('http://jservice.io/api/clues?min_date='+date+'&max_date='+date)
    .map((data)=> {localStorage.setItem('game',JSON.stringify(this.categories(data.json())))})
    .toPromise()
    })
    .toPromise()
  }

}
