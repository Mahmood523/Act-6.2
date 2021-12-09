import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../Services/postService';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  loveItsInit=0;
  createdAt=new Date;
  constructor(private postService:PostService,
              private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm){
    const title:string =form.value['title'];
    const content:string =form.value['content'];
    
    this.postService.addPostToPosts(title,content,this.loveItsInit,this.createdAt);
    this.router.navigate(['posts']);


  }

}
