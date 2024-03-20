import './App.css';
import requests from './request';
import Row from './Row';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Document Movies" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
