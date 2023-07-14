import { HeaderStyled, NavMenu, StyledLink } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <nav>
        <NavMenu>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavMenu>
      </nav>
    </HeaderStyled>
  );
}
