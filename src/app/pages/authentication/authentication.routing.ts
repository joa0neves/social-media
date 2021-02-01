import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{
		path: '',
		component: AuthenticationComponent,
		children: [
			{
				path: '',
				component: LoginComponent
			},
			{
				path: 'register',
				component: RegisterComponent
			},
			{
				path: 'forgot',
				component: ForgotComponent
			}
		]
	},
];

export const AuthenticationRoutes = RouterModule.forChild(routes);
