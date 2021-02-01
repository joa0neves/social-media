import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutes } from './authentication.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
	imports: [
		CommonModule,
		AuthenticationRoutes,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		AuthenticationComponent,
		LoginComponent,
		RegisterComponent,
		ForgotComponent
	]
})
export class AuthenticationModule { }
