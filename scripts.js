include('js/jquery.easing.1.3.js');
include('js/jquery.color.js');
include('js/mathUtils.js');
include('js/superfish.js');
include('js/switcher.js');
include('js/jquery.mousewheel.js');
include('js/sprites.js');
include('js/hoverSprite.js');
include('js/spin.js');
include('js/googleMap.js');
include('js/forms.js');
include('js/thumbnailBgType1.js');
include('js/galleryType1.js');
include('js/jquery.fancybox-1.3.4.pack.js');
//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript"></script>'); 
}
//--------global-------------
var isSplash = true, isAnim = false, isFirst = true, spinner, mapSpinner;
var MSIE = ($.browser.msie) && ($.browser.version <= 8)
//------DocReady-------------
$(document).ready(function(){ 
    if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }
///////////////////////////////////////////////////////////////////
loaderInit();
function loaderInit(){
        var opts = {
              lines: 11,
              length: 10, 
              width: 10, 
              radius: 20, 
              rotate: 0, 
              color: '#f9e4c1', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target = $(".page_spinner > span");
        spinner = new Spinner(opts).spin();
        target.append(spinner.el) 
        ///////////////////////////////////////    
            var opts2 = {
              lines: 8,
              length: 0, 
              width: 8, 
              radius: 12, 
              rotate: 10, 
              color: '#9A6121', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target2 = $(".google_map > span");
        mapSpinner = new Spinner(opts2).spin();
        target2.append(mapSpinner.el)  
     
} 
///////////////////////////////////////////////////////////////////

     $('ul#menu').superfish({
          delay:       500,
          animation:   {height:'show'},
          speed:       300,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  					var conText = $(this).find('.mText').text();
                    $(this).append("<div class='_area'></div><div class='_overPl'></div><div class='mText_over'>"+conText+"</div>");   
  				})
  	 		}
        });
    
});
  
 //------WinLoad-------------  
$(window).load(function(){  
$('.page_spinner').fadeOut(800);
spinner.stop();
$('body').css({overflow:'auto', 'min-height':'800px'})
$('.menu > ul >li').eq(0).css({'display':'none'});

 $('.follow_list > li > a').hoverSprite({onLoadWebSite:true}) 
 $('.moreBtn').hoverSprite({onLoadWebSite:true}) 


    
   $("#bgGallery").thumbnailBgType1({});
   $("#galleryType1").galleryType1();
  $('.pic').fancybox({'titlePosition': 'inside', 'overlayColor':'#000'});  

var curAccord = 0;
var oldAccord = 0;

$('._list1').find('p').slideUp(1);
$('._list1').find('.btn').addClass('btnBg1');

$('._list1 >li').eq(0).find('.btn').removeClass('btnBg1');
$('._list1 >li').eq(0).find('.btn').addClass('btnBg2');
$('._list1 >li').eq(0).find('p').slideDown();

$('._list1').find('.btn').click(
    function(){
        if(curAccord !== $(this).parent().index()){
        oldAccord = curAccord;
        curAccord = $(this).parent().index(); 
        
        $('._list1 >li').eq(curAccord).find('.btn').removeClass('btnBg1');
        $('._list1 >li').eq(curAccord).find('.btn').addClass('btnBg2');
        $('._list1 >li').eq(curAccord).find('p').slideDown();
        
        $('._list1 >li').eq(oldAccord).find('.btn').removeClass('btnBg2');
        $('._list1 >li').eq(oldAccord).find('.btn').addClass('btnBg1');
        $('._list1 >li').eq(oldAccord).find('p').slideUp();

        }

    }
)
   
  init(); 
  function init(){
        $('#bgGallery').mousemove(
                function(event){
                    _pageX = event.pageX;
                    mouseXPos = _pageX / $(window).width();
                    if( mouseXPos <= 0 ){ mouseXPos_correction = 0;}
                    if( mouseXPos >= 1 ){ mouseXPos_correction = 1;}
                    if( mouseXPos > 0 && mouseXPos < 1 ){ mouseXPos_correction = mouseXPos;}
                    ParamsTweenX = -mouseXPos_correction *($(this).width() - $(window).width());
                    
                   // if((mouseXPos_correction<0.1) || (mouseXPos_correction>0.9)){
                        $(this).stop(true).animate({left:ParamsTweenX}, 800); 
                   // }
                      
                }
           )
    
   }
   
   
///////////////////////////////////////////////
	var content=$('#content'),
		nav=$('.menu');

    	$('#content').tabs({
		preFu:function(_){
			_.li.css({left:"1700px",'display':'none'});	
		}
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({left:'1700px', top:'0px', 'display':'block'}).stop().delay(100).animate({left:"0px"}, 800, 'easeOutCubic');
			
                cont_resize(_.n);
                if ((_.n == 0) && ((_.pren>0) || (_.pren==undefined))){splashMode();}
                if (((_.pren == 0) || (_.pren == undefined)) && (_.n>0) ){contentMode(); }
            }
			if(_.prev){
			     _.prev.stop().animate({left:'0px', top:'1600px'}, 500,'easeInCubic',function(){_.prev.css({'display':'none'});});
	
             }
		}
	})

 
    function splashMode(){
        isSplash = true;
    }
    
    function contentMode(){  
        isSplash = false;
    }
    
    function cont_resize(_page){
        var li_W = $('#content > ul > li').eq(_page).find('.box1').innerHeight();
        //$('#content').height(li_W)
        if((li_W + 250) < 900){
            li_W = 900;
            $('body').animate({'min-height':li_W+'px'},400)
        }else{
            $('body').animate({'min-height':li_W+250+'px'},400)
        }   
    }		
    
	nav.navs({
			useHash:true,
             hoverIn:function(li){
                        $(".mText", li).stop(true).animate({top:'75px'}, 500, 'easeOutCubic');
                        $(".mText_over", li).stop(true).animate({top:'0px'}, 700, 'easeOutBack');
                        $("._overPl", li).stop(true).animate({top:'0px'}, 500, 'easeInOutCubic');
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mText", li).stop(true).animate({top:'0px'}, 700, 'easeOutBack');
                        $(".mText_over", li).stop(true).animate({top:'-75px'}, 500, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({top:'75px'}, 500, 'easeInOutCubic');
                    } 
                } 
		}).navs(function(n){			
			$('#content').tabs(n);
		})
        
   
/////////////////  Window resize  //////////////
    var boxWigth = 940,
        _dX=0;
    
	$(window).resize(
        function(){
               _dX = Math.round(($(document).width() - 940)*0.5)    
               $('.aside').css({left:_dX})
               $('#content').css({left:_dX+280})
        }
    ).trigger('resize');


    } //window function 
) //window load
