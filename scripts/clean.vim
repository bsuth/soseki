autocmd BufDelete * if len(filter(range(1, bufnr('$')), '! empty(bufname(v:val)) && buflisted(v:val)')) == 1 | quit | endif
normal gg

call search('section"')
normal jV"ay
while @a !~ 'section"'
	if @a =~ 'vocabstudy'
		s/ class="vocabstudy"//g
	endif
	normal jV"ay
endwhile

let @b="\n"
let @c="<p>\n"
let @d="</p>"

let @/='section"'
normal ggnda<f<da<I## 
normal "bpj

normal V"ay
while @a !~ 'section"'
	if @a =~ 'span'
		s/<span>//g
		s/<\/span>//g
		s/<p>//g
		s/<\/p>//g
		normal "cPj"bp"dp"bp
	endif
	normal jV"ay
endwhile

normal ^da<f<da<I## 
normal "bpj

normal V"ay
while @a !~ 'section"'
	if @a =~ '<p>'
		s/<p>//g
		s/<\/p>//g
		normal "bp
	endif
	normal jV"ay
endwhile

normal ^da<f<da<I## 
normal "bp"cpG"bp"dp

w | bd
