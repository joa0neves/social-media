import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
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

	@Output() postLike = new EventEmitter<string>();
	loaded = false;

	constructor(private userService: UserService) {	}

	ngOnInit(): void {
		this.userService.getUser(this.post.author).subscribe(
			(data) => { this.postAuthor = data; this.loaded = true; }
		);
	}

	handleLike(postId: string): void {
		this.postLike.emit(postId);
	}
}
