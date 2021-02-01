export interface Post {
	id: string;
	author: string;
	title: string;
	photoUrl: string;
	likes: string[];
}

export const posts: Post[] = [
	{
		id: 'test0',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	}, {
		id: 'test1',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	}, {
		id: 'test2',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	}, {
		id: 'test3',
		author: 'test',
		title: 'test',
		photoUrl: 'https://i.imgur.com/ixlPReX.png',
		likes: []
	}];
