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
import { UsernameComponent } from './landing/username/username.component';
import { PhoneboardComponent } from './phoneboard/phoneboard.component';
import { ValuechoicesComponent } from './valuechoices/valuechoices.component';
import { TrebekviewComponent } from './trebekview/trebekview.component';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    BuzzerComponent,
    LandingComponent,
    CapitalizePipe,
    QuestionComponent,
    UsernameComponent,
    PhoneboardComponent,
    ValuechoicesComponent,
    TrebekviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    CustomFormsModule
  ],
  providers: [ConnectionService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
