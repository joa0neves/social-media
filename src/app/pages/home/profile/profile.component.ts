import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/types/user';
import { PostService } from '../../../services/post.service';
import { UserService } from '../../../services/user.service';
import { posts, Post } from '../../../types/post';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	_id = '';
	currId = '';
	user: User = {};
	show = true;
	posts = posts;
	loaded = false;

	constructor(
		private postService: PostService,
		private userService: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
		this._id = this.router.url.split('/')[2];
		this.userService.currentUser.subscribe(
			(user) => {
				this.user._id = user._id;
				if (this._id === user._id) {
					if (user.picture === '') {
						this.user.picture = 'https://pbs.twimg.com/media/EAmr-PAWsAEoiWR?format=jpg&name=900x900';
					} else {
						this.user.picture = user.picture;
					}
					this.user.firstname = user.firstname || '';
					this.user.firstname = this.user.firstname[0].toUpperCase() + this.user.firstname.slice(1);
					this.user.lastname = user.lastname || '';
					this.user.lastname = this.user.lastname[0].toUpperCase() + this.user.lastname.slice(1);
					this.getCurrentUserPosts();
				} else {
					this.getUser(this._id);
					this.getUserPosts(this._id);
					this.show = false;
				}
			}
		);
	}

	isPostLiked(post: Post): boolean {
		if (this.loaded) {
			const lol = post.likes.find((like) => this.user._id === like);
			return (lol !== undefined) ? true : false;
		}
		return false;
	}

	getUser(id: string): void {
		this.userService.getUser(id)
			.subscribe(
				(user) => {
					if (user.picture === '') {
						this.user.picture = 'https://pbs.twimg.com/media/EAmr-PAWsAEoiWR?format=jpg&name=900x900';
					} else {
						this.user.picture = user.picture;
					}
					this.user.firstname = user.firstname || '';
					this.user.firstname = this.user.firstname[0].toUpperCase() + this.user.firstname.slice(1);
					this.user.lastname = user.lastname || '';
					this.user.lastname = this.user.lastname[0].toUpperCase() + this.user.lastname.slice(1);
				},
				(error) => {
					console.log('loading posts failed');
				});
	}

	getCurrentUserPosts(): void {
		this.userService.getAllCurrentUserPosts()
			.subscribe(
				(data) => {
					if (data.length > 0) {
						this.posts = data;
						this.loaded = true;
					}
				},
				(error) => {
					console.log('loading posts failed');
				});
	}

	getUserPosts(_id: string): void {
		this.userService.getAllUserPosts(_id)
			.subscribe(
				(data) => {
					if (data.length > 0) {
						this.posts = data;
						this.loaded = true;
					}
				},
				(error) => {
					console.log('loading posts failed');
				});
	}

	handleLike(postId: string): void {
		this.postService.likePost(postId).subscribe(
			(data) => {
				const idx = this.posts.findIndex(post => post._id === data._id);
				this.posts[idx] = data;
			},
			(error) => {
				this.postService.dislikePost(postId).subscribe(
					(data) => {
						const idx = this.posts.findIndex(post => post._id === data._id);
						this.posts[idx] = data;
					},
					(err) => console.log(err)
				);
			}
		);
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
