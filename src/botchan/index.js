// React
import React from 'react'

// Components
import ChapterSelect from '../components/ChapterSelect'
import AsyncComponent from '../components/AsyncComponent'

// Images
import Cover from './sosekiportrait.jpg'


export default () => (
	<ChapterSelect
		root='/botchan'
		imgSrc={Cover}
		imgAlt="Soseki Portrait"
		Left={ChaptersLeft}
		Right={ChaptersRight}
		colorPrimary="rgba(190, 182, 165, 0.9)"
		colorSecondary="rgb(76, 50, 22)"
	/>
);

const ChaptersLeft = [
	{
		title: 'Chapter 1',
		desc: 'growing up ... departure',
		sections: '001 - 011',
		path: '/botchan/chapter1',
		component: AsyncComponent(() => import('./Chapter1/Chapter1'))
	},
	{
		title: 'Chapter 2',
		desc: 'arrival ... introductions',
		sections: '012 - 020',
		path: '/botchan/chapter2',
		component: AsyncComponent(() => import('./Chapter2/Chapter2')) 
	},
	{
		title: 'Chapter 3',
		desc: 'first day ... Tempura Sensei',
		sections: '021 - 028',
		path: '/botchan/chapter3',
		component: AsyncComponent(() => import('./Chapter3/Chapter3')) 
	},
	{
		title: 'Chapter 4',
		desc: 'night duty',
		sections: '029 - 038',
		path: '/botchan/chapter4',
		component: AsyncComponent(() => import('./Chapter4/Chapter4')) 
	},
	{
		title: 'Chapter 5',
		desc: 'fishing with Red Shirt',
		sections: '039 - 048',
		path: '/botchan/chapter5',
		component: AsyncComponent(() => import('./Chapter5/Chapter5')) 
	},
	{
		title: 'Chapter 6',
		desc: 'ice money ... staff meeting',
		sections: '049 - 063',
		path: '/botchan/chapter6',
		component: AsyncComponent(() => import('./Chapter6/Chapter6')) 
	},
];

const ChaptersRight = [
	{
		title: 'Chapter 7',
		desc: 'Madonna',
		sections: '078 - 087',
		path: '/botchan/chapter7',
		component: AsyncComponent(() => import('./Chapter7/Chapter7')) 
	},
	{
		title: 'Chapter 8',
		desc: 'Koga\'s transfer',
		sections: '078 - 087',
		path: '/botchan/chapter8',
		component: AsyncComponent(() => import('./Chapter8/Chapter8')) 
	},
	{
		title: 'Chapter 9',
		desc: 'farewell party',
		sections: '088 - 098',
		path: '/botchan/chapter9',
		component: AsyncComponent(() => import('./Chapter9/Chapter9')) 
	},
	{
		title: 'Chapter 10',
		desc: 'victory day',
		sections: '099 - 109',
		path: '/botchan/chapter10',
		component: AsyncComponent(() => import('./Chapter10/Chapter10')) 
	},
	{
		title: 'Chapter 11',
		desc: 'getting even ... going home',
		sections: '110 - 123',
		path: '/botchan/chapter11',
		component: AsyncComponent(() => import('./Chapter11/Chapter11')) 
	},
];
