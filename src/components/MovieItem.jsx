import React from 'react';
import style from './movieitem.module.css'

const imageBaseUrl = process.env.REACT_APP_MOVIE_POSTER_BASE_PATH

export default ({movie}) => {
  return (
    <div className={style.movieItem} key={movie.id}>
      <img src={`${imageBaseUrl}${movie['poster_path']}`} alt={movie.title}/>
      <span className={style.movieTitle}>{movie.title}</span>
    </div>
  )
}