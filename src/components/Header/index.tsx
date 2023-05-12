import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import { HeaderContainer } from './styles';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
      <Search />
    </HeaderContainer>
  );
}
