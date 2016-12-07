$(document).ready( function(){

	console.log("Esta Listo"); //Etapa 7
	$(".js-menu").hide(); // Etapa 1

});

$( ".js-show-make" ).click(function() {
	$(".page").addClass("make"); //Etapa 8
	$(".js-show-recipe").removeClass("active"); //Etapa 9
	$(".js-show-make").addClass("active"); //Etapa 9
});

$( ".js-show-recipe" ).click(function() {
  	$(".page").removeClass("make"); //Etapa 8
  	$(".js-show-recipe").addClass("active"); //Etapa 9
	$(".js-show-make").removeClass("active"); //Etapa 9
});
