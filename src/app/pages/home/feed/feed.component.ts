import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user';
import { Post } from '../../../types/post';

@Component({
	selector: 'app-home-page',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
	posts: Post[] = [];
	currentPostIdx = 0;
	postUser: User = {} as User;
	loaded = false;

	constructor(
		private postService: PostService,
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.postService.getAllPosts().subscribe(
			(data) => {
				this.posts = data;
				this.loaded = true;
				this.getPostAuthor(this.posts[this.currentPostIdx].author);
			}
		);
	}

	getPostAuthor(id: string): void {
		this.userService.getUser(id).subscribe(
			(user) => {
				this.postUser = user;
			}
		);
	}

	logout(): void {
		localStorage.clear();
	}

	next(): void {
		if (this.currentPostIdx < this.posts.length) {
			this.currentPostIdx++;
			this.getPostAuthor(this.posts[this.currentPostIdx].author);
		}
	}

	previous(): void {
		if (this.currentPostIdx > 0) {
			this.currentPostIdx--;
			this.getPostAuthor(this.posts[this.currentPostIdx].author);
		}
	}

	toggleLike(): void {
		console.log('kinda liked it');
	}

	/*
	like(): void {
		const currentUser = localStorage.getItem('sessionUser');
		if (!this.currentPost.likes.includes(this.currentPost.author)) {
			this.currentPost.likes.push(this.currentPost.author);
		} else {
			this.currentPost.likes.splice(this.currentPost.likes.indexOf(this.currentPost.author), 1);
		}
		// TODO atualizar os likes no backend
		this.postService.updateLikes(this.currentPost.id, this.currentPost.likes)
			.pipe(take(1))
			.subscribe(
				(data) => {
					console.log('like array updated');
				},
				(error) => {
					console.log('update failed');
				});
	}*/
}
