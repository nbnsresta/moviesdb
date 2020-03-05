import React, { useCallback } from 'react';
import style from './movieitem.module.css'
import { useHistory } from 'react-router-dom';

const imageBaseUrl = process.env.REACT_APP_MOVIE_POSTER_BASE_PATH

const MovieItem = ({movie}) => {

  const history = useHistory();
  const navigateToMovieProfile = useCallback(() => {
    history.push(`/movie/${movie.id}`)
  }, [movie.id, history]);

  return (
    <div className={style.movieItem} key={movie.id} onClick={navigateToMovieProfile}>
      <img className={style.movieImage} src={`${imageBaseUrl}${movie['poster_path'] || movie['backdrop_path']}`} alt={movie.title}/>
      <span className={style.movieTitle}>{movie.title}</span>
    </div>
  )
}

export default MovieItem;