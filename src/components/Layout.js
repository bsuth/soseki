// React
import React from 'react'
import { Helmet } from 'react-helmet'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Components
import Navbar from './Navbar'
import Depreciate from './Depreciate'

// Styles
import './Layout.scss'


////////// HEAD TAG ///////////

// The <head></head> element of the root html.
//
// NOTE: The root html page and <head> element
// can be edited from the /public/ folder. 
// We simply choose to use <Helmet> here to keep 
// all source files in one location.

const Head = () => (
	<Helmet> 
		<title>Sōseki Project</title>
		<html lang="en" />
		<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
	</Helmet>
);

////////// HEAD TAG ///////////




/////////// LAYOUT //////////

// This is wrapped around every page
// using the wrapPageElement API from
// gatsby-browser. The wrapping <div>
// is necessary, otherwise 'gatsby build'
// will have trouble finding the index node.

export default ({ children, location }) => (
	<div>
		<Head />
		<Navbar />
		<TransitionGroup>
			<CSSTransition key={location.key} classNames="fade" timeout={300}>
				<div className="page">
					{ children }
				</div>
			</CSSTransition>
		</TransitionGroup>
		<Depreciate />
	</div>
);

/////////// LAYOUT //////////
