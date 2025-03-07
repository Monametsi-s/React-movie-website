const API_KEY = "27675662dcb7f3cfd1b197190da1719c";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=
        ${API_KEY}&sort_by=popularity.desc`)
    const data = await response.json()
    return data.results
}


export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=
        ${API_KEY}&query=${encodeURIComponentquery(query)}`)
    const data = await response.json()
    return data.results
}

