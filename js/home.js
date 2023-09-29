
    $(document).ready(function(){
        $('.your-class').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            arrows: true,
            mobileFirst: true,
            responsive: [
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: false,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
          $(".off-icon").click(function(){
            $("body").toggleClass("intro");
          });
          $(".off-icon").click(function(){
            $("body").slideDown("slow");
          });
         
    });
   