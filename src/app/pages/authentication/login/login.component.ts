import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';


@Component({
	selector: 'app-login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required]
	});

	loading = false;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router, 
		private authenticateService: AuthService) { }

	ngOnInit(): void {

	}

	get f() { return this.loginForm.controls; }

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
		this.authenticateService.login(this.f.email.value, this.f.password.value)
			.pipe(take(1))
			.subscribe(
				() => {
					// navigate to homepage
					this.router.navigate(['']);
				});
	}

}
