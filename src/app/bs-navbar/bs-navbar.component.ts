import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs'



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebase.default.User | null>;

  constructor(private afAuth: AngularFireAuth) {

    this.user$ = afAuth.authState;



    // afAuth.authState.subscribe((user: any) => {
    //                                           if (user) {
    //                                            this.userData = user;
    //                                            localStorage.setItem('user', JSON.stringify(this.userData));
    //                                            localStorage.getItem('user');
    //                                           } else {
    //                                             localStorage.setItem('user', '{}');
    //                                           }
    //                                   });
        }


  logout() {
    this.afAuth.signOut();
  }
}
