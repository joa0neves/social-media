import { MaxSizeValidator } from '@angular-material-components/file-input';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
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
	}, { validator: atLeastOne(Validators.required) });

  color: ThemePalette = 'primary';
  disabled: boolean = false;
  multiple: boolean = false;
  accept: string=".png, .jpg, .jpeg";

  fileControl: FormControl;

  photo: File | null = null;

  photoUrl:string='';

	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		private authService: AuthService,
    private postService: PostService
	) {
		this.user = {} as User;

    this.fileControl = new FormControl(this.photo, [
      MaxSizeValidator(16 * 1024)
    ])
	}

	ngOnInit(): void {
		this.getUser();

    this.fileControl.valueChanges.subscribe((files: any) => {
      console.log(files);
      //this.photo=files
      this.postService.uploadPhoto(files).subscribe(
        (data:any) => {
          this.photoUrl=data.url;
          // do something, if upload success
          console.log('it work')
          }

        );
    })
	}

	getUser(): void {
		this.userService.currentUser.subscribe(
			(user) => {
				this.user = user;
			}
		);
	}

	update(): void {
		const updatedUser = {} as User;

		if (this.form.controls.firstname.value !== '') {
			updatedUser.firstname = this.form.controls.firstname.value;
		}
		if (this.form.controls.lastname.value !== '') {
			updatedUser.lastname = this.form.controls.lastname.value;
		}
		if (this.form.controls.email.value !== '') {
			updatedUser.email = this.form.controls.email.value;
		}
		if (this.form.controls.password.value !== '') {
			updatedUser.password = this.form.controls.password.value;
		}
    if(this.photoUrl!=''){
      updatedUser.picture = this.photoUrl;
    }

		this.userService.updateUser(updatedUser)
			.subscribe(
				(data) => {
					alert('User updated');
					this.user = data;
				},
				(error) => {
					console.log('User update failed');
				});

	}

	delete(): void {
		const confirmedDeletion = confirm('This process is not reversible, do you want to delete your account?');
		if (confirmedDeletion) {
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

}
