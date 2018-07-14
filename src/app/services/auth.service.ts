import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
static isAuth: boolean = false;
  constructor() { }

  createNewUser(email: string, password: string){
    return new Promise(
      (resolve,reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          ()=>{
            resolve();
          },
          (error)=>{
            reject(error);
          }
        )
      }
    );
  }

  signInUser(email: string, password: string){
    return new Promise(
      (resolve,reject)=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          ()=>{
            resolve();
            AuthService.isAuth = true;
          },
          (error)=>{
            reject(error);
          }
        )
      }
    );
  }

  signOutuser(){
    console.log('service signout');
    firebase.auth().signOut();
    AuthService.isAuth = false;
  }

}
