let API_KEY = "";
const setKey = key => {
    API_KEY = key;
}
const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;    
    try {
        const res = await fetch(apiUrl, {method: 'GET'})
        const jsondata = await res.json();
        console.log(jsondata);
    } catch (error) {console.log(error)}
}
