//  $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });
$(window).scroll(function() {/*上方白色清單高度變化*/
      if ( $(this).scrollTop() > 100){
          $('.S2-R').addClass('JOI');
          $('.S2-R').removeClass('Hid');
          $('.S2-box').addClass('JOI');
          $('.S2-box').removeClass('Hid');
      }
      if ( $(this).scrollTop() > 300){
         $('.S-2').css({'opacity':'1'});
      }
       if ( $(this).scrollTop() > 1100){
         $('.S3-theme').css({'opacity':'1'});
      }

  });


 $(function() {
  $('#H2,#H3,#H4,#H5,#H6').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

   $("#gotop,#gotop2").click(function(){
      jQuery("html,body").animate({
          scrollTop:0
      },1000);
  });
  
});


//大動態廣告//  改變速度
// $(function(){  
//         $("#carouselExampleIndicators").carousel({
//        interval: 50000,
//        pause:'false'
//    })
// });
