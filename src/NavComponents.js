import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.js'


export default ({ location }) => (
	<Switch location={ location }>
		{ NavRoutes.map(x => 
			<Route exact key={x.id} component={x.component} path={x.path} />
		)}
	</Switch>
);

// Route information for all components that may
// be accessed via the navigation bar. These components
// are each quite light and may be convenient, so it's not 
// very costly to always load them.
//
export const NavRoutes = [
	{
		id: 0,
		path: '/',
		component: () => <Home />
	},
	{
		id: 1,
		path: '/about',
		component: () => <About />
	},
	{
		id: 2,
		path: '/features',
		component: () => <Features />
	},
	{
		id: 3,
		path: '/media',
		component: () => <Media />
	},
	{
		id: 4,
		path: '/contact',
		component: () => <Contact />
	},
	{
		id: 5,
		path: '/links',
		component: () => <Links />
	}
];


////////// ABOUT ///////////

export const About = () => (
	<div className="page">
		<p>Here is the about</p>
	</div>
);

////////// ABOUT ///////////




////////// FEATURES ///////////

export const Features = () => (
	<div className="page">
		<p>Features go here</p>
	</div>
);

////////// FEATURES ///////////




////////// MEDIA ///////////

export const Media = () => (
	<div className="page">
		<p>This is for media</p>
	</div>
);

////////// MEDIA ///////////




////////// CONTACT ///////////

export const Contact = () => (
	<div className="page">
		<p>Contact me for troubles</p>
	</div>
);

////////// CONTACT ///////////




////////// LINKS ///////////

export const Links = () => (
	<div className="page">
		<p>Sausage links</p>
	</div>
);

////////// LINKS ///////////
