$(function(){
    $(".mob").click(function(){
        $(this).toggleClass("active");
        $(".wrap-1 .flex").slideToggle();
    })
    $(".tabs ul li a").click(function(e){
      e.preventDefault();
      $(".tabs ul li a").removeClass("active");
      $(this).addClass("active");
      var index=$(this).parent().index();
      $(`.content`).fadeOut(0);
      $('.content:eq('+index+')').fadeIn();
     })
    
})

$(function(){
    
$('.slider').slick();
  });
  

  