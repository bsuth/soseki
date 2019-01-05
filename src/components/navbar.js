// React
import React from 'react'
import { Link } from 'react-router-dom'

// Globals
import { TABLET } from '../resources/jsglobals'

// Styles
import styles from './navbar.module.scss'


///////// NAVBAR ICON //////////

// An SVG of the icon for the mobile drop down menu. A single 'click' 
// props is passed to assign an onClick listener that acts at the
// <Navbar> level.

const Icon = ({className, click}) => (
	<svg 
		onClick={click}
		className={`${className} ${styles.icon}`}
		xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'
	>
		<line x2='40'/>
		<line x2='24'/>
		<line x2='10'/>
	</svg>
);

///////// NAVBAR ICON //////////

			//<line x2='24' transform={`translate(${x} ${x}) rotate(45)`} />
			//<line x2='12' transform={'translate(20 20) rotate(-45)'} />
			//<line x2='12' transform={'translate(20 20) rotate(135)'} />



////////// NAVBAR LINKS //////////

// A simple component to hold all of the <Link> elements of <Navbar>.
// 'cssClass' is assigned by the <Navbar> component to either hide 
// or show <Menu>, depending on the current state of <Navbar>.
//
// This component could be collapsed into <Navbar>, but is kept 
// separate to keep <Navbar>'s 'render()' from getting too cluttered.

const Menu = ({className}) => (
	<ul className={className}>
		<li>
			<Link to="/">Home</Link>
			<hr className={styles.underline} />
		</li>
		<li>
			<Link to="/about">About</Link>
			<hr className={styles.underline} />
		</li>
		<li>
			<Link to="/features">Features</Link>
			<hr className={styles.underline} />
		</li>
		<li>
			<Link to="/media">Media</Link>
			<hr className={styles.underline} />
		</li>
		<li>
			<Link to="/contact">Contact</Link>
			<hr className={styles.underline} />
		</li>
		<li>
			<Link to="/links">Links</Link>
			<hr className={styles.underline} />
		</li>
	</ul>
);

////////// NAVBAR LINKS //////////




////////// NAVBAR //////////

// This component controls everything pertaining to
// the navbar, including conditional rendering of
// the title/<hr> (tablet & desktop but not mobile)
// and toggling the drop down menu (mobile).

export default class Navbar extends React.Component {
	constructor() {
		super();
		this.state = { 
			toggle: !(window.innerWidth < TABLET), 
			hidden: false,
			lastScroll: 0,
		};
	}

	render() {
		let { toggle, hidden } = this.state;

		return (
			<div id="navbar" className={`${styles.navbar} ${hidden ? styles.hide : styles.show}`}>

				<Icon className={toggle ? styles.exit : styles.blah } click={this.handleClick}/>
				<div className={styles.row}>
					<h1 className={`${styles.title} ${toggle ? styles.hide1 : styles.show1}`}>
						Sōseki Project
					</h1>
					<Menu className={`${styles.menu} ${toggle ? styles.show2 : styles.hide2}`}/>
				</div>

			</div>
		);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleClick = () => {
		this.setState((state) => ({ 
			toggle: !state.toggle,
		}));
	}

	// If the media query changes, hide or show the navbar accordingly.
	// Ex. Shrinking from tablet to mobile should hide the navbar.
	handleResize = () => {
		
		this.setState({ 
			toggle: !(window.innerWidth < TABLET)
		});
	}

	// Show or hide the navbar based on whether the user scrolls up or
	// down, respectively. This only takes effect when the user has
	// scrolled at least the height of the navbar itself.
	handleScroll = () => {
		let { lastScroll } = this.state;
		let newScroll = window.pageYOffset || document.documentElement.scrollTop; 

		if(newScroll > document.getElementById("navbar").offsetHeight) {
			this.setState({ 
				hidden: (newScroll > lastScroll), 
				lastScroll: newScroll,
			});

			// Set global variable to be read by other components.
			// The <ChapterText> component needs to be able to read this
			// in order to adjust the positioning of hovered vocab defs.
			window.NavHidden = this.state.hidden;
		} 
	}
}

////////// NAVBAR //////////
