import { Component, OnInit, Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesCategories } from '../../models/gamesCategorie.enum';
import { Location } from '@angular/common';
import { CategoriesGamesService } from '../../services/categoriesGames.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit, OnDestroy {

  categorieForm: FormGroup;
  gameForm: FormGroup;
  categories : string[]= [];
  categories2: string[] = [];
  categoriesGamesSubscription = new Subscription;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  wantNewCategorie: boolean = false;

  constructor(private formBuilder: FormBuilder, 
    private gameService: GamesService,
     private router: Router,
    private location: Location,
  private categoriesGamesService: CategoriesGamesService) { }

  ngOnInit() {
    this.categoriesGamesSubscription = this.categoriesGamesService.categoriesGamesSubject.subscribe(
      (categories: string[])=>{
        this.categories = categories;
      }
    );
    this.categoriesGamesService.emitCategoriesGames();
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
    this.categorieForm = this.formBuilder.group({
      newCategorie: ['........',[Validators.required,Validators.pattern("^((?:\\w|[\\-_ ](?![\\-_ ])|[\\u0027\\u00C0\\u00C1\\u00C2\\u00C3\\u00C4\\u00C5\\u00C6\\u00C7\\u00C8\\u00C9\\u00CA\\u00CB\\u00CC\\u00CD\\u00CE\\u00CF\\u00D0\\u00D1\\u00D2\\u00D3\\u00D4\\u00D5\\u00D6\\u00D8\\u00D9\\u00DA\\u00DB\\u00DC\\u00DD\\u00DF\\u00E0\\u00E1\\u00E2\\u00E3\\u00E4\\u00E5\\u00E6\\u00E7\\u00E8\\u00E9\\u00EA\\u00EB\\u00EC\\u00ED\\u00EE\\u00EF\\u00F0\\u00F1\\u00F2\\u00F3\\u00F4\\u00F5\\u00F6\\u00F9\\u00FA\\u00FB\\u00FC\\u00FD\\u00FF\\u0153])+)$")]]
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
  
  addNewCategorieOrNot(){
    this.wantNewCategorie = !this.wantNewCategorie;
  }
  onSaveCategorie(){
    const newCategorie = this.categorieForm.get('newCategorie').value;
    if(newCategorie && newCategorie!=='nouvelle catégorie'){
    this.categoriesGamesService.createNewGame(newCategorie);
    }
    this.addNewCategorieOrNot();
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

  ngOnDestroy(){
    this.categoriesGamesSubscription.unsubscribe();
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






