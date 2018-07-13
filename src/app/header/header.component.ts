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

  constructor(private authService: AuthService) { }

  ngOnInit() {
        
  }
  
getIsAuth(){
  if(firebase.auth().currentUser){
   return true;
  }else {
    return false;
  }
}
  onSignOut(){
    console.log('header signout');
    this.authService.signOutuser();
  }
}
