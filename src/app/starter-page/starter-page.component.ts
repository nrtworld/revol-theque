import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { GamesService } from '../services/Game/games.service';

@Component({
  selector: 'app-starter-page',
  templateUrl: './starter-page.component.html',
  styleUrls: ['./starter-page.component.scss']
})
export class StarterPageComponent implements OnInit {

  constructor(private gameService: GamesService) { }

  ngOnInit() {
    this.gameService.getGames();
  }

}
