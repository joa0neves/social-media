import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import {posts} from '../../models/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  readonly User = this.authenticateService.sessionUser;

  posts=posts;

  constructor(private authenticateService:AuthenticateService,private router: Router) { }

  ngOnInit(): void {
  }

  delete(id:string):void {

  }

}
