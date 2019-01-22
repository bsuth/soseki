// React
import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Styles
import styles from './SectionBreak.module.scss'


////////// SECTION BREAK //////////

// This component renders the section breaks 
// in the chapter texts.

export default ({studyguide, num, audio}) => {

	// Check to make sure the audio exists.
	// (this is a problem for the last sections
	// of The Tower of London).
	let audioComponent;
	if(!audio) {
		audioComponent = <span>audio not available for this section</span>;
	} else {
		audioComponent = (
			<audio controls="controls" preload="none">
				<source src={audio}/>
				This browser does not support HTML5 audio
			</audio>
		);
	}

	return(
		<div className={styles.section_break}>
			<h3> section {num.toString().padStart(3, '0')} </h3>
			<Link to={studyguide}>
				study guide
			</Link>
			{ audioComponent }
		</div>
	);
};

////////// SECTION BREAK //////////
