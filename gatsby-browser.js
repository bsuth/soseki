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
// element built by Gatsby.

export const wrapPageElement = ({ element, props }) => (
	<Layout>
		{ element }
	</Layout>
);

////////// PAGE WRAP //////////
