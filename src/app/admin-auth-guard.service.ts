import { Injectable } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';
import { CanActivate } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$
      .switchMap(user => this.userService.get(user!.uid).valueChanges())
      .map(appUser => appUser!.isAdmin);
  }

}
