import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { TABLET, DESKTOP, MediaEnum } from './resources/jsglobals'

import Botchan from './botchan/index'
import Sanshiro from './sanshiro/index'
import Kokoro from './kokoro/index'
import Neko from './neko/index'

import Book from './components/book'

import BotchanCover from './resources/botchancover.jpg'
import SanshiroCover from './resources/sanshirocover.jpg'
import KokoroCover from './resources/kokorocover.jpg'
import NekoCover from './resources/nekocover.jpg'

import { BotchanD1, SanshiroD1 } from './components/decoration'




////////// HOME //////////

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

	// NOTE: The wrapping div is necessary, as CSSTransitions requires a hook
	// to apply the various css animation classes.
	render() {
		let { mode } = this.state;
		return (
			<div>
				<Switch>

					{ Books.map(x => <Route key={x.data.title_en} path={x.data.path} component={x.component} /> )}
					<Route exact path="/" component={ () => (
						<div className="page" id="home">
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
		decoration: [ 
			<BotchanD1 />,
			<BotchanD1 />,
			<></>, // No decorations for desktop
		],
		component: (route) => <Botchan prefix={route.match.path}/>
	},
	//{
		//title_en: 'Sanshiro',
		//title_jp: '三四郎',
		//year: '1908',
		//desc: 'The charming story of Sanshirō, a young man who arrives from the country to study at the University of Tokyo. Passive by nature and just beginning to explore life\'s possibilities, Sanshirō cautiously samples the offerings of his new environment: the big city, elite academia, and captivating young ladies.',
		//img: SanshiroCover,
		//imgAlt: 'Sanshiro cover',
		//path: '/sanshiro',
		//decoration: <SanshiroD1 />,
		//component: (route) => <Sanshiro prefix={route.match.path}/>
	//},
	//{
		//title_en: 'Kokoro',
		//title_jp: 'こゝろ',
		//year: '1914',
		//desc: 'A young student forms a friendship with an enigmatic older man, whom he refers to as \'Sensei.\' Over time, and finally through a long confessional letter, the younger man comes to know of Sensei\'s past and to understand the reasons behind his eccentric demeanor.',
		//img: KokoroCover,
		//imgAlt: 'Kokoro cover',
		//path: '/kokoro',
		//component: (route) => <Kokoro prefix={route.match.path}/>
	//},
	//{
		//title_en: 'I am a Cat',
		//title_jp: '吾輩は猫である',
		//year: '1905',
		//desc: 'A lost cat takes up residence in the home of a teacher, from where he offers a no-holds-barred commentary on his master, his master\'s household, the neighborhood, Japanese society, and human beings in general.',
		//img: NekoCover,
		//imgAlt: 'I am a Cat cover',
		//path: '/neko',
		//component: (route) => <Neko prefix={route.match.path}/>
	//},
];

////////// BOOKS //////////
