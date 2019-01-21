// React
import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Layout from './Layout'

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
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		let { book, chapter, path, StudyGuides, children } = this.props;
		return(
			<>
				<h2 className="chapter_title">{ book } Chapter {chapter}</h2>
				<hr style={{ width: '45px', margin: 'auto' }} />
				{ children }
			</>
		);
	}

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
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		let vocabArray = document.getElementsByClassName("vocab");

		for(let i = 0; i < vocabArray.length; ++i) {
			vocabArray[i].removeEventListener('mouseenter', this.handleEnter);
			vocabArray[i].removeEventListener('mouseleave', this.handleExit);
		}
	}

	handleScroll = () => {
		let { lastEvent, handleExit } = this;
		handleExit(lastEvent);
	}

	handleEnter = (event) => {
		this.lastEvent = event;
		let vocab = event.target;
		let vocabdef = vocab.getElementsByClassName("vocabdef")[0];

		vocab.parentElement.style.color = '#a0a0a0';
		vocab.style.color = 'white';
		vocabdef.style.display = 'block';

		// Read global variable (set by <Navbar> component) to determine
		// the appropriate height for the vocab def of the currently
		// hovered vocab.
		if(window.NavHidden) {
			vocabdef.style.top = '5px';
		} else {
			vocabdef.style.top = (window.innerWidth < TABLET ? NAVBAR_HEIGHT_M : NAVBAR_TOTAL) + 'px';
		}
	}

	handleExit = (event) => {
		if(event) {
			let vocab = event.target;
			let vocabdef = vocab.getElementsByClassName("vocabdef")[0];

			vocab.parentElement.style.color = 'white';
			vocab.style.color = 'inherit';
			vocabdef.style.display = 'none';
		}
	}
};

////////// CHAPTERTEXT //////////
