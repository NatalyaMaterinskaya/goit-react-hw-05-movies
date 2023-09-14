import React from 'react';
import { List, ListItem, Nav, LinkItem, Header } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <Nav>
        <List>
          <ListItem>
            <LinkItem to="/">Home</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/movies">Movies</LinkItem>
          </ListItem>
        </List>
      </Nav>
    </Header>
  );
};
