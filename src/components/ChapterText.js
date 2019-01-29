// React
import React from 'react'

// Gatsby
import { graphql } from 'gatsby'
import MDXRenderer from "gatsby-mdx/mdx-renderer";

// Globals
import { TABLET, NAVBAR_HEIGHT_M, NAVBAR_TOTAL } from '../resources/jsglobals'

// Styles
import './ChapterText.scss'


////////// CHAPTERTEXT //////////

// This component is responsible for rendering the
// text pages. It also implements some features unavailable 
// to pure css, such as changing the text color of the parent div
// when hovering a vocab term and adjusting the height of
// the vocab defs depending on whether the navbar is 
// currently hidden or not.

export default class ChapterText extends React.Component {
	constructor({ data: { mdx } }) {
		super();
		this.mdx = mdx;
	}

	render() {
		let { frontmatter, code } = this.mdx;
		return(
			<div onClick={void(0)}>
				<h2 className="chapter_title">
					{ frontmatter.title }
				</h2>
				<hr style={{ width: '45px', margin: 'auto' }} />
				<MDXRenderer>{ code.body }</MDXRenderer>
			</div>
		);
	}

	// Attach hover event listeners to all vocab elements and
	// a scroll event listener for the window.
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		let vocabArray = document.getElementsByClassName("vocab");

		for(let i = 0; i < vocabArray.length; ++i) {
			vocabArray[i].addEventListener('mouseenter', this.handleEnter);
			vocabArray[i].addEventListener('mouseleave', this.handleExit);
		}
	}

	// When the user is directed to this page via a link,
	// this is required in order to attach the event listeners
	// to the 'vocab' class elements. I'm not quite sure why this
	// is necessary, but only attaching the event listeners in
	// componentDidMount() does not suffice, and all elements 
	// will lack event listeners unless the page is refreshed.
	componentDidUpdate() {
		this.componentDidMount();
		this.vocabArray = document.getElementsByClassName("vocab");
	}

	// Clean up the event listeners set in componentDidMount()
	componentWillUnmount() {
		let { vocabArray } = this;
		window.removeEventListener('scroll', this.handleScroll);
		for(let i = 0; i < vocabArray.length; ++i) {
			vocabArray[i].removeEventListener('mouseenter', this.handleEnter);
			vocabArray[i].removeEventListener('mouseleave', this.handleExit);
		}
	}

	// Clear any hover effects when the user scrolls
	handleScroll = () => {
		let { lastEvent, handleExit } = this;
		handleExit(lastEvent);
	}

	// Show the vocab definition of the hovered vocab and fade out all
	// surrounding text. Note that the position of the vocab definition
	// will differ depending on whether the navbar is currently showing or not.
	handleEnter = (event) => {
		this.lastEvent = event;
		let vocab = event.target;
		let vocabdef = vocab.getElementsByClassName("vocabdef")[0];

		vocab.parentElement.parentElement.style.color = '#a0a0a0';
		vocab.style.color = 'white';
		vocabdef.style.display = 'block';

		// Read global variable (set by <Navbar> component) to determine
		// the appropriate height for the vocab def of the currently
		// hovered vocab.
		if(window.NavHidden) {
			vocabdef.style.top = window.innerWidth < TABLET ? '5px' : '20px';
		} else {
			vocabdef.style.top = (window.innerWidth < TABLET ? NAVBAR_HEIGHT_M : NAVBAR_TOTAL) + 'px';
		}
	}

	// Revert all effects made in the handleEnter() event listener
	handleExit = (event) => {
		if(event) {
			let vocab = event.target;
			let vocabdef = vocab.getElementsByClassName("vocabdef")[0];

			vocab.parentElement.parentElement.style.color = 'white';
			vocab.style.color = 'inherit';
			vocabdef.style.display = 'none';
		}
	}
};

// Query the document to be rendered.
export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

////////// CHAPTERTEXT //////////
