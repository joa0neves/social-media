import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	user: User;

	constructor(
		private userService: UserService,
		private router: Router,
		private authService: AuthService
	) {
		this.user = {} as User;
	}

	ngOnInit(): void {
		this.userService.currentUser.subscribe(
			(user) => {
				this.user = user;
			}
		);
	}

	logout(): void {
		this.authService.logout();
	}

}
