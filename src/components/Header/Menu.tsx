import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuContainer, MenuItem } from './styles';

const items = [
  {
    key: '/',
    value: 'Movies',
  },
  {
    key: '/tv-shows',
    value: 'TV shows',
  },
];

export default function Menu() {
  const location = useLocation();

  const menuActive = useMemo(() => {
    if (location.pathname.includes('/movies/')) return '/';

    return location.pathname;
  }, [location.pathname]);

  return (
    <MenuContainer>
      {items.map((item) => (
        <MenuItem active={menuActive === item.key} key={item.key}>
          <Link to={item.key}>{item.value}</Link>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}
