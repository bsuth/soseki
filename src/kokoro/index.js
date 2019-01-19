// React
import React, { Suspense, lazy } from 'react'

// Components
import ChapterSelect from '../components/ChapterSelect'

// Images
import Cover from './cover.jpg'


export default () => (
	<ChapterSelect
		root='/kokoro'
		imgSrc={Cover}
		imgAlt="Soseki in his Study"
		Left={ChaptersLeft}
		Right={ChaptersRight}
		colorPrimary='#dedede'
		colorSecondary='#2d2d2d'
	/>
);

const ChaptersLeft = [
	{
		title: 'Sensei and I 01-09',
		desc: 'seaside ... domestic discord',
		sections: '001 - 018',
		path: '/kokoro/chapter1',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter1 />
			</Suspense>
		)
	},
	{
		title: 'Sensei and I 10-18',
		desc: 'idle life ... holdering the fort',
		sections: '019 - 036',
		path: '/kokoro/chapter2',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter2/>
			</Suspense>
		)
	},
	{
		title: 'Sensei and I 19-27',
		desc: 'father\'s illness ... thesis',
		sections: '037 - 054',
		path: '/kokoro/chapter3',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter3/>
			</Suspense>
		)
	},
	{
		title: 'Sensei and I 28-36',
		desc: 'family assets .. graduation',
		sections: '055 - 072',
		path: '/kokoro/chapter4',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter4/>
			</Suspense>
		)
	},
	{
		title: 'My Parents and I 01-09',
		desc: 'back home ... father\'s relapse',
		sections: '073 - 090',
		path: '/kokoro/chapter5',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter5/>
			</Suspense>
		)
	},
	{
		title: 'My Parents and I 10-18',
		desc: 'caregiving',
		sections: '091 - 108',
		path: '/kokoro/chapter6',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter6/>
			</Suspense>
		)
	},
];

const ChaptersRight = [
	{
		title: 'Sensei\'s Testament 01-09',
		desc: 'deceit ... cashing out',
		sections: '109 - 126',
		path: '/kokoro/chapter7',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter7/>
			</Suspense>
		)
	},
	{
		title: 'Sensei\'s Testament 10-18',
		desc: 'quieter lodgings',
		sections: '127 - 144',
		path: '/kokoro/chapter8',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter8/>
			</Suspense>
		)
	},
	{
		title: 'Sensei\'s Testament 19-27',
		desc: 'bringing in K',
		sections: '145 - 162',
		path: '/kokoro/chapter9',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter9/>
			</Suspense>
		)
	},
	{
		title: 'Sensei\'s Testament 28-36',
		desc: 'Bōshū ... K\'s confession',
		sections: '163 - 180',
		path: '/kokoro/chapter10',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter10/>
			</Suspense>
		)
	},
	{
		title: 'Sensei\'s Testament 37-46',
		desc: 'rivalry ... betrothal',
		sections: '181 - 200',
		path: '/kokoro/chapter11',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter11/>
			</Suspense>
		)
	},
	{
		title: 'Sensei\'s Testament 47-56',
		desc: 'endings',
		sections: '201 - 220',
		path: '/kokoro/chapter12',
		component: () => (
			<Suspense fallback={<div>Loading...</div>}>
				<Chapter12/>
			</Suspense>
		)
	},
];
