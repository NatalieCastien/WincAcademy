const myFavoriteMovie = {
    title: "El laberinto del fauno",
    duration: 120,
    stars: ["Ivana Baquero", "Ariadna Gil", "Sergi López"]
}

const showMovieInformation = (movie) => {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.join(', ') + ".");
}

showMovieInformation(myFavoriteMovie);