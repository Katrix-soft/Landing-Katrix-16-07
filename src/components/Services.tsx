import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShieldIcon from '@mui/icons-material/Shield';

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery('(max-width:480px)');
  const isVerySmallMobile = useMediaQuery('(max-width:360px)');

  const services = [
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: { xs: 40, sm: 44, md: 48 }, color: theme.palette.primary.main }} />,
      title: 'Unidad de Automatización Inteligente y Recolección Estratégica de Información',
      description: 'Esta unidad se centra en el diseño y despliegue de sistemas inteligentes que permiten la obtención estructurada de información pública proveniente de diversas fuentes digitales. Utilizamos tecnologías de automatización y técnicas avanzadas de minería de datos para transformar grandes volúmenes de contenido no estructurado en conocimiento útil para la toma de decisiones empresariales.',
      industry: 'Automatización',
      gradient: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
      features: [
        'Monitoreo dinámico de tendencias del mercado',
        'Recolección sistemática de indicadores clave',
        'Captura automatizada de datos',
        'Integración con dashboards personalizados',
      ],
    },
    {
      icon: <StorefrontIcon sx={{ fontSize: { xs: 40, sm: 44, md: 48 }, color: theme.palette.secondary.main }} />,
      title: 'Unidad de Soluciones Digitales para Comercio Electrónico',
      description: 'Desarrollamos plataformas digitales para comercio electrónico adaptadas a las necesidades específicas de cada negocio, priorizando la experiencia del usuario, la escalabilidad tecnológica y la seguridad transaccional. Implementamos soluciones completas, desde la interfaz visual hasta la integración con sistemas de gestión y logística.',
      industry: 'E-commerce',
      gradient: 'linear-gradient(90deg, #10b981, #3b82f6)',
      features: [
        'Desarrollo de tiendas online personalizadas',
        'Integración con medios de pago y logística',
        'Diseño UX/UI enfocado en conversión',
        'Optimización SEO y analítica de usuarios',
      ],
    },
    {
      icon: <ShieldIcon sx={{ fontSize: { xs: 40, sm: 44, md: 48 }, color: theme.palette.warning.main }} />,
      title: 'Unidad de Seguridad de la Información y Gestión de Riesgos Digitales',
      description: 'Esta unidad ofrece servicios especializados orientados a proteger los activos digitales de las organizaciones frente a amenazas internas y externas. Evaluamos vulnerabilidades, diseñamos políticas de seguridad y aplicamos soluciones tecnológicas de defensa adaptadas a cada entorno.',
      industry: 'Ciberseguridad',
      gradient: 'linear-gradient(90deg, #f59e0b, #ef4444)',
      features: [
        'Evaluaciones de riesgo y auditorías técnicas',
        'Simulaciones de ataques controlados',
        'Implementación de medidas preventivas',
        'Programas de concientización',
      ],
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        background: `linear-gradient(135deg, #e6dfd0 0%, rgba(230,223,208,0.8) 50%, #e6dfd0 100%)`,
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
              Nuestros Servicios
            </Typography>
            <Typography
              variant="h5"
              sx={{ 
                maxWidth: { xs: '100%', sm: 600, md: 700 }, 
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
              Soluciones especializadas por industria y servicios integrales de recopilación 
              y procesamiento de información para impulsar tu negocio
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            lg: 'repeat(3, 1fr)'
          }, 
          gap: { xs: 3, sm: 3.5, md: 4 },
          maxWidth: '100%',
        }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(4, 20, 28, 0.95)',
                  border: '1px solid rgba(15, 145, 149, 0.3)',
                  transform: 'translateZ(0)',
                  willChange: 'transform',
                  minHeight: { xs: 'auto', sm: 400, md: 450 },
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 40px rgba(15, 145, 149, 0.3)',
                    backgroundColor: 'rgba(4, 20, 28, 1)',
                  },
                }}
              >
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: { xs: 2.5, sm: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Box sx={{ textAlign: 'center', mb: { xs: 2, sm: 2.5, md: 3 } }}>
                    {service.icon}
                  </Box>
                  
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: { xs: 0.5, sm: 1 },
                      textAlign: 'center',
                      color: '#e6dfd0',
                      fontSize: { 
                        xs: isVerySmallMobile ? '1rem' : '1.1rem',
                        sm: '1.25rem',
                        md: '1.5rem'
                      },
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      textAlign: 'center',
                      mb: { xs: 1.5, sm: 2 },
                      color: '#0f9195',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      fontSize: { xs: '0.65rem', sm: '0.75rem' },
                    }}
                  >
                    {service.industry}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{ 
                      mb: { xs: 2, sm: 2.5, md: 3 }, 
                      lineHeight: 1.6, 
                      textAlign: 'center',
                      color: 'rgba(230, 223, 208, 0.8)',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box>
                    {service.features && service.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: { xs: 0.8, sm: 1 },
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: '#0f9195',
                            mr: { xs: 1.5, sm: 2 },
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ 
                            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                            color: 'rgba(230, 223, 208, 0.7)',
                            lineHeight: 1.4,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: { xs: 6, sm: 8 },
              p: { xs: 3, sm: 4 },
              background: `linear-gradient(135deg, #04141c, #173442)`,
              borderRadius: 3,
              textAlign: 'center',
              border: '1px solid rgba(15, 145, 149, 0.3)',
              transform: 'translateZ(0)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2 },
                color: '#e6dfd0',
                fontSize: { 
                  xs: isVerySmallMobile ? '1.3rem' : '1.5rem',
                  sm: '2rem',
                  md: '2.5rem'
                },
              }}
            >
              ¿Tu industria no está listada?
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                mb: { xs: 2, sm: 3 }, 
                maxWidth: { xs: '100%', sm: 500, md: 600 }, 
                mx: 'auto',
                color: 'rgba(230, 223, 208, 0.8)',
                fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                px: { xs: 1, sm: 0 },
              }}
            >
              Nuestro equipo de expertos está listo para desarrollar una solución 
              personalizada para tu industria específica.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                component="button"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  backgroundColor: '#0f9195',
                  color: 'white',
                  border: 'none',
                  borderRadius: 2,
                  px: { xs: 2.5, sm: 3, md: 4 },
                  py: { xs: 1.2, sm: 1.5, md: 2 },
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: '#0b7880',
                    boxShadow: '0 4px 12px rgba(15, 145, 149, 0.4)',
                  },
                }}
              >
                Consultar Solución Personalizada
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;