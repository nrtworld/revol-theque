import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesCategories } from '../../models/gamesCategorie.enum';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  gameForm: FormGroup;
  categories = GamesCategories;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, private gameService: GamesService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.gameForm = this.formBuilder.group({
      title: ['', Validators.required],
      /*categorie: ['', Validators.required],*/
      nbJoueursMin: ['', Validators.required],
      nbJoueursMax: ['', Validators.required],
      tpsJeux: ['', Validators.required],
      synopsis: ['', Validators.required]
    });
  }

  onSaveGame(){
    const title = this.gameForm.get('title').value;
    /* const categorie = this.gameForm.get('categorie').value;*/
    const nbJoueursMin = this.gameForm.get('nbJoueursMin').value;
    const nbJoueursMax = this.gameForm.get('nbJoueursMax').value;
    const tpsJeux = this.gameForm.get('tpsJeux').value;
    const synopsis = this.gameForm.get('synopsis').value;

    const newGame = new Game();
    newGame.title = title;
    /*newGame.categorie = categorie;*/
    newGame.nbJoueursMin = nbJoueursMin;
    newGame.nbJoueursMax = nbJoueursMax;
    newGame.synopsis = synopsis;
    newGame.tpsJeux = tpsJeux;
console.log('fileUrl : ' + this.fileUrl);
    if(this.fileUrl && this.fileUrl!==''){
      newGame.photo = this.fileUrl;
    }
console.log('photo : '+ newGame.photo);
    this.gameService.createNewGame(newGame);
    this.router.navigate(['/games']);
  }

  onUploadFile(file: File){
    this.fileIsUploading = true;
    this.gameService.uploadFile(file).then(
      (url: string)=>{
        console.log('URL onUploadFile = '+url);
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event){
    console.log('event : ' + event.target.files[0]);
    this.onUploadFile(event.target.files[0]);
  }

}
