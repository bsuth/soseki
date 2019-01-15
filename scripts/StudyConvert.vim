function! RemoveTag(class)
	call search(a:class)
	normal Vkd
	call search("</div>")
	normal Vkd
endfunction

" extract book name (@z) and section number (@y)
normal gg
call search("Chapter")
normal b"zyiw5w"yyiw

" remove everything that is not content
call search("section\"")
normal kVggd
let @/ = "</div>"
normal GVNjdgg

" remove unnecessary wrapping divs
call RemoveTag("practicetext")
call RemoveTag("translation\"")
call RemoveTag("vocabulary")

" remove unnecessary japanese class
%s/ class="japanese"//g

" add new template beginning
let @a = "// React\n
			\import React from 'react'\n\n
			\// Components\n
			\import StudyGuide from '../../components/StudyGuide'\n\n\n
			\export default () => (\n
			\\t<StudyGuide book='"
let @a = @a . @z . "' num={" . @y . "}>\n\n"
normal gg"aP

" add new template end
let @a = "\n\n\t</StudyGuide>\n);"
normal G$"ap

" fix indentation
normal gg
call search("<StudyGuide")
normal jVG2k2>

" fix whitespace between tags
normal gg
set nowrapscan
while search("<p") != 0
	normal kddj
endwhile

while search("<span") != 0
	normal kddj
endwhile

" save and quit
:w
:bd
