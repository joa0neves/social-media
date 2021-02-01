import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../../types/post';
import { UserService } from 'src/app/services/user.service';


@Component({
	selector: 'app-home-page',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
	currentPost: Post = {
		id: 'test',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	};

	constructor(
		private postService: PostService
	) { }

	ngOnInit(): void {
		this.postService.getNextPost(this.currentPost.id)
			.pipe(take(1))
			.subscribe(
				(data) => {
					this.currentPost = data;
					console.log('Post added');
				},
				(error) => {
					console.log('post get failed');
				});

	}

	logout(): void {
		localStorage.clear();
	}

	next(): void {
		this.postService.getNextPost(this.currentPost.id)
			.pipe(take(1))
			.subscribe(
				(data) => {
					this.currentPost = data;
					console.log('Post added');
				},
				(error) => {
					console.log('post get failed');
				});
	}

	previous(): void {
		this.postService.getPreviousPost(this.currentPost.id)
			.pipe(take(1))
			.subscribe(
				(data) => {
					this.currentPost = data;
					console.log('Post added');
				},
				(error) => {
					console.log('post get failed');
				});
	}

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
	}
}
