import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../store/constants';
import pagesSlice from '../store/slices/pages.slice';

export default ({title, category}) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies[category].movies)
  useEffect(() => {
    dispatch(pagesSlice.actions.getMovies({category: categories[category], page:1}));
  }, [category, dispatch]);

  return (
    <div className='movie__list__horizontal'>
      <h1>{title}</h1>
        {
          movies.map(item => <div className='movie__item' key={item.id}>{item.title}</div>)
        }
    </div>
  )
}