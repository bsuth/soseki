// React packages
import React from 'react'
import ReactDOM from 'react-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

// pages for navbar
import Navbar from './components/navbar'
import Home from './home'
import About from './about'
import Features from './features'
import Media from './media'
import Contact from './contact'
import Links from './links'

// styling
import './index.scss'




////////// CONTENT //////////

// Content wrapper for transitions between pages.
// The outer <Route> is needed to set the key of <CSSTransition>
const Content = () => (
	<Route render={({ location }) => (
		<TransitionGroup style={{ width: '100%' }}>
			<CSSTransition key={ location.key } classNames="fade" timeout={ 300 } unmountOnExit >

				<Switch location={ location }>
					{ Routes.map(x => 
						<Route key={x.path} path={x.path} component={x.component} />
					)}
				</Switch>

			</CSSTransition>
		</TransitionGroup>
	)}/>
);


// Route information for all components that may
// be accessed via the navbar. 
const Routes = [
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

////////// CONTENT //////////








////////// HEAD TAG ///////////

// The <head></head> element of the root html.
const Head = () => (
	<Helmet> 
		<title>Sōseki Project</title>
		<html lang="en" />
		<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
		<link href="https://fonts.googleapis.com/css?family=Cinzel|Cormorant+Garamond" rel="stylesheet"/>
	</Helmet>
);

////////// HEAD TAG ///////////








/////////// MAIN //////////

// 0) Router (for react-router)
	// 0) Wrapper (for react-router/css) 
	// Note: BrowserRouter can only have one child
		// 0) <head></head>
		// 1) Navbar
		// 2) Content wrapper
var Main = (
	<BrowserRouter>
		<div>
			<Head />
			<Navbar />
			<Content />
		</div>
	</BrowserRouter>
);

ReactDOM.render(Main, document.getElementById('root'));

/////////// MAIN //////////
