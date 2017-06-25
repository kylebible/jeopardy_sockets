import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { ConnectionService } from "app/connection.service";
import { GameboardComponent } from './gameboard/gameboard.component';
import { BuzzerComponent } from './buzzer/buzzer.component';
import { LandingComponent } from './landing/landing.component';
import { CapitalizePipe } from './capitalize.pipe';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    BuzzerComponent,
    LandingComponent,
    CapitalizePipe,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ConnectionService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
