import React from 'react'
import { Link } from 'react-router-dom'

import { MediaEnum } from '../resources/jsglobals'
import styles from './book.module.scss'


// NOTE: 'mode' holds the current media query state 
// (mobile, tablet, desktop).The reason we pass 'mode' via 
// props is to avoid multiple event listeners listening for 
// the same environment conditions (in this case, listening 
// for window resizes). Instead, this is implemented at the 
// parent level so that only one rerender call is necessary.
export default ({data, decoration, mode}) => {
	let { path, img, imgAlt } = data;
	let { title_en, title_jp, year, desc } = data;

	// This may need to be changed to an empty jsx
	// element depending on whether the current device
	// fits the $DESKTOP media query restraints.
	let DecorLayout = <div className={styles.svgWrapper}>{decoration}</div>;

	// This may need to be wrapped depending on whether
	// the current device fits the $TABLET media query
	// restraints.
	let TextLayout = (
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

	// Layout changes based on media queries
	if(mode === MediaEnum.tablet) {
		// Wrap the text for Tablet layout
		// -------------------------------
		// This is so we can use flexbox and css order to mimic a 
		// a 2d layout and don't have to rely on CSS Grid 
		// (compatibility still too low as of 12/24/2018).
		TextLayout = <span className={styles.text}> { TextLayout } </span>;
	} else if(mode === MediaEnum.desktop) {
		// No decoration for the desktop web version
		DecorLayout = <></>
	}

	// 0) decoration
	// 1) title
	// 2) book cover (as link)
	// 3) description
	return(
		<div className={styles.book}>
			<Link to={path} className={styles.cover}> 
				<img src={img} alt={imgAlt} />
			</Link>

			<div className={styles.mask} />

			{ DecorLayout }
			{ TextLayout }
		</div>
	);
}
