// React
import React from 'react'
import Helmet from 'react-helmet'

// Gatsby
import PageTransition from 'gatsby-plugin-page-transitions'

// Components
import Navbar from './Navbar'

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
		<link href="https://fonts.googleapis.com/css?family=Cinzel|Cormorant+Garamond" rel="stylesheet"/>
	</Helmet>
);

////////// HEAD TAG ///////////




/////////// LAYOUT //////////

// This is wrapped around every page
// using the wrapPageElement API from
// gatsby-browser.

export default ({ children }) => (
	<>
		<Head />
		<Navbar />
		<PageTransition>
			<div className="page">
				{ children }
			</div>
		</PageTransition>
	</>
);

/////////// LAYOUT //////////
