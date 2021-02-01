import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { atLeastOne, User } from 'src/app/types/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: User;
  form: FormGroup = this.formBuilder.group({
		email: [''],
		password: [''],
		firstname: [''],
		lastname: [''],
	},{validator : atLeastOne(Validators.required)});

  constructor(private formBuilder: FormBuilder,
		private userService: UserService) {
      this.user = { } as User;
    }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
			(user) => {
				this.user = user;
			}
		);
  }

  update(){

  }

}
