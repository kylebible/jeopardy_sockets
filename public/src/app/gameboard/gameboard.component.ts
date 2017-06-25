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

  constructor(private _connection:ConnectionService, private  _cookie:CookieService) {
    var parsed_game = JSON.parse(localStorage.getItem('game'))
    console.log(parsed_game)
    this.game = parsed_game
    console.log(this.game)
   }

   show(question) {
     this.question = question
     this.text = question.question
     this.text_visible = true
     question["asked"] = true
     this.status = "question"
   }

   question_clicked() {
     this.text = this.question["answer"]
     console.log("text visible",this.text_visible)
     console.log("status",this.status)
     if (this.status == "question") {
       this.status = "answer"
     }
    else if (this.status == "answer") {
       this.status = ""
       this.text_visible = false
       console.log(this.text_visible)
     }
   }

  ngOnInit() {
  }

}
