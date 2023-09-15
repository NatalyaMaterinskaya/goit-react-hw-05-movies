import React from 'react';

export const FilmCard = ({
  film: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  return (
    <section>
      <button type="button">Go back</button>
      <div>
        <img src={poster_path} alt={title} width="360" height="300"></img>
        <div>
          <h1>
            {title} ({release_date})
          </h1>
          <p>User Score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres?.map(genre => (
              <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
