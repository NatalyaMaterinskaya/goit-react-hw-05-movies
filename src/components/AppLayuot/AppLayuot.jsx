import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';

export const AppLayuot = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster />
    </>
  );
};
