import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegisterComponent } from './Components/register/register.component';


const routes: Routes = [ {
  path: 'login',
  component: LoginComponent,
  },{
    path: 'register',
    component: RegisterComponent,
  },{
    path: 'private/homepage',
    component: HomePageComponent,
  },{
    path: 'private/profile',
    component: ProfileComponent,
  },{
    path: '**',
    redirectTo: 'private/login',
    pathMatch: 'full'
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
