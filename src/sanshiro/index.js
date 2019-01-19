// React
import React, { Suspense, lazy } from 'react'

// Components
import ChapterSelect from '../components/ChapterSelect'

// Images
import Cover from './cover.jpg'

// Routes
const Chapter1 = lazy(() => import('./Chapter1/Chapter1'));
const Chapter2 = lazy(() => import('./Chapter2/Chapter2'));
const Chapter3 = lazy(() => import('./Chapter3/Chapter3'));
const Chapter4 = lazy(() => import('./Chapter4/Chapter4'));
const Chapter5 = lazy(() => import('./Chapter5/Chapter5'));
const Chapter6 = lazy(() => import('./Chapter6/Chapter6'));
const Chapter7 = lazy(() => import('./Chapter7/Chapter7'));
const Chapter8 = lazy(() => import('./Chapter8/Chapter8'));
const Chapter9 = lazy(() => import('./Chapter9/Chapter9'));
const Chapter10 = lazy(() => import('./Chapter10/Chapter10'));
const Chapter11 = lazy(() => import('./Chapter11/Chapter11'));
const Chapter12 = lazy(() => import('./Chapter12/Chapter12'));
const Chapter13 = lazy(() => import('./Chapter13/Chapter13'));


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
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter1 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 2',
		desc: 'meeting Nonomiya',
		sections: '016 - 026',
		path: '/sanshiro/chapter2',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter2/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 3',
		desc: 'lectures ... hospital girls',
		sections: '027 - 053',
		path: '/sanshiro/chapter3',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter3/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 4',
		desc: 'moving Professor Hirota',
		sections: '054 - 084',
		path: '/sanshiro/chapter4',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter4/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 5',
		desc: 'stray sheep',
		sections: '085 - 103',
		path: '/sanshiro/chapter5',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter5/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 6',
		desc: 'great dark void ... field day',
		sections: '104 - 130',
		path: '/sanshiro/chapter6',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter6/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 7',
		desc: 'Hirota and Haraguchi',
		sections: '131 - 144',
		path: '/sanshiro/chapter7',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter7/>
			</Suspense>
		)
	},
];

const ChaptersRight = [
	{
		title: 'Chapter 8',
		desc: 'calling on Mineko',
		sections: '145 - 166',
		path: '/sanshiro/chapter8',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter8/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 9',
		desc: 'party ... money from home',
		sections: '167 -186',
		path: '/sanshiro/chapter9',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter9/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 10',
		desc: 'Haraguchi painting Mineko',
		sections: '187 - 205',
		path: '/sanshiro/chapter10',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter10/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 11',
		desc: 'Reiyoshi exposed',
		sections: '206 - 221',
		path: '/sanshiro/chapter11',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter11/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 12',
		desc: 'at the show ... church',
		sections: '222 - 239',
		path: '/sanshiro/chapter12',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter12/>
			</Suspense>
		)
	},
	{
		title: 'Chapter 13',
		desc: 'Mineko\'s painting',
		sections: '240 - 241',
		path: '/sanshiro/chapter13',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter13/>
			</Suspense>
		)
	},
];
