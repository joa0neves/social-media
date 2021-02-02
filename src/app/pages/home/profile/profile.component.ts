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
  _id:string ='';
  curr_id:string = '';
  user:User={};
  show=true;
  posts = posts;

	constructor(
		private postService: PostService,
		private userService: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
    this._id=this.router.url.split('/')[2];
    this.userService.currentUser.subscribe(
			(user) => {
				if(this._id==user._id){
          if(user.picture == ""){
            this.user.picture = 'https://pbs.twimg.com/media/EAmr-PAWsAEoiWR?format=jpg&name=900x900';
          }else{
            this.user.picture= user.picture;
          }
          this.user.firstname=user.firstname || '';
          this.user.firstname=this.user.firstname[0].toUpperCase() +this.user.firstname.slice(1);
          this.user.lastname=user.lastname || '';
          this.user.lastname=this.user.lastname[0].toUpperCase() +this.user.lastname.slice(1);
          this.getCurrentUserPosts();
        }else{
          this.getUser(this._id);
          this.getUserPosts(this._id);
          this.show = false;
        }
			}
		);
  }

  getUser(id:string){
    this.userService.getUser(id)
    .subscribe(
      (user) => {
        if(user.picture == ""){
          this.user.picture = 'https://pbs.twimg.com/media/EAmr-PAWsAEoiWR?format=jpg&name=900x900';
        }else{
          this.user.picture= user.picture;
        }
        this.user.firstname=user.firstname || '';
        this.user.firstname=this.user.firstname[0].toUpperCase() +this.user.firstname.slice(1);
        this.user.lastname=user.lastname || '';
        this.user.lastname=this.user.lastname[0].toUpperCase() +this.user.lastname.slice(1);
        this.getCurrentUserPosts();
      },
      (error) => {
        console.log('loading posts failed');
      });
  }

  getCurrentUserPosts(){
    this.userService.getAllCurrentUserPosts()
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

  getUserPosts(_id:string){
    this.userService.getAllUserPosts(_id)
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
