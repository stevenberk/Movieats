var output = document.querySelector(".output");
var movieGenre = document.querySelector(".movie-genre");

var form = document
  .querySelector(".form")
  .addEventListener("submit", function(e) {
    e.preventDefault();
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
       console.log(splitgenre);

       
        
    },
    error: function(error){
        console.log(error)
    }
})
}