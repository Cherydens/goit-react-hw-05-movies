import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  z-index: 1100;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
  height: 62px;
  padding: 24px;
  color: #111;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;

  &.active {
    color: #bd3e53;
  }
`;
