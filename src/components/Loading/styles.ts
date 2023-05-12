import { styled } from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadingIcon = styled.svg`
  color: 'rgb(229,231,235)';
  fill: ${(props) => props.theme.rose_500};
  width: 40px;
  height: 40px;
`;
