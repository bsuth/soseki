%s/study_guide_sub/section

let @/='section"'
let @a="---\ntitle: \n---\n\n"
normal ggVnkd
let @/='vocabdef'
normal GVNjdgg"aP

normal ggjAThe Tower of London Study Guide 
normal "ep
let @e = @e + 1

call search('rough_translation')
normal V3kd
call search('vocab_list')
normal V3kd

let @/='section"'
normal ggnj
let counter = 1
let stop = search('section"')
normal Nj
while @a !~ 'section"'
	if counter % 2 == 1
		normal dd	
	else
		normal V"ay
		if @a =~ 'vocabdef'
			s/ class="vocabdef"//g
		endif
		normal j
	endif

	let counter = counter + 1
	normal V"ay
endwhile

normal O
normal 2jV"ay
while @a !~ 'section"'
	normal dd
	normal V"ayj
endwhile

normal kO
normal 2j
while line(".") != line("$")
	normal ddj
endwhile

%s/ class="japanese"//g
%s/vocabdef/vocabstudy/g

wq
