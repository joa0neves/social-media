import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  readonly User = this.authenticateService.sessionUser;

  constructor(private authenticateService:AuthenticateService,private router: Router) { }

  ngOnInit(): void {
  }

}
