import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [UserService]
})
export class CommunityComponent implements OnInit {
  currentRoute: string = this.router.url;
  users: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToUserDetails(clickedUser) {
    this.router.navigate(['users', clickedUser.$key]);
  };

}
