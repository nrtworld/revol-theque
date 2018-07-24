import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import * as firebase from 'firebase';
import { Subject } from '../../../node_modules/rxjs';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { UUID } from 'angular2-uuid';
import { FiltreGame } from '../models/filtreGame.model';
@Injectable()
export class GamesService {

  games: Game[] = [];
  gamesSubject = new Subject<Game[]>();


  constructor() {
    this.getGames();
   }

  emitGames(){
    this.gamesSubject.next(this.games.slice());
    console.log('service 1 : ' +this.games);
  }

  saveGames(){
    this.games.sort(this.stringSort);
    firebase.database().ref('/games').set(this.games);
  }

  createNewGame(newGame: Game) {
    this.games.push(newGame);
    this.saveGames();
    this.emitGames();
  }

  removeGame(game: Game) {
    if(game.photo){
      this.deletePhotoInStorage(game.photo);
    }
    const gameIndexToRemove = this.getGameIndex(game);
    this.games.splice(gameIndexToRemove, 1);
    this.saveGames();
    this.emitGames();
  }

  public deletePhotoInStorage(url: string) {
    const storageRef = firebase.storage().refFromURL(url);
    storageRef.delete().then(() => {
      console.log('photo supprimée');
    }, (error) => {
      console.log('Erreur de suppression : ' + error);
    });
  }

  editGame(oldGame: Game, newGame: Game, index: number) {
    if (oldGame.photo) {
      const oldUrl = oldGame.photo;
      if (newGame.photo) {
        const newUrl = newGame.photo;
        if (oldUrl !== newUrl) {
          this.deletePhotoInStorage(oldGame.photo);
        }
      } else {
        this.deletePhotoInStorage(oldGame.photo);
      }
    }
    this.games.splice(index, 1, newGame);
    this.saveGames();
    this.emitGames();
  }

  private getGameIndex(game: Game) {
    return this.games.indexOf(game);
  }

  getGames() {
    firebase.database().ref('/games')
      .on('value', (data: firebase.database.DataSnapshot) => {
          this.games = data.val() ?data.val() : [];
          //this.games.sort(this.stringSort);
          this.emitGames();
        }
      );
  }

  getSingleGames(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/games/' + id).once('value').then(
          (data: firebase.database.DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  uploadFile(file: File){
    return new Promise(
      (resolve,reject)=>{
        const almostUniqueFileName = UUID.UUID();
        const upload = firebase.storage().ref().child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          ()=>{
            console.log('Chargement...');
          },
          (error)=>{
            console.log('Erreur de chargement ! : ' + error);
            reject;
          },
          ()=>{
            firebase.storage().ref('images/' + almostUniqueFileName + file.name).getDownloadURL().then(
              (url2: Object)=>{
                console.log('downLoadUrl : ' + url2.valueOf() );
                resolve(url2.valueOf());
              }, (error) => {
                reject(error);
              }
            );
          }
        );
      }
    );
  }

  private stringSort(a: Game, b: Game) {
    const titreA = a.title.toLowerCase();
    const titreB = b.title.toLowerCase();
    var i: number = 0;
    while ((i < a.title.length) && (i < titreB.length)) {
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

    searchGame(filter : FiltreGame){
      console.log('Début methode de searchGame');
      var gamesResult: Game[] = [];
if(filter){
      for(let game of this.games){
        var titleIsOK: boolean = true;
        var nbJoueursIsOK: boolean = true;
        var tpsJeuxIsOK: boolean = true;
        var categoriesIsOK: boolean = true;

        const title: string = filter.title;
        const nbJoueurs = filter.nbJoueurs?new Number(filter.nbJoueurs): null;
        const tpsJeuxMin = filter.tpsJeuxMin? new Number(filter.tpsJeuxMin): null;
        const tpsJeuxMax = filter.tpsJeuxMax?new Number(filter.tpsJeuxMax): null;
        const categories: string[] = filter.categories;

        const game_nbJoueursMin = new Number(game.nbJoueursMin);
        const game_nbJoueursMax = new Number(game.nbJoueursMax);
        const game_tpsJeux = new Number(game.tpsJeux);


        if(title){
          if(game.title.toLowerCase().includes(title.toLowerCase())){
            titleIsOK = true;
          }else{ 
            titleIsOK = false;
          }
        }
        if(nbJoueurs && titleIsOK){
          if((nbJoueurs >= game_nbJoueursMin) && (nbJoueurs <= game_nbJoueursMax)){
            nbJoueursIsOK = true;
          }else{
            nbJoueursIsOK = false;
          }
        }

        if(tpsJeuxMin && tpsJeuxMax && nbJoueursIsOK && titleIsOK){
          if(game_tpsJeux >= tpsJeuxMin && game_tpsJeux <=tpsJeuxMax){
            tpsJeuxIsOK = true;
          }else{
            tpsJeuxIsOK = false;
          }
        }

        if(categories &&tpsJeuxIsOK && nbJoueursIsOK && titleIsOK){
          for(let cat of categories){
            if(!game.categories.includes(cat)){
              categoriesIsOK = false;
              break;
            }
          }
        }

        if(titleIsOK && nbJoueursIsOK && tpsJeuxIsOK && categoriesIsOK){
          gamesResult.push(game);
        }
      }
    }else{
      gamesResult = this.games;
    }

      console.log(gamesResult.length);
      return gamesResult;

    }
  
}
