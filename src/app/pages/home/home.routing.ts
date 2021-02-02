import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

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
			},{
				path: 'settings',
				component: SettingsComponent
			}
		]
	}
];

export const HomeRoutes = RouterModule.forChild(routes);
