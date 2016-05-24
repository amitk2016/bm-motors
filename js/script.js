//listen for when the user clicks on the hamburger menu 
$('#menu').on('click', function(){

// if menu is closed , slide down 
// if menu is open, slide down 
$('#home-menu').slideToggle();


});

// Image slider for main images 
function slider (){
	$(".slider #1").show("fade",500);
	$(".slider #1").delay(3500).hide("slide",{direction:"left"},500);

	var sc = $(".slider img").size();
	var count = 2;

	setInterval(function(){
		$('.slider #'+count).show('slide',{direction:'right'},500);
		$('.slider #'+count).delay(3500).hide('slide',{direction:"left"},500);

		if(count == sc){
			count = 1;
		}
		else{
			count = count+1;
		}
	},4500);
}