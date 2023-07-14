import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
