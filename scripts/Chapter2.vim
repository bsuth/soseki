let @/='section_break'
normal ggVnkd
let @/='japanese'
normal GVNjdgg

while search('section_break') != 0
	call search('ection ')
	normal w"byiw
	call search('source')
	normal f""ayi"

	let @c = "\<SectionBreak\n
				\\tstudyguide='/london/studyguide" . @b . "'\n
				\\taudio={'http://www.sosekiproject.org/london/" . @a . "'}\n
				\\tnum={" . @b . "}\n
				\/>\n"

	call search('section_break', 'b')
	normal V7j"cp
endwhile

let @a = "---\ntitle: The Tower of London \n---\n\n
			\import SectionBreak from 'components/SectionBreak'\n\n\n"
normal gg"aP
