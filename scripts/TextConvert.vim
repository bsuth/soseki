"-- HELPER FUNCTIONS --"

function! ZeroPad(num, length)
  return repeat('0', a:length - len(a:num)) . a:num
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

	" get study guide link
	call search("chapter")
	normal b"xyt.

	" create section break
	let @c = "\t\t\t<SectionBreak\n"
	let @c = @c . "\t\t\t\tstudyguide={StudyGuides[" . @d . "].path}\n"
	let @c = @c . "\t\t\t\taudio={'http://www.sosekiproject.org/" . @z . "/audio/" . @x . ".mp3'}\n"
	let @c = @c . "\t\t\t\tnum={" . @a . "}\n"
	let @c = @c . "\t\t\t/>\n"

	" replace original section with new one
	call search('sectionheader', 'b')
	let @/ = 'div'
	normal Vnd"cP

	" remove unnecessary word placed by x register
	call search('chapter')
	normal 7x

	" increment array index
	let @d = @d + 1
	
endfunction

" NOTE: This uses the values currently stored in
" the a, x, y, and z registers, which is assumed to have 
" already been assigned the correct value (by the 
" ConvertMain() and ConvertSectionBreak() functions).
function! AddGuide()
	" construct new study guide entry
	let @b = "\t{\n
				\\t\tpath: \"/" . @z . "/chapter" . @y . "/"
	let @b = @b . "studyguide" . @a . "\",\n"
	let @b = @b . "\t\tcomponent: StudyGuide" . @a . ",\n"
	let @b = @b . "\t},\n"
	
	" add to array
	normal gg
	call search('StudyGuides')
	normal f[%"bP
endfunction

function! AddRoute()
	" construct new study guide route
	let @b = "import StudyGuide" . @a . " from './StudyGuide" . @a . "'\n"
	
	" add to imports
	normal gg
	call search('StudyGuides')
	normal 2k"bP
endfunction

"-- HELPER FUNCTIONS --"




"-- MAIN --"

" extract current book and chapter
call search("pagetitle")
norm f>l"zyiw
let @w = @z
let @z = tolower(@z)

" manually set book for sanshiro due to characters
let @z = 'sanshiro'

call search("Chapter")
norm w"yyw

" remove everything that is not content
let @/="jtext"
normal ggVnjd
let @/="japanese"
normal GVNjd
normal gg

" first 'section #num' tag is different from the rest
call search('section ')
normal cwSection

" convert beginning of document to new template
let @a = "// React\n
			\import React from 'react'\n\n
			\// Components\n
			\import ChapterText from '../../components/ChapterText'\n
			\import SectionBreak from '../../components/SectionBreak'\n\n
			\// Routes\n\n\n
			\const StudyGuides = [\n
			\];\n\n
			\export default () => (\n
			\\t<ChapterText book='"
let @a = @a . @w . "' chapter={" . @y . "} "
let @a = @a . "path='/" .  @z . "/chapter" . @y . "' StudyGuides={StudyGuides}>\n"
let @a = @a . "\t\t<div onClick={void(0)}>\n\n"
normal gg"aP

" init array index
let @d = 0

" convert sections to React components
" keep track of study guides
while search('sectionheader') != 0
	call ConvertSectionBreak()
	call AddGuide()
	call AddRoute()
endwhile

" convert end of document to new template
let @a = "\n\t\t</div>\n
			\\t</ChapterText>\n
			\);"
norm G$"ap

" remove unnecessary class="japanese"
%s/ class="japanese"//g

" remove buggy <p> ending tag
%s/<p\/>/<\/p>/g

" save and quit
:wq
	
"-- MAIN --"
