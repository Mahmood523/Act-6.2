import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../Services/postService';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  color ?: boolean;
  @Input() postTitle?: string;
  @Input() postContent?: string;
  @Input() postLoveIts?: number;
  @Input() postCreatedAt?: Date;

  constructor( private postService: PostService ) { }

  ngOnInit(){
    this.color=this.postService.color;
   
  }
  onGreen(){
    this.onGreen=this.postService.turnGreen;
  }
  onRed(){
    this.onRed=this.postService.turnRed;
  }
}
