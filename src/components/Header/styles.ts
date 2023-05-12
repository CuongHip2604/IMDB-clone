import { styled } from 'styled-components';
import { ReactComponent as IconSearch } from 'assets/icons/ic-search.svg';

interface MenuItemProps {
  active: boolean;
}

export const HeaderContainer = styled.div`
  padding: 0 4rem;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 32px;
`;

export const MenuItem = styled.li<MenuItemProps>`
  cursor: pointer;
  border-bottom: 2px solid
    ${(props) => (props.active ? '#f43f5e' : 'transparent')};
  padding: 8px 0;
  color: ${(props) => (props.active ? '#f43f5e' : '#6b7280')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

export const InputSearch = styled.input`
  padding: 0.75rem;
  padding-right: 2rem;
  background-color: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 0.375rem;
  width: 200px;
  font-weight: 300;
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:focus {
    border-color: #f43f5e;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled(IconSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
`;

export const LogoContainer = styled.div`
  width: 100px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
