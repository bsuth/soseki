let @f = 12
let @/='sectionheader'
normal ggVnkd
let @/='japanese'
normal GVNjdgg

while search('sectionheader') != 0
	call search('ection ')
	normal w"byiw
	call search('source')
	normal f""ayi"

	let @c = "\<SectionBreak\n
				\\tstudyguide='/kokoro/chapter" . @f . "/studyguide" . @b . "'\n
				\\taudio={'http://www.sosekiproject.org/kokoro/" . @a . "'}\n
				\\tnum={" . @b . "}\n
				\/>\n"

	call search('sectionheader', 'b')
	normal V9j"cp
endwhile

let @a = "---\ntitle: Kokoro Chapter " . @f . "\n---\n\n
			\import SectionBreak from 'components/SectionBreak'\n\n\n"
normal gg"aP
