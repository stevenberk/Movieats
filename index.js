var output = document.querySelector(".output");
var movieGenre = document.querySelector(".movie-genre");

let recipeGenrePoints = 0;
let movieTitle = " ";

let numberOfGenres = 1;
let recipeObject = {
 
    0: {"dishName": "Saltine Crackers", "description": "A dish as bland as your taste in movies"},
    1: {"dishName": "Sweet potato fries", "description": "Is it worth paying a little extra for"},
    2: {"dishName": "Gas station sushi", "description": ""},
    3: {"dishName": "Saltine Crackers", "description": ""},
    4: {"dishName": "Saltine Crackers", "description": ""},
    5: {"dishName": "Meat and potatoes", "description": "You're way too simple"},
    6: {"dishName": "Macaroni and cheese from a box", "description": ""},
    7: {"dishName": "Saltine Crackers", "description": ""},
    8: {"dishName": "Saltine Crackers", "description": ""},
    9: {"dishName": "ice cubes", "description": ""},
    10: {"dishName": "Saltine Crackers", "description": ""},
    12: {"dishName": "Saltine Crackers", "description": ""},
    13: {"dishName": "Sauteed Kale", "description": ""},
    14: {"dishName": "Broiled salmon", "description": ""},
    15: {"dishName": "Broccoli Cheddar Soup", "description": ""},
    16: {"dishName": "Mushroom Stuffed Pork Tenderloins", "description": ""},
    17: {"dishName": "Frog Leg Soup", "description": ""},
    18: {"dishName": "Sauteed Kale", "description": ""},
    19: {"dishName": "Broiled salmon", "description": ""},
    20: {"dishName": "Broccoli Cheddar Soup", "description": ""},
    21: {"dishName": "Mushroom Stuffed Pork Tenderloins", "description": ""},
    22: {"dishName": "Frog Leg Soup", "description": ""},
    23: {"dishName": "Frog Leg Soup", "description": ""},
    24: {"dishName": "Sauteed Kale", "description": ""},
    25: {"dishName": "Broiled salmon", "description": ""},
    26: {"dishName": "Broccoli Cheddar Soup", "description": ""},
    27: {"dishName": "Mushroom Stuffed Pork Tenderloins", "description": ""},
    28: {"dishName": "Frog Leg Soup", "description": ""}
}




var form = document
  .querySelector(".form")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    recipeGenrePoints = 0;
    var input = document.querySelector(".main-input");
    getMoviesAPI(input.value);
  });





let getMoviesAPI = (value) => {
$.ajax({
    type: "GET",
    url: `http://www.omdbapi.com/?i=tt3896198&apikey=6c8e631&t=${value}`,
    success: function(movie){
        console.log(movie.Title)
        movieTitle = movie.Title
        // movieGenre.textContent = movie.Genre;
        // output.setAttribute('class', 'show output');
   
       let splitgenre = movie.Genre.split(",");
       for (let i = 0; i < splitgenre.length; (i++, numberOfGenres++)){
           splitgenre[i] = splitgenre[i].trim()
            if (splitgenre[i]  == "Crime"){
                recipeGenrePoints = recipeGenrePoints + 4
                console.log("crime " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Biography"){
                recipeGenrePoints = recipeGenrePoints + 8 
                console.log("bio " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Documentary"){
                recipeGenrePoints = recipeGenrePoints + 10
                console.log("doc " + recipeGenrePoints)
            }
            if (splitgenre[i]  == "Comedy"){
                recipeGenrePoints = recipeGenrePoints + 8 
                console.log("comedy " + recipeGenrePoints)
            }
            if (splitgenre[i]  == "Drama"){
                recipeGenrePoints = recipeGenrePoints + 9 
                console.log("drama " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Animation"){
                recipeGenrePoints = recipeGenrePoints + 2 
                console.log("amination " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Adventure"){
                recipeGenrePoints = recipeGenrePoints + 2 
                console.log("adventure " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Romance"){
                recipeGenrePoints = recipeGenrePoints + 7 
                console.log("romance " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Action"){
                recipeGenrePoints = recipeGenrePoints + 1 
                console.log("action " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Sport"){
                recipeGenrePoints = recipeGenrePoints + 0 
                console.log("sport " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Fantasy"){
                recipeGenrePoints = recipeGenrePoints + 1 
                console.log("fantasy " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Family"){
                recipeGenrePoints = recipeGenrePoints + 1 
                console.log("family " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Short"){
                recipeGenrePoints = recipeGenrePoints + 9 
                console.log("short " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Music"){
                recipeGenrePoints = recipeGenrePoints + 8 
                console.log("music " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Western"){
                recipeGenrePoints = recipeGenrePoints + 0 
                console.log("western " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Thriller"){
                recipeGenrePoints = recipeGenrePoints + 1 
                console.log("thriller " + recipeGenrePoints)
            }
            if (splitgenre[i] == "War"){
                recipeGenrePoints = recipeGenrePoints + 6 
                console.log("war " + recipeGenrePoints)
            }
            if (splitgenre[i] == "History"){
                recipeGenrePoints = recipeGenrePoints + 8 
                console.log("thriller " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Sci-Fi"){
                recipeGenrePoints = recipeGenrePoints + 1 
                console.log("sciFi " + recipeGenrePoints)
            }
            if (i + 1 >= splitgenre.length){
                console.log(numberOfGenres);
                findRecipe();
            }
    }

   
    },
    error: function(error){
        console.log(error)
    }
})
}

let findRecipe = () => {
    movieGenre.textContent = `${recipeObject[recipeGenrePoints].dishName} goes well with  ${movieTitle}. \n ${recipeObject[recipeGenrePoints].description}`;
    output.setAttribute('class', 'show output');

        if (numberOfGenres > 4){
            recipeGenrePoints = recipeGenrePoints - 8;
            console.log(recipeGenrePoints);
        }
        if (numberOfGenres < 2){
            recipeGenrePoints = recipeGenrePoints + 5;
            console.log(recipeGenrePoints);
        }
        if (numberOfGenres < 3){
            recipeGenrePoints = recipeGenrePoints + 3;
            console.log(recipeGenrePoints);
        }
    

    console.log("need to find receipe for " + recipeGenrePoints + " point movie");
    

}   