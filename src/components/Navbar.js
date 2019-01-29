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
		className={`${styles.icon} ${className}`}
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
// the navbar, including handling all event listeners,
// controlling animation classes, and toggling the
// drop down menu (mobile).

export default class Navbar extends React.Component {
	constructor() {
		super();
		this.state = { 
			toggleMenu: false, 
			lastScroll: 0,
		};
	}

	render() {
		let { navClass, iconClass, titleClass, menuClass } = this.state;
		let { iconClick } = this;

		return (
			<div id={styles.navbar} className={navClass}>
				<Icon className={iconClass} click={iconClick} />
				<h1 className={`${styles.title} ${titleClass}`}> Sōseki Project </h1>
				<Menu className={`${styles.menu} ${menuClass}`} />
				<hr className={styles.hr} />
			</div>
		);
	}

	// NOTE: We call handleResize here to avoid having to make a reference 
	// to the window object in the constructor (at Gatsby build time 
	// the window object is undefined). This attaches some additional
	// event listeners
	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		this.handleResize()
	}

	// Remove all possible event listeners 
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.mobileScroll);
		window.removeEventListener('scroll', this.webScroll);
		window.removeEventListener('mouseenter', this.navHoverEnter);
		window.removeEventListener('mouseleave', this.navHoverLeave);
	}

	// Toggle between showing the title and showing
	// the menu (mobile). Also triggers the animation
	// for the icon transformation
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

	// If the media query changes, adjust the event listeners.
	// The navbar hide/show behavior on scrolling acts differently
	// for the different layouts and requires different listeners.
	handleResize = () => {
		let navRef = document.getElementById(styles.navbar);
		if(window.innerWidth < TABLET) {
			navRef.removeEventListener('mouseenter', this.navHoverEnter);
			navRef.removeEventListener('mouseleave', this.navHoverLeave);
			window.removeEventListener('scroll', this.webScroll);
			window.addEventListener('scroll', this.mobileScroll);
			this.setState({ toggleMenu: false });
		} else {
			window.removeEventListener('scroll', this.mobileScroll);
			window.addEventListener('scroll', this.webScroll);
			this.setState({ toggleMenu: true });
			this.webScroll();
		}
	}

	// Show or hide the navbar based on whether the user scrolls 
	// up or down. Scrolling down hides the navbar while scrolling
	// up will reveal it again.
	mobileScroll = () => {
		let { lastScroll } = this.state;
		let { hideNav, showNav } = styles;
		let newScroll = window.pageYOffset; 

		// Only show/hide when the user has scrolled at least 50px up
		// or down. This is done to reduce sensitivity.
		if(Math.abs(newScroll - lastScroll) > 50) {
			this.setState({ 
				navClass: newScroll > lastScroll ? hideNav : showNav,
				lastScroll: newScroll,
			});

			// Set global variable to be read by other components.
			// The <ChapterText> component needs to be able to read this
			// in order to adjust the positioning of hovered vocab defs.
			window.NavHidden = (newScroll > lastScroll);
		}
	}

	// Hide the navbar when the user has scrolled at least the height
	// of the navbar. The user may reveal the navbar again by either
	// scrolling back to the top of the page or by hovering the 
	// minimized icon that appears when the navbar is hidden.
	webScroll = () => {
		let { navbar, hideNav, showNav } = styles;
		let navRef = document.getElementById(navbar);

		// NOTE: window.NavHidden is a global variable to be read by 
		// other components. The <ChapterText> component needs to be 
		// able to read this in order to adjust the positioning of 
		// hovered vocab defs.
		if(window.pageYOffset > navRef.offsetHeight) {
			navRef.addEventListener('mouseenter', this.navHoverEnter);
			navRef.addEventListener('mouseleave', this.navHoverLeave);
			this.setState({ navClass: hideNav })
			window.NavHidden = true;
		} else {
			navRef.removeEventListener('mouseenter', this.navHoverEnter);
			navRef.removeEventListener('mouseleave', this.navHoverLeave);
			this.setState({ navClass: showNav })
			window.NavHidden = false;
		}
	}

	navHoverEnter = () => {
		this.setState({ navClass: styles.showNav })
	}

	navHoverLeave = () => {
		this.setState({ navClass: styles.hideNav })
	}
}

////////// NAVBAR //////////
