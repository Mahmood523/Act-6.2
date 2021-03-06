import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
authStatus?:boolean;
  constructor( private authService: AuthService,
    private route: Router) {}

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        
        this.authStatus = this.authService.isAuth;
        this.route.navigate(['posts']);
      }
    );
  }
  onSignOut(){
    this.authService.signOut();
    
    this.authStatus=this.authService.isAuth;
  }
}
