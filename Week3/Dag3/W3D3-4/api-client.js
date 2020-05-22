let API_KEY = "";
const setKey = key => {
    API_KEY = key;
}
const getAllGenres = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;    
    try {
        const res = await fetch(apiUrl, {method: 'GET'})
        const jsondata = await res.json();
        const genres = await jsondata.genres;
        return genres;
    } catch (error) {console.log(error)}
}

const getSpecificMovie = async (movieId, externalSource) => {
    const apiUrl = `https://api.themoviedb.org/3/find/${movieId}?api_key=${API_KEY}&external_source=${externalSource}`
    try{
        const result = await fetch(apiUrl, {method: 'GET'})
        const jsondata = await result.json();
        const movieDetails = await jsondata.movie_results;
        return movieDetails;
    } catch (error) {console.log(error)}
}

const getTopRatedMovies = async (page) => {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    try {
        const result = await fetch(apiUrl, {method: 'GET'})
        const jsondata = await result.json();
        const movies = await jsondata.results;
        // const movieTitles = await movies.map(movies.title);
        return movies;
    } catch (error) {console.log(error)}
}

const getTopRatedActionMovies = async (genre_ids, sort_by) => {
    // Genre ids should be seperated by a ,
    // Sort by vote_average.desc should be the top rated movies
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_ids}&sort_by=${sort_by}`
    try {
        const result = await fetch(apiUrl, {method: 'GET'})
        const jsondata = await result.json();
        const movies = await jsondata.results;
        return movies;
    } catch(error) {console.log(error)}
}

const getMoviesFromYear = async (release_year) => {
    // Genre ids should be seperated by a ,
    // Sort by vote_average.desc should be the top rated movies
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${release_year}`
    try {
        const result = await fetch(apiUrl, {method: 'GET'})
        const jsondata = await result.json();
        const movies = await jsondata.results;
        return movies;
    } catch(error) {console.log(error)}
}
