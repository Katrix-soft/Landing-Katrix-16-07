import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery('(max-width:480px)');
  const isVerySmallMobile = useMediaQuery('(max-width:360px)');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#0f9195' }} />,
      title: 'Email',
      info: 'contacto@katrix.com.ar',
      description: 'Envíanos un mensaje',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: '#0f9195' }} />,
      title: 'Oficina',
      info: 'Mendoza, Argentina',
      description: 'Visítanos cuando quieras',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        background: `linear-gradient(135deg, #e6dfd0 0%, rgba(230,223,208,0.9) 50%, #e6dfd0 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{ px: { xs: 2, sm: 3, md: 4 } }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: { xs: 1.5, sm: 2 },
                color: '#04141c',
                fontSize: { 
                  xs: isVerySmallMobile ? '1.6rem' : isSmallMobile ? '1.8rem' : '2.2rem',
                  sm: '2.5rem',
                  md: '3rem',
                  lg: '3.5rem'
                },
              }}
            >
              Contáctanos
            </Typography>
            <Typography
              variant="h5"
              sx={{ 
                maxWidth: { xs: '100%', sm: 500, md: 600 }, 
                mx: 'auto', 
                lineHeight: 1.6,
                color: '#23364c',
                fontSize: { 
                  xs: isVerySmallMobile ? '0.9rem' : '1rem',
                  sm: '1.2rem',
                  md: '1.25rem',
                  lg: '1.5rem'
                },
                px: { xs: 1, sm: 0 },
              }}
            >
              Estamos aquí para ayudarte a transformar tu información digital en ventajas competitivas
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            md: '1fr 1fr'
          }, 
          gap: { xs: 4, sm: 5, md: 6 },
          maxWidth: '100%',
        }}>
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: { xs: 3, sm: 4 },
                color: '#04141c',
                fontSize: { 
                  xs: isVerySmallMobile ? '1.3rem' : '1.5rem',
                  sm: '2rem',
                  md: '2.5rem'
                },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Información de Contacto
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 2.5, md: 3 } }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ width: '100%' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: { xs: 2, sm: 2.5, md: 3 },
                      backgroundColor: 'rgba(4, 20, 28, 0.95)',
                      borderRadius: 2,
                      boxShadow: '0 2px 10px rgba(15, 145, 149, 0.2)',
                      transition: 'all 0.3s ease',
                      transform: 'translateZ(0)',
                      willChange: 'transform',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 20px rgba(15, 145, 149, 0.3)',
                      },
                    }}
                  >
                    <Box sx={{ mr: { xs: 2, sm: 2.5, md: 3 }, flexShrink: 0 }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: { xs: 0.3, sm: 0.5 },
                          color: '#e6dfd0',
                          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          mb: { xs: 0.3, sm: 0.5 },
                          color: '#0f9195',
                          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                        }}
                      >
                        {info.info}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: 'rgba(230, 223, 208, 0.7)',
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        }}
                      >
                        {info.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 2.5, sm: 3, md: 4 },
                backgroundColor: 'rgba(4, 20, 28, 0.95)',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(15, 145, 149, 0.2)',
                transform: 'translateZ(0)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  color: '#e6dfd0',
                  fontSize: { 
                    xs: isVerySmallMobile ? '1.3rem' : '1.5rem',
                    sm: '2rem',
                    md: '2.5rem'
                  },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Envíanos un Mensaje
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
                  ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                </Alert>
              )}

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 2.5, md: 3 } }}>
                <TextField
                  name="name"
                  label="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  size={isVerySmallMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(230, 223, 208, 0.1)',
                      color: '#e6dfd0',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(230, 223, 208, 0.3)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0f9195',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0f9195',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(230, 223, 208, 0.7)',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      '&.Mui-focused': {
                        color: '#0f9195',
                      },
                    },
                  }}
                />
                
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  size={isVerySmallMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(230, 223, 208, 0.1)',
                      color: '#e6dfd0',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(230, 223, 208, 0.3)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0f9195',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0f9195',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(230, 223, 208, 0.7)',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      '&.Mui-focused': {
                        color: '#0f9195',
                      },
                    },
                  }}
                />
                
                <TextField
                  name="company"
                  label="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  size={isVerySmallMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(230, 223, 208, 0.1)',
                      color: '#e6dfd0',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(230, 223, 208, 0.3)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0f9195',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0f9195',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(230, 223, 208, 0.7)',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      '&.Mui-focused': {
                        color: '#0f9195',
                      },
                    },
                  }}
                />
                
                <TextField
                  name="message"
                  label="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={isVerySmallMobile ? 3 : isSmallMobile ? 4 : 4}
                  variant="outlined"
                  size={isVerySmallMobile ? "small" : "medium"}
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(230, 223, 208, 0.1)',
                      color: '#e6dfd0',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(230, 223, 208, 0.3)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0f9195',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0f9195',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(230, 223, 208, 0.7)',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      '&.Mui-focused': {
                        color: '#0f9195',
                      },
                    },
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      py: { xs: 1.2, sm: 1.5 },
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                      fontWeight: 600,
                      backgroundColor: '#0f9195',
                      color: 'white',
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: '#0b7880',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(15, 145, 149, 0.4)',
                      },
                    }}
                  >
                    Enviar Mensaje
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;