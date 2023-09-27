import React from 'react'

import PropTypes from 'prop-types';

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

CastList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
