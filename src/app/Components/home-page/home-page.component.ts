import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Post } from '../../models/post';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentPost: Post = {
    id: 'test',
    author: 'test',
    title: 'test',
    photoUrl: 'https://i.imgur.com/ixlPReX.png',
    likes: []
  };


  constructor(private router: Router,private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }

  logout():void{
    localStorage.clear();
  }

  next():void{

  }

  previous():void {

  }

  like():void{
    const currentUser = localStorage.getItem('sessionUser');
    if(!this.currentPost.likes.includes(this.currentPost.author)){
      this.currentPost.likes.push(this.currentPost.author);
    }else{
      this.currentPost.likes.splice(this.currentPost.likes.indexOf(this.currentPost.author),1);
    }
    //TODO atualizar os likes no backend
  }
}
