//listen for when the user clicks on the hamburger menu


$('#menu').on('click', function(){

// if menu is closed , slide down 
// if menu is open, slide down 
$('#home-menu').slideToggle();


});



//Scroll effect After pressing the navbar link ...............................................

$('#home-button').click(function(){
  
   $('html, body').animate({
        scrollTop: $("#nav-container").offset().top
    }, 1000);
});

$('#service-button').click(function(){
  
   $('html, body').animate({
        scrollTop: $("#services-main-box").offset().top
    }, 1000);
});

$('#feedback-button').click(function(){
  
   $('html, body').animate({
        scrollTop: $("#customer-color").offset().top
    }, 1000);
});

$('#aboutus-button').click(function(){
  
   $('html, body').animate({
        scrollTop: $("#aboutus").offset().top
    }, 1000);
});


$('#contact-button').click(function(){
  
   $('html, body').animate({
        scrollTop: $("#map-main-container").offset().top
    }, 1000);
});





//Image Slider with fade effects.....................................................................

$( document ).ready(function() {
    var myIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	       x[i].style.display = "none";  
	    }
	    myIndex++;
	    if (myIndex > x.length) {myIndex = 1}    
	    x[myIndex-1].style.display = "block";  
	    setTimeout(carousel, 4000);    
}
});







// Image slider for main images 

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







// Geolocation code 

// grab the div where google map is located 

// var c = function(pos){
// 	var lat = pos.coords.latitude,
// 		long = pos.coords.longitude,
// 		coords = lat +','+ long;
// 	document.getElementById('google-map').setAttribute('src','https://maps.google.co.nz/?q='+ coords +'&z=16&output=embed');
// 	console.log(coords);
// }

// document.getElementById('user-location').onclick = function(){
// 	navigator.geolocation.getCurrentPosition(c);
// 	return false;
// }





