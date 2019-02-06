// React
import React from 'react'

// Images
import webHover from 'images/webHover.png'
import mobileHover from 'images/mobileHover.png'


////////// FEATURES ///////////

export default () => (
	<div className="features">

		<h1>Home Page</h1>
		<p>From the Home page, click any of the cover images to jump to the Contents page for the corresponding text.</p>

		<h1>Contents Page</h1>
		<p>On the Contents page, each chapter in the work is represented by a block with a tagline prompt. Below the tagline in small font and in parenthesis is the range of sections that are included in the chapter.  Sections are described in more detail below.  Click on a chapter block to jump to the Chapter Page.</p>

		<h1>Chapter Page</h1>
		<p>The Chapter Page includes the full text for the chapter, broken into sections. Within the chapter text, hovering (with a mouse) over any underlined word or phrase will cause its reading and English definition to appear at the top of the page in the vocabulary bar. Any surrounding text will also be dimmed to make it easier for the reader to find his/her place in the text again. The contents of the vocabulary bar should appear as in the screen clip below. (If the furigana displays to the right of the kanji rather than above, then the browser being used does not support html ruby tags. Updating to a newer browser release or installing a ruby tag plug-in will solve the problem. All of the new mainstream browsers support ruby tags and will display furigana correctly.) Mobile users can use the hover feature by simply tapping on the underlined vocabulary</p>
		<p className="img-wrapper">
			<img className="mobileHover" src={ mobileHover } alt="hover feature mobile" />
			<img className="webHover" src={ webHover } alt="hover feature web" />
		</p>

		<h1>Sections</h1>
		<p>Each work has been broken into sections. These breaks have been made for purposes of this website and have no correspondence in the original texts. Sections are numbered sequentially from the start of a work to its end and do not reset with a new chapter. For reference purposes, a name like "Botchan Section 035" will uniquely identify a section of text.</p>
		<br/>
		<p>Each section includes a header with the section number, a link to a Study Guide page, and controls to play the section audio clip. Within each section, all words or phrases that include Kanji are defined on first occurrence, but not thereafter. Entering a new section resets this rule, and all words or phrases with Kanji are redefined. Some uncommon or difficult words or phrases without Kanji are also treated in a similar manner.</p>

		<h1>Study Guide Pages</h1>
		<p>There is a Study Guide page for each Section. Each Study Guide page includes three parts: 1) text with full furigana 2) rough translation 3) vocabulary list.</p>

		<h1>PDFs and MP3s Page</h1>
		<p>This page includes links to PDF files with full expert text (no furigana) for each chapter. These expert texts can be used for practice reading, with the web tools or audio for backup as needed.</p>
		<p>This page also includes a single MP3 file for each chapter. These can be downloaded and imported to iTunes or other audio device libraries.</p>

	</div>
);

////////// FEATURES ///////////
