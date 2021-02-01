import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Post } from '../types/post';
import { User } from '../types/user';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(
		private http: HttpClient,
		private helper: JwtHelperService,
		private auth: AuthService
	) { }

	public get currentUser(): Observable<User> {
		return this.http.get<User>('http://localhost:4000/user/me');
	}

	public get isLoggedIn(): boolean {
		const token = localStorage.getItem('auth_token');
		if (token) { return !this.helper.isTokenExpired(token as string); }
		else { this.auth.logout(); return false; }
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:4000/user/me/posts');
  }
}
