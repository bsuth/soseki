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

const Icon = ({click}) => (
	<svg 
		onClick={click}
		className={styles.icon}
		xmlns='http://www.w3.org/2000/svg' viewBox='0 0 51 28'
	>
		<g transform='translate(-16.5 -22.392)'>
			<line x2='36' transform='translate(24.5 36.392)' />
			<line x2='51' transform='translate(16.5 23.392)' />
			<line x2='18' transform='translate(33.5 49.392)' />
		</g>
	</svg>
);

///////// NAVBAR ICON //////////




////////// NAVBAR LINKS //////////

// A simple component to hold all of the <Link> elements of <Navbar>.
// 'cssClass' is assigned by the <Navbar> component to either hide 
// or show <Menu>, depending on the current state of <Navbar>.
//
// This component could be collapsed into <Navbar>, but is kept 
// separate to keep <Navbar>'s 'render()' from getting too cluttered.

const Menu = ({cssClass}) => (
	<ul className={cssClass}>
		<li>
			<Link to="/">Home</Link>
			<hr className={styles.divider} />
		</li>
		<li>
			<Link to="/about">About</Link>
			<hr className={styles.divider} />
		</li>
		<li>
			<Link to="/features">Features</Link>
			<hr className={styles.divider} />
		</li>
		<li>
			<Link to="/media">Media</Link>
			<hr className={styles.divider} />
		</li>
		<li>
			<Link to="/contact">Contact</Link>
			<hr className={styles.divider} />
		</li>
		<li>
			<Link to="/links">Links</Link>
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
		if(window.innerWidth < TABLET) {
			this.state = { 
				toggle: false, 
				hidden: false,
				lastScroll: 0,
			};
		} else {
			this.state = { 
				toggle: true, 
				hidden: false,
				lastScroll: 0,
			};
		}
	}

	render() {
		let { toggle, hidden } = this.state;
		let Title, HR;

		if(!(window.innerWidth < TABLET)) {
			Title = <div className={styles.title}>&gt; Sōseki Project &lt;</div>
			HR = <hr style={{ width: '90%', margin: 'auto' }}/>
		}

		// NOTE: order matters here!
		// -------------------------
		// To save on the extra css of applying z-indices
		// we render <Icon> after <Links>
		return (
			<div id="navbar" className={`${styles.navbar} ${hidden ? styles.hide : styles.show}`}>
				{ Title }
				<Menu cssClass={toggle ? styles.menu : styles.none}/>
				<Icon click={this.handleClick}/>
				{ HR }
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
		if(window.innerWidth < TABLET) {
			this.setState({ toggle: false });
		} else {
			this.setState({ toggle: true });
		}
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
