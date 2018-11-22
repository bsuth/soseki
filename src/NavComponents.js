import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Botchan from './botchan/index'


////////// GLOBALS //////////

// CSS ID's
const HOME_ID = "home";

////////// GLOBALS //////////




////////// INDEX ROUTING //////////

export default ({ location }) => (
	<Switch location={ location }>
		{ NavRoutes.map(x => 
			<Route key={x.path} path={x.path} component={x.component} />
		)}
	</Switch>
);

// Route information for all components that may
// be accessed via the navigation bar. These components
// are each quite light and may be convenient, so it's not 
// very costly to always load them.
//
const NavRoutes = [
	{
		path: '/about',
		component: () => <About />
	},
	{
		path: '/features',
		component: () => <Features />
	},
	{
		path: '/media',
		component: () => <Media />
	},
	{
		path: '/contact',
		component: () => <Contact />
	},
	{
		path: '/links',
		component: () => <Links />
	},
	{
		path: '/',
		component: () => <Home />
	}
];

////////// INDEX ROUTING //////////




////////// HOME //////////

// NOTE: The wrapping div is NECESSARY, as CSSTransitions requires a hook
// to apply the various css animation classes.
const Home = () => (
	<div>
		<Switch>
			{ Books.map(x => <Route key={x.title} path={x.path} component={x.component} /> )}
			<Route exact path="/" component={ () => (
				<div className="page" id={ HOME_ID }>
					{ Books.map(x => <BookPreview key={x.title} data={x} /> )}
				</div>
			)}/>
		</Switch>
	</div>
);

////////// HOME //////////




////////// ABOUT ///////////

const About = () => (
	<div className="page">
		<p>Here is the about</p>
	</div>
);

////////// ABOUT ///////////




////////// FEATURES ///////////

const Features = () => (
	<div className="page">
		<p>Features go here</p>
	</div>
);

////////// FEATURES ///////////




////////// MEDIA ///////////

const Media = () => (
	<div className="page">
		<p>This is for media</p>
	</div>
);

////////// MEDIA ///////////




////////// CONTACT ///////////

const Contact = () => (
	<div className="page">
		<p>Contact me for troubles</p>
	</div>
);

////////// CONTACT ///////////




////////// LINKS ///////////

const Links = () => (
	<div className="page">
		<p>Sausage links</p>
	</div>
);

////////// LINKS ///////////




////////// BOOKS //////////

class BookPreview extends React.Component {
	constructor(props) {
		super(props);
		this.data = props.data;
	}

	render() {
		return(
			<div>
				<Link to={this.data.path}> { this.data.title } </Link>
				<p>{ this.data.desc }</p>
			</div>
		);
	}
}

const Books = [
	{
		title: 'Botchan',
		namae: '坊っちゃん',
		year: '1906',
		desc: 'The most famous and widely read of Sōseki\'s works, this novel starts with anecdotes from Botchan\'s rash and reckless school days. The story then shifts into a hilarious account of his ill-fated first job, a teaching assignment far from Tokyo in "barbaric" small-town Shikoku.',
		img: '',
		path: '/botchan',
		component: (route) => <Botchan prefix={route.match.path}/>
	},
	{
		path: '/sanshiro',
		title: 'Sanshiro',
		namae: '三四郎',
		year: '1908',
		desc: 'The charming story of Sanshirō, a young man who arrives from the country to study at the University of Tokyo. Passive by nature and just beginning to explore life\'s possibilities, Sanshirō cautiously samples the offerings of his new environment: the big city, elite academia, and captivating young ladies.',
		img: ''
	},
	{
		path: '/kokoro',
		title: 'Kokoro',
		namae: 'こゝろ',
		year: '1914',
		desc: 'A young student forms a friendship with an enigmatic older man, whom he refers to as \'Sensei.\' Over time, and finally through a long confessional letter, the younger man comes to know of Sensei\'s past and to understand the reasons behind his eccentric demeanor.',
		img: ''
	},
	{
		path: '/neko',
		title: 'I am a Cat',
		namae: '吾輩は猫ねこである',
		year: '1905',
		desc: 'A lost cat takes up residence in the home of a teacher, from where he offers a no-holds-barred commentary on his master, his master\'s household, the neighborhood, Japanese society, and human beings in general.',
		img: ''
	}
];

////////// BOOKS //////////
