// const API_KEY = "YOUR API KEY HERE 👀";
const API_KEY = "d1e46fd6bd1dd466cb9043733fc152ae";


const requests = {
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
	fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests