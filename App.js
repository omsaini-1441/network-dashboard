import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Dashboard from './Dashboard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
