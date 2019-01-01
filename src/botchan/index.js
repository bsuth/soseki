// React
import React from 'react'

// Components
import BookIndex from '../components/BookIndex'

// Routes
import Chapter1 from './chapters/Chapter1'
import Chapter2 from './chapters/Chapter2'
import Chapter3 from './chapters/Chapter3'
import Chapter4 from './chapters/Chapter4'
import Chapter5 from './chapters/Chapter5'
import Chapter6 from './chapters/Chapter6'
import Chapter7 from './chapters/Chapter7'
import Chapter8 from './chapters/Chapter8'
import Chapter9 from './chapters/Chapter9'
import Chapter10 from './chapters/Chapter10'
import Chapter11 from './chapters/Chapter11'

// Images
import Cover from './sosekiportrait.jpg'


export default () => (
	<BookIndex
		root='/botchan'
		imgSrc={Cover}
		imgAlt="Soseki Portrait"
		Left={ChaptersLeft}
		Right={ChaptersRight}
		Center={[]}
	/>
);

const ChaptersLeft = [
	{
		title: 'Chapter 1',
		desc: 'growing up ... departure',
		sections: '001 - 011',
		path: '/botchan/chapter1',
		component: () => <Chapter1 />
	},
	{
		title: 'Chapter 2',
		desc: 'arrival ... introductions',
		sections: '012 - 020',
		path: '/botchan/chapter2',
		component: () => <Chapter2 />
	},
	{
		title: 'Chapter 3',
		desc: 'first day ... Tempura Sensei',
		sections: '021 - 028',
		path: '/botchan/chapter3',
		component: () => <Chapter3 />
	},
	{
		title: 'Chapter 4',
		desc: 'night duty',
		sections: '029 - 038',
		path: '/botchan/chapter4',
		component: () => <Chapter4 />
	},
	{
		title: 'Chapter 5',
		desc: 'fishing with Red Shirt',
		sections: '039 - 048',
		path: '/botchan/chapter5',
		component: () => <Chapter5 />
	},
	{
		title: 'Chapter 6',
		desc: 'ice money ... staff meeting',
		sections: '049 - 063',
		path: '/botchan/chapter6',
		component: () => <Chapter6 />
	},
];

const ChaptersRight = [
	{
		title: 'Chapter 7',
		desc: 'Madonna',
		sections: '078 - 087',
		path: '/botchan/chapter7',
		component: () => <Chapter7 />
	},
	{
		title: 'Chapter 8',
		desc: 'Koga\'s transfer',
		sections: '078 - 087',
		path: '/botchan/chapter8',
		component: () => <Chapter8 />
	},
	{
		title: 'Chapter 9',
		desc: 'farewell party',
		sections: '088 - 098',
		path: '/botchan/chapter9',
		component: () => <Chapter9 />
	},
	{
		title: 'Chapter 10',
		desc: 'victory day',
		sections: '099 - 109',
		path: '/botchan/chapter10',
		component: () => <Chapter10 />
	},
	{
		title: 'Chapter 11',
		desc: 'getting even ... going home',
		sections: '110 - 123',
		path: '/botchan/chapter11',
		component: () => <Chapter11 />
	},
];
