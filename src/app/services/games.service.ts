import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import * as firebase from 'firebase';
import { Subject } from '../../../node_modules/rxjs';
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

  removeBook(game: Game) {
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
}
