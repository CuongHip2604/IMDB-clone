import { styled } from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.svg`
  color: ${(props) => props.theme.neutral_300};
  fill: ${(props) => props.theme.rose_500};
  width: 40px;
  height: 40px;

  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(1turn);
    }
  }
`;
