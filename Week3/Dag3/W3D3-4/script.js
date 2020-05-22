const key = prompt("Enter your API key");
setKey(key);

// const getMyData = async() => {
//     await getData();
// };
// getMyData();

// Deel 1
// 1
const genreList = document.getElementById("genre-list");

// const makeGenreList = async() => {
//     const genres = await getAllGenres();
//     genres.forEach(genre => {
//         const newListItem = document.createElement('li');
//         newListItem.innerText = `Genre name: ${genre.name}, id: ${genre.id}`;
//         genreList.appendChild(newListItem);
//     })
//     // console.log(genres);
// };

// Not necessary to make async function again, because the data retreive function in api-client is already async. So .then is a better solution. 

getAllGenres().then ((genres) => {
    genres.forEach(genre => {
        const newListItem = document.createElement('li');
        newListItem.innerText = `Genre name: ${genre.name}, id: ${genre.id}`;
        genreList.appendChild(newListItem);
    });
});

// makeGenreList();

// 2 Specific movie
/* Get movie information with: 
   GET https://api.themoviedb.org/3/movie/{{external_id}}?api_key=e3b538d0216600a878fa78441f9d78f4
   GET find movie with external id:
   https://api.themoviedb.org/3/find/{{external_id}}?api_key=e3b538d0216600a878fa78441f9d78f4&language=nl&external_source=imdb_id
   external_id is the id from imdb:
   The lion king: tt6105098
   Joker: tt7286456
   Toy story 4: tt1979376

   GET my favorite movie:
   Pan's Labyrinth imdb id = tt0457430

   GET https://api.themoviedb.org/3/find/tt0457430?api_key=e3b538d0216600a878fa78441f9d78f4&language=nl&external_source=imdb_id
*/

// const showSpecificMovie = async(movieId, source) => {
//     const specificMovie = await getSpecificMovie(movieId, source);
//     const movieTitle = specificMovie[0].title;
//     const originalTitle = specificMovie[0].original_title;
//     const newHeader = document.createElement('h1');
//     if (originalTitle != "") { 
//         newHeader.innerHTML = `My favorite movie is: '${movieTitle}' <br>It's original title is: '${originalTitle}'`
//     } else {
//         newHeader.innerText = `My favorite movie is: ${movieTitle}`
//     }
//     document.getElementById('favorite').appendChild(newHeader);
// }
const movieId = "tt0457430";
const source = "imdb_id";
// showSpecificMovie(movieId, source);

// Without async, .then instead:

getSpecificMovie(movieId, source).then((specificMovie) => {
    const movieTitle = specificMovie[0].title;
    const originalTitle = specificMovie[0].original_title;
    const newHeader = document.createElement('h1');
    if (originalTitle != "") { 
        newHeader.innerHTML = `My favorite movie is: '${movieTitle}' <br>It's original title is: '${originalTitle}'`
    } else {
        newHeader.innerText = `My favorite movie is: ${movieTitle}`
    }
    document.getElementById('favorite').appendChild(newHeader);
})

// 3 Top rated movies
// const showTopRatedMovies = async () => {
//     const movieList = await getTopRatedMovies();
//     const topRatedList = document.getElementById('top-rated').getElementsByTagName('ul');
//     movieList.forEach((movie) => {
//         const newListItem = document.createElement('li');
//         newListItem.innerText = movie.title;
//         topRatedList[0].appendChild(newListItem);
//     })
// }

// showTopRatedMovies();

// Without async, with .then:
getTopRatedMovies().then((movieList) => {
    const topRatedList = document.getElementById('top-rated').getElementsByTagName('ul');
    movieList.forEach((movie) => {
        const newListItem = document.createElement('li');
        newListItem.innerText = movie.title;
        topRatedList[0].appendChild(newListItem);
    })
});

// 4 Top rated action genre. Genre Action id = 28

// const showTopRatedActionMovies = async (genreIds, sortBy) => {
//     const topRatedActionMovies = await getTopRatedActionMovies(genreIds, sortBy);
//     const topRatedList = document.getElementById('top-rated-action').getElementsByTagName('ul');
//     topRatedActionMovies.forEach((movie) => {
//         const newListItem = document.createElement('li');
//         newListItem.innerText = movie.title;
//         topRatedList[0].appendChild(newListItem);
//     })
// }
// showTopRatedActionMovies("28", "vote_average.desc")

const genreIds = "28";
const sortBy = "vote_average.desc";
getTopRatedActionMovies(genreIds, sortBy).then((topRatedActionMovies) => {
    const topRatedList = document.getElementById('top-rated-action').getElementsByTagName('ul');
    topRatedActionMovies.forEach((movie) => {
        const newListItem = document.createElement('li');
        newListItem.innerText = movie.title;
        topRatedList[0].appendChild(newListItem);
    })
})


// 5 year: 1975
// const showMoviesFromYear = async (releaseYear) => {
//     const moviesFromYear = await getMoviesFromYear(releaseYear);
//     const movieList = document.getElementById('movies-from-year').getElementsByTagName('ul');
//     moviesFromYear.forEach((movie) => {
//         const newListItem = document.createElement('li');
//         newListItem.innerText = movie.title;
//         movieList[0].appendChild(newListItem);
//     })
// }
// showMoviesFromYear(1975);

const year = 1975;
getMoviesFromYear(year).then((moviesFromYear) => {
    const movieList = document.getElementById('movies-from-year').getElementsByTagName('ul');
    moviesFromYear.forEach((movie) => {
        const newListItem = document.createElement('li');
        newListItem.innerText = movie.title;
        movieList[0].appendChild(newListItem);
    }) 
})

// Deel 2 en 3 via postman - CHECK