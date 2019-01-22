// React
import React from 'react'

// Components
import Layout from './src/components/Layout'

// Global Styles
import './src/resources/cssglobals.scss'


////////// PAGE WRAP //////////

// Use Gatsby's Browser API to wrap the page
// element with our custom <Layout> component.
// This prevents <Layout> from unmounting on
// page change. The 'element' props is the React 
// element built by Gatsby and props is passed so
// the <CSSTransition> component can use the location
// to determine when to deploy animations between pages.

export const wrapPageElement = ({ element, props }) => (
	<Layout {...props}>
		{ element }
	</Layout>
);

////////// PAGE WRAP //////////
