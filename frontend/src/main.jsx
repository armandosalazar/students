import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Feather from './assets/feather_bold.ttf';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'Inter', // default font-family
  },
  palette: {
    primary: {
      main: '#8EE000',
    },
    secondary: {
      main: '#747bff',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
