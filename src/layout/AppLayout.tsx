import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { MainContent } from './styles';

export default function AppLayout() {
  return (
    <div className="container">
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
}
