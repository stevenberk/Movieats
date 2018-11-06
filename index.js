
$.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=6c8e631&t=black_mass",
    success: function(movie){
        console.log(movie.Genre)
    },
    error: function(error){
        console.log(error)
    }
})