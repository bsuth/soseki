"-- HELPER FUNCTIONS --"

function! ZeroPad(num, length)
  return repeat('0', a:length - len(a:s)) . a:s
endfunction

" NOTE: Assumes that the cursor is currently on 
" the starting line of the section, i.e. on the line:
"
"		<div class="sectionheader">
"
function! ConvertSectionBreak()
	" find section number
	call search("Section ")
	normal w"ayw

	" remove leading zeroes
	let iter = 1
	while @a[0] == '0'
		let @a = @a[1:]
		let iter = iter + 1
		if iter > 4
			break
		endif
	endwhile

	" store array index
	let @d = @a - 1

	" get study guide link
	call search("chapter")
	normal b"xyt.

	" create section break
	let @c = "\t\t\t<SectionBreak\n"
	let @c = @c . "\t\t\t\tstudyguide={StudyGuides[" . @d . "].path}\n"
	let @c = @c . "\t\t\t\taudio={'http://www.sosekiproject.org/audio/" . @x . ".mp3'}\n"
	let @c = @c . "\t\t\t\tnum={" . @a . "}\n"
	let @c = @c . "\t\t\t/>\n"

	" replace original section with new one
	call search('sectionheader', 'b')
	let @/ = 'div'
	normal Vnd"cP
endfunction

" NOTE: This uses the value currently stored in
" the 'x' register, which is assumed to have already
" been assigned the correct value (by the 
" ConvertSectionBreak() function).
function! AddGuide()
endfunction


"-- HELPER FUNCTIONS --"




"-- MAIN --"

function! ConvertMain()

	" extract current book and chapter
	call search("pagetitle")
	norm f>l"zyiw
	let @z = tolower(@z)
	call search("Chapter")
	norm w"yyw

	" remove everything that is not content
	let @/="jtext"
	normal ggVnjd
	let @/="japanese"
	normal GVNjd
	normal gg

	" convert beginning of document to new template
	let @a = "// React import React from 'react'\n\n
				\// Components\n
				\import ChapterText from '../../components/ChapterText'\n
				\import SectionBreak from '../../components/SectionBreak'\n\n
				\// Routes\n\n\n
				\const StudyGuides = [\n
				\];\n\n
				\export default () => (\n
				\\t<ChapterText path='"
	let @a = @a . @z . "/chapter" . @y . "' StudyGuides={StudyGuides}>\n"
	let @a = @a . "\t\t<div onClick={void(0)}>\n\n"
	normal gg"aP

	" convert sections to React components
	" keep track of study guides
	while search('sectionheader') != 0
		call ConvertSectionBreak()
	endwhile

	" convert end of document to new template
	let @a = "\n\t\t</div>\n
				\\t</ChapterText>\n
				\);"
	norm G$"ap

	" save and quit
	" :wq
endfunction

"-- MAIN --"
