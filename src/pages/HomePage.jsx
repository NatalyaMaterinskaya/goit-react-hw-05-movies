import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList'
import React from 'react'

export const HomePage = () => {
  return (
    <section>
      <h1>Trending today</h1>
      <TrendingMoviesList/>
    </section>
  )
}
