import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  newPost(title:string,id:string,photoUrl:string){
    return this.http.post<string>('localhost/user/new',{title,id,photoUrl}).pipe(
      map((res:string)=>{
        return res;
      })
    );
  };

  getNextPost(id:string){
    return this.http.post<string>('localhost/user/new',{id}).pipe(
      map((res:string)=>{
        return res;
      })
    );
  };

  getPreviousPost(id:string){
    return this.http.post<string>('localhost/user/new',{id}).pipe(
      map((res:string)=>{
        return res;
      })
    );
  };

  updateLikes(id:string){

  }

}
