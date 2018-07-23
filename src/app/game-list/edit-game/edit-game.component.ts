import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesCategories } from '../../models/gamesCategorie.enum';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  game: Game;
  photo:string;
  oldPhoto: string;

  gameForm: FormGroup;
  categories = this.enumToArray(GamesCategories);
  categories2: string[] = [];
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
     private gameService: GamesService, 
     private router: Router,
     private location: Location) { }

  ngOnInit() {
    this.game = new Game();
    const id = this.route.snapshot.params['id'];
    this.gameService.getSingleGames(+id).then(
      (game: Game)=>{
        this.game = game;
        this.photo = game.photo;
        this.oldPhoto = game.photo;
        this.categories2 = this.game.categories;
        for(let cat of this.categories2){
          this.categories.splice(this.categories.indexOf(cat),1);
        }
      }
    );
    this.initForm();
  }

  initForm(){
    this.gameForm = this.formBuilder.group({
      title: ['', Validators.minLength(1)],
      categories: [''],
      nbJoueursMin: ['',Validators.minLength(1)],
      nbJoueursMax: ['', Validators.minLength(1)],
      tpsJeux: ['', Validators.minLength(1)],
      synopsis: ['', Validators.minLength(1)]
    });
  }

  onSaveGame(){
    const title = this.gameForm.get('title').value;
    const categories: string[] = this.gameForm.get('categories').value;
    const nbJoueursMin = this.gameForm.get('nbJoueursMin').value;
    const nbJoueursMax = this.gameForm.get('nbJoueursMax').value;
    const tpsJeux = this.gameForm.get('tpsJeux').value;
    const synopsis = this.gameForm.get('synopsis').value;

    const newGame = new Game();
    
    newGame.title = title? title : this.game.title;
    newGame.categories = categories? categories: this.game.categories;
    newGame.nbJoueursMin = nbJoueursMin? nbJoueursMin : this.game.nbJoueursMin;
    newGame.nbJoueursMax = nbJoueursMax? nbJoueursMax : this.game.nbJoueursMax;
    newGame.synopsis = synopsis? synopsis : this.game.synopsis;
    newGame.tpsJeux = tpsJeux? tpsJeux : this.game.tpsJeux;
     newGame.photo = this.photo;
     this.gameService.deletePhotoInStorage(this.oldPhoto);
    
console.log('photo : '+ newGame.photo);
const id = this.route.snapshot.params['id'];
    this.gameService.editGame(this.game,newGame, id);
    this.location.back();
  }

  onBack(){
    if(this.oldPhoto!==this.photo){
      this.gameService.deletePhotoInStorage(this.photo);
    }
    this.location.back();
  }

  selectCategorie(cat: string){
    const index: number = this.categories.indexOf(cat);
    this.categories.splice(index,1);
    this.categories2.push(cat);
    this.categories2.sort();
   }
 
   deSelectCategorie(cat: string){
     const index: number = this.categories2.indexOf(cat);
     this.categories2.splice(index,1);
     this.categories.push(cat);
     this.categories.sort();
    }
 
   enumToArray(data: Object){
       const keys = Object.keys(data);
       return keys.slice(keys.length / 2);
   }

   onUploadFile(file: File){
    this.fileIsUploading = true;
    this.gameService.uploadFile(file).then(
      (url: string)=>{
        console.log('URL onUploadFile = '+url);
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
        this.photo = url;
      }
    );
  }

  detectFiles(event){
    console.log('event : ' + event.target.files[0]);
    this.onUploadFile(event.target.files[0]);
  }
}
