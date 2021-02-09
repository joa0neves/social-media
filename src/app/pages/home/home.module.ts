import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FeedCardModule } from '../../components/feed-card/feed-card.module';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutes,
		FormsModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		FeedCardModule,
		MatMenuModule,
		MatDividerModule,
		HeaderModule
	],
	declarations: [
		HomeComponent,
		FeedComponent,
		NewPostComponent,
		ProfileComponent,
		SettingsComponent
	]
})
export class HomeModule { }
