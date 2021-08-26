import { Injectable } from '@angular/core';
import firebase from  'firebase';
import {Observable} from 'rxjs/Observable';
import { AppUser } from './models/app-user';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private db: AngularFireDatabase) {

  }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  };

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }

}
