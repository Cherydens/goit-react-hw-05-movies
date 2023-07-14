import { Route, Routes } from 'react-router-dom';

import Movies from 'pages/Movies/Movies';
import Home from 'pages/Home/Home';
import { Container, Header, NavMenu, StyledLink } from './App.styled';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Container>
      <Header>
        <NavMenu>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavMenu>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
