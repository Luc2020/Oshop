import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any) {
    return this.db.list('/products').push(product);
  }

  getAll() {
  return this.db.list('/products').snapshotChanges()
  .pipe(map( action => action
    .map(a => {
      const key = a.payload.key;
      const data = a.payload.val();
        return  {key, data};
    })));
}

get(productId: any) {
  return this.db.object('/products/' + productId).snapshotChanges();
}

}
