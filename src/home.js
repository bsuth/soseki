// React
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Globals
import { TABLET, DESKTOP, MediaEnum } from './resources/jsglobals'

// Styles
import styles from './home.module.scss'

// Components
import Book from './components/book'

// Routes
import Botchan from './botchan/index'
import Sanshiro from './sanshiro/index'
import Kokoro from './kokoro/index'
import Neko from './neko/index'

// Images
import BotchanCover from './resources/botchancover.jpg'
import SanshiroCover from './resources/sanshirocover.jpg'
import KokoroCover from './resources/kokorocover.jpg'
import NekoCover from './resources/nekocover.jpg'


////////// HOME //////////

// This renders the actual view of the Home page,
// as well as <Route> elements to all books.
//
// This component is responsible for all resizing. 
// When the media query changes, it is responsible
// for notifying all of its children in order for
// them to update accordingly. This is controlled
// via 'state' to allow for automatic rerendering.

export default class Home extends React.Component {
	constructor() {
		super();
		
		let mediaQuery = window.innerWidth;
		if(mediaQuery < TABLET) {
			this.state = { mode: MediaEnum.mobile };
		} else if(mediaQuery < DESKTOP) {
			this.state = { mode: MediaEnum.tablet };
		} else {
			this.state = { mode: MediaEnum.desktop };
		}
	}

	// NOTE: The wrapping div is necessary. <CSSTransitions> requires 
	// a hook to apply the various css animation classes and <Switch>
	// does not render any DOM elements.
	render() {
		let { mode } = this.state;
		return (
			<div>
				<Switch>

					{ Books.map(x => <Route key={x.data.title_en} path={x.data.path} component={x.component} /> )}
					<Route exact path="/" component={ () => (
						<div className="page" id={styles.home}>
							{ Books.map(x => <Book 
								key={x.data.title_en} 
								data={x.data} 
								decoration={x.decoration[mode]}
								mode={mode}
							/> )}
						</div>
					)}/>

				</Switch>
			</div>
		);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize = () => {
		let mediaQuery = window.innerWidth;
		if(mediaQuery < TABLET) {
			this.setState({ mode: MediaEnum.mobile });
		} else if(mediaQuery < DESKTOP) {
			this.setState({ mode: MediaEnum.tablet });
		} else {
			this.setState({ mode: MediaEnum.desktop });
		}
	}
}

////////// HOME //////////



////////// BOOKS //////////

// All books that may be accessed via the home page.
// This data is passed into the <Book> component,
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
		decoration: [ // SVGS HERE
			<></>,
			<></>,
			<></>,
		],
		component: (route) => <Botchan />
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
		decoration: [
			<></>,
			<></>,
			<></>,
		],
		component: (route) => <Sanshiro prefix={route.match.path}/>
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
		decoration: [
			<></>,
			<></>,
			<></>,
		],
		component: (route) => <Kokoro prefix={route.match.path}/>
	},
	{
		data: {
			title_en: 'I am a Cat',
			title_jp: '吾輩は猫である',
			year: '1905',
			desc: 'A lost cat takes up residence in the home of a teacher, from where he offers a no-holds-barred commentary on his master, his master\'s household, the neighborhood, Japanese society, and human beings in general.',
			img: NekoCover,
			imgAlt: 'I am a Cat cover',
			path: '/neko',
		},
		decoration: [
			<></>,
			<></>,
			<></>,
		],
		component: (route) => <Neko prefix={route.match.path}/>
	},
	{
		data: {
			title_en: 'Ten Nights of Dreams',
			title_jp: '夢十夜',
			year: '1908',
			desc: 'A series of ten dreams set in various times and touching on various themes.\n1st Night - 100 years\' vigil; 2nd night - the priest and the samurai; 3rd night - child of stone; 4th night - the old man with the snake; 5th Night - racing against the dawn; 6th night - rendering Niō; 7th night - voyage to somewhere; 8th night - the barber shop; 9th night - a mother\'s story; 10th night - the demise of Shōtarō',
			img: NekoCover,
			imgAlt: 'Ten Nights of Dreams cover',
			path: '/neko',
		},
		decoration: [
			<></>,
			<></>,
			<></>,
		],
		component: (route) => <Neko prefix={route.match.path}/>
	},
];

////////// BOOKS //////////
