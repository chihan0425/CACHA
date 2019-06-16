$(document).on('ready', function() {

      $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,/*速度*/
        // variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // $('.product_img').slick({
      //   dots: true,
      //   infinite: true,
      //   arrows:false,
        
      // });

      $('.product_imgT').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.product_img'
    });
      $('.product_img').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_imgT',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });

    });
