// React
import React from 'react'

// Components
import Book from '../components/Book'

// Globals/SVGs
import { TABLET, DESKTOP, MediaEnum } from '../resources/jsGlobalVars'
import * as SVG from '../resources/svg'

// Images
import BotchanCover from '../images/botchancover.jpg'
import SanshiroCover from '../images/sanshirocover.jpg'
import KokoroCover from '../images/kokorocover.jpg'
import TenNightsCover from '../images/tennightscover.jpg'
import BunchoCover from '../images/bunchocover.jpg'
import TowerCover from '../images/towercover.jpg'


////////// INDEX //////////

// NOTE: When the media query changes, this component 
// is responsible for notifying all of its children to
// update accordingly. This is controlled via 'state' to 
// allow for automatic rerendering.

export default class Index extends React.Component {
	constructor() {
		super();
		this.state = { mode: MediaEnum.mobile }
	}

	render() {
		let { mode } = this.state;
		return (
			<div id="index">
				{ Books.map(x => 
					<Book 
						key={ x.data.title_en } 
						data={ x.data } 
						mode={ mode }
						svg={ x.svg[mode === MediaEnum.mobile ? 0 : 1 ] }
					/>
				)}
			</div>
		);
	}

	// We call handleResize here to avoid having to
	// make a reference to the window object in the
	// constructor (at Gatsby build time the window
	// object is undefined)
	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		this.handleResize();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize = () => {
		let mediaQuery = window.innerWidth;
		let { mode } = this.state;

		// NOTE: We need to explicitly check the current value of
		// 'mode' in order to make sure we are not unnecessarily
		// rerendering everything.
		if(mediaQuery < TABLET) {
			if(mode !== MediaEnum.mobile) {
				this.setState({ mode: MediaEnum.mobile });
			}
		} else if(mediaQuery < DESKTOP) {
			if(mode !== MediaEnum.tablet) {
				this.setState({ mode: MediaEnum.tablet });
			}
		} else if(mode !== MediaEnum.desktop) {
			this.setState({ mode: MediaEnum.desktop });
		}
	}
}

////////// INDEX //////////



////////// BOOKS //////////

// All books that may be accessed via the home page.
// Each element is passed into the <Book> component,
// which takes care of all rendering.

const Books = [
	{
		data: {
			title_en: 'Botchan',
			title_jp: '坊っちゃん',
			year: '1906',
			desc: 'The most famous and widely read of Sōseki\'s works, this novel starts with anecdotes from Botchan\'s rash and reckless school days. The story then shifts into a hilarious account of his ill-fated first job, a teaching assignment far from Tokyo in "barbaric" small-town Shikoku.',
			img: BotchanCover,
			imgAlt: 'Botchan cover',
			path: '/botchan',
		},
		svg: [
			<SVG.Botchan_Mobile />,
			<SVG.Botchan_Tablet />
		],
	},
	{
		data: {
			title_en: 'Sanshiro',
			title_jp: '三四郎',
			year: '1908',
			desc: 'The charming story of Sanshirō, a young man who arrives from the country to study at the University of Tokyo. Passive by nature and just beginning to explore life\'s possibilities, Sanshirō cautiously samples the offerings of his new environment: the big city, elite academia, and captivating young ladies.',
			img: SanshiroCover,
			imgAlt: 'Sanshiro cover',
			path: '/sanshiro',
		},
		svg: [
			<SVG.Sanshiro_Mobile />,
			<SVG.Sanshiro_Tablet />,
		],
	},
	{
		data: {
			title_en: 'Kokoro',
			title_jp: 'こゝろ',
			year: '1914',
			desc: 'A young student forms a friendship with an enigmatic older man, whom he refers to as \'Sensei.\' Over time, and finally through a long confessional letter, the younger man comes to know of Sensei\'s past and to understand the reasons behind his eccentric demeanor.',
			img: KokoroCover,
			imgAlt: 'Kokoro cover',
			path: '/kokoro',
		},
		svg: [
			<SVG.Kokoro_Mobile />,
			<SVG.Kokoro_Tablet />,
		],
	},
	{
		data: {
			title_en: 'Ten Nights of Dreams',
			title_jp: '夢十夜',
			year: '1908',
			desc: 'A series of ten dreams set in various times and touching on various themes.\n1st Night - 100 years\' vigil; 2nd night - the priest and the samurai; 3rd night - child of stone; 4th night - the old man with the snake; 5th Night - racing against the dawn; 6th night - rendering Niō; 7th night - voyage to somewhere; 8th night - the barber shop; 9th night - a mother\'s story; 10th night - the demise of Shōtarō',
			img: TenNightsCover,
			imgAlt: 'Ten Nights of Dreams cover',
			path: '/tennights',
		},
		svg: [
			'',
			'',
		],
	},
	{
		data: {
			title_en: 'Buncho',
			title_jp: '文鳥',
			year: '1908',
			desc: 'A solitary writer, prone to musing on a beautiful woman he once knew, toils away in his cold study to complete a novel. At the urging of a friend, he takes a bunchō (Japanese rice sparrow) as a pet. The story traces his relationship with the bird, from initial apprehension, to fascination, to indifference, and finally, to tragic neglect.',
			img: BunchoCover,
			imgAlt: 'Buncho cover',
			path: '/buncho',
		},
		svg: [
			'',
			'',
		],
	},
	{
		data: {
			title_en: 'The Tower of London',
			title_jp: '倫敦塔',
			year: '1905',
			desc: 'An impressionistic account of the author\'s sole excursion to the Tower of London during his two years of study abroad in the city. A mix of memories from the visit and fantasies evoked by the sights and sounds and history of the site.',
			img: TowerCover,
			imgAlt: 'The Tower of London cover',
			path: '/london',
		},
		svg: [
			'',
			'',
		],
	},
];

////////// BOOKS //////////
