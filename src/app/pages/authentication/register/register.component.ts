import { MaxSizeValidator } from '@angular-material-components/file-input';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() error: string | null;
	form: FormGroup = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required],
		firstname: ['', Validators.required],
		lastname: ['', Validators.required],
	});

  color: ThemePalette = 'primary';
  disabled: boolean = false;
  multiple: boolean = false;
  accept: string=".png, .jpg, .jpeg";
  photo: File | null = null;

  fileControl: FormControl;
	submitted = false;
	loading = false;

	constructor(private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {
    this.error = null;
    this.fileControl = new FormControl(this.photo, [
      Validators.required,
      MaxSizeValidator(16 * 1024)
    ])
   }

	ngOnInit(): void {
	}

  submit(): void {
		if (this.form.valid) {
			this.authService.register(
				this.form.controls.email.value,
				this.form.controls.password.value,
				this.form.controls.firstname.value,
				this.form.controls.lastname.value
			).subscribe(
				(success) => this.router.navigate(['/auth']),
				(err) => this.error = 'Email invalid'
			);
		}
	}
}
