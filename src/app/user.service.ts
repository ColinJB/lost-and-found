import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {

  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  getUserById(userId: number){
    for (var i = 0; i <= USERS.length - 1; i++) {
      if (USERS[i].id === userId) {
        return USERS[i];
      }
    }
  }

}
