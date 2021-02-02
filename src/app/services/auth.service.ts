import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JWT } from '../types/jwt';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient,private router:Router) { }

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

	register(email: string, password: string, firstname: string, lastname: string) {
		return this.http.post('http://localhost:4000/user/new', { email, password, firstname, lastname });
	}

	logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['auth']);
	}
}
