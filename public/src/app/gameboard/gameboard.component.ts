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
  currentlyBuzzedIn = "Kyle"

  constructor(private _connection:ConnectionService, private  _cookie:CookieService) {
    _connection.observedGame.subscribe(
      (updatedGame) => this.game = updatedGame,
      (err) => console.log(err)
    )

    _connection.observedQuestionView.subscribe(
      (currentQuestion)=> {console.log("changing question"); 
        if(currentQuestion) {this.show(currentQuestion)}},
      (err) => console.log(err)
    )

    // console.log(parsed_game)
    // this.game = parsed_game
    // console.log(this.game)
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
