import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    photoURL: ['', Validators.required]
  });
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private postService:PostService,private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }

  get f() { return this.postForm.controls; }

  onSubmit() {
    this.submitted = true;
    const currentUser = this.authenticateService.sessionUser;

    // stop here if form is invalid
    if (this.postForm.invalid) {
        return;
    }

    this.loading = true;
    if(currentUser){
      this.postService.newPost(this.f.title.value,currentUser.id, this.f.photoURL.value)
        .pipe(take(1))
        .subscribe(
          () => {
            //navigate to private homepage
            this.router.navigate(['private/homepage']);
          },
          (error) => {
            console.log('submission failed');
          });}

  }



}