import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GameListComponent } from '../game-list.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesCategories } from '../../models/gamesCategorie.enum';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.model';
import { isNull } from 'util';
import { FiltreGame } from '../../models/filtreGame.model';
import { FilterGamesService } from '../../services/filterGames.service';
import { Subscription } from 'rxjs';
import { CategoriesGamesService } from '../../services/categoriesGames.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  games: Game[];
  filterOn: boolean = false;
  categoriesSubscription: Subscription;
  filterGamesSubscription: Subscription;
  filterGames: FiltreGame;


  gameForm: FormGroup;
  categories: string[] = [];
  categories2: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private gameService: GamesService,
    private gameListComponent: GameListComponent,
    private filterGamesService: FilterGamesService,
    private categoriesgamesService: CategoriesGamesService) { }

  ngOnInit() {
    this.categoriesSubscription = this.categoriesgamesService.categoriesGamesSubject.subscribe(
      (categories: string[]) => {
      this.categories = categories;
      });
      this.filterGamesSubscription = this.filterGamesService.filterGamesSubject.subscribe(
        (filterGames: FiltreGame) => {
          this.filterGames = filterGames;
          this.filterOn = this.filterGames ? true : false;
          if (this.filterOn) {
            this.categories2 = filterGames.categories ? filterGames.categories : null;
            this.gameForm.get('title').setValue(filterGames.title);
            this.gameForm.get('titleExtention').setValue(filterGames.titleExtention);
            this.gameForm.get('nbJoueurs').setValue(filterGames.nbJoueurs);
            this.gameForm.get('tpsJeuxMin').setValue(filterGames.tpsJeuxMin);
            this.gameForm.get('tpsJeuxMax').setValue(filterGames.tpsJeuxMax);
            
          }
        }, (error)=>{
          console.log(error);
        }
      );
      this.initForm();
    console.log('this.categories oninit = ' + this.categories);
    if(this.categories.length==0){
      this.categories = this.categoriesgamesService.categoriesGames;
    }
  }

  initForm() {
    this.gameForm = this.formBuilder.group({
      title: "",
      titleExtention: "",
      categories2: [''],
      nbJoueurs: ['', Validators.pattern('[0-9]+')],
      tpsJeuxMin: ['', Validators.pattern('[0-9]+')],
      tpsJeuxMax: ['', Validators.pattern('[0-9]+')]
    });
  }

  onSearchGame() {
    console.log('Début methode de recherche');
    const title: string = this.gameForm.get('title').value;
    const titleExtention: string = this.gameForm.get('titleExtention').value;
    const nbJoueurs: number = this.gameForm.get('nbJoueurs').value;
    const tpsJeuxMin: number = this.gameForm.get('tpsJeuxMin').value;
    const tpsJeuxMax: number = this.gameForm.get('tpsJeuxMax').value;

    if (!title && !titleExtention && !nbJoueurs && !tpsJeuxMin && !tpsJeuxMax && !this.categories2) {
      return null;
    }
    var filter: FiltreGame = new FiltreGame();
    filter.title = title;
    filter.titleExtention = titleExtention;
    filter.nbJoueurs = nbJoueurs;
    filter.tpsJeuxMin = tpsJeuxMin;
    filter.tpsJeuxMax = tpsJeuxMax;
    filter.categories = this.categories2;


    this.games = this.gameService.searchGame(filter);
    this.gameListComponent.games = this.games;
    this.filterGamesService.addNewFilter(filter);

  }

  enumToArray(data: Object) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }

  onReinitSearch() {
    this.gameForm.reset();
    this.categories2 = [];
    this.filterGamesService.removeFilterGames();

  }

  onFilterWindow() {
    this.filterOn = !this.filterOn;
  }

  selectCategorie(cat: string) {
    if (this.isCatSelected(cat)) {
      this.deSelectOneCategorie(cat);
    } else {
      this.selectOneCategorie(cat);
    }
  }

  selectOneCategorie(cat: string) {
    this.categories2.push(cat);
    console.log(this.categories2.includes(cat, 0));
  }

  deSelectOneCategorie(cat: string) {
    const index: number = this.categories2.indexOf(cat);
    this.categories2.splice(index, 1);
  }

  isCatSelected(cat) {

    return this.categories2?this.categories2.includes(cat, 0):false;
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
    this.filterGamesSubscription.unsubscribe();
  }

}
