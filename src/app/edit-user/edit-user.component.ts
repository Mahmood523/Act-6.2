import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/UserService';
import { User } from '../Models/UserModel';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  user:User={}as User;
  userForm=new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email])
  }

  )



  constructor(
    private userService:UserService,
    private route:Router ) { }

  ngOnInit(): void {
  
  }

 
  onSubmit(){
    this.user.firstName=this.userForm.value['firstName'];
    this.user.lastName=this.userForm.value['lastName'];
    this.user.email=this.userForm.value['email'];
    this.userService.addUser(this.user);
    this.route.navigate(['users']);
      
    
  }

}
