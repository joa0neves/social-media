import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	show = false;

	constructor(private authenticateService: UserService, private router: Router) {
	}

	ngOnInit(): void {

	}

	delete(): void {
		// delete post
	}

}
