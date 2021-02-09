import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Input() isLoggedIn!: boolean;
	@Input() user!: User;
	@Output() logout = new EventEmitter<void>();

	constructor() { }

	ngOnInit(): void {
	}

	logoutClick(): void {
		this.logout.emit();
	}

}
