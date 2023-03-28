import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {GameComponent} from "./game/game.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {IsRegisteredGuard} from "./register/is-registered.guard";

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'game', component: GameComponent, canActivate: [IsRegisteredGuard], },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
