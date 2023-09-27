import React from 'react'

import { Wrapper } from './CastList.styled';
import { CastItem } from 'components/CastItem/CastItem';

export const CastList = ({cast}) => {
  return (
    <Wrapper>
      { cast && cast.map(actor => (
        <CastItem key={actor.id} actor={actor} />
      ))}
    </Wrapper>
  );
}

