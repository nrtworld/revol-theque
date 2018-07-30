import { Component, OnInit, Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesCategories } from '../../models/gamesCategorie.enum';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { CategoriesGamesService } from '../../services/categoriesGames.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit, OnDestroy {
  game: Game;
  photo:string;
  oldPhoto: string;

  categorieForm: FormGroup;
  gameForm: FormGroup;
  categories: string[] = [];
  categories2: string[] = [];
  categoriesGamesSubscription = new Subscription;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  wantNewCategorie: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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
    this.categorieForm = this.formBuilder.group({
      newCategorie: ['........',[Validators.required,Validators.pattern("^((?:\\w|[\\-_ ](?![\\-_ ])|[\\u0027\\u00C0\\u00C1\\u00C2\\u00C3\\u00C4\\u00C5\\u00C6\\u00C7\\u00C8\\u00C9\\u00CA\\u00CB\\u00CC\\u00CD\\u00CE\\u00CF\\u00D0\\u00D1\\u00D2\\u00D3\\u00D4\\u00D5\\u00D6\\u00D8\\u00D9\\u00DA\\u00DB\\u00DC\\u00DD\\u00DF\\u00E0\\u00E1\\u00E2\\u00E3\\u00E4\\u00E5\\u00E6\\u00E7\\u00E8\\u00E9\\u00EA\\u00EB\\u00EC\\u00ED\\u00EE\\u00EF\\u00F0\\u00F1\\u00F2\\u00F3\\u00F4\\u00F5\\u00F6\\u00F9\\u00FA\\u00FB\\u00FC\\u00FD\\u00FF\\u0153])+)$")]]
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

  addNewCategorieOrNot(){
    this.wantNewCategorie = !this.wantNewCategorie;
  }
  onSaveCategorie(){
    const newCategorie = this.categorieForm.get('newCategorie').value;
    if(newCategorie && newCategorie!=='nouvelle catégorie'){
    this.categoriesGamesService.createNewCategorie(newCategorie);
    }
    this.addNewCategorieOrNot();
  }

  ngOnDestroy(){
    this.categoriesGamesSubscription.unsubscribe();
  }
}
