import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {

  game: Game;

  constructor(private route: ActivatedRoute, 
    private gameService: GamesService, 
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.game = new Game();
    const id = this.route.snapshot.params['id'];
    this.gameService.getSingleGames(+id).then(
      (game: Game)=>{
        this.game = game;
      }
    );
  }

  onBack(){
    this.location.back();
  }
  
  onEditGame(){
    const id = this.route.snapshot.params['id'];
    this.router.navigate(['/games','edit',id]);
  }

}

