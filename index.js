var output = document.querySelector(".output");
var movieGenre = document.querySelector(".movie-genre");

let recipeGenrePoints = 0;


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
        console.log(movie.Genre)
        movieGenre.textContent = movie.Genre;
        output.setAttribute('class', 'show output');
   
       let splitgenre = movie.Genre.split(",");
       for (let i = 0; i < splitgenre.length; i++){
           splitgenre[i] = splitgenre[i].trim()
       }
       console.log(splitgenre);
//index value 0
       if (splitgenre[0] == "Documentary"){
            recipeGenrePoints = recipeGenrePoints + 6
       }
        if (splitgenre[0]  == "Crime"){
        recipeGenrePoints = recipeGenrePoints + 5
        console.log("crime" + recipeGenrePoints)
        }
        if (splitgenre[0]  == "Comedy"){
            recipeGenrePoints = recipeGenrePoints + 6 
            console.log("comedy" + recipeGenrePoints)
        }
        if (splitgenre[0]  == "Drama"){
            recipeGenrePoints = recipeGenrePoints + 5 
            console.log("drama" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Animation"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("amination" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Adventure"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("adventure" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Romance"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("romance" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Action"){
            recipeGenrePoints = recipeGenrePoints + 2 
            console.log("action" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Biography"){
            recipeGenrePoints = recipeGenrePoints + 5 
            console.log("bio" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Sport"){
            recipeGenrePoints = recipeGenrePoints - 2 
            console.log("sport" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Fantasy"){
            recipeGenrePoints = recipeGenrePoints - 1 
            console.log("fantasy" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Family"){
            recipeGenrePoints = recipeGenrePoints - 1 
            console.log("family" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Short"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("short" + recipeGenrePoints)
        }
        if (splitgenre[0] == "Music"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("music" + recipeGenrePoints)
        }
// index value 1
        if (splitgenre[1] == "Documentary"){
            recipeGenrePoints = recipeGenrePoints + 6
       }
        if (splitgenre[1]  == "Crime"){
        recipeGenrePoints = recipeGenrePoints + 5
        console.log("crime" + recipeGenrePoints)
        }
        if (splitgenre[1]  == "Comedy"){
            recipeGenrePoints = recipeGenrePoints + 6 
            console.log("comedy" + recipeGenrePoints)
        }
        if (splitgenre[1]  == "Drama"){
            recipeGenrePoints = recipeGenrePoints + 5 
            console.log("drama" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Animation"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("amination" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Adventure"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("adventure" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Romance"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("romance" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Action"){
            recipeGenrePoints = recipeGenrePoints + 2 
            console.log("action" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Biography"){
            recipeGenrePoints = recipeGenrePoints + 5 
            console.log("bio" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Sport"){
            recipeGenrePoints = recipeGenrePoints - 2 
            console.log("sport" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Fantasy"){
            recipeGenrePoints = recipeGenrePoints - 1 
            console.log("fantasy" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Family"){
            recipeGenrePoints = recipeGenrePoints - 1 
            console.log("family" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Short"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("short" + recipeGenrePoints)
        }
        if (splitgenre[1] == "Music"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("music" + recipeGenrePoints)
        }
//index value 2
        if (splitgenre[2] == "Documentary"){
            recipeGenrePoints = recipeGenrePoints + 6
        }
        if (splitgenre[2]  == "Crime"){
        recipeGenrePoints = recipeGenrePoints + 5
        console.log("crime" + recipeGenrePoints)
        }
        if (splitgenre[2]  == "Comedy"){
            recipeGenrePoints = recipeGenrePoints + 6 
            console.log("comedy" + recipeGenrePoints)
        }
        if (splitgenre[2]  == "Drama"){
            recipeGenrePoints = recipeGenrePoints + 5 
            console.log("drama" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Animation"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("amination" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Adventure"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("adventure" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Romance"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("romance" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Action"){
            recipeGenrePoints = recipeGenrePoints + 2 
            console.log("action" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Biography"){
            recipeGenrePoints = recipeGenrePoints + 5 
            console.log("bio" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Sport"){
            recipeGenrePoints = recipeGenrePoints - 2 
            console.log("sport" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Fantasy"){
            recipeGenrePoints = recipeGenrePoints - 1 
            console.log("fantasy" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Family"){
            recipeGenrePoints = recipeGenrePoints - 1 
            console.log("family" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Short"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("short" + recipeGenrePoints)
        }
        if (splitgenre[2] == "Music"){
            recipeGenrePoints = recipeGenrePoints + 3 
            console.log("music" + recipeGenrePoints)
        }
       console.log(recipeGenrePoints);
        
    },
    error: function(error){
        console.log(error)
    }
})
}