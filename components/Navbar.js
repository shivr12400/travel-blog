// components/Navbar.js

import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.navText.main,
    '&:hover': {
      backgroundColor: theme.palette.navHover.main,
      color: theme.palette.navHoverText.main,
    },
  }));

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'navText.main' }}>
            Shiv Rathod Travel Blog
          </Typography>
          <Link href="/" passHref>
            <NavButton>Home</NavButton>
          </Link>
          <Link href="/about" passHref>
            <NavButton>About</NavButton>
          </Link>
          <Link href="/pasttrips" passHref>
            <NavButton>Past Trips</NavButton>
          </Link>
          <Link href="/futuretrips" passHref>
            <NavButton>Future Trips</NavButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;