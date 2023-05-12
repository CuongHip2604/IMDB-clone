import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Container, MainContent } from './styles';

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}
