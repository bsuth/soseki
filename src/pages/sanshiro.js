// React
import React from 'react'

// Components
import ChapterSelect from 'components/ChapterSelect'

// Images
import Cover from 'images/sanshiroindex.jpg'


////////// SANSHIRO //////////

export default () => (
	<ChapterSelect
		imgSrc={Cover}
		imgAlt="Sanshiro Index Image"
		Left={ChaptersLeft}
		Right={ChaptersRight}
		colorPrimary='#f7e8f7'
		colorSecondary='#610561'
	/>
);

////////// SANSHIRO //////////




////////// CHAPTER SELECTION //////////

const ChaptersLeft = [
	{
		title: 'Chapter 1',
		desc: 'traveling to Tōkyō',
		sections: '001 - 015',
		path: '/sanshiro/chapter1',
	},
	{
		title: 'Chapter 2',
		desc: 'meeting Nonomiya',
		sections: '016 - 026',
		path: '/sanshiro/chapter2',
	},
	{
		title: 'Chapter 3',
		desc: 'lectures ... hospital girls',
		sections: '027 - 053',
		path: '/sanshiro/chapter3',
	},
	{
		title: 'Chapter 4',
		desc: 'moving Professor Hirota',
		sections: '054 - 084',
		path: '/sanshiro/chapter4',
	},
	{
		title: 'Chapter 5',
		desc: 'stray sheep',
		sections: '085 - 103',
		path: '/sanshiro/chapter5',
	},
	{
		title: 'Chapter 6',
		desc: 'great dark void ... field day',
		sections: '104 - 130',
		path: '/sanshiro/chapter6',
	},
	{
		title: 'Chapter 7',
		desc: 'Hirota and Haraguchi',
		sections: '131 - 144',
		path: '/sanshiro/chapter7',
	},
];

const ChaptersRight = [
	{
		title: 'Chapter 8',
		desc: 'calling on Mineko',
		sections: '145 - 166',
		path: '/sanshiro/chapter8',
	},
	{
		title: 'Chapter 9',
		desc: 'party ... money from home',
		sections: '167 -186',
		path: '/sanshiro/chapter9',
	},
	{
		title: 'Chapter 10',
		desc: 'Haraguchi painting Mineko',
		sections: '187 - 205',
		path: '/sanshiro/chapter10',
	},
	{
		title: 'Chapter 11',
		desc: 'Reiyoshi exposed',
		sections: '206 - 221',
		path: '/sanshiro/chapter11',
	},
	{
		title: 'Chapter 12',
		desc: 'at the show ... church',
		sections: '222 - 239',
		path: '/sanshiro/chapter12',
	},
	{
		title: 'Chapter 13',
		desc: 'Mineko\'s painting',
		sections: '240 - 241',
		path: '/sanshiro/chapter13',
	},
];

////////// CHAPTER SELECTION //////////
