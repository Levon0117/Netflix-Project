import { useState, useEffect, useRef } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { IoIosClose } from "react-icons/io";
import "./Row.scss"

const base_url = 'https://image.tmdb.org/t/p/w500/';

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, settrailerUrl] = useState('')
  const [timeToPlay, settimeToPlay] = useState(false)
  const opts = {
    height: '490',
    width: '60%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          settrailerUrl(urlParams.get('v'))
        })
        .catch(err => console.log(err))
    }
  }
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [])
  useEffect(() => {
    async function fetchData() {
      const response = await axios(fetchUrl)
      setMovies(response.data.results)
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" ref={elRef}>
        {movies.map(movie => {
          return (
            <img
              className='row__poster'
              key={movie.id}
              src={`${base_url}${movie.poster_path}`}
              alt={movie?.title}
              onClick={() => {
                handleClick(movie)
                settimeToPlay(true)
              }}
            />
          )
        })}
      </div>
      {
        (timeToPlay && trailerUrl)
          ? (
            <div className="video_box">
              <span onClick={() => {
                settimeToPlay(false)
              }}>
                <IoIosClose />
              </span>
              <YouTube
                className='player'
                videoId={trailerUrl}
                onEnd={() => { settimeToPlay(false) }}
                opts={opts}
              />
            </div>
          ) : null

      }
    </div>
  )

}
