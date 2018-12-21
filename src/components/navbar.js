import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

const NavbarIcon = ({click}) => (
	<svg 
		onClick={click}
		className="navbarIcon"
		xmlns='http://www.w3.org/2000/svg' viewBox='0 0 51 28'
	>
		<g transform='translate(-16.5 -22.392)'>
			<line x2='36' transform='translate(24.5 36.392)' />
			<line x2='51' transform='translate(16.5 23.392)' />
			<line x2='18' transform='translate(33.5 49.392)' />
		</g>
	</svg>
);

export default class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			toggle: false,
		};
	}

	handleClick = () => {
		this.setState((state) => ({ 
			toggle: !state.toggle,
		}));
	}

	render() {
		let tabs;
		if (this.state.toggle) {
			tabs = (
				<div className="navWrapper">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/features">Features</Link>
					<Link to="/media">Media</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/links">Links</Link>
				</div>
			)
		}

		return (
			//
			// NOTE: order matters here!
			// -------------------------
			// To save on the extra css of applying z-indices,
			// we render the NavbarIcon after the tabs
			// 
			<div id="navbar">
				{ tabs }
				<NavbarIcon click={this.handleClick}/>
			</div>
		);
	}
}
