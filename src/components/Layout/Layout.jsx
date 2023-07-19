import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export default function Layout() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Container>
  );
}
