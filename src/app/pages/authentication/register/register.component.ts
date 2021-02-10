import { MaxSizeValidator } from '@angular-material-components/file-input';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() error: string | null;

  color: ThemePalette = 'primary';
  disabled: boolean = false;
  multiple: boolean = false;
  accept: string=".png, .jpg, .jpeg";


  fileControl: FormControl;

	form: FormGroup = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required],
		firstname: ['', Validators.required],
		lastname: ['', Validators.required],
	});



  photo: File | null = null;

  photoUrl:string ="";

	submitted = false;
	loading = false;

	constructor(private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService,
    private postService:PostService
	) {
    this.error = null;
    this.fileControl = new FormControl(this.photo, [
      Validators.required,
      MaxSizeValidator(16 * 1024)
    ])
   }

	ngOnInit(): void {
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

  submit(): void {
		if (this.form.valid) {
			this.authService.register(
				this.form.controls.email.value,
				this.form.controls.password.value,
				this.form.controls.firstname.value,
				this.form.controls.lastname.value,
        this.photoUrl
			).subscribe(
				(success) => this.router.navigate(['/auth']),
				(err) => this.error = 'Email invalid'
			);
		}
	}
}
