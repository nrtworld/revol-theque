import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../models/game.model';
import { Subscription } from 'rxjs';
import { GamesService } from '../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnDestroy {

  games: Game[];
  gamesSubscription: Subscription;

  constructor(private gameService: GamesService, private router: Router) { }
  
  ngOnInit() {
    //this.gameService.getGames();
    this.gamesSubscription = this.gameService.gamesSubject.subscribe(
      (games: Game[])=>{
        this.games = games;
      }
    );
    this.gameService.emitGames();
    console.log('2 : ' + this.games);
  }

  
  

  onNewGame(){
    this.router.navigate(['/games','new']);
  }

  onDeleteGame(game: Game){
    if(confirm('Voulez-vous réellement supprimer ce jeux de votre ludothèque ?')){
    this.gameService.removeGame(game);
    }else{
      return null;
    }
  }

  onViewGame(id: number){
    this.router.navigate(['/games','view', id]);
  }

  onEditGame(id: number){
    this.router.navigate(['/games','edit',id]);
  }

  ngOnDestroy(){
this.gamesSubscription.unsubscribe();
  }


}


