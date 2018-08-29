import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
openMenu: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );

  }
  
  onSignOut(){
    this.openCloseMenu();
    this.authService.signOutuser();
  }

  openCloseMenu(){
    this.openMenu = !this.openMenu;
  }

  getclassNavPills(pill: string){
    location.pathname
    if(location.pathname == pill){
      return "nav-link active"
    }else{
      return "nav-link"
    }
  }

  getActivateStatus(){
    if(location.pathname == '/starter'){
      return false;
    }else{
      return true;
    }
  }
}
