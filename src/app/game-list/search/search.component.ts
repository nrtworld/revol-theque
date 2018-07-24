import { Component, OnInit, Input } from '@angular/core';
import { GameListComponent } from '../game-list.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesCategories } from '../../models/gamesCategorie.enum';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.model';
import { isNull } from 'util';
import { FiltreGame } from '../../models/filtreGame.model';
import { FilterGamesService } from '../../services/filterGames.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  games: Game[];
  filterOn: boolean = false;


  gameForm: FormGroup;
  categories: string[] = this.enumToArray(GamesCategories).sort();
  categories2: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private gameService: GamesService,
    private gameListComponent: GameListComponent,
    private filterGamesService: FilterGamesService) { }

  ngOnInit() {
    this.initForm();
    const filter = this.filterGamesService.getFilter();
    this.filterOn = this.filterGamesService.filterGames ? true : false;
    if (this.filterOn) {
      const filter = this.filterGamesService.filterGames;
      this.categories2 = filter.categories ? filter.categories : null;
      this.gameForm.get('title').setValue(filter.title);
      this.gameForm.get('nbJoueurs').setValue(filter.nbJoueurs);
      this.gameForm.get('tpsJeuxMin').setValue(filter.tpsJeuxMin);
      this.gameForm.get('tpsJeuxMax').setValue(filter.tpsJeuxMax);

    }
  }

  initForm() {
    this.gameForm = this.formBuilder.group({
      title: "",
      categories2: [''],
      nbJoueurs: ['', Validators.pattern('[0-9]+')],
      tpsJeuxMin: ['', Validators.pattern('[0-9]+')],
      tpsJeuxMax: ['', Validators.pattern('[0-9]+')]
    });
  }

  onSearchGame() {
    console.log('Début methode de recherche');
    const title: string = this.gameForm.get('title').value;
    const nbJoueurs: number = this.gameForm.get('nbJoueurs').value;
    const tpsJeuxMin: number = this.gameForm.get('tpsJeuxMin').value;
    const tpsJeuxMax: number = this.gameForm.get('tpsJeuxMax').value;

    if (!title && !nbJoueurs && !tpsJeuxMin && !tpsJeuxMax && !this.categories2) {
      return null;
    }
    var filter: FiltreGame = new FiltreGame();
    filter.title = title;
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

    return this.categories2.includes(cat, 0);
  }

}
