import { Component, OnInit } from '@angular/core';
import { ConnectionService } from "app/connection.service";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  text_visible = false
  status = ""
  question: object;
  text = ""
  game = []
  arr = [0,1,2,3,4]
  buzzedInPlayer = ""
  players;
  playersArr = []
  audio = new Audio();

  constructor(private _connection:ConnectionService, private  _cookie:CookieService) {
    _connection.observedGame.subscribe(
      (updatedGame) => this.game = updatedGame,
      (err) => console.log(err)
    )

    _connection.observedQuestionView.subscribe(
      (currentQuestion)=> {console.log("changing question"); 
        if(currentQuestion) {this.show(currentQuestion)} else if (this.text_visible){this.question_clicked()}},
      (err) => console.log(err)
    )

     _connection.observedBuzzedInPlayer.subscribe(
      (currentlyBuzzedIn) => {console.log('currentlybuzzedin',currentlyBuzzedIn); if(currentlyBuzzedIn) {this.buzzedInPlayer = currentlyBuzzedIn} else {this.buzzedInPlayer = ""} console.log('currentlybuzzedin',currentlyBuzzedIn)}
    )

    _connection.observedPlayers.subscribe(
      (currentPlayers) => {if(currentPlayers) {this.players = currentPlayers; this.playersArr=Object.keys(this.players); console.log(this.players)}},
      (err) => console.log(err)
    )

    _connection.observedDJStatus.subscribe(
      (status) => {if(status) {this.text = "DOUBLE JEOPARDY!!"; this.text_visible=true; this.playDoubleJeopardyAudio()}}
    )

    _connection.observedGiveUpSound.subscribe(
      (status) => {if(status) {this.playGiveUp()}}
    )

   }

   show(question) {
     for (var category of this.game) {
       if (category["name"] == question.category.title) {
         for (var q of category["questions"]) {
            if(q["id"] == question.id) {
              this.question = q
              q["asked"]=true
              break;
            }
         }
         break;
       }
     }
     this.text = this.question["question"]
     this.text_visible = true
     this.status = "question"
     this._connection.updategame(this.game)
     this._connection.updateSocketGame(this.game)
   }

   removeAnswer() {
     this.status = ""
        this.text_visible = false
        console.log("text visible",this.text_visible)
   }

   question_clicked() {
     this.text = this.question["answer"]
     console.log("text visible",this.text_visible)
     console.log("status",this.status)
     if (this.status == "question") {
       this.status = "answer"
     }
     var self = this
    setTimeout(function() {
        console.log(self)
        self.removeAnswer()
        self._connection.resetEligiblePlayers()
     },2000)
   }

   playDoubleJeopardyAudio() {
    this.audio.src = "./../assets/jdaily2x.wav";
    this.audio.load();
    this.audio.play();
   }

   playGiveUp() {
    this.audio.src = "./../assets/Times up.mp3";
    this.audio.load();
    this.audio.play();
   }


  ngOnInit() {
  }

}
