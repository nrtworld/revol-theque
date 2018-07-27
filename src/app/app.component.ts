import { Component, Pipe, PipeTransform, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { FilterGamesService } from './services/filterGames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RevolThèque';


  constructor(){
    const config = {
      apiKey: "AIzaSyCiNWPAYyxeJ2lN4eIY1QmltXPqaYrJy5I",
      authDomain: "revol-theque.firebaseapp.com",
      databaseURL: "https://revol-theque.firebaseio.com",
      projectId: "revol-theque",
      storageBucket: "revol-theque.appspot.com",
      messagingSenderId: "661949876520"
    };
    //firebase.initializeApp(config).auth().signOut();
    firebase.initializeApp(config);

    
  }

}
