import { Injectable } from "@angular/core";
import { Subject } from '../../../../node_modules/rxjs';
import * as firebase from 'firebase';

@Injectable()
export class CategoriesGamesService {

  categoriesGames: string[] = [];
  categoriesGamesSubject = new Subject<string[]>();

  constructor() {
    this.getCategoriesGames();
    console.log(this.categoriesGames);
   }

  emitCategoriesGames(){
    this.categoriesGamesSubject.next(this.categoriesGames.slice());
  }

  saveCategoriesGames(){
    this.categoriesGames.sort(this.stringSort);
    firebase.database().ref('/categoriesGames').set(this.categoriesGames);
  }

  createNewCategorie(newCategorie: string) {
    
      if(!this.categoriesGames.includes(newCategorie)){
    this.categoriesGames.push(newCategorie);
    this.saveCategoriesGames();
    this.emitCategoriesGames();
      }
  }


  private getCategorieGameIndex(categorie: string) {
    return this.categoriesGames.indexOf(categorie);
  }

  getCategoriesGames() {
    firebase.database().ref('/categoriesGames')
      .on('value', (data: firebase.database.DataSnapshot) => {
          this.categoriesGames = data.val() ?data.val() : [];
          //this.games.sort(this.stringSort);
          this.emitCategoriesGames();
        }
    );
  }

  private stringSort(catA: string, catB: string) {
    const titreA = catA.toLowerCase();
    const titreB = catB.toLowerCase();
    var i: number = 0;
    while ((i < titreA.length) && (i < titreB.length)) {
      if (titreA[i] < titreB[i]) {
        return -1;
      }
      else if (titreA[i] > titreB[i]) {
        return 1;
      }
      ++i;
    }
    if (titreA === titreB) {
      return 0;
    } else if (titreA === '') {
      return -1;
    }
    return 1;
  }
  
}