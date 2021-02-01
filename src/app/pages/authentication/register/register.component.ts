import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
	submitted = false;
	loading = false;

	constructor(private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {
    this.error = null;
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
