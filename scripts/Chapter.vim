normal gg
call search('/chapter')
normal e"cyt/
let @b="'/kokoro/chapter" . @c . "/studyguide'"
let @c="Kokoro Chapter " . @c

let @/='ChapterText'
let @a="---\ntitle: " . @c . "\n---\n\nimport SectionBreak from 'components/SectionBreak'\n\n\n"
normal ggV3n2jdGV2kdVgg3<gg"aP

while search('StudyGuides[') != 0
	normal da{"bp"dP
	let @d = @d + 1
endwhile

wq
