// React
import React from 'react'

// Globals
import { NAVBAR_HEIGHT, NAVBAR_TOP} from '../resources/jsglobals'

// Styles
import './ChapterText.scss'


export default class ChapterText extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		let { children } = this.props;
		return(
			<div className="page" id="ChapterText">
				{ children }
			</div>
		);
	}

	componentDidMount() {
		this.vocabArray = document.getElementsByClassName("vocab");
		let { vocabArray } = this;
		for(let i = 0; i < vocabArray.length; ++i) {
			vocabArray[i].addEventListener('mouseenter', this.handleEnter);
			vocabArray[i].addEventListener('mouseleave', this.handleExit);
		}
	}

	componentWillUnmount() {
		let { vocabArray } = this;
		for(let i = 0; i < vocabArray.length; ++i) {
			vocabArray[i].removeEventListener('mouseenter', this.handleEnter);
			vocabArray[i].removeEventListener('mouseleave', this.handleExit);
		}
	}

	handleEnter = (event) => {
		let vocab = event.target;
		let vocabdef = vocab.getElementsByClassName("vocabdef")[0];

		vocab.parentElement.style.color = '#a0a0a0';
		vocab.style.color = 'white';
		vocabdef.style.top = window.NavHidden ? '5px' : NAVBAR_HEIGHT + NAVBAR_TOP + 'px';
	}

	handleExit = (event) => {
		let vocab = event.target;
		vocab.parentElement.style.color = 'white';
		vocab.style.color = 'inherit';
	}
};

