import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/postService';

@Component({
  selector: 'app-signle-post',
  templateUrl: './signle-post.component.html',
  styleUrls: ['./signle-post.component.css']
})
export class SignlePostComponent implements OnInit {

  title?: string;
  content?: string;
  loveIts?: number;
  created_at?: Date;

  constructor( private postService: PostService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    const title=this.route.snapshot.params['title'];
    this.title=this.postService.getPostbyTitle(title)?.title;
    this.content=this.postService.getPostbyTitle(title)?.content;
    this.loveIts=this.postService.getPostbyTitle(title)?.loveIts;
    this.created_at=this.postService.getPostbyTitle(title)?.created_at;
  }

}
