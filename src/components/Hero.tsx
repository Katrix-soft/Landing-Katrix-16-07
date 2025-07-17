import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery('(max-width:480px)');
  const isVerySmallMobile = useMediaQuery('(max-width:360px)');

  const features = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#0f9195' }} />,
      title: 'Análisis Inteligente',
      description: 'Procesamiento avanzado de información para decisiones estratégicas',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#0b7880' }} />,
      title: 'Alta Velocidad',
      description: 'Procesamiento rápido y eficiente de grandes volúmenes',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#0f9195' }} />,
      title: 'Seguridad Total',
      description: 'Protección de datos y cumplimiento normativo',
    },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: { 
          xs: 'calc(100vh - 56px)', 
          sm: 'calc(100vh - 64px)', 
          md: '100vh' 
        },
        background: `linear-gradient(135deg, #04141c 0%, #173442 25%, #23364c 50%, #0f9195 75%, #0b7880 100%)`,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, sm: 12, md: 8 },
        pb: { xs: 4, sm: 6, md: 0 },
       width: '100%',
       maxWidth: '100vw',
        left: 0,
        right: 0,
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(230,223,208,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(15,145,149,0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(11,120,128,0.06) 0%, transparent 50%)
          `,
          zIndex: 0,
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />

      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            md: '1fr 1fr'
          }, 
          gap: { xs: 4, sm: 5, md: 6 }, 
          alignItems: 'center',
          maxWidth: '100%',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%' }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: { xs: 2, sm: 2.5 },
                fontSize: { 
                  xs: '2rem',
                  sm: '3rem',
                  md: '3rem',
                  lg: '3.5rem'
                },
                lineHeight: { xs: 1.3, sm: 1.1 },
                background: `linear-gradient(135deg, #0f9195, #0b7880)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: { xs: 'center', md: 'left' },
                '@supports not (-webkit-background-clip: text)': {
                  color: '#0f9195',
                },
              }}
            >
              Soluciones de
              <br />
              Inteligencia de Datos
            </Typography>
            
            <Typography
              variant="h5"
              sx={{ 
                mb: { xs: 3, sm: 4 }, 
                lineHeight: 1.6,
                color: '#e6dfd0',
                fontSize: { 
                  xs: '1rem',
                  sm: '1.25rem',
                  md: '1.25rem',
                  lg: '1.5rem'
                },
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: { xs: '100%', md: '90%' },
                px: { xs: 1, sm: 0 },
              }}
            >
              Transformamos la información digital en insights valiosos para tu negocio. 
              Tecnología avanzada y resultados confiables.
            </Typography>

            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 1.5, sm: 2 }, 
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              mt: { xs: 1, sm: 0 },
              width: '100%',
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.2, sm: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    backgroundColor: '#0f9195',
                    color: 'white',
                    borderRadius: 2,
                    minWidth: 'auto',
                    width: '100%',
                    maxWidth: '280px',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      backgroundColor: '#0b7880',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(15, 145, 149, 0.4)',
                    },
                  }}
                >
                  Solicitar Demo
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.2, sm: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    borderWidth: 2,
                    borderColor: '#e6dfd0',
                    color: '#e6dfd0',
                    borderRadius: 2,
                    minWidth: 'auto',
                    width: '100%',
                    maxWidth: '280px',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#0f9195',
                      backgroundColor: 'rgba(15, 145, 149, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Ver Servicios
                </Button>
              </motion.div>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: '100%' }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)'
                },
                gap: { xs: 2, sm: 2.5, md: 3 },
                mt: { xs: 4, md: 0 },
                maxWidth: '100%',
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  style={{ width: '100%' }}
                >
                  <Box
                    sx={{
                      p: { xs: 2, sm: 2.5, md: 3 },
                      backgroundColor: 'rgba(230, 223, 208, 0.95)',
                      borderRadius: 3,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(15, 145, 149, 0.2)',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: '#04141c',
                      minHeight: { xs: 140, sm: 160, md: 180 },
                      transform: 'translateZ(0)',
                      willChange: 'transform',
                      '&:hover': {
                        backgroundColor: 'rgba(230, 223, 208, 1)',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(15, 145, 149, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ 
                        mb: 1, 
                        fontWeight: 600,
                        fontSize: { 
                          xs: isVerySmallMobile ? '0.9rem' : '1rem', 
                          sm: '1.1rem',
                          md: '1.25rem' 
                        },
                        lineHeight: 1.3,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#5f6565',
                        fontSize: { 
                          xs: isVerySmallMobile ? '0.8rem' : '0.85rem', 
                          sm: '0.875rem' 
                        },
                        lineHeight: 1.4,
                        px: { xs: 0.5, sm: 0 },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;