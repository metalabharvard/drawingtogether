$(document).ready(function() {
	var window_width = $(window).width();
	var window_height = $(window).height();
	$( ".PAGES" ).load( "page_title.html", function() {
		 console.log( "Load was performed." );
	});
	
	$( "body" ).on( 'click', '.page_button', function () {
		var get_pagename = $(this).attr('getpage');
		console.log(get_pagename);
		$( ".PAGES" ).load( get_pagename+".html", function() {
		  console.log( get_pagename+ " Load was performed." );
		});
		$( ".overlay" ).css({'background':'rgba(255,255,255,0.55)'})
		if(get_pagename == "page_title" || get_pagename == "page_workshops"){
			$( ".overlay" ).css({'background':'rgba(255,255,255,0)'})
		}
		if(get_pagename.indexOf('_ws_') > -1){
			$( ".overlay" ).css({'background':'rgba(255,255,255,1)'})
		}
		$( ".pages" ).fadeIn();
		$(".close").fadeIn();

	});
	$( "body" ).on( 'click', '.close', function () {
		$( ".IMAGE_POP" ).hide();
		$( "html" ).css({'overflow-x':'hidden','overflow-y':'auto'});
	});
	
	$( "body" ).on( 'click', '.IMG_RUN', function () {
		var makethis = this;
		runPOPUP(makethis);
		var resizeTimer;
		
			$(window).on('resize', function(e) {

			  clearTimeout(resizeTimer);
			  resizeTimer = setTimeout(function() {
			  	if($( ".IMAGE_POP" ).is(":visible")){
			    runPOPUP(makethis);
			    }
			  }, 250);

			});
		
	});

	function runPOPUP(getthis){
		window_width = $(window).width();
		window_height = $(window).height();
		var get_src = $(getthis).attr('src')
		var get_img = new Image();
		var margin = 50;
		get_img.src = get_src;
		$( ".IMAGE_POP" ).show();		
		$( "html" ).css({'overflow':'hidden'});
		$( ".IMAGE_POP_content" ).css({'margin':margin+'px'}).html('<img src="'+get_src+'"/>');
		//$( ".close" ).css({'margin-top':(margin/5)+'px','margin-right':margin+'px'});
		console.log(get_img)
		
		if($(getthis).height() > $(getthis).width()){
			//if height larger than width
			$('.IMAGE_POP_content').find('img').css({'width':(window_width-(margin*2))+'px','height':'auto'});
			$( ".IMAGE_POP_content" ).css({'overflow-x':'auto','overflow-y':'auto'});
			$(".scroll").html('scroll &#8593; &#8595;');

		}
		else if($(getthis).height() < $(getthis).width()){
			$('.IMAGE_POP_content').find('img').css({'height':(window_height-(margin*2))+'px','width':'auto'});
			$( ".IMAGE_POP_content" ).css({'overflow-x':'auto','overflow-y':'auto'});
			$(".scroll").html('scroll &#8592;  &#8594;');
			//if width larger than height
		}
		else{
			$('.IMAGE_POP_content').find('img').css({'height':(window_height-(margin*2))+'px','width':'auto'});
			$( ".IMAGE_POP_content" ).css({'overflow':'hidden'});
			$(".scroll").html('');		
		}
		$('.IMAGE_POP_content').find('img').css({'margin':'auto'});
	}

	






});