// React
import React, { Suspense, lazy } from 'react'

// Components
import ChapterSelect from '../components/ChapterSelect'

// Images
import Cover from './sosekiportrait.jpg'

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
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter1 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 2',
		desc: 'arrival ... introductions',
		sections: '012 - 020',
		path: '/botchan/chapter2',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter2 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 3',
		desc: 'first day ... Tempura Sensei',
		sections: '021 - 028',
		path: '/botchan/chapter3',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter3 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 4',
		desc: 'night duty',
		sections: '029 - 038',
		path: '/botchan/chapter4',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter4 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 5',
		desc: 'fishing with Red Shirt',
		sections: '039 - 048',
		path: '/botchan/chapter5',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter5 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 6',
		desc: 'ice money ... staff meeting',
		sections: '049 - 063',
		path: '/botchan/chapter6',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter6 />
			</Suspense>
		)
	},
];

const ChaptersRight = [
	{
		title: 'Chapter 7',
		desc: 'Madonna',
		sections: '078 - 087',
		path: '/botchan/chapter7',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter7 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 8',
		desc: 'Koga\'s transfer',
		sections: '078 - 087',
		path: '/botchan/chapter8',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter8 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 9',
		desc: 'farewell party',
		sections: '088 - 098',
		path: '/botchan/chapter9',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter9 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 10',
		desc: 'victory day',
		sections: '099 - 109',
		path: '/botchan/chapter10',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter10 />
			</Suspense>
		)
	},
	{
		title: 'Chapter 11',
		desc: 'getting even ... going home',
		sections: '110 - 123',
		path: '/botchan/chapter11',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter11 />
			</Suspense>
		)
	},
];
