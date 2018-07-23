import { Component, OnInit, Input } from '@angular/core';
import { GameListComponent } from '../game-list.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesCategories } from '../../models/gamesCategorie.enum';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.model';
import { isNull } from 'util';
import { FiltreGame } from '../../models/filtreGame.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

 games: Game[];
 filterOn: boolean = false;


  gameForm: FormGroup;
  categories : string[]= this.enumToArray(GamesCategories).sort();
  categories2: string[] = [];

  constructor(private formBuilder: FormBuilder, 
    private gameService: GamesService,
    private gameListComponent: GameListComponent) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.gameForm = this.formBuilder.group({
      title: "",
      categories2: [''],
      nbJoueurs: ['',Validators.pattern('[0-9]+')],
      tpsJeuxMin: ['',Validators.pattern('[0-9]+')],
      tpsJeuxMax: ['',Validators.pattern('[0-9]+')]
    });
  }

  onSearchGame(){
    console.log('Début methode de recherche');
    const title: string =  this.gameForm.get('title').value;
    const nbJoueurs: number =  this.gameForm.get('nbJoueurs').value;
    const tpsJeuxMin: number=  this.gameForm.get('tpsJeuxMin').value;
    const tpsJeuxMax: number = this.gameForm.get('tpsJeuxMax').value;

    if(!title && !nbJoueurs && !tpsJeuxMin && !tpsJeuxMax){
      return null;
    }
     var filter: FiltreGame = new FiltreGame();
    filter.title = title;
    filter.nbJoueurs = nbJoueurs;
    filter.tpsJeuxMin = tpsJeuxMin;
    filter.tpsJeuxMax = tpsJeuxMax;


    this.games = this.gameService.searchGame(filter);

    this.gameListComponent.games = this.games;

  }

  enumToArray(data: Object){
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
}

onReinitSearch(){
  this.gameForm.reset();
  this.gameListComponent.games = this.gameService.games;

}

onFilterWindow(){
  this.filterOn = !this.filterOn;
}
}
