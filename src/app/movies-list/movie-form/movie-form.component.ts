import { Component, OnInit, Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Collector } from '../../models/collector.model';
import { DataCollectorService } from '../../services/dataCollector.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit, OnDestroy {

  categorieForm: FormGroup;
  movieForm: FormGroup;
  categories: string[] = [];
  categories2: string[] = [];
  categories3: string[] = [];
  preSelectedCategories: string[] = [];
  preDeSelectedCategories: string[] = [];
  categoriesMoviesSubscription = new Subscription;
  urlImgStart: string = 'http://images.google.com/search?tbm=isch&q=';
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  wantNewCategorie: boolean = false;
  isExtention: boolean = false;

  dataSubscription = new Subscription;
  collector: Collector;

  private readonly OPTION_SELECTED = "option-selected";

  private readonly OPTION_NOT_SELECTED = "option";

  private readonly OPTION_SELECTED_CAT2 = "option-selected-cat2";

  private readonly OPTION_NOT_SELECTED_CAT2 = "option-cat2";


  constructor(private _http: HttpClient,
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private location: Location,
    private categoriesGamesService: CategoriesGamesService,
    private dataCollectorService: DataCollectorService) { }

  ngOnInit() {
    this.categoriesGamesSubscription = this.categoriesGamesService.categoriesGamesSubject.subscribe(
      (categories: string[]) => {
        this.categories = categories;
      }
    );
    this.categoriesGamesService.emitCategoriesGames();
    this.initForm();
  }

  initForm() {
    this.gameForm = this.formBuilder.group({
      title: ['', Validators.required],
      urlImage: [''],
      isExtention: [''],
      titleExtention: [''],
      categories2: [''],
      nbJoueursMin: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      nbJoueursMax: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      tpsJeux: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      synopsis: ['', Validators.required]
    });
    this.categorieForm = this.formBuilder.group({
      newCategorie: ['', [Validators.required, Validators.pattern("^((?:\\w|[\\-_ ](?![\\-_ ])|[\\u0027\\u00C0\\u00C1\\u00C2\\u00C3\\u00C4\\u00C5\\u00C6\\u00C7\\u00C8\\u00C9\\u00CA\\u00CB\\u00CC\\u00CD\\u00CE\\u00CF\\u00D0\\u00D1\\u00D2\\u00D3\\u00D4\\u00D5\\u00D6\\u00D8\\u00D9\\u00DA\\u00DB\\u00DC\\u00DD\\u00DF\\u00E0\\u00E1\\u00E2\\u00E3\\u00E4\\u00E5\\u00E6\\u00E7\\u00E8\\u00E9\\u00EA\\u00EB\\u00EC\\u00ED\\u00EE\\u00EF\\u00F0\\u00F1\\u00F2\\u00F3\\u00F4\\u00F5\\u00F6\\u00F9\\u00FA\\u00FB\\u00FC\\u00FD\\u00FF\\u0153])+)$")]]
    });
  }


  onSaveGame() {
    const title = this.gameForm.get('title').value;
    const titleExtention = this.gameForm.get('titleExtention').value;
    const isExtention = this.gameForm.get('isExtention').value;
    const nbJoueursMin = this.gameForm.get('nbJoueursMin').value;
    const nbJoueursMax = this.gameForm.get('nbJoueursMax').value;
    const tpsJeux = this.gameForm.get('tpsJeux').value;
    const synopsis = this.gameForm.get('synopsis').value;

    const newGame = new Game();
    newGame.title = title;
    newGame.isExtention = isExtention;
    newGame.titleExtention = titleExtention;
    newGame.categories = this.categories2;
    newGame.nbJoueursMin = nbJoueursMin;
    newGame.nbJoueursMax = nbJoueursMax;
    newGame.synopsis = synopsis;
    newGame.tpsJeux = tpsJeux;
    if (this.fileUrl && this.fileUrl !== '') {
      newGame.photo = this.fileUrl;
    }
    this.gameService.createNewGame(newGame);
    this.location.back();
  }

  addNewCategorieOrNot() {
    this.wantNewCategorie = !this.wantNewCategorie;
  }
  onSaveCategorie() {
    const newCategorie = this.categorieForm.get('newCategorie').value;
    if (newCategorie && newCategorie !== 'nouvelle catégorie') {
      this.categoriesGamesService.createNewCategorie(newCategorie);
    }
    this.addNewCategorieOrNot();
  }

  onSaveWikiCategorie(newCat: string) {

    if (newCat && newCat !== 'nouvelle catégorie') {
      this.categoriesGamesService.createNewCategorie(newCat);
      this.preSelectedCategories = [];
      this.preDeSelectCategorie(newCat);
      this.selectCategories();
    }
  }

  thisIsAnExtention() {
    this.isExtention = !this.isExtention;
    this.gameForm.get('titleExtention').setValue('');
  }

  onBack() {
    this.location.back();
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.gameService.uploadFile(file).then(
      (url: string) => {
        console.log('URL onUploadFile = ' + url);
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    console.log('event : ' + event.target.files[0]);
    this.onUploadFile(event.target.files[0]);
  }

  getImageDropped(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('test');
    var items = event.dataTransfer.items;
    console.log('items : ' + items);
    var index = 0;
    while (index < items.length) {

      var img: File;
      var file = items[index];
      if (file.kind == 'string') {
        file.getAsString(
          (s) => {
            console.log('string reçu : ' + s);
            img = this.getImageFromUrl(s);
          }
        );
      } else if (file.kind == 'file' && file.type.match('^image/')) {
        img = file.getAsFile();
        this.onUploadFile(img);
      }
      ++index;
    }
  }

  public blobToFile = (theBlob: Blob, fileName:string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>b;
}

  private getImageFromUrl(s: string) {
    if(s=='url'){
      s = this.gameForm.get('urlImage').value;
    }
    var img: File;
    this._http.get(s, {
      responseType: 'blob', headers: {
        'Content-Type': 'blob'
      }
    }).subscribe((data: any) => {
      console.log('data : ' + data.toString());
      var filetab = s.toString().split('.');
      var fileExtention = filetab.pop().split('/').shift();
      var fileName = this.gameForm.get('title').value + (this.thisIsAnExtention ? '_' + this.gameForm.get('titleExtention').value : '') + '.' + fileExtention;
      console.log('fichier : ' + fileName);
      img = this.blobToFile(data, fileName);
      this.onUploadFile(img);
    }, (error) => {
      console.log('erreur de récupération d\'url : ' + error.toString());
    });
    return img;
  }

preSelectCategorie(cat: string){
  if(this.preSelectedCategories.includes(cat)){
    this.preSelectedCategories.splice(this.preSelectedCategories.indexOf(cat),1);
  }else{
    this.preSelectedCategories.push(cat);
  }
}

  selectCategories() {
    for(let cat of this.preSelectedCategories){
    const index: number = this.categories.indexOf(cat);
    this.categories.splice(index, 1);
    if (!this.categories2.includes(cat)) {
      this.categories2.push(cat);
    }
  }
  this.categories2.sort();
  this.preSelectedCategories = [];
  }

  preDeSelectCategorie(cat: string){
    if(this.preDeSelectedCategories.includes(cat)){
      this.preDeSelectedCategories.splice(this.preDeSelectedCategories.indexOf(cat),1);
    }else{
      this.preDeSelectedCategories.push(cat);
    }
  }

  deSelectCategories() {
    for(let cat of this.preDeSelectedCategories){
    const index: number = this.categories2.indexOf(cat);
    this.categories2.splice(index, 1);
    this.categories.push(cat);
  }
  this.categories.sort();
  this.preDeSelectedCategories = [];
}

  enumToArray(data: Object) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }

  ngOnDestroy() {
    this.categoriesGamesSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  collectInfo() {
    const title = this.gameForm.get('title').value;
    this.dataCollectorService.initCollect(title);
    console.log(title);
    this.dataSubscription = this.dataCollectorService.dataSubject.subscribe(
      (data: string) => {
        this.collector = this.dataCollectorService.extractInfo(data);
        this.gameForm.get('nbJoueursMin').setValue(this.collector.joueursMin);
        this.gameForm.get('nbJoueursMax').setValue(this.collector.joueursMax);
        this.gameForm.get('tpsJeux').setValue(this.collector.temps);
        this.gameForm.get('synopsis').setValue(this.collector.themes.join(', '));
        for (let cat of this.collector.mecanismes) {
          if (cat != null && cat != '') {
            var catname = cat.substr(0, 1).toUpperCase() + cat.substr(1, cat.length).toLowerCase();
            if (!this.categories3.includes(catname)) {
              this.categories3.push(cat.substr(0, 1).toUpperCase() + cat.substr(1, cat.length).toLowerCase());
            }
          }
        }
      }
    );

  }

  onFindImage(){
    var title = this.gameForm.get('title').value;
    var extention = this.gameForm.get('titleExtention').value;
    var recherche = title;
    if(extention && extention.length){
      recherche = recherche +'+'+ extention;
    }
    var url = this.urlImgStart + recherche;
    window.open(url,"","width=600,height=400,scrollbars=0,top=100px,right=100px");
  }

  validNewCat(cat: string) {
    this.onSaveWikiCategorie(cat);
    this.categories3.splice(this.categories3.indexOf(cat), 1);
  }

  removeCategories3(){
    this.categories3 = [];
  }

  getSelectedClass(cat: string){
    if(this.preSelectedCategories.includes(cat)){
      return this.OPTION_SELECTED;
    }else{
      return this.OPTION_NOT_SELECTED;
    }
  }

  getDeSelectedClass(cat: string){
    if(this.preDeSelectedCategories.includes(cat)){
      return this.OPTION_SELECTED_CAT2;
    }else{
      return this.OPTION_NOT_SELECTED_CAT2;
    }
  }

}
