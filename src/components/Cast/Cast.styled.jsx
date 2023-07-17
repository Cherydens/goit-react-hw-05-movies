import styled from '@emotion/styled';

export const CastContainer = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 12px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const NoCastContainer = styled.div`
  padding: 24px;
`;
