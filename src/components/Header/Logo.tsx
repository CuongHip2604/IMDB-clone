import logo from 'assets/images/logo.png';
import { LogoContainer } from './styles';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </LogoContainer>
  );
}
