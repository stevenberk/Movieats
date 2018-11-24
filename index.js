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
    
    //    console.log(Object.keys(splitgenre).length)
    //    console.log(splitgenre);

       if (splitgenre[0] == "Documentary"){
            recipeGenrePoints = recipeGenrePoints + 10
       }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] == "Crime"){
        recipeGenrePoints = recipeGenrePoints + 5
        }
        if (splitgenre[0] == "Comedy"){
            recipeGenrePoints = recipeGenrePoints + 6 
        }
        if (splitgenre[0] == "Drama"){
            recipeGenrePoints = recipeGenrePoints + 10 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Animation"){
            recipeGenrePoints = recipeGenrePoints + 3 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Adventure"){
            recipeGenrePoints = recipeGenrePoints + 3 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Romance"){
            recipeGenrePoints = recipeGenrePoints + 3 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Action"){
            recipeGenrePoints = recipeGenrePoints + 2 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Biography"){
            recipeGenrePoints = recipeGenrePoints + 5 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Sport"){
            recipeGenrePoints = recipeGenrePoints - 2 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Fantasy"){
            recipeGenrePoints = recipeGenrePoints - 1 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Family"){
            recipeGenrePoints = recipeGenrePoints - 1 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Short"){
            recipeGenrePoints = recipeGenrePoints + 4 
        }
        if (splitgenre[0] || splitgenre[1] || splitgenre[2] || splitgenre[3] || splitgenre[4] == "Music"){
            recipeGenrePoints = recipeGenrePoints + 4 
        }
        if (Object.keys(splitgenre).length > 3){
            recipeGenrePoints = recipeGenrePoints - 1  
        }
       console.log(recipeGenrePoints);
        
    },
    error: function(error){
        console.log(error)
    }
})
}