import React from 'react'
import { Link } from 'react-router-dom'

import { TABLET } from '../resources/jsglobals'
import styles from './navbar.module.scss'


///////// NAVBAR ICON //////////

// An SVG of the icon for the mobile drop down menu. A single 'click' 
// props is passed to assign an onClick listener that acts at the
// <Navbar> level.
const NavbarIcon = ({click}) => (
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
// or show Links, depending on the current state of <Navbar>.
//
// This class could be collapsed into <Navbar>, but is kept separate
// to keep <Navbar> from getting too cluttered.
const NavbarLinks = ({cssClass}) => (
	<div className={cssClass}>
		<Link to="/">Home</Link>
		<hr className={styles.divider} />
		<Link to="/about">About</Link>
		<hr className={styles.divider} />
		<Link to="/features">Features</Link>
		<hr className={styles.divider} />
		<Link to="/media">Media</Link>
		<hr className={styles.divider} />
		<Link to="/contact">Contact</Link>
		<hr className={styles.divider} />
		<Link to="/links">Links</Link>
	</div>
);

////////// NAVBAR LINKS //////////




////////// NAVBAR //////////

export default class Navbar extends React.Component {
	constructor() {
		super();
		if(window.innerWidth < TABLET) {
			this.state = { toggle: false, mobile: true };
		} else {
			this.state = { toggle: true, mobile: false };
		}
	}

	render() {
		let { mobile, toggle } = this.state;
		let Title, HR;

		if(!mobile) {
			Title = <div className={styles.title}>&gt; Sōseki Project &lt;</div>
			HR = <hr style={{ width: '90%' }}/>
		}

		// NOTE: order matters here!
		// -------------------------
		// To save on the extra css of applying z-indices
		// we render NavbarIcon after NavbarLinks.
		return (
			<div id={styles.navbar}>
				{ Title }
				<NavbarLinks cssClass={toggle ? styles.linkWrapper : styles.none}/>
				<NavbarIcon click={this.handleClick}/>
				{ HR }
			</div>
		);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	// Handle onClick of NavbarIcon.
	handleClick = () => {
		this.setState((state) => ({ 
			toggle: !state.toggle,
		}));
	}

	// Show or hide NavbarLinks based on current window size.
	handleResize = () => {
		if(window.innerWidth < TABLET) {
			this.setState({ toggle: false, mobile: true });
		} else {
			this.setState({ toggle: true, mobile: false });
		}
	}
}

////////// NAVBAR //////////
