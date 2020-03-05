import React from 'react';
import SectionRow from './SectionRow'
import { categories } from "../store/constants";

export default () => {
  return (
    <main>
      <SectionRow title="Trending Movies" category={categories.trending} />
      <SectionRow title="New Movies" category={categories.new} />
      <SectionRow title="Upcoming Movies" category={categories.upcoming} />
    </main>
  )
}