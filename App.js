import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native'; //Fica ouvindo por alterações no tema
import Home from './src/Home';
import themes from './src/themes';

const App = () => {
  //dark, light, null
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
