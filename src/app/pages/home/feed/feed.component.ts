import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/app/types/post';
import { User } from 'src/app/types/user';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
	posts!: Post[];
	curUser = {} as User;

	constructor(
		private postService: PostService,
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.postService.getAllPosts().subscribe(
			(data) => this.posts = data
		);
		this.userService.currentUser.subscribe(
			(user) => this.curUser = user
		);
	}
}
