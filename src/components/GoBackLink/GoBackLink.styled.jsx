import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBackLinkStyled = styled(Link)`
  top: 64px;
  left: 4px;
  position: sticky;
  z-index: 1100;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0px 24px;
  color: #111;
  background-color: #fff;
  text-decoration: none;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  :hover {
    color: #bd3e53;
  }
`;
