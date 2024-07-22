jQuery( document ).ready( function($) {
    $('.slider').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
    margin:20,
        items:2,
    })


    
    $(".icon").click(function(){
        var tab_id = $(this).attr('data-icon')
        $("#"+tab_id).slideToggle()
      
   })  

});