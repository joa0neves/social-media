export interface Post {
	_id: string;
	author: string;
	title: string;
	photoUrl: string;
	likes: string[];
}

export const posts: Post[] = [
	{
		_id: 'test0',
		author: 'test',
		title: 'This means you have no posts',
		photoUrl: 'https://pbs.twimg.com/media/EAmr-PAWsAEoiWR?format=jpg&name=900x900',
		likes: []
	}];
