import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { GameboardComponent } from "app/gameboard/gameboard.component";
import { LandingComponent } from "app/landing/landing.component";

const routes: Routes = [
  {path: '', children: [], component: LandingComponent},
  {path: 'gameboard', component: GameboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }