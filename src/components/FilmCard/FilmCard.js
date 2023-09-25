import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import {
  Description,
  DetailsItem,
  DetailsList,
  GenresWrapper,
  LinkBtnItem,
  LinkItem,
  PrevBtn,
  Wrapper,
} from './FilmCard.styled';
import { Outlet, useLocation } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const FilmCard = ({
  film: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const releaseDate = '(' + release_date?.slice(0, 4) + ')';
  return (
    <section>
      {title && (
        <>
          <PrevBtn type="button">
            <LinkBtnItem to={backLink}>
              <RxArrowLeft />
              <span>Go back</span>
            </LinkBtnItem>
          </PrevBtn>
          <Wrapper>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              alt={title}
              width="250"
            ></img>
            <Description>
              <h1>
                {title} {releaseDate}
              </h1>
              <p>User Score: {Math.round(vote_average * 10) } %</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <GenresWrapper>
                {genres?.map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </GenresWrapper>
            </Description>
          </Wrapper>
          <DetailsList>
            <DetailsItem>
              <LinkItem to="cast">Cast</LinkItem>
            </DetailsItem>
            <DetailsItem>
              <LinkItem to="reviews">Reviews</LinkItem>
            </DetailsItem>
          </DetailsList>
          <Outlet />
        </>
      )}
    </section>
  );
};
