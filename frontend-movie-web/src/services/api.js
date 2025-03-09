const API_KEY = "27675662dcb7f3cfd1b197190da1719c";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`)
    const data = await response.json()
    return data.results
}


// export const searchMovies = async (query) => {
//     const response = await fetch(`${BASE_URL}/search/movie?api_key=
//         ${API_KEY}&query=${encodeURIComponentquery(query)}`)
//     const data = await response.json()
//     return data.results
// }


// Function to search movies
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results; // Return the results array
};

// Example usage
// const query = "Inception";
// searchMovies(query)
//     .then(results => {
//         console.log(results); // This will log the array of movie objects
//     })
//     .catch(error => {
//         console.error("Error fetching movies:", error);
//     });