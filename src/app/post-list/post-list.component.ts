import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/post';
import { PostService } from '../Services/postService';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  title = 'Posts';
  posts:Array<Post> =[]
  color?:boolean;

  constructor( private postService: PostService) {}
  
  ngOnInit(): void {
    this.posts=this.postService.posts;
    this.color=this.postService.color;
  }
  

}
