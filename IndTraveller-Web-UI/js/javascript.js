

    function owl(parent,auto,autotime,autohover,lp,mar,res,item1,item2,item3,item4){

        $(parent + '.owl-carousel').owlCarousel({
            
        autoplay:auto,
        autoplayTimeout:autotime,
        autoplayHoverPause:autohover,
        loop:lp,
        margin:mar,
        responsive:{
        0:{
        items:item1
        },
        600:{
        items:item2
        },
        991:{
        items:item3
        },
        1366:{
            items:item4
            }
        }
        });
        
        }
         
        function accordion(parent,list,list_para){
            $(list_para).hide();
            $('.rightside_listheads').on("click", function(){
                $(list_para).not($(this).next(list_para)).slideUp('fast');
                $(this).next(list_para).slideToggle('fast');
            });
        }

        
$(document).ready(function(){
    
$('.navbar-toggler').click(function () {
    $('.overlay').fadeIn('fast', function () {
        $('#navbarNavdropdown').animate({ width: 'toggle' }, "slow");

    });
});
$('.overlay').on('click', function () {
    $('#navbarNavdropdown').animate({ width: 'toggle' }, 'slow', function () {

        $('.overlay').fadeOut('slow');
    });
});
$(window).resize(function () {

    $('#navbarNavdropdown,.overlay').removeAttr('style');
   
});

// owl('.owl-carousel',true,1000,true,true,10,1,2,4);
// accordion('.ul_list','.list','.para');

    $.ajax({
      url: "https://geoip-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function(location) {
       
        $('#city').html(location.city);
        $('#state').html(location.state);
      
      }
    });

    
    });

