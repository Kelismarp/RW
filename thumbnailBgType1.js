(function($){
 $.fn.thumbnailBgType1=function(o){ 
        
        var getObject = {
            prevBtn:$('#prevBtn'),
            //getObject.currRate
           }
        $.extend(getObject, o); 
        
		var _this = $(this),
			thumbHolder = $(">.thumbnail_set", _this),
			thumbLength = $(">.thumbnail_set>li", _this).length,
			thumbItems = $(">.thumbnail_set>li", _this),
			thumbWidth = $(">.thumbnail_set>li", _this).width(),
			thumbHeight = $(">.thumbnail_set>li", _this).height(),
			setArr = [],
			animateState = false,
            mouseYPos,
            ParamsTweenY,
            _pageY;

        var MSIE = ($.browser.msie) && ($.browser.version <= 8);
         
/////////////////////////////INIT///////////////////////////////////
		init();
		function init(){
            $("> .thumbnail_set", _this).css({'width':thumbWidth+'px', 'display':'inline-block', 'position':'relative'})
            $("> .thumbnail_set > li", _this).css({'width':thumbWidth+'px', 'height':thumbHeight+'px', 'display':'inline-block', 'overflow': 'hidden', 'position':'relative', 'z-index': '1'})
            
			$("> .thumbnail_set", _this).each(function(){
	               setArr.push($(this))
                   $(this).css({top:-RandRange(200, 350, true)})
			})
            
            $("> .thumbnail_set > li", _this).each(function(){
                   $('._over', this).slideUp(0)
                    //$('._over', this).css({'display':'none'});
            })
            
           addButonsEventHandler();
           thumbnailReposition();
		}//end init
//////////////////////////addButonsEventHandler/////////////////////////////////////
		function addButonsEventHandler(){
	           $("> .thumbnail_set", _this).mousemove(
                    function(event){
                        _pageY = event.pageY;
                        mouseYPos = _pageY / $(window).height();
                         
                        if( mouseYPos <= 0 ){ mouseYPos_correction = 0;}
                        if( mouseYPos >= 1 ){ mouseYPos_correction = 1;}
                        if( mouseYPos > 0 && mouseYPos < 1 ){ mouseYPos_correction = mouseYPos;}
                        ParamsTweenY = -mouseYPos_correction *($(this).width() - $(window).height());
                         $(this).stop(true).animate({top:-ParamsTweenY}, 800); 
                         
                    }
               )
           
           $("> .thumbnail_set > li", _this).hover(
                function(){
                       // $('._over', this).css({'display':'block'});
                        $('._over', this).stop().slideDown(500);
                },
                function(){
                        //$('._over', this).css({'display':'none'});
                        $('._over', this).stop().slideUp(500);
                }
           )
           
		}//end addEvent
////////////////////////////////////////////////////////////////////////////////////////////////      
		function  thumbnailReposition(){
                $("> .thumbnail_set > li", _this).each(function(_index){
                    
                    
                })
    	}   
////////////////////////////////////////////////////////////////////////////////////////////              
	}
})(jQuery)