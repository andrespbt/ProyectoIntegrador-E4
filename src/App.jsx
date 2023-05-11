import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
