function! FixSpacing()
	s/p>/p>\r
	s/<\/p>/\r<\/p>
endfunction

normal gg
let start = search('<p>')
call FixSpacing()

while search('<p>') != start
	call FixSpacing()
endwhile

wq
