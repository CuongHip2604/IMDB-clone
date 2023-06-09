import { styled } from 'styled-components';

export const MainContent = styled.main`
  padding: 1.5rem 4rem;

  @media (max-width: 576px) {
    padding: 1.5rem 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
