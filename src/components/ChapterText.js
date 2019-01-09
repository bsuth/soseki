// React
import React from 'react'
import { Route } from 'react-router-dom'

// Globals
import { TABLET, NAVBAR_HEIGHT_M, NAVBAR_HEIGHT, NAVBAR_TOP } from '../resources/jsglobals'

// Styles
import './ChapterText.scss'


////////// CHAPTERTEXT //////////

// This component is responsible for rendering the
// text pages as well as the routes to the study guides.
// It also implements some features unavailable to pure
// css, such as changing the text color of the parent div
// when hovering a vocab term and adjusting the height of
// the vocab defs depending on whether the navbar is 
// currently hidden.

export default class ChapterText extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	// NOTE: The wrapping div is necessary. <CSSTransitions> requires 
	// a hook to apply the various css animation classes.
	render() {
		let { path, StudyGuides, children } = this.props;
		return(
			<div>
 
				{ StudyGuides.map(x => <Route key={x.path} path={x.path} component={x.component}/>) }
				<Route exact path={path} component={ () => (
					<div className="page">
						<h2 className="blah">Botchan Chapter 1</h2>
						<hr style={{ width: '45px', margin: 'auto' }} />
						{ children }
					</div>
				)}/>

			</div>
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

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		let vocabArray = document.getElementsByClassName("vocab");

		for(let i = 0; i < vocabArray.length; ++i) {
			vocabArray[i].removeEventListener('mouseenter', this.handleEnter);
			vocabArray[i].removeEventListener('mouseleave', this.handleExit);
		}
	}

	handleScroll = () => {
		this.handleExit(this.lastEvent);
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
		if(window.innerWidth < TABLET) {
			vocabdef.style.top = window.NavHidden ? '5px' : NAVBAR_HEIGHT_M + 5 + 'px';
		} else {
			vocabdef.style.top = window.NavHidden ? '5px' : NAVBAR_HEIGHT + NAVBAR_TOP + 'px';
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
