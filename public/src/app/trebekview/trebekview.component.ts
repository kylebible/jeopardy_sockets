import { Component, OnInit } from '@angular/core';
import { ConnectionService } from "app/connection.service";

@Component({
  selector: 'app-trebekview',
  templateUrl: './trebekview.component.html',
  styleUrls: ['./trebekview.component.css']
})
export class TrebekviewComponent implements OnInit {
  players = {}
  game = []
  questions = []
  numberPlayers = 0
  ready = false
  playerTurn = ""
  buzzedInPlayer = ""
  answer= ""
  buzzerMode = false
  DJMode = false
  DJQuestion;
  //this.numberPlayers = Object.keys(this.players).length

  //TO DO: make ready? not appear when not enough players

  constructor(private _connection:ConnectionService) {

    _connection.observedGame.subscribe(
      (updatedGame) => {this.game = updatedGame},
      (err) => console.log(err)
    )

    this._connection.observedPlayers.subscribe(
      (currentPlayers)=> {
        this.players = currentPlayers;
        if(this.players) {
          this.numberPlayers = Object.keys(this.players).length
        }
      },
      (err) => console.log(err)
    )
    this._connection.observedGameReady.subscribe(
      (readyStatus) => this.ready = readyStatus,
      (err) => console.log(err)
    )
    this._connection.observedPlayersTurn.subscribe(
      (currentPlayer) => this.playerTurn = currentPlayer,
      (err) => console.log(err)
    )
    this._connection.observedBuzzedInPlayer.subscribe(
      (currentlybuzzedin) => {console.log('buzzedinplayer',this.buzzedInPlayer); if (currentlybuzzedin) {this.buzzedInPlayer = currentlybuzzedin} else {this.buzzedInPlayer = ""} console.log('currentlybuzzedin',this.buzzedInPlayer)},
      (err) => console.log(err)
    )

    this._connection.observedQuestionView.subscribe(
      (currentQuestion) => {if (currentQuestion){this.answer = currentQuestion.answer} else {this.answer = ""}}
    )

    this._connection.observedBuzzInStatus.subscribe(
      (currentStatus)=> {if(currentStatus != null) {this.buzzerMode = currentStatus; console.log("buzzermode in trebek view set to",currentStatus)}},
      (err)=>console.log(err)
    )

    _connection.observedDJStatus.subscribe(
      (status) => {if (status != null) {this.DJMode = status}},
      (err)=>console.log(err)
    )
    
    _connection.observedDJWager.subscribe(
      (wager)=> {if (wager != null) {this.DJWagerReceived(wager)}},
      (err)=> console.log(err)
    )

   }

  ngOnInit() {
  }

  choose(category) {
     this.questions = category.questions
  }

  valueChosen(question,value) {
    console.log(question)
    if(question["doubleJeopardy"]) {
      console.log("doubleJeopardy found")
      this._connection.doubleJeopardy(question)
      this.questions = []
      this.DJQuestion = question
    }
    else {
      question["value"] = value
      this._connection.displayQuestion(question)
      this._connection.observedQuestionView.next(question)
      this.questions = []
      this._connection.observedBuzzInStatus.next(true)
    }
   
  }

  DJWagerReceived(wager) {
    this.DJQuestion["value"] = wager
    this._connection.displayQuestion(this.DJQuestion);
    this._connection.observedQuestionView.next(this.DJQuestion)
  }

  trebekready() {
    console.log('trebekready')
    this._connection.trebekready()
  }

  resetServer() {
    this._connection.resetServer()
  }

  correct() {
    console.log('correct clicked')
    this._connection.playerCorrect()
    this.buzzerMode = false
  }

  incorrect() {
    this._connection.playerIncorrect()
  }

  giveUp() {
    this._connection.giveUp()
    this.buzzerMode = false
  }
  goback() {
    this.questions = []
  }
}
