import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories').snapshotChanges()
    .pipe(map( action => action
      .map(a => {
        const key = a.payload.key;
        const data = a.payload.val();
          return  {key, data};
      })));
   }


  // getAll() {
  //   return this.db.list('/categories', ref =>
  //   ref.orderByChild('name')).snapshotChanges() as Observable<any>;
  // }

}
