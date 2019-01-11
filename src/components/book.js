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

	let Mask;
	let TextWrap = (
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

	// Conditional rendering based on media query.
	// -----------------------------------------------
	// Mobile: Wrap svg with css module class to allow 
	// for responsive sizing and absolute positioning.
	//
	// Tablet: Wrap the text for tablet layout to use 
	// 'flexbox' and css 'order' to mimic a a 2d layout 
	// without having to rely on CSS Grid.
	// (compatibility still too low as of 12/24/2018)
	//
	// Desktop: Render 'mask' <div> to cover the screen
	// when a book is hovered.
	
	if(mode === MediaEnum.tablet) {
		TextWrap = <span style={{ width: '350px' }}> {TextWrap} </span>;
	} else if(mode === MediaEnum.desktop) {
		Mask = <div className={styles.mask} />
	}

	// NOTE: order matters here!
	// -------------------------
	// 'TextWrap' and 'Mask' must both be rendered after <Link>. 
	// In the desktop layout, the css for these rely on the hover 
	// state of <Link>. As css is cascading, we render <Link> first
	// so that we may use css selectors.
	//
	// We render 'TextWrap' after 'Mask' to save on the extra css
	// of z-indices. This way, 'TextWrap' will always render above
	// 'Mask', even in the case that their z-indices are the same.
	
	return(
		<div className={styles.book}>
			<Link to={path} className={styles.cover}> 
				<img src={img} alt={imgAlt} />
			</Link>

			{ svg }
			{ Mask }
			{ TextWrap }
		</div>
	);
}

////////// BOOK //////////
