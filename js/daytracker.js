/**
 * @author Arpita
 */
$(document).ready(function(){
	$('.btn').button();
	
	 $('#slideWater').slider({
          formater: function(value) {
            return value+' oz';
          }
        });
         $('#mood').slider({
          formater: function(value) {
            if (value <4){
            	return value+' Bad';
            } else if (value>6){
            	return value+' Good';
            }else {
            	return value+' OKay';
            }
          }
        });
        $('#joints').slider({
          formater: function(value) {
            if (value <4){
            	return value+' Bad';
            } else if (value>6){
            	return value+' Good';
            }else {
            	return value+' OKay';
            }
          }
        });
        $('#skin').slider({
          formater: function(value) {
            if (value <4){
            	return value+' Bad';
            } else if (value>6){
            	return value+' Good';
            }else {
            	return value+' OKay';
            }
          }
        });
        
		// var windowHeight=$(window).height();
		// var headerHeight=$("#pageHeader").height();
		// var footerHeight=$("#pageFooter").height();
		// var boxHeight = (windowHeight - (headerHeight + footerHeight))/3;
		// $(".box").height(boxHeight+"px");
		// // $("label").css({"line-height": tilesHeight+"px"});
		// // $(".health").css({"line-height": tilesHeight+"px"});
});