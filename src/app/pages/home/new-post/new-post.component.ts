import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { User } from '../../../types/user';
import { UserService } from '../../../services/user.service';
import { PostService } from '../../../services/post.service';
import { Post } from 'src/app/types/post';
import { ThemePalette } from '@angular/material/core';
import { MaxSizeValidator } from '@angular-material-components/file-input';


@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  color: ThemePalette = 'primary';
  disabled: boolean = false;
  multiple: boolean = false;
  accept: string=".png, .jpg, .jpeg";

  fileControl: FormControl;

	postForm: FormGroup = this.formBuilder.group({
		title: ['', Validators.required]
	});
  photo: File | null = null;
	loading = false;
	submitted = false;
  photoUrl:string='';

	constructor(
    public dialogRef: MatDialogRef<NewPostComponent>,
		private formBuilder: FormBuilder,
		private postService: PostService
	) {
    this.fileControl = new FormControl(this.photo, [
      Validators.required,
      MaxSizeValidator(16 * 1024)
    ])
   }

	ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: any) => {
      console.log(files);
      //this.photo=files
      this.postService.uploadPhoto(files).subscribe(
        (data:any) => {
          this.photoUrl=data.url;
          // do something, if upload success
          console.log('it work')
          }

        );
    })

	}



  uploadFileToActivity() {
    this.postService.newPost(this.f.title.value,this.photoUrl).subscribe(
      data => {
      // do something, if upload success
      console.log('it work')
      }, error => {
        console.log(error);
      });
  }

  onNoClick():void{
    this.dialogRef.close();
  }

	get f() { return this.postForm.controls; }

	onSubmit() {
    this.uploadFileToActivity();
    this.dialogRef.close();

	}
}


