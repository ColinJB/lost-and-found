import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [UserService]
})
export class CommunityComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  users: User[];

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToUserDetails(clickedUser: User) {
    this.router.navigate(['users', clickedUser.id]);
  };

}
