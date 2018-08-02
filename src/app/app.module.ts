import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { GameListComponent } from './game-list/game-list.component';
import { SingleGameComponent } from './game-list/single-game/single-game.component';
import { GameFormComponent, EnumToArrayPipe } from './game-list/game-form/game-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { GamesService } from './services/games.service';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { EditGameComponent } from './game-list/edit-game/edit-game.component';
import { SearchComponent } from './game-list/search/search.component';
import { CategoriesGamesService } from './services/categoriesGames.service';
import { FilterGamesService } from './services/filterGames.service';
import { DataCollectorComponent } from './data-collector/data-collector.component';
import { DataCollectorService } from './services/dataCollector.service';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'games', canActivate: [AuthGuardService], component: GameListComponent },
  { path: 'games/new', canActivate: [AuthGuardService], component: GameFormComponent },
  { path: 'games/view/:id', canActivate: [AuthGuardService], component: SingleGameComponent },
  { path: 'games/edit/:id', canActivate: [AuthGuardService], component: EditGameComponent },
  { path: 'dataCollector', canActivate: [AuthGuardService], component: DataCollectorComponent },
  {path: '', redirectTo: 'games', pathMatch: 'full'},
  { path: '**', redirectTo: 'games' }
];
//AIzaSyDkZ3pta-PPYzk7VBw-ul9BL75oiFwPUzs

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    GameListComponent,
    SingleGameComponent,
    GameFormComponent,
    HeaderComponent,
    EditGameComponent,
    EnumToArrayPipe,
    SearchComponent,
    DataCollectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService,AuthService,GamesService,CategoriesGamesService,FilterGamesService,DataCollectorService],
  bootstrap: [AppComponent]
})

export class AppModule { }
