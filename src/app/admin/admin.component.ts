import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit {
  currentRoute: string = this.router.url;
  users: FirebaseListObservable<any[]>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  submitForm(name: string, email: string, adminStatus: string) {
    var newUser: User = new User(name, email, adminStatus);
    this.userService.addUser(newUser);
  }

  goToUserDetails(clickedUser) {
    this.router.navigate(['users', clickedUser.$key]);
  };

}
