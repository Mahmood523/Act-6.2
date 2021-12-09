import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './Services/postService';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './Services/authService';
import { SignlePostComponent } from './signle-post/signle-post.component';
import { HttpClientModule} from '@angular/common/http';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { Guard } from './Services/Guard';
import { EditPostComponent } from './edit-post/edit-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './Services/UserService';
import { EditUserComponent } from './edit-user/edit-user.component';
const appRoutes: Routes=[
  { path: 'posts', canActivate:[Guard], component: PostListComponent },
  { path: 'posts/:title', canActivate:[Guard], component: SignlePostComponent },
  { path: 'edit-post' , canActivate:[Guard] ,component: EditPostComponent},
  { path: 'users', canActivate:[Guard], component:UserListComponent },
  { path: 'edit-user', canActivate:[Guard],component: EditUserComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostListComponent },
  { path: 'not-found', component: FourOFourComponent},
  { path: '**', redirectTo: '/not-found'}

]
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    SignlePostComponent,
    EditPostComponent,
    UserListComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [
    PostService,
    AuthService,
    Guard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
