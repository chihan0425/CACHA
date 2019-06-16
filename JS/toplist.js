$(window).scroll(function() {/*上方白色清單高度變化*/
	    if ( $(this).scrollTop() > 100){
	        // $('.top-list').css({'height':'100px','position':'fixed'});
	        $('.top-header').addClass(' C-header');
	        $('.top-list').addClass(' C-top-list');
	        $('.top-logo').addClass(' C-top-logo');
	    } else {
	        $('.top-header').removeClass(' C-header');
	        $('.top-list').removeClass(' C-top-list');
	        $('.top-logo').removeClass(' C-top-logo');
	    }
	    if ( $(this).scrollTop() > 650){
	        // $('.top-list').css({'height':'100px','position':'fixed'});
	        $('.S3-word').addClass(' S3-L');
	        $('.S3-word2').addClass(' S3-R');
	        $('.S3-word').removeClass(' Hid');
	        $('.S3-word2').removeClass(' Hid');
	    }
	    if ( $(this).scrollTop() > 1300){
	        // $('.top-list').css({'height':'100px','position':'fixed'});
	        $('.S4-1').removeClass('Hid');
	        $('.S4-1').addClass('S4-C');

	        setTimeout(function() {
       			$('.S4-2').removeClass('Hid');
   			}, 300);
   			setTimeout(function() {
       			$('.S4-3').removeClass('Hid');
   			}, 600);
   			setTimeout(function() {
       			$('.S4-4').removeClass('Hid');
   			}, 900);
   			setTimeout(function() {
       			$('.S4-2').addClass('S4-C');
   			}, 300);
   			setTimeout(function() {
       			$('.S4-3').addClass('S4-C');
   			}, 600);
   			setTimeout(function() {
       			$('.S4-4').addClass('S4-C');
   			}, 900);


	    }
	});

//動態廣告//	改變速度
// $(function(){	
//         $("#carouselExampleIndicators").carousel({
//     		interval: 10000,
//     		pause:'false'
// 		})
// });

					$(function() {  
					   $("body").niceScroll({
					   	 scrollspeed: 100,
					   });
					});
