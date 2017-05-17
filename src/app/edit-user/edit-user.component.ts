import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  @Input() selectedUser;
  @Output() updateButtonClickedSender = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  beginUpdatingUser(userToUpdate){
    this.userService.updateUser(userToUpdate);
    this.updateButtonClickedSender.emit();
  }

  beginDeletingUser(userToDelete){
    if(confirm("Are you sure you want to delete this user?")){
      this.userService.deleteUser(userToDelete);
    }
  }
}
