import { Component, OnInit } from '@angular/core';
import { User } from '../Models/UserModel';
import { UserService } from '../Services/UserService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users?: User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users=this.userService.users;
  }

}
