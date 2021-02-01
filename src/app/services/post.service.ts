import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../types/post';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	constructor(private http: HttpClient) { }

	newPost(title: string, id: string, photoUrl: string) {
		return this.http.post<string>('http://localhost/user/new', { title, id, photoUrl }).pipe(
			map((res: string) => {
				return res;
			})
		);
	}

	getNextPost(id: string): Observable<Post> {
		return this.http.post<string>('http://localhost/', { id }).pipe(
			map((res: string) => {
				return JSON.parse(res);
			})
		);
	}

	getPreviousPost(id: string) {
		return this.http.post<string>('http://localhost/', { id }).pipe(
			map((res: string) => {
				return JSON.parse(res);
			})
		);
	}

	deletePost(id: string) {
		return this.http.post<string>('http://localhost/user', { id }).pipe(
			map((res: string) => {
				return res;
			})
		);
	}

	updateLikes(id: string, likes: Array<string>) {
		return this.http.post<string>('http://localhost/', { id, likes }).pipe(
			map((res: string) => {
				return res;
			})
		);
	}

	getAllPosts(): Observable<Array<Post>> {
		return this.http.get<string>('http://localhost/', {}).pipe(
			map((res: string) => {
				return JSON.parse(res);
			})
		);
	}
}
