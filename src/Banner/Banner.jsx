import { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../request';
import "./Banner.scss"
const base_url = 'https://image.tmdb.org/t/p/original/';


export default function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await axios(requests.fetchNetflixOriginals)
      const random = Math.floor(Math.random() * response.data.results.length)
      setMovie(response.data.results[random])
    }
    fetchData()
  }, [])
  return (
    <header className='banner' style={{
      backgroundImage: `url("${base_url}${movie?.backdrop_path}")`
    }}>
      <div className='banner__contects'>
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className='banner__buttons'>
            <button className='banner__button'>play</button>
            <button className='banner__button'>My list</button>
          </div>
        <h2 className='banner__description'>
          {movie.overview}
        </h2>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  )
}
