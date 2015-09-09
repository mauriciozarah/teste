<?php

if(!function_exists("carregaHtml")):
	function carregaHtml($pg="home", $CI=false, $data=null){
		if($CI):
			$CI->parser->parse($pg, $data);
		endif;
	}
endif;
