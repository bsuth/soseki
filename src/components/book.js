// React
import React from 'react'
import { Link } from 'react-router-dom'

// Globals
import { MediaEnum } from '../resources/jsglobals'

// Styles
import styles from './book.module.scss'


////////// BOOK //////////

// This component is resonsible for rendering the
// books on the home page (home.js).
//
// NOTE: 'mode' holds the current media query state 
// (mobile, tablet, desktop). We pass 'mode' via props
// to avoid having multiple event listeners for the same
// conditions (in this case, listening for window resizes). 
// Instead, this is implemented at the parent level so that 
// only one rerender call is necessary.

export default ({data, mode, svg}) => {
	let { path, img, imgAlt } = data;
	let { title_en, title_jp, year, desc } = data;

	let TextElements = (
		<>
			<h4 className={styles.title_en}>
				{title_en}
			</h4>

			<h4 className={styles.title_jp}>
				{title_jp}
			</h4>

			<p className={styles.desc}>
				{year} <br /> {desc}
			</p>
		</>
	);

	// Tablet/Desktop: Wrap the text for tablet/desktop layout 
	// to use 'flexbox' and css 'order' to mimic a 2d layout 
	// without having to rely on CSS Grid.
	// (compatibility still too low as of 12/24/2018)
	if(mode !== MediaEnum.mobile) {
		TextElements = <span style={{ width: '350px' }}> {TextElements} </span>;
	} 

	return(
		<div className={styles.book}>

			{ svg }
			<Link to={path} className={styles.cover}> 
				<img src={img} alt={imgAlt} />
			</Link>
			{ TextElements }

		</div>
	);
}

////////// BOOK //////////
