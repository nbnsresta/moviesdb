import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from "react-multi-carousel";
import MovieItem from './MovieItem';
import { categories } from '../store/constants';
import pagesSlice from '../store/slices/pages.slice';

import "react-multi-carousel/lib/styles.css";
import style from './sectionrow.module.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  largeDesktop: {
    breakpoint: { max: 3000, min: 1332 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1332, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 776 },
    items: 4,
  },
  tabletSmall: {
    breakpoint: { max: 776, min: 584 },
    items: 3,
  },
  mobileBig: {
    breakpoint: { max: 584, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 396 },
    items: 2,
  },
  mobilesmall: {
    breakpoint: { max: 396, min: 0 },
    items: 1,
  },
};

export default ({ title, category }) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies[category].movies)
  useEffect(() => {
    dispatch(pagesSlice.actions.getMovies({ category: categories[category], page: 1 }));
  }, [category, dispatch]);

  return (
    <div className={style.sectionRow}>
      <h2 className={style.sectionTitle}>{title}</h2>
      <Carousel
        responsive={responsive}
        itemClass="carousel-item-padding-40-px">
        {movies.map(item => <MovieItem key={item.id} movie={item}/>)}
      </Carousel>
    </div>
  )
}