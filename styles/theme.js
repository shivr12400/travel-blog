// theme.js — tokens for "the back of the photograph": plum ground, mint paper, blue accent

import { createTheme } from '@mui/material/styles';

export const palette = {
  ink: '#361F27',
  inkDeep: '#24141A',
  inkRaised: '#4A2D37',
  inkLine: 'rgba(234, 242, 239, 0.16)',
  paper: '#EAF2EF',
  paperShade: '#D3DFDA',
  inkOnPaper: '#361F27',
  accent: '#A5C4D4',
  accentLift: '#C3D8E3',
  haze: '#A9BCB5',
};

const display = "'Bricolage Grotesque', 'Trebuchet MS', sans-serif";
const text = "'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: palette.accent, contrastText: palette.ink },
    secondary: { main: palette.paper, contrastText: palette.ink },
    background: { default: palette.ink, paper: palette.inkRaised },
    text: { primary: palette.paper, secondary: palette.haze },
    divider: palette.inkLine,
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: text,
    // Scale: 1.333 (perfect fourth), trimmed at display sizes with clamp().
    h1: {
      fontFamily: display,
      fontWeight: 700,
      fontSize: 'clamp(3rem, 11vw, 8.5rem)',
      lineHeight: 0.92,
      letterSpacing: '-0.035em',
    },
    h2: {
      fontFamily: display,
      fontWeight: 600,
      fontSize: 'clamp(2.25rem, 6vw, 4rem)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: display,
      fontWeight: 600,
      fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: display,
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
    },
    h5: { fontFamily: display, fontWeight: 600, fontSize: '1.3125rem', lineHeight: 1.2 },
    h6: { fontFamily: display, fontWeight: 600, fontSize: '1.0625rem', lineHeight: 1.25 },
    subtitle1: { fontFamily: text, fontWeight: 500, fontSize: '1.0625rem', lineHeight: 1.5 },
    body1: { fontFamily: text, fontWeight: 400, fontSize: '1.0625rem', lineHeight: 1.65 },
    body2: { fontFamily: text, fontWeight: 400, fontSize: '0.9375rem', lineHeight: 1.6 },
    button: { fontFamily: text, fontWeight: 600, textTransform: 'none', letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: palette.ink },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 24 },
      },
    },
  },
});

export default theme;
