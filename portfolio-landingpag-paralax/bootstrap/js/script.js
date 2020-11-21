// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

     // ambil isi href nya 
     var tujuan = $(this).attr('href');
     // tangkap lemen yang bersangkutan
     var elemenTujuan = $(tujuan);


     $('html, body').animate({
          scrollTop: elemenTujuan.offset().top - 50
     }, 1800, 'easeInOutExpo');

     e.preventDefault();





});


// paralax about
// $(window).on('load', function () {
//      $('.pKiri').addClass('muncul');
//      $('.pKanan').addClass('muncul');
// });





// parallax portfolio
$(window).scroll(function () {

     var windowScroll = $(this).scrollTop();


     $('.jumbotron img').css({

          'transform': 'translate(0px,' + windowScroll / 5 + '% )'
     });

     $('.jumbotron h1').css({

          'transform': 'translate(0px,' + windowScroll / 3 + '% )'
     });

     $('.jumbotron p').css({

          'transform': 'translate(0px,' + windowScroll / 2 + '% )'
     });



     // portfolio

     if (windowScroll > $('.portfolio').offset().top - 100) {

          $('.portfolio .thumbnail').each(function (i) {
               setTimeout(function () {
                    $('.portfolio .thumbnail').eq(i).addClass('muncul');

               }, 300 * (i + 1));
          });



     }





});