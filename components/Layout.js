import { Container } from '@mui/material';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;