import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { PostService } from '../../../services/post.service';
import { UserService } from '../../../services/user.service';
import { posts, Post } from '../../../types/post';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	readonly User = this.userService.currentUser;

	posts = posts;

	constructor(
		private postService: PostService,
		private userService: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
		console.log(this.userService.currentUser);
		this.postService.getAllPosts()
			.subscribe(
				(data) => {
          if (data.length>0){
            this.posts=data;
          }
				},
				(error) => {
				  console.log('loading posts failed');
				});
	}

	delete(post: Post): void {
		this.postService.deletePost(post.id)
			.pipe(take(1))
			.subscribe(
				(data) => {
					posts.splice(posts.indexOf(post), 1);
					console.log('Post deleted');
				},
				(error) => {
					// posts.splice(posts.indexOf(post),1);
					console.log('post removal failed');
				});
	}

	/*getPosts():Array<Post>{
	  return  [
		{
		id: 'test',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	  }];
	}*/

}
