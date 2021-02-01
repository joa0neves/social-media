import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JWT } from '../types/jwt';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) { }

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

	register(email: string, password: string, firstname: string, lastname: string): Observable<void> {
		return this.http.post<void>('http://localhost:4000/user/new', { email, password, firstname, lastname });
	}

	logout(): void {
		localStorage.removeItem('auth_token');
	}
}
