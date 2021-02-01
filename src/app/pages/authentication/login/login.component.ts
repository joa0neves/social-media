import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';


@Component({
	selector: 'app-login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	@Input() error: string | null;
	form: FormGroup;

	constructor(
		private authService: AuthService,
		private router: Router
	) {
		this.form = new FormGroup({
			username: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
		});
		this.error = null;
	}


	submit(): void {
		if (this.form.valid) {
			this.authService.login(
				this.form.controls.username.value,
				this.form.controls.password.value
			).subscribe(
				(success) => this.router.navigate(['']),
				(err) => this.error = 'Username or password invalid'
			);
		}
	}


	// 	this.loading = true;
	// 	this.authenticateService.login(this.f.email.value, this.f.password.value)
	// 		.pipe(take(1))
	// 		.subscribe(
	// 			() => {
	// 				// navigate to homepage
	// 				this.router.navigate(['']);
	// 			});
	// }

}
