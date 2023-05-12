import { styled } from 'styled-components';

export const MovieDetailContainer = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  row-gap: 32px;
`;

export const MovieInfomation = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 32px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  @media (max-width: 576px) {
    grid-template-columns: unset;
    grid-template-rows: max-content 1fr;
  }
`;

export const MovieImage = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.375rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: ${(props) => props.theme.black};
    opacity: 0.3;
    border-radius: 0.375rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.white};
    z-index: 10;
    cursor: pointer;
    width: 80px;
    height: 80px;
  }
`;

export const MovieContent = styled.div`
  display: grid;
  grid-template-rows: max-content max-content max-content;
  row-gap: 28px;

  @media (max-width: 576px) {
    row-gap: 24px;
  }
`;

export const MovieName = styled.h1`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

export const MovieDescription = styled.div``;

export const MovieType = styled.div``;
export const MovieYear = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const MovieDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const MovieWraper = styled.div`
  display: flex;
  gap: 28px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 576px) {
    gap: 12px;
  }
`;
