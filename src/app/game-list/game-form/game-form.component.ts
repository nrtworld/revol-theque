import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesCategories } from '../../models/gamesCategorie.enum';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  gameForm: FormGroup;
  categories : string[]= this.enumToArray(GamesCategories).sort();
  categories2: string[] = [];
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, 
    private gameService: GamesService,
     private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.gameForm = this.formBuilder.group({
      title: ['', Validators.required],
      categories2: [''],
      nbJoueursMin: ['', [Validators.required,Validators.pattern('[0-9]+')]],
      nbJoueursMax: ['', [Validators.required,Validators.pattern('[0-9]+')]],
      tpsJeux: ['', [Validators.required,Validators.pattern('[0-9]+')]],
      synopsis: ['', Validators.required]
    });
  }

  onSaveGame(){
    const title = this.gameForm.get('title').value;
    const nbJoueursMin = this.gameForm.get('nbJoueursMin').value;
    const nbJoueursMax = this.gameForm.get('nbJoueursMax').value;
    const tpsJeux = this.gameForm.get('tpsJeux').value;
    const synopsis = this.gameForm.get('synopsis').value;

    const newGame = new Game();
    newGame.title = title;
    newGame.categories = this.categories2;
    newGame.nbJoueursMin = nbJoueursMin;
    newGame.nbJoueursMax = nbJoueursMax;
    newGame.synopsis = synopsis;
    newGame.tpsJeux = tpsJeux;
    if(this.fileUrl && this.fileUrl!==''){
      newGame.photo = this.fileUrl;
    }
    this.gameService.createNewGame(newGame);
    this.location.back();
  }

  onBack(){
    this.location.back();
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

}

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: Object) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }
}






