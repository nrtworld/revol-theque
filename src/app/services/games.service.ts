import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import * as firebase from 'firebase';
import { Subject } from '../../../node_modules/rxjs';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { UUID } from 'angular2-uuid';
@Injectable()
export class GamesService {

  games: Game[] = [];
  gamesSubject = new Subject<Game[]>();

  constructor() { }

  emitGames(){
    this.gamesSubject.next(this.games);
  }

  saveGames(){
    firebase.database().ref('/games').set(this.games);
  }

  createNewGame(newGame: Game) {
    this.games.push(newGame);
    this.saveGames();
    this.emitGames();
  }

  removeGame(game: Game) {
    if(game.photo){
      const storageRef = firebase.storage().refFromURL(game.photo);
      storageRef.delete().then(
        ()=>{
          console.log('photo supprimée');
        },
        (error)=>{
          console.log('Erreur de suppression : ' + error);
        }
      );
    }
    const gameIndexToRemove = this.games.findIndex(
      (gameEl) => {
        if(gameEl === game) {
          return true;
        }
      }
    );
    this.games.splice(gameIndexToRemove, 1);
    this.saveGames();
    this.emitGames();
  }

  getGames() {
    firebase.database().ref('/games')
      .on('value', (data: firebase.database.DataSnapshot) => {
          this.games = data.val() ? data.val() : [];
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
}
