<?php

if(!function_exists("carregaHtml")):
	function carregaHtml($pg="home", $CI=null, $data=null){
		if($CI):
			$CI->parser->parse($pg, $data);
		endif;
	}
endif;
