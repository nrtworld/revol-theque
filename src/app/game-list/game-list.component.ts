import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../models/Game/game.model';
import { Subscription } from 'rxjs';
import { GamesService } from '../services/Game/games.service';
import { Router } from '@angular/router';
import { FiltreGame } from '../models/Game/filtreGame.model';
import { FilterGamesService } from '../services/Game/filterGames.service';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnDestroy {
  games: Game[];
  gamesSubscription: Subscription;
  filterGames: FiltreGame;
  filterGamesSubscription : Subscription;

  constructor(private gameService: GamesService, private router: Router,private filterGamesService : FilterGamesService) { }
  
  ngOnInit() {
    console.log('ngOnInit gameListComponent');
    this.filterGamesService.getFilter();
    this.filterGamesSubscription = this.filterGamesService.filterGamesSubject.subscribe(
      (filter: FiltreGame)=>{
        this.filterGames = filter;
        console.log('filter1 : ' + this.filterGames);
        this.games = this.gameService.searchGame(this.filterGames);
      }, (error)=>{
        console.log(error);
      }
    );
    

    
    /*console.log('filter : ' + this.filterGames);
    this.gamesSubscription = this.gameService.gamesSubject.subscribe(
      (games: Game[])=>{
        this.games = games; 
      }
    );*/
    this.gameService.emitGames();
  

    console.log('games : ' + this.games);
  }

  
  

  onNewGame(){
    this.router.navigate(['/games','new']);
  }

  onDeleteGame(game: Game){
    if(confirm('Voulez-vous réellement supprimer '+ game.title.toLocaleUpperCase() +' de votre ludothèque ?')){
    this.gameService.removeGame(game);
    }else{
      return null;
    }
  }

  onViewGame(game: Game){
    const id = this.gameService.games.indexOf(game);
    this.router.navigate(['/games','view', id]);
  }

  onEditGame(game: Game){
    const id = this.gameService.games.indexOf(game);
    this.router.navigate(['/games','edit',id]);
  }

  getClassCard(game: Game){
    if(game.isExtention){
      return "card oneGameContainerExtended";
    }else{
      return "card oneGameContainer";
    }
  }

  ngOnDestroy(){
this.filterGamesSubscription.unsubscribe();
  }


}


