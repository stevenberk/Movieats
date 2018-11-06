
var output = document.querySelector(".output");
var movieGenre = document.querySelector(".movie-genre");

$.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=6c8e631&t=mystic_river",
    success: function(movie){
        console.log(movie.Genre)
        movieGenre.textContent = movie.Genre;
        output.setAttribute('class', 'show output');
        
    },
    error: function(error){
        console.log(error)
    }
})