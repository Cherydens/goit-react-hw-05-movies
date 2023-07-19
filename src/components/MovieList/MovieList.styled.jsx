import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieListStyled = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: auto;

  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;

export const MovieListLink = styled(Link)`
  color: #111;
  &:hover {
    color: #bd3e53;
  }
`;
