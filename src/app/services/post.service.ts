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
		return this.http.post<string>('http://localhost/post', { title, id, photoUrl }).pipe(
			map((res: string) => {
				return res;
			})
		);
	}

	// getNextPost(id: string): Observable<Post> {
	// 	return this.http.post<string>('http://localhost/', { id }).pipe(
	// 		map((res: string) => {
	// 			return JSON.parse(res);
	// 		})
	// 	);
	// }

	// getPreviousPost(id: string) {
	// 	return this.http.post<string>('http://localhost/', { id }).pipe(
	// 		map((res: string) => {
	// 			return JSON.parse(res);
	// 		})
	// 	);
	// }

	deletePost(id: string) {
		return this.http.delete<Post>(`http://localhost:4000/post/${id}`);
	}

	updateLikes(id: string, likes: Array<string>) {
		return this.http.post<string>('http://localhost/', { id, likes }).pipe(
			map((res: string) => {
				return res;
			})
		);
	}

	getAllPosts(): Observable<Post[]> {
		return this.http.get<Post[]>('http://localhost:4000/post');
	}
}
