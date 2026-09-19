import { Box } from '@mui/material';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <Box sx={{ bgcolor: 'var(--ink)', minHeight: '100vh' }}>
    <Navbar />
    <main>{children}</main>
  </Box>
);

export default Layout;
