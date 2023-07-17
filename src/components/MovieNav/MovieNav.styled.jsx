import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 24px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const MovieNavMenu = styled.ul`
  display: flex;
  gap: 12px;
`;
export const MovieNavLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  &:hover {
    color: #bd3e53;
  }
`;
