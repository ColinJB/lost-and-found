import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit {

  users: FirebaseListObservable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  submitForm(name: string, email: string) {
    var newUser: User = new User(name, email);
    this.userService.addUser(newUser);
  }

}
