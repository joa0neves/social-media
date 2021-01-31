import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(6)],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
  });
  submitted = false;
  loading = false;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private authenticateService:AuthenticateService
    ) { }

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticateService.register(this.f.email.value, this.f.password.value, this.f.firstname.value, this.f.lastname.value)
            .pipe(take(1))
            .subscribe(
              (data) =>{
                this.router.navigate(['login']);
              },
              (error) =>{
                console.log('register failed')
              });




  }
}
