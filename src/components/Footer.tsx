import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery('(max-width:480px)');
  const isVerySmallMobile = useMediaQuery('(max-width:360px)');

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} />,
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: <TwitterIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} />,
      href: '#',
      label: 'Twitter',
    },
    {
      icon: <GitHubIcon sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} />,
      href: '#',
      label: 'GitHub',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#04141c',
        color: 'white',
        py: { xs: 3, sm: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 2.5, sm: 3 },
          }}
        >
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 0.5, sm: 1 },
                  fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                }}
              >
                Katrix
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.8,
                  maxWidth: { xs: '100%', sm: 280, md: 300 },
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' },
                  lineHeight: 1.5,
                }}
              >
                Soluciones inteligentes de datos que transforman información en decisiones estratégicas para tu empresa.
              </Typography>
            </Box>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                }}
              >
                Enlaces Rápidos
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'row', md: 'column' }, 
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: { xs: 1.5, md: 1 },
              }}>
                {['Inicio', 'Servicios', 'Tecnología', 'Contacto'].map((link) => (
                  <Typography
                    key={link}
                    variant="body2"
                    sx={{
                      opacity: 0.8,
                      cursor: 'pointer',
                      transition: 'opacity 0.3s ease',
                      fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' },
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        opacity: 1,
                        color: '#0f9195',
                      },
                    }}
                    onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                }}
              >
                Contacto
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: { xs: 0.8, sm: 1 },
                alignItems: { xs: 'center', md: 'flex-start' },
              }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.8,
                    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' },
                  }}
                >
                  contacto@katrix.com.ar
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.8,
                    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' },
                  }}
                >
                  Mendoza, Argentina
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                }}
              >
                Síguenos
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: { xs: 1.5, sm: 2 }, 
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}>
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      component="a"
                      href={social.href}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: 32, sm: 36, md: 40 },
                        height: { xs: 32, sm: 36, md: 40 },
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        transform: 'translateZ(0)',
                        '&:hover': {
                          backgroundColor: '#0f9195',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {social.icon}
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* Línea divisoria */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: { xs: 3, sm: 4 },
            pt: { xs: 2, sm: 3 },
          }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
              }}
            >
              © {currentYear} Katrix. Todos los derechos reservados.
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 1.5, sm: 2, md: 3 }, 
              flexWrap: 'wrap', 
              justifyContent: 'center',
            }}>
              {['Política de Privacidad', 'Términos de Servicio', 'Cookies'].map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease',
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;