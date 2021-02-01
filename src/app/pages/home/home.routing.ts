import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: FeedComponent
			},
			{
				path: 'new-post',
				component: NewPostComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			}
		]
	}
];

export const HomeRoutes = RouterModule.forChild(routes);
