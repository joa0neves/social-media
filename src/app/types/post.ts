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
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	}, {
		_id: 'test1',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	}, {
		_id: 'test2',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	}, {
		_id: 'test3',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	}];
