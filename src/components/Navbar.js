// React
import React from 'react'
import { Link } from 'gatsby'

// Globals
import { TABLET } from '../resources/jsglobals'

// Styles
import styles from './Navbar.module.scss'


///////// NAVBAR ICON //////////

// An SVG of the icon for the mobile drop down menu. A 'click' 
// prop is passed to assign an onClick listener that acts at the
// <Navbar> level. The className is also passed down to control
// animations between the ddm and cross icons.

const Icon = ({ click, className }) => (
	<svg 
		id={styles.icon}
		className={className}
		onClick={click}
		xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'
	>
		<line x2='40'/>
		<line x2='24'/>
		<line x2='10'/>
	</svg>
);

///////// NAVBAR ICON //////////




////////// NAVBAR LINKS //////////

// A simple component to hold all of the <Link> elements of <Navbar>.
// This component could be collapsed into <Navbar>, but is kept 
// separate to keep <Navbar>'s 'render()' from getting too cluttered.

const Menu = ({ className }) => (
	<ul id={styles.menu} className={className}>
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
// the title/<hr> (tablet & desktop) and toggling 
// the drop down menu (mobile).

export default class Navbar extends React.Component {
	constructor() {
		super();
		this.state = { 
			toggleMenu: false, 
			hidden: false,
			lastScroll: 0,
		};
	}

	render() {
		let { hidden } = this.state;
		let { iconClass, titleClass, menuClass } = this.state;
		let { iconClick } = this;

		return (
			<div id={styles.navbar} className={hidden ? styles.hide : styles.show}>
				<Icon className={iconClass} click={iconClick} />
				<h1 id={styles.title} className={titleClass}> Sōseki Project </h1>
				<Menu id={styles.menu} className={menuClass} />
				<hr className={styles.hr} />
			</div>
		);
	}

	// Add event listeners
	// We call handleResize here to avoid having to
	// make a reference to the window object in the
	// constructor (at Gatsby build time the window
	// object is undefined)
	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		window.addEventListener('scroll', this.handleScroll);
		this.handleResize()
	}

	// Remove event listeners set in componentDidMount()
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.handleScroll);
	}

	// Toggle to display the navbar menu.
	iconClick = () => {
		if(this.state.toggleMenu) {
			this.setState(({ toggleMenu }) => ({
				iconClass: "",
				titleClass: styles.showTitle,
				menuClass: styles.hideMenu,
				toggleMenu: !toggleMenu,
			}));
		} else {
			this.setState(({ toggleMenu }) => ({
				iconClass: styles.cross,
				titleClass: styles.hideTitle,
				menuClass: styles.showMenu,
				toggleMenu: !toggleMenu,
			}));
		}
	}

	// If the media query changes, hide or show the navbar accordingly.
	handleResize = () => {
		this.setState({ 
			toggleMenu: !(window.innerWidth < TABLET)
		});
	}

	// Show or hide the navbar based on whether the user scrolls up or
	// down, respectively. This only takes effect when the user has
	// scrolled at least the height of the navbar itself or if the
	// navbar is already hidden.
	handleScroll = () => {
		let { lastScroll, hidden } = this.state;
		let newScroll = window.pageYOffset || document.documentElement.scrollTop; 
		let navbarHeight = document.getElementById(styles.navbar).offsetHeight;

		if(newScroll > navbarHeight || hidden) {
			// Only show/hide when the user has scrolled at least 50px up
			// or down. This is done to reduce sensitivity.
			if(Math.abs(newScroll - lastScroll) > 50) {
				this.setState({ 
					hidden: (newScroll > lastScroll), 
					lastScroll: newScroll,
				});
			}

			// Set global variable to be read by other components.
			// The <ChapterText> component needs to be able to read this
			// in order to adjust the positioning of hovered vocab defs.
			window.NavHidden = this.state.hidden;
		} 
	}
}

////////// NAVBAR //////////
