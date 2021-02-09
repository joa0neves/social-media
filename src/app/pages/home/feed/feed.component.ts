import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/app/types/post';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
	posts!: Observable<Post[]>;

	constructor(
		private postService: PostService,
		public userService: UserService
	) { }

	ngOnInit(): void {
		this.posts = this.postService.getAllPosts();
	}

	handlePostLike(postId: string): void {
		console.log('Liked post', postId);
	}

}
