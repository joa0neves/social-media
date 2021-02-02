import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { UserService } from '../../../services/user.service';
import { posts, Post } from '../../../types/post';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	posts = posts;

	constructor(
		private postService: PostService,
		private userService: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
		console.log(this.userService.currentUser);
		this.userService.getAllPosts()
			.subscribe(
				(data) => {
					if (data.length > 0) {
						this.posts = data;
					}
				},
				(error) => {
					console.log('loading posts failed');
				});
	}

	delete(post: Post): void {
		if (post._id !== 'test0') {
			this.postService.deletePost(post._id)
				.subscribe(
					(data) => {
						this.posts.splice(this.posts.indexOf(post), 1);
						console.log('Post deleted');
					},
					(error) => {
						// posts.splice(posts.indexOf(post),1);
						console.log('post removal failed');
					});
		}
	}
}
