var output = document.querySelector(".output");
var movieGenre = document.querySelector(".movie-genre");

let recipeGenrePoints = 0;
let movieTitle = " ";


let recipeObject = {
 
    0: {"dishName": "Saltine Crackers"},
    1: {"dishName": "Sweet potato fries"},
    2: {"dishName": "Gas station sushi"},
    3: {"dishName": "Saltine Crackers"},
    4: {"dishName": "Saltine Crackers"},
    5: {"dishName": "Saltine Crackers"},
    6: {"dishName": "Saltine Crackers"},
    7: {"dishName": "Saltine Crackers"},
    8: {"dishName": "Saltine Crackers"},
    9: {"dishName": "ice cubes"},
    10: {"dishName": "Saltine Crackers"},
    12: {"dishName": "Saltine Crackers"},
    13: {"dishName": "Sauteed Kale"},
    14: {"dishName": "Broiled salmon"},
    15: {"dishName": "Broccoli Cheddar Soup"},
    16: {"dishName": "Mushroom Stuffed Pork Tenderloins"},
    17: {"dishName": "Frog Leg Soup"},
    18: {"dishName": "Sauteed Kale"},
    19: {"dishName": "Broiled salmon"},
    20: {"dishName": "Broccoli Cheddar Soup"},
    21: {"dishName": "Mushroom Stuffed Pork Tenderloins"},
    22: {"dishName": "Frog Leg Soup"},
    23: {"dishName": "Frog Leg Soup"},
    24: {"dishName": "Sauteed Kale"},
    25: {"dishName": "Broiled salmon"},
    26: {"dishName": "Broccoli Cheddar Soup"},
    27: {"dishName": "Mushroom Stuffed Pork Tenderloins"},
    28: {"dishName": "Frog Leg Soup"}
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
       for (let i = 0; i < splitgenre.length; i++){
           splitgenre[i] = splitgenre[i].trim()
            if (splitgenre[i]  == "Crime"){
                recipeGenrePoints = recipeGenrePoints + 4
                console.log("crime " + recipeGenrePoints)
            }
            if (splitgenre[i] == "Biography"){
                recipeGenrePoints = recipeGenrePoints + 10 
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
            //
            if (splitgenre.length > 3){
                recipeGenrePoints = recipeGenrePoints - 3
            }
            if (splitgenre.length === 1){
                recipeGenrePoints = recipeGenrePoints + 5
            }
            if (splitgenre.length === 2){
                recipeGenrePoints = recipeGenrePoints + 3
            }
            //
            if (i + 1 >= splitgenre.length){
                findRecipe();
            }
    }

    
    //    console.log(splitgenre);


    //    console.log(recipeGenrePoints);
        
    },
    error: function(error){
        console.log(error)
    }
})
}

let findRecipe = () => {
    movieGenre.textContent = `${recipeObject[recipeGenrePoints].dishName} goes well with  ${movieTitle}`;
    output.setAttribute('class', 'show output');
    
 
        console.log(recipeGenrePoints);
    
        console.log(recipeObject[recipeGenrePoints].dishName);
    
    console.log("need to find receipe for " + recipeGenrePoints + " point movie");
    

}   