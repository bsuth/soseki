import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

export default () => (
	<div id="navbar">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/features">Features</Link>
		<Link to="/media">Media</Link>
		<Link to="/contact">Contact</Link>
		<Link to="/links">Links</Link>
	</div>
);
