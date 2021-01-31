import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { PostService } from 'src/app/services/post.service';
import {posts, Post} from '../../models/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  readonly User = this.authenticateService.sessionUser;

  posts=posts;

  constructor(private postService:PostService,private authenticateService:AuthenticateService,private router: Router) { }

  ngOnInit(): void {
    this.posts=this.getPosts();
    this.postService.getAllPosts()
        .pipe(take(1))
        .subscribe(
            (data) => {
              this.posts=data;
            },
            (error) => {
              console.log('loading posts failed');
            });
  }

  delete(id:string):void {

  }

  getPosts():Array<Post>{
    return  [
      {
      id: 'test',
      author: 'test',
      title: 'test',
      photoUrl: 'https://i.imgur.com/ixlPReX.png',
      likes: []
    }];
  }

}
