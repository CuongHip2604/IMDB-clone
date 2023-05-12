import { styled } from 'styled-components';

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LoadingWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 108px);
`;
