import { CastItem } from 'components/CastItem/CastItem';
import React from 'react'
import { Wrapper } from './CastList.styled';

export const CastList = ({cast}) => {
  return (
    <Wrapper>
      { cast && cast.map(actor => (
        <CastItem key={actor.id} actor={actor} />
      ))}
    </Wrapper>
  );
}

