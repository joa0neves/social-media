import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../types/post';
import { User } from '../types/user';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	constructor(private http: HttpClient) { }

	newPost(title: string, photoUrl: string) {
		return this.http.post<string>('http://localhost:4000/post', { title, photoUrl }).pipe(
			map((res: string) => {
				return res;
			})
		);
	}

  uploadPhoto(file: File){
    const formData: FormData = new FormData();
    formData.append('fileKey', file, file.name);
    return this.http.post('http://localhost:4000/upload', formData);
  }

	deletePost(id: string): Observable<Post> {
		return this.http.delete<Post>(`http://localhost:4000/post/${id}`);
	}

	likePost(id: string): Observable<Post> {
		return this.http.post<Post>(`http://localhost:4000/post/${id}/likes`, {});
	}

	dislikePost(id: string): Observable<Post> {
		return this.http.delete<Post>(`http://localhost:4000/post/${id}/likes`);
	}

	getAllPosts(): Observable<Post[]> {
		return this.http.get<Post[]>('http://localhost:4000/post');
	}

	getPostLikes(id: string): Observable<User[]> {
		return this.http.get<User[]>(`http://localhost:4000/post/${id}/likes`);
	}
}
