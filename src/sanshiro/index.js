// React
import React from 'react'

// Components
import ChapterSelect from '../components/ChapterSelect'
import AsyncComponent from '../components/AsyncComponent'

// Images
import Cover from './cover.jpg'


export default () => (
	<ChapterSelect
		root='/sanshiro'
		imgSrc={Cover}
		imgAlt="Soseki Portrait 2"
		Left={ChaptersLeft}
		Right={ChaptersRight}
		colorPrimary='#f7e8f7'
		colorSecondary='#610561'
	/>
);

const ChaptersLeft = [
	{
		title: 'Chapter 1',
		desc: 'traveling to Tōkyō',
		sections: '001 - 015',
		path: '/sanshiro/chapter1',
		component: AsyncComponent(() => import('./Chapter1/Chapter1')),
	},
	{
		title: 'Chapter 2',
		desc: 'meeting Nonomiya',
		sections: '016 - 026',
		path: '/sanshiro/chapter2',
		component: AsyncComponent(() => import('./Chapter2/Chapter2')),
	},
	{
		title: 'Chapter 3',
		desc: 'lectures ... hospital girls',
		sections: '027 - 053',
		path: '/sanshiro/chapter3',
		component: AsyncComponent(() => import('./Chapter3/Chapter3')),
	},
	{
		title: 'Chapter 4',
		desc: 'moving Professor Hirota',
		sections: '054 - 084',
		path: '/sanshiro/chapter4',
		component: AsyncComponent(() => import('./Chapter4/Chapter4')),
	},
	{
		title: 'Chapter 5',
		desc: 'stray sheep',
		sections: '085 - 103',
		path: '/sanshiro/chapter5',
		component: AsyncComponent(() => import('./Chapter5/Chapter5')),
	},
	{
		title: 'Chapter 6',
		desc: 'great dark void ... field day',
		sections: '104 - 130',
		path: '/sanshiro/chapter6',
		component: AsyncComponent(() => import('./Chapter6/Chapter6')),
	},
	{
		title: 'Chapter 7',
		desc: 'Hirota and Haraguchi',
		sections: '131 - 144',
		path: '/sanshiro/chapter7',
		component: AsyncComponent(() => import('./Chapter7/Chapter7')),
	},
];

const ChaptersRight = [
	{
		title: 'Chapter 8',
		desc: 'calling on Mineko',
		sections: '145 - 166',
		path: '/sanshiro/chapter8',
		component: AsyncComponent(() => import('./Chapter8/Chapter8')),
	},
	{
		title: 'Chapter 9',
		desc: 'party ... money from home',
		sections: '167 -186',
		path: '/sanshiro/chapter9',
		component: AsyncComponent(() => import('./Chapter9/Chapter9')),
	},
	{
		title: 'Chapter 10',
		desc: 'Haraguchi painting Mineko',
		sections: '187 - 205',
		path: '/sanshiro/chapter10',
		component: AsyncComponent(() => import('./Chapter10/Chapter10')),
	},
	{
		title: 'Chapter 11',
		desc: 'Reiyoshi exposed',
		sections: '206 - 221',
		path: '/sanshiro/chapter11',
		component: AsyncComponent(() => import('./Chapter11/Chapter11')),
	},
	{
		title: 'Chapter 12',
		desc: 'at the show ... church',
		sections: '222 - 239',
		path: '/sanshiro/chapter12',
		component: AsyncComponent(() => import('./Chapter12/Chapter12')),
	},
	{
		title: 'Chapter 13',
		desc: 'Mineko\'s painting',
		sections: '240 - 241',
		path: '/sanshiro/chapter13',
		component: AsyncComponent(() => import('./Chapter13/Chapter13')),
	},
];
