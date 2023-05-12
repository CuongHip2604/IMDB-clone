import { styled } from 'styled-components';

export const BreadcrumbContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;

  & li:last-child {
    color: ${(props) => props.theme.neutral_600};
    font-weight: bold;
  }

  & li:last-child::after {
    display: none;
  }
`;

export const BreadcrumbItem = styled.li`
  color: ${(props) => props.theme.neutral_500};

  &::after {
    content: '/';
    margin-right: 8px;
    margin-left: 8px;
  }
`;
