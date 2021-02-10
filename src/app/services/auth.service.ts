import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JWT } from '../types/jwt';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient, private router: Router) { }

	login(email: string, password: string) {
		return this.http.post<JWT>('http://localhost:4000/auth', { email, password }).pipe(
			map(
				(res: JWT) => {
					if (res.auth) {
						localStorage.setItem('auth_token', res.token);
					}
				},
			)
		);
	}

	register(email: string, password: string, firstname: string, lastname: string,photoUrl:string) {
		return this.http.post('http://localhost:4000/user/new', { email, password, firstname, lastname, photoUrl });
	}

	logout(): void {
		localStorage.clear();
		this.router.navigate(['auth']);
	}
}
