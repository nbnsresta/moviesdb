import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import singleMovieSlice from '../store/slices/singleMovie.slice';

import style from './movieprofile.module.css';

const imageBaseUrl = process.env.REACT_APP_MOVIE_POSTER_BASE_PATH

export default (props) => {
  const { movieId } = props.match.params;
  const dispatch = useDispatch();
  const movie = useSelector(state => state.singleMovie)
  useEffect(() => {
    dispatch(singleMovieSlice.actions.getSingleMovie({ movieId }));
    return () => {
      dispatch(singleMovieSlice.actions.clearSingleMovie());
    }
  }, [movieId, dispatch]);

  return (
    <main className={style.main}>
      <h1>{movie.title}</h1>
      <div className={style.content}>
        <img className={style.posterImage} src={`${imageBaseUrl}${movie['poster_path'] || movie['backdrop_path']}`} alt={movie.title}/>
        <p className={style.overview}>{movie.overview}</p>
      </div>
    </main>
  )
}