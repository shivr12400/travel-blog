import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

const links = [
  { label: 'Email', href: 'mailto:shivr12400@gmail.com', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivrathod/', external: true },
  { label: 'Trips', href: '/pasttrips' },
  { label: 'About', href: '/about' },
];

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'var(--ink-deep)', pt: { xs: 7, md: 10 }, pb: 5 }}>
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        sx={{ color: 'var(--paper)', maxWidth: '18ch', mb: { xs: 5, md: 7 } }}
      >
        Still a lot of film left.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 2, md: 4 },
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--ink-line)',
          pt: 3,
        }}
      >
        <Typography sx={{ color: 'var(--haze)', fontSize: '0.9375rem' }}>
          © {new Date().getFullYear()} Shiv Rathod
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {links.map((link) =>
            link.external ? (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  color: 'var(--haze)',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  '&:hover': { color: 'var(--coral)' },
                }}
              >
                {link.label}
              </Box>
            ) : (
              <Box
                key={link.label}
                component={Link}
                href={link.href}
                sx={{
                  color: 'var(--haze)',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  '&:hover': { color: 'var(--coral)' },
                }}
              >
                {link.label}
              </Box>
            )
          )}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
