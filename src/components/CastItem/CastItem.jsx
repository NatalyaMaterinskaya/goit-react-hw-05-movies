import React from 'react';

import { ListItem, Text } from './CastItem.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const CastItem = ({ actor: { profile_path, name, character } }) => {
  return (
    <ListItem>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImg
        }
        alt={name}
        width="250"
      ></img>
        <Text>{name}</Text>
        <h3>{character}</h3>
    </ListItem>
  );
};
