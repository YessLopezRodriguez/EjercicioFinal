$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$(".js-back").hide(); // Etapa 1
	renderActivities(activities); // Etapa 5
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	//Etapa 3
	console.log(recipesArray);
	$(recipesArray).each(function(index){
		if (recipesArray[index].hasOwnProperty("highlighted") && recipesArray[index]["highlighted"] === true) {
			renderRecipe(index);
			console.log(index);
		}
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	//Etapa 4
	$("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'> TITULO DE LA RECETA</span><span class='metadata-recipe'><span class='author-recipe'> NOMBRE DEL AUTO DE LA RECETA</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src=''/></a>").appendTo(".list-recipes");
	$(".title-recipe").last().text(recipesArray[recipe].title);	
	$(".author-recipe").last().text(recipesArray[recipe].source.name);
	$(".list-recipes img").last().attr('src',"img/recipes/320x350/" + recipesArray[recipe].name + ".jpg");
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);

	$(activitiesArray).each(function(index, element){ //Etapa 5
		renderActivity(element);
		if(activitiesArray.length > 0){
			$(".wrapper-message").hide();
		}
	});

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log(recipe);

	//Etapa 6

	var template = 
	 
	'<a href="#" class="item-activity">' +
	  '<span class="attribution">' +
	    '<span class="avatar">' +
	      '<img src="<%=recipe.userAvatar %>" class="image-avatar">' +
	    '</span>' +
	    '<span class="meta">' +
	      '<span class="author"><%=recipe.userName %></span> made' +
	      '<span class="recipe"><%=recipe.recipeName %></span>: <%=recipe.text %>' +
	      '<span class="location">&mdash; <%=recipe.place %></span>' +
	    '</span>' +
	  '</span>' +
	  '<div class="bg-image" style="background-image: url(&quot;<%=recipe.image %>&quot;);"></div>' +
	'</a>';

    var compiled = _.template(template);
    var list = compiled({recipe:recipe});
    console.log(recipe);

   	$(list).appendTo(".list-activities");
}

// Etapa 2
function printNews() {
	$(".callout-news > p").text("NUEVAS RECETAS");
};

printNews();


