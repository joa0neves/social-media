import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
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
    private userService: UserService,
    private authService:AuthService) {
      this.user = { } as User;
    }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.currentUser.subscribe(
			(user) => {
				this.user = user;
			}
		);
  }

  update(){
    const updatedUser = { } as User;

    if (this.form.controls.firstname.value != ''){
        updatedUser.firstname = this.form.controls.firstname.value;
    }
    if (this.form.controls.lastname.value != ''){
      updatedUser.lastname = this.form.controls.lastname.value;
    }
    if (this.form.controls.email.value != ''){
      updatedUser.email = this.form.controls.email.value;
    }
    if (this.form.controls.password.value != ''){
      updatedUser.password = this.form.controls.password.value;
    }

    this.userService.updateUser(updatedUser)
			.subscribe(
				(data) => {
          console.log('User updated');
          this.getUser();
				},
				(error) => {
					console.log('User update failed');
				});

  }

  delete(){
    this.userService.deleteUser()
			.subscribe(
				(data) => {
          console.log('User deleted');
          this.authService.logout();
				},
				(error) => {
					console.log('User removal failed');
				});
  }

}
