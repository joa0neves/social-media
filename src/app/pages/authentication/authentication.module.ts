import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutes } from './authentication.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthenticationComponent } from './authentication.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [
		CommonModule,
		AuthenticationRoutes,
		FormsModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	],
	declarations: [
		AuthenticationComponent,
		LoginComponent,
		RegisterComponent,
		ForgotComponent
	]
})
export class AuthenticationModule { }
