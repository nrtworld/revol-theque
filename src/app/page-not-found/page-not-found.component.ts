import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Location } from '@angular/common';
import { timer } from 'rxjs';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {


  isClicked: boolean = false;
  isClicked2: boolean = false;

  constructor(private appComponante : AppComponent,
  private location: Location) { }

  ngOnInit() {
    this.appComponante.isNotFound = true;
  }

  goBack(){
    this.isClicked = true;
    const source = timer(500);
//output: 0,1,2,3,4,5......
const subscribe = source.subscribe(val => {
  const source2 = timer(500);
  const subcribe2 = source2.subscribe(val =>{
    const source3 = timer(500);
    this.isClicked2 = true;
    const subcribe3 = source3.subscribe(val =>{
      window.location.reload();
    });
   
  });
});
  }

}
