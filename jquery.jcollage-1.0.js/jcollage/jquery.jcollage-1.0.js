/*
 * jCollage - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation comming soon
 * 
 * Copyright (c) 2010 Marcos Mellado
 *
 * Version: 1.0 (29/08/2010)
 * Requires: jQuery v1.4+
 *
 */
(function($) {


$.fn.jcollage = function(options){

  	//Default variables for the system
  		settings = jQuery.extend({
			width				:	300,
			height				:	150,
			draggable			:	false,
			polaroid			:	true,
			shadows				:	false,
			rotation			:	false
			
  		}, options);
	
	// do the rest of the plugin usingsettings
		$(this).width(settings.width+"px");
  	  	$(this).height(settings.height+"px");
  	  	$(this).css({
  	  		'overflow'	:	"hidden",
  	  		'position'	:	"absolute"
  	  	});
  	  	$("img", this).css({
  	  		'position'	:	"absolute"
  	  	});
  	  	
  	  	
  	  	//Make images draggable
  	  	if(settings.draggable){
  	  		$("img",this).draggable();
  	  		$("img",this).css({
  	  			'cursor'	:	"pointer"
  	  		});
  	  	}
  	  		
  	  	//Make images look like polaroid pictures
  	  	if(settings.polaroid){
  	  		var imgborder, imgborderbottom;
  	  		$("img",this).each(function(){
  	  			imgborder = $(this).width()*0.05;
  	  			if(imgborder>7){imgborder=7;}
  	  			imgborderbottom = $(this).width()*0.15;
  	  			if(imgborderbottom>25){imgborderbottom=25;}
  	  			$(this).css({
  					'border'		:	imgborder+"px solid #fff",
  	  				'borderBottom'	:	imgborderbottom+"px solid #fff"
  	  			});
  	  		});
  	  	}
  	  		
  	 	//Add shadow to pictures
  	  	if(settings.shadows){
  	  	
  	  		$("img",this).each(function(){
  	  			$(this).css('-moz-box-shadow','0px 0px 6px #999999'); /* FF3.5+ */
  				$(this).css('-webkit-box-shadow',' 0px 0px 6px #999999'); /* Saf3.0+, Chrome */
          		$(this).css('box-shadow','0px 0px 6px #999999'); /* Opera 10.5, IE 9.0 */
          	});
  	  	}
  	  	
  	  	var pair = true;
  	  	var rotationDegree, rotationDegreeIE;
  	  	//Add random rotation to pictures
  	 	if(settings.rotation){
  	 		$("img",this).each(function(){
  	 			rotationDegree = Math.floor(Math.random()*25);
  	 			if(pair){pair=false;rotationDegree=rotationDegree*-2; }else{pair=true;}
  	 			rotationDegreeIE = Math.floor(Math.random());
  	 			$(this).css("-moz-transform","rotate("+rotationDegree+"deg)");  /* FF3.5+ */
      			$(this).css('-o-transform', "rotate("+rotationDegree*0.25+"deg)");  /* Opera 10.5 */
  				$(this).css('-webkit-transform', "rotate("+rotationDegree*0.25+"deg)");  /* Saf3.1+, Chrome */
             	$(this).css('filter',  "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11="+rotationDegreeIE+", M12=-"+rotationDegreeIE/2+", M21="+rotationDegreeIE/2+", M22="+rotationDegreeIE+")"); /*IE 6 & IE7*/
         		$(this).css('-ms-filter', "progid:DXImageTransform.Microsoft.Matrix(M11="+rotationDegreeIE+", M12=-"+rotationDegreeIE/2+", M21="+rotationDegreeIE/2+", M22="+rotationDegreeIE+", sizingMethod='auto expand')"); /* IE8 */
               	$(this).css('zoom', 1);
  	 		});
  	 	}
  	  	
  	  	
  	  	var images = $('img').size(); 
  	  	var tops = Array(images);
  	  	var	lefts = Array(images);
  	  	var imgWidths = Array(images);
  	  	var imgHeights = Array(images);
  	  	var count = 0;
  	  	$("img",this).each(function(){
  	  		imgWidths[count] = $(this).width();
  	  		imgHeights[count] = $(this).height();
  	  		count++;
  	  	});
  	  	
  	  	count = 0;
  	  	
  	  	//Get random top and left for each image 
  	  	for(var i = 0; i < images; i++){  	  	
  	  		lefts[i] = Math.floor(Math.random()*(settings.width - (imgWidths[i]*.6)));
  	  		tops[i] = Math.floor(Math.random()*(settings.height - (imgHeights[i]*.6)));	
  	  	}
  	  	
  	  	$("img",this).each(function(){
  	  		$(this).css({
  	  			'top' 	: 	tops[count],
  	  			'left'	:	lefts[count]
  	  		});
  	  		count++;
  	  	});
  	  	
  	  	/*
  	  	this.each( function(){
	
			   	
    	});
    	*/
    	
  	  
	}

})(jQuery);
