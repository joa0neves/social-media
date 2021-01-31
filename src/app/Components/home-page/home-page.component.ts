import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private currentPost: Post = {
    author: '',
    title: 'test',
    photoUrl: '',
    likes: []
  };


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next():void{

  }

  previous():void {

  }
}
