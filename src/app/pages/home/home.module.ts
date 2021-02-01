import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutes,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		HomeComponent,
		FeedComponent,
		NewPostComponent,
		PostComponent
	]
})
export class HomeModule { }
