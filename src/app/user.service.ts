import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore'
import firebase from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  save(user: firebase.User) {
    this.db.doc('/users/' + user.uid).set({
      name: user.displayName,
      email: user.email
    }, {merge: true})
    .then(() => console.log('user saved succesfully'))
    .catch((reason:any) => console.log('user saved failed:', reason));
  }
}
