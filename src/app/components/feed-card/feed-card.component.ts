import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/app/types/post';
import { User } from 'src/app/types/user';

@Component({
	selector: 'app-feed-card',
	templateUrl: './feed-card.component.html',
	styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
	@Input() post!: Post;
	postAuthor!: User;
	postIsLiked = false;
	loaded = false;

	constructor(
		private userService: UserService,
		private postService: PostService
	) { }

	ngOnInit(): void {
		this.userService.getUser(this.post.author).subscribe(
			(data) => {
				this.postAuthor = data;
				this.postService.getPostLikes(this.post._id).subscribe(
					(users: User[]) => {
						const foundUser = users.find(user => user._id === this.postAuthor._id);
						if (foundUser) { this.postIsLiked = true; }
						this.loaded = true;
					}
				);
			}
		);
	}

	handleLike(postId: string): void {
		this.postService.likePost(postId).subscribe(
			(data) => {
				this.post = data;
				this.postIsLiked = true;
			},
			(error) => {
				this.postService.dislikePost(postId).subscribe(
					(data) => {
						this.post = data;
						this.postIsLiked = false;
					},
					(err) => console.log(err)
				);
			}
		);
	}
}
