//listen for when the user clicks on the hamburger menu


$('#menu').on('click', function(){

// if menu is closed , slide down 
// if menu is open, slide down 
$('#home-menu').slideToggle();


});







// Image slider for main images 
$(function() {
    $(".rslides").responsiveSlides();
  });





// function slider (){
// 	$(".slider #1").show("fade",200);
// 	$(".slider #1").delay(3500).hide("slide",{direction:"left"},500);

// 	var sc = $(".slider img").size();
// 	var count = 2;

// 	setInterval(function(){
// 		$('.slider #'+count).show('slide',{direction:'right'},200);
// 		$('.slider #'+count).delay(3500).hide('slide',{direction:"left"},500);

// 		if(count == sc){
// 			count = 1;
// 		}
// 		else{
// 			count = count+1;
// 		}
// 	},4200);
// }

// slide toggle effect on the service div boxes 

$('#service-1').hover(function(){

	$('#service-1-info').slideToggle('slow');

});

$('#service-2').hover(function(){

	$('#service-2-info').slideToggle('slow');

});
$('#service-3').hover(function(){

	$('#service-3-info').slideToggle('slow');

});
$('#service-4').hover(function(){

	$('#service-4-info').slideToggle('slow');

});



















