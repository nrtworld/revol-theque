import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { GameListComponent } from './game-list/game-list.component';
import { SingleGameComponent } from './game-list/single-game/single-game.component';
import { GameFormComponent } from './game-list/game-form/game-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { GamesService } from './services/games.service';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'games', component: GameListComponent },
  { path: 'games/new', component: GameFormComponent },
  { path: 'games/view/:id', component: SingleGameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    GameListComponent,
    SingleGameComponent,
    GameFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService,AuthService,GamesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
