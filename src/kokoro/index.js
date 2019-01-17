// React
import React from 'react'

// Components
import ChapterSelect from '../components/ChapterSelect'

// Routes
import Chapter1 from './Chapter1/Chapter1'
import Chapter2 from './Chapter2/Chapter2'
import Chapter3 from './Chapter3/Chapter3'
import Chapter4 from './Chapter4/Chapter4'
import Chapter5 from './Chapter5/Chapter5'
import Chapter6 from './Chapter6/Chapter6'
import Chapter7 from './Chapter7/Chapter7'
import Chapter8 from './Chapter8/Chapter8'
import Chapter9 from './Chapter9/Chapter9'
import Chapter10 from './Chapter10/Chapter10'
import Chapter11 from './Chapter11/Chapter11'
import Chapter12 from './Chapter12/Chapter12'

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
		component: Chapter1
	},
	{
		title: 'Sensei and I 10-18',
		desc: 'idle life ... holdering the fort',
		sections: '019 - 036',
		path: '/kokoro/chapter2',
		component: Chapter2
	},
	{
		title: 'Sensei and I 19-27',
		desc: 'father\'s illness ... thesis',
		sections: '037 - 054',
		path: '/kokoro/chapter3',
		component: Chapter3
	},
	{
		title: 'Sensei and I 28-36',
		desc: 'family assets .. graduation',
		sections: '055 - 072',
		path: '/kokoro/chapter4',
		component: Chapter4
	},
	{
		title: 'My Parents and I 01-09',
		desc: 'back home ... father\'s relapse',
		sections: '073 - 090',
		path: '/kokoro/chapter5',
		component: Chapter5
	},
	{
		title: 'My Parents and I 10-18',
		desc: 'caregiving',
		sections: '091 - 108',
		path: '/kokoro/chapter6',
		component: Chapter6
	},
	{
		title: 'Sensei\'s Testament 01-09',
		desc: 'deceit ... cashing out',
		sections: '109 - 126',
		path: '/kokoro/chapter7',
		component: Chapter7
	},
];

const ChaptersRight = [
	{
		title: 'Sensei\'s Testament 10-18',
		desc: 'quieter lodgings',
		sections: '127 - 144',
		path: '/kokoro/chapter8',
		component: Chapter8
	},
	{
		title: 'Sensei\'s Testament 19-27',
		desc: 'bringing in K',
		sections: '145 - 162',
		path: '/kokoro/chapter9',
		component: Chapter9
	},
	{
		title: 'Sensei\'s Testament 28-36',
		desc: 'Bōshū ... K\'s confession',
		sections: '163 - 180',
		path: '/kokoro/chapter10',
		component: Chapter10
	},
	{
		title: 'Sensei\'s Testament 37-46',
		desc: 'rivalry ... betrothal',
		sections: '181 - 200',
		path: '/kokoro/chapter11',
		component: Chapter11
	},
	{
		title: 'Sensei\'s Testament 47-56',
		desc: 'endings',
		sections: '201 - 220',
		path: '/kokoro/chapter12',
		component: Chapter12
	},
];
