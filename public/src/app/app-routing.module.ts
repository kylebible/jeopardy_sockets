import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { GameboardComponent } from "app/gameboard/gameboard.component";
import { LandingComponent } from "app/landing/landing.component";
import { UsernameComponent } from "app/landing/username/username.component";
import { PhoneboardComponent } from "app/phoneboard/phoneboard.component";
import { TrebekviewComponent } from "app/trebekview/trebekview.component";

const routes: Routes = [
  {path: '', children: [], component: LandingComponent},
  {path: 'gameboard', component: GameboardComponent},
  {path: 'username', component: UsernameComponent},
  {path: 'phoneboard', component: PhoneboardComponent},
  {path: 'trebekview', component: TrebekviewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }