import { LogoContainer } from './styles';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
          alt="Logo"
        />
      </Link>
    </LogoContainer>
  );
}
