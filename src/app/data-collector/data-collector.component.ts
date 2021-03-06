import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesService } from '../services/games.service';



@Component({
  selector: 'app-data-collector',
  templateUrl: './data-collector.component.html',
  styleUrls: ['./data-collector.component.scss']
})
export class DataCollectorComponent implements OnInit {

  title: string = 'SuperLaser';
  titleMinify: string = '';
  urlStart: string = 'https://fr.wikipedia.org/wiki/';
  urlImgStart: string = 'http://images.google.com/search?tbm=isch&q='
  url: string;
  data: string = '';
  table: string[];
  infos: string[] = [];
  mecanismes: string[] = [];
  themes: string[] = [];
  joueurs: string = '';
  age: string = '';
  temps: string = '';
  constructor(private _http: HttpClient,
    private gameService: GamesService) { }

  ngOnInit() {

    this.initCollect();
  }

  private initCollect() {
    this.titleMinify = this.minifyString(this.title);
    this.url = this.urlImgStart + this.title;
    /*  this._http.get(this.url, {
       responseType: 'text', headers: {
         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
       }
     }).subscribe((data) => {
       this.extractInfo(data);
     }, (error) => {
       console.log('passage en majuscule');
       this.title = this.allFirstLetterInUppercase(this.title);
       this.titleMinify = this.minifyString(this.title);
       this.url = this.urlStart + this.titleMinify;
       this._http.get(this.url, {
         responseType: 'text', headers: {
           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
         }
       }).subscribe((data) => {
         this.extractInfo(data);
       });
     }); */
  }

  getImage() {
    window.open(this.url, "", "width=600,height=400,scrollbars=0,top=100px,right=100px");

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
            this._http.get(s, {
              responseType: 'blob', headers: {
                'Content-Type': 'blob'
              }
            }).subscribe((data: any) => {
              console.log('data : ' + data.toString());
              var filetab = s.toString().split('.');
              var fileExtention = filetab.pop().split('/').shift();
              var fileName = this.title+'.'+fileExtention;
              console.log('fichier : '+ fileName)
             img = this.blobToFile(data,fileName);
             this.onUploadFile(img);
            },(error)=>{
              console.log('erreur de récupération d\'url : ' + error.toString());
            });
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

  onUploadFile(file: File) {

    this.gameService.uploadFile(file).then(
      (url: string) => {
        console.log('URL onUploadFile = ' + url);
      }
    );
  }



  private extractInfo(data: string) {
    this.table = data.split('<table>');
    var tableauInfo: string = data.split('<table>')[1];
    //suppression du code espace
    var tableauInfo2 = tableauInfo.replace('&#160;', ' ');
    while (tableauInfo2 !== tableauInfo2.replace('&#160;', ' ')) {
      tableauInfo2 = tableauInfo2.replace('&#160;', ' ');
    }
    //récupération des info situées entre balises
    var reg: RegExp = new RegExp('<[^>]+>');
    this.infos = tableauInfo2.split(reg);
    var i = 0;
    for (let info of this.infos) {
      if (info == null || info == '' || !info.match('[^a-zA-Z0-9]')) {
        this.infos.splice(i, 1);
      }
      ++i;
    }
    //MECANISME
    var indexMeca = this.infos.indexOf(this.infos.find(s => s.includes('Mécanisme')));
    var indexTheme = this.infos.indexOf(this.infos.find(s => s.includes('Thème')));
    this.mecanismes = this.getInfo(this.infos, indexMeca, indexTheme);
    //THEME
    var indexJoueurs = this.infos.indexOf(this.infos.find(s => s.includes('Joueur(s)')));
    this.themes = this.getInfo(this.infos, indexTheme, indexJoueurs);
    //JOUEURS
    var indexAge = this.infos.indexOf(this.infos.find(s => s.includes('Âge')));
    this.joueurs = this.getInfo(this.infos, indexJoueurs, indexAge)[1];
    //AGE
    var indexTemps = this.infos.indexOf(this.infos.find(s => s.includes('Durée annoncée')));
    this.age = this.getInfo(this.infos, indexAge, indexTemps)[1];
    //TEMPS
    this.temps = this.getInfo(this.infos, indexTemps, null)[1];
  }

  getInfo(liste: string[], debut: number, fin: number) {
    var results: string[] = fin ? liste.slice(debut + 1, fin) : liste.slice(debut + 1);
    return results;
  }

  minifyString(s: string) {
    var sm = s.replace(' ', '_');
    return sm;
  }

  allFirstLetterInUppercase(s: string) {
    var tab = s.split(' ');
    for (var word in tab) {
      tab[word] = tab[word].substr(0, 1).toUpperCase() + tab[word].substr(1, tab[word].length);
    }
    return tab.join(' ');

  }

}
