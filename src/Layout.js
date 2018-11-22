import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import  NavComponents from './NavComponents'
import  BookComponents from './BookComponents'
import './Layout.scss'


/////////// GLOBALS //////////

const title = "Sōseki Project";

/////////// GLOBALS //////////




/////////// LAYOUT //////////


// 1) Wrapper
// 2) <head>
// 3) Navbar
// 4) Content wrapper (with transitions)
export default () => (
	<BrowserRouter>
		<div id='layout'>
			<Head />
			<Navbar />
			<Content />
		</div>
	</BrowserRouter>
);

/////////// LAYOUT //////////




////////// CONTENT //////////

const Content = () => (
	<Route render={({ location }) => (
		<div id='content' > 
			<TransitionGroup style={{ width: '100%' }}>
				<CSSTransition key={ location.key } classNames="fade" timeout={ 300 } unmountOnExit >

					<div>
						<NavComponents location={location}/>
						<BookComponents location={location}/>
					</div>

				</CSSTransition>
			</TransitionGroup>
		</div>
	)}/>
);

////////// CONTENT //////////




////////// ROUTING ///////////

const Navbar = () => (
	<div id="navbar">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/features">Features</Link>
		<Link to="/media">Media</Link>
		<Link to="/contact">Contact</Link>
		<Link to="/links">Links</Link>
	</div>
);

////////// NAVBAR ///////////




////////// HEAD //////////

const Head = () => (
	<Helmet> 
		<title> { title } </title>
		<html lang="en" />
		<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" />
	</Helmet>
);

////////// HEAD //////////
