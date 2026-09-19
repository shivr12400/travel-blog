import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { title: 'Trips', path: '/pasttrips' },
  { title: 'Next', path: '/futuretrips' },
  { title: 'About', path: '/about' },
];

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled',
})(({ theme, scrolled }) => ({
  transition: 'background-color 0.4s ease, padding 0.4s ease, border-color 0.4s ease',
  backgroundColor: scrolled ? 'rgba(10, 26, 47, 0.86)' : 'transparent',
  backdropFilter: scrolled ? 'blur(14px)' : 'none',
  borderBottom: `1px solid ${scrolled ? 'var(--ink-line)' : 'transparent'}`,
  boxShadow: 'none',
  padding: scrolled ? theme.spacing(0.5, 0) : theme.spacing(1.5, 0),
}));

const Wordmark = styled('span')({
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1.25rem',
  letterSpacing: '-0.03em',
  color: 'var(--paper)',
});

const NavItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active }) => ({
  position: 'relative',
  marginLeft: 32,
  fontSize: '0.9375rem',
  fontWeight: 600,
  color: active ? 'var(--paper)' : 'var(--haze)',
  transition: 'color 0.25s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -6,
    height: 2,
    width: active ? '100%' : 0,
    backgroundColor: 'var(--coral)',
    transition: 'width 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
  },
  '&:hover': { color: 'var(--paper)' },
  '&:hover::after': { width: '100%' },
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <StyledAppBar position="fixed" elevation={0} scrolled={scrolled ? 1 : 0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>
            <Box sx={{ flexGrow: 1 }}>
              <Link href="/" aria-label="Shiv Rathod, home">
                <Wordmark>
                  Shiv Rathod
                  <Box component="span" sx={{ color: 'var(--coral)' }}>
                    .
                  </Box>
                </Wordmark>
              </Link>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navLinks.map((item) => (
                <NavItem key={item.title} href={item.path} active={isActive(item.path) ? 1 : 0}>
                  {item.title}
                </NavItem>
              ))}
              <Box
                component="a"
                href="mailto:shivr12400@gmail.com"
                sx={{
                  ml: 4,
                  px: 2.5,
                  py: 1,
                  borderRadius: 999,
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--ink-deep)',
                  bgcolor: 'var(--coral)',
                  transition: 'transform 0.25s ease, background-color 0.25s ease',
                  '&:hover': { transform: 'translateY(-2px)', bgcolor: 'var(--coral-lift)' },
                }}
              >
                Say hello
              </Box>
            </Box>

            <IconButton
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, color: 'var(--paper)' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: 300, bgcolor: 'var(--ink-deep)', p: 3 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)} sx={{ color: 'var(--paper)' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ mt: 2 }}>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ mb: 2 }}>
              <Link href={item.path} onClick={() => setMobileOpen(false)} style={{ width: '100%' }}>
                <Typography
                  variant="h4"
                  sx={{ color: isActive(item.path) ? 'var(--coral)' : 'var(--paper)' }}
                >
                  {item.title}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
        <Box
          component="a"
          href="mailto:shivr12400@gmail.com"
          sx={{ mt: 2, color: 'var(--haze)', fontWeight: 600 }}
        >
          Say hello
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
