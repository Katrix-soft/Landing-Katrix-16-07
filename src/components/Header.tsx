import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme as useMuiTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery('(max-width:480px)');
  const isVerySmallMobile = useMediaQuery('(max-width:360px)');

  const menuItems = [
    { text: 'Inicio', href: '#home' },
    { text: 'Servicios', href: '#services' },
    { text: 'Tecnología', href: '#technology' },
    { text: 'Contacto', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    // Cerrar el drawer primero
    setMobileOpen(false);
    
    // Pequeño delay para que se cierre el drawer antes de hacer scroll
    setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    }, 100);
  };

  const drawer = (
    <Box sx={{ 
      width: { xs: 280, sm: 320 },
      height: '100%',
      backgroundColor: '#04141c',
      color: '#e6dfd0',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header del drawer */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        minHeight: 64,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component="img"
            src="/image.png"
            alt="Katrix Logo"
            sx={{
              width: 32,
              height: 32,
              objectFit: 'contain',
            }}
          />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              color: '#e6dfd0',
              fontSize: '1.25rem',
            }}
          >
            Katrix
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ 
            color: '#e6dfd0',
            p: 1.5,
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      {/* Menu items */}
      <List sx={{ flex: 1, py: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => scrollToSection(item.href)}
            sx={{
              cursor: 'pointer',
              py: 1.5,
              px: 2.5,
              mx: 1.5,
              mb: 0.5,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#0f9195',
                color: 'white',
                transform: 'translateX(8px)',
              },
            }}
          >
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                fontSize: '1.1rem',
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(3, 19, 29, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.4)',
          color: '#e6dfd0',
          zIndex: theme.zIndex.drawer + 1,
         width: '100%',
         maxWidth: '100vw',
          left: 0,
          right: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ 
           px: { xs: 1, sm: 2 },
            minHeight: 64,
            justifyContent: 'space-between',
           width: '100%',
            maxWidth: '100%',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  cursor: 'pointer',
                }}
                onClick={() => scrollToSection('#home')}
              >
                <Box
                  component="img"
                  src="/image.png"
                  alt="Katrix Logo"
                  sx={{
                    width: { xs: 32, md: 40 },
                    height: { xs: 32, md: 40 },
                    objectFit: 'contain',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#e6dfd0',
                    fontSize: { 
                      xs: '1.1rem',
                      md: '1.5rem'
                    },
                    display: 'block',
                  }}
                >
                  Katrix
                </Typography>
              </Box>
            </motion.div>

            {isMobile ? (
              <IconButton
                sx={{ 
                  color: '#e6dfd0',
                 p: 1,
                 mr: 1,
                }}
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 1, 
                flexWrap: 'nowrap',
              }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.href)}
                      sx={{
                        color: '#e6dfd0',
                        fontSize: '0.9rem',
                        px: 1.5,
                        py: 1,
                        minWidth: 'auto',
                        whiteSpace: 'nowrap',
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: '#0f9195',
                          color: 'white',
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
           width: 280,
            backgroundColor: '#04141c',
            color: '#e6dfd0',
            border: 'none',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;