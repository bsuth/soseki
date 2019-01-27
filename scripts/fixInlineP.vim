autocmd BufDelete * if len(filter(range(1, bufnr('$')), '! empty(bufname(v:val)) && buflisted(v:val)')) == 1 | quit | endif

while search("<p>.*<\/p>") != 0
	s/<p>//g
	s/<\/p>/\r/g
endwhile

w | bd
