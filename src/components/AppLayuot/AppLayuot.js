import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from 'components/Container/Container';

export const AppLayuot = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
      <Toaster />
    </>
  );
};
