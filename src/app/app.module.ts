import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: () => localStorage.getItem('auth_token'),
				allowedDomains: ["localhost:4000"],
				disallowedRoutes: [
					"localhost:4000/auth",
					"localhost:4000/user/new",
					"localhost:4000/forgot"
				]
			}
		}),
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
