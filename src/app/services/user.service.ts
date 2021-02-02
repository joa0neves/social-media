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

	getUser(id: string): Observable<User> {
		return this.http.get<User>(`http://localhost:4000/user/${id}`);
	}

	public get isLoggedIn(): boolean {
		const token = localStorage.getItem('auth_token');
		if (token) { return !this.helper.isTokenExpired(token as string); }
		else { return false; }
	}

	getAllCurrentUserPosts(): Observable<Post[]> {
		return this.http.get<Post[]>('http://localhost:4000/user/me/posts');
  }

	getAllUserPosts(_id:string): Observable<Post[]> {
		return this.http.get<Post[]>(`http://localhost:4000/user/${_id}/posts`);
	}

	deleteUser(): Observable<User> {
		return this.http.delete<User>('http://localhost:4000/user/me');
	}

	updateUser(user: User): Observable<User> {
		return this.http.put<User>('http://localhost:4000/user/me', user);
	}
}
