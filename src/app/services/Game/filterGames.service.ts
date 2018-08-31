import { Injectable } from "@angular/core";
import { FiltreGame } from "../../models/Game/filtreGame.model";
import * as firebase from 'firebase';
import { Subject } from "rxjs";

@Injectable()
export class FilterGamesService {

    filterGames: FiltreGame;
    filterGamesSubject = new Subject<FiltreGame>();


    constructor() {
        this.getFilter();
       }

       emitFilter(){
        this.filterGamesSubject.next(this.filterGames);
      }

      getFilter() {
        return new Promise(
          (resolve, reject) => {
            firebase.database().ref('/filterGame/' + firebase.auth().currentUser.uid).once('value').then(
              (data: firebase.database.DataSnapshot) => {
               this.filterGames = data.val()?data.val():null;
                this.emitFilter();
              }, (error) => {
                reject(error);
              }
            );
          }
        );
      }

      addNewFilter(filter: FiltreGame){
        this.filterGames = filter;
        this.saveFilterGames();
        this.emitFilter();
      }


      saveFilterGames(){
        firebase.database().ref('/filterGame/' + firebase.auth().currentUser.uid).set(this.filterGames);
      }

      removeFilterGames(){
          this.filterGames = null;
          this.saveFilterGames();
          this.emitFilter();
      }

}