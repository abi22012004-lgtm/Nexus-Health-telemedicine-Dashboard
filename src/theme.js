import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E3A8A',
      light: '#3B82F6',
      dark: '#1E40AF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0EA5E9',
      light: '#38BDF8',
      dark: '#0284C7',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#334155',
      secondary: '#64748B',
      disabled: '#94A3B8',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(0,0,0,0.03)',
    '0 2px 4px rgba(0,0,0,0.04)',
    '0 4px 8px rgba(0,0,0,0.04)',
    '0 8px 16px rgba(0,0,0,0.05)',
    '0 12px 24px rgba(0,0,0,0.05)',
    '0 16px 32px rgba(0,0,0,0.06)',
    '0 20px 40px rgba(0,0,0,0.07)',
    '0 24px 48px rgba(0,0,0,0.08)',
    ...Array(16).fill('none'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #022c4f 0%, #0d8095 50%, #11a1ce 100%)',
          backgroundSize: '200% 200%',
          animation: 'buttonGradient 4s ease infinite',
          color: '#ffffff',
          boxShadow: '0 4px 12px rgba(17, 161, 206, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #011f38 0%, #0a6b7d 50%, #0e8ab3 100%)',
            backgroundSize: '200% 200%',
          }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
          border: '1px solid rgba(0,0,0,0.04)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04)',
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
