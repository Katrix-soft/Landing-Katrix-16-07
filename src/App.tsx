import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <Technology />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;