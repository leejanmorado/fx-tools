import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#6e45e2',
    },
    secondary: {
      main: '#88d3ce',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Oswald', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#6e45e2',
            color: 'white'
          },
        },
      },
    },
  },
});

export default theme;
