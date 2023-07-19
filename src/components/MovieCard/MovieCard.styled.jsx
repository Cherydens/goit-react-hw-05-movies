import styled from '@emotion/styled';

export const MovieCardContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 12px 24px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieCardPosterContainer = styled.div`
  max-width: 180px;
  flex-basis: 50%;
`;

export const MovieCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-basis: 50%;
`;
