// React
import React from 'react'
import ReactDOM from 'react-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

// Styles
import './index.scss'

// Routes
import Navbar from './components/navbar'
import Home from './home'
import About from './about'
import Features from './features'
import Media from './media'
import Contact from './contact'
import Links from './links'


////////// HEAD TAG ///////////

// The <head></head> element of the root html.
// This is required, as the actual html page will be
// generated for us.
//
// NOTE: The root html page and <head> element
// can be edited at /soseki/public/index.html. 
// I simply chose to use <Helmet> here to keep 
// all source files in one location.

const Head = () => (
	<Helmet> 
		<title>Sōseki Project</title>
		<html lang="en" />
		<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
		<link href="https://fonts.googleapis.com/css?family=Cinzel|Cormorant+Garamond" rel="stylesheet"/>
	</Helmet>
);

////////// HEAD TAG ///////////




////////// CONTENT //////////

// Content wrapper for transitions between pages.
// The outer <Route> is needed to set the key of <CSSTransition>
//
// NOTE: <CSSTransition> depends on css classes, whose names are
// derived from the prop 'classNames' (in this case "fade"). These
// classes may be found in './index.scss'. The timeout prop should
// match the maximum duration of the css transition classes.
//
// NOTE: <Switch> is needed for both smooth transition and to default
// to the 404 error page. Details on why <Switch> is useful for these
// situations can be found here: 
// https://reacttraining.com/react-router/core/api/Switch

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


// Routes that may be accessed on any page (via navbar). 
const Routes = [
	{
		path: '/about',
		component: About,
	},
	{
		path: '/features',
		component: Features
	},
	{
		path: '/media',
		component: Media,
	},
	{
		path: '/contact',
		component: Contact,
	},
	{
		path: '/links',
		component: Links,
	},
	{
		path: '/',
		component: Home,
	},
];

////////// CONTENT //////////




/////////// MAIN //////////

// This begins all of the control flow for the entire website.
// The <div> element is necessary, as <BrowserRouter> may only
// be allowed one child.
//
// NOTE: Since we use ReactDOM.render() to attach this element,
// it must come after the definitions of all components it uses
// (namely <Head> and <Content>, as they share the same file).
// For this reason <Main> must stay at the bottom of this page,
// but this may be changed if <Head> and <Content> are imported.

const Main = () => (
	<BrowserRouter>
		<div>
			<Head />
			<Navbar />
			<Content />
		</div>
	</BrowserRouter>
);

ReactDOM.render(<Main/>, document.getElementById('root'));

/////////// MAIN //////////
