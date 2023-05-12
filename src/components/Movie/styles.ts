import { styled } from 'styled-components';

export const MovieContainer = styled.div`
  width: 100%;
  max-height: 440px;
  display: grid;
  grid-template-rows: max-content min-content min-content;
  row-gap: 8px;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.neutral_100};
  padding-bottom: 8px;
  box-shadow: 2px 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  cursor: pointer;

  @media (max-width: 480px) {
    max-height: 510px;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
`;

export const MovieName = styled.p`
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 8px;
`;
export const MovieDescription = styled.p`
  color: #6b7280;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0 8px;
`;
