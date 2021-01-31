import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  readonly User = this.authenticateService.sessionUser;
  show:boolean = false;

  constructor(private authenticateService:AuthenticateService) {
   }

  ngOnInit(): void {
  }

  delete():void{
    //delete post
  }

}
