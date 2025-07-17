import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';

const Technology: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery('(max-width:480px)');
  const isVerySmallMobile = useMediaQuery('(max-width:360px)');

  const technologies = [
    {
      icon: <PsychologyIcon sx={{ fontSize: { xs: 50, sm: 56, md: 60 }, color: '#0f9195' }} />,
      title: 'Inteligencia que se Anticipa',
      description: 'Creamos experiencias digitales que aprenden del usuario. Gracias a tecnologías inteligentes, nuestras soluciones entienden patrones de uso y se adaptan en tiempo real para ofrecer contenido relevante, dinámico y personalizado. Más que sistemas, diseñamos experiencias que piensan con vos.',
      features: [
        'Modelos de clasificación, clustering y forecasting',
        'Análisis de series temporales y comportamiento de usuarios',
        'NLP multilingüe para extracción semántica de textos',
        'Visión por computadora para reconocimiento y análisis visual',
      ],
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    },
    {
      icon: <CloudIcon sx={{ fontSize: { xs: 50, sm: 56, md: 60 }, color: '#0b7880' }} />,
      title: 'Todo Fluye, Siempre Disponible',
      description: 'Desarrollamos plataformas que funcionan sin interrupciones, listas para crecer cuando lo necesites. Ya sea una tienda, una app o un sistema completo, todo está preparado para escalar automáticamente, mantenerse rápido y estar siempre online, sin complicaciones.',
      features: [
        'Microservicios orquestados con Kubernetes',
        'Despliegues en AWS, Azure y Google Cloud',
        'Contenedores Docker y funciones Serverless',
        'Infraestructura autoscalable y tolerante a fallos',
      ],
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: { xs: 50, sm: 56, md: 60 }, color: '#5f6565' }} />,
      title: '🔐 Ciberseguridad y Cumplimiento Normativo',
      description: 'Integramos seguridad desde el diseño, alineados a los más altos estándares internacionales. Protegemos datos sensibles y garantizamos el cumplimiento legal en todos nuestros procesos tecnológicos.',
      features: [
        'Encriptación avanzada (AES-256)',
        'Conformidad con GDPR, CCPA y SOC 2 Type II',
        'Auditorías, segmentación y políticas de acceso seguro',
        'Estrategias de defensa activa y monitoreo continuo',
      ],
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
    {
      icon: <StorageIcon sx={{ fontSize: { xs: 50, sm: 56, md: 60 }, color: '#173442' }} />,
      title: '📊 Big Data y Procesamiento Distribuido',
      description: 'Habilitamos el procesamiento eficiente de datos a gran escala mediante tecnologías distribuidas, permitiendo análisis en tiempo real y toma de decisiones basada en datos.',
      features: [
        'Apache Spark y ecosistema Hadoop',
        'Data Lakes, Warehousing y NoSQL (MongoDB, Redis, etc.)',
        'Almacenamiento en memoria para consultas de alto rendimiento',
        'Analítica en tiempo real con dashboards personalizados',
      ],
      gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    },
  ];

  return (
    <Box
      id="technology"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        background: `linear-gradient(135deg, #04141c 0%, #173442 25%, #23364c 50%, #2b363d 75%, #04141c 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: -30, md: -50 },
          right: { xs: -30, md: -50 },
          width: { xs: 120, md: 200 },
          height: { xs: 120, md: 200 },
          borderRadius: '50%',
          background: `linear-gradient(135deg, rgba(15,145,149,0.2), rgba(11,120,128,0.2))`,
          filter: 'blur(40px)',
          transform: 'translateZ(0)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: -30, md: -50 },
          left: { xs: -30, md: -50 },
          width: { xs: 100, md: 150 },
          height: { xs: 100, md: 150 },
          borderRadius: '50%',
          background: `linear-gradient(135deg, rgba(11,120,128,0.2), rgba(15,145,149,0.2))`,
          filter: 'blur(30px)',
          transform: 'translateZ(0)',
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
                fontSize: { 
                  xs: isVerySmallMobile ? '1.6rem' : isSmallMobile ? '1.8rem' : '2.2rem',
                  sm: '2.5rem',
                  md: '3rem',
                  lg: '3.5rem'
                },
                background: `linear-gradient(135deg, #0f9195, #0b7880)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                '@supports not (-webkit-background-clip: text)': {
                  color: '#0f9195',
                },
              }}
            >
              Stack Tecnológico Avanzado
            </Typography>
            <Typography
              variant="h5"
              sx={{ 
                maxWidth: { xs: '100%', sm: 600, md: 700 }, 
                mx: 'auto', 
                lineHeight: 1.6,
                color: '#e6dfd0',
                fontSize: { 
                  xs: isVerySmallMobile ? '0.9rem' : '1rem',
                  sm: '1.2rem',
                  md: '1.25rem',
                  lg: '1.5rem'
                },
                px: { xs: 1, sm: 0 },
              }}
            >
              Combinamos las tecnologías más avanzadas del mercado para ofrecer 
              soluciones de inteligencia de datos que superan las expectativas
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }, 
          gap: { xs: 3, sm: 3.5, md: 4 },
          maxWidth: '100%',
        }}>
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ 
                opacity: 0, 
                x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50),
                y: isMobile ? 30 : 0
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  p: { xs: 2.5, sm: 3, md: 4 },
                  backgroundColor: 'rgba(230, 223, 208, 0.95)',
                  borderRadius: 4,
                  boxShadow: '0 4px 20px rgba(15, 145, 149, 0.2)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: { xs: 'auto', sm: 300, md: 350 },
                  transform: 'translateZ(0)',
                  willChange: 'transform',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 40px rgba(15, 145, 149, 0.3)',
                    backgroundColor: 'rgba(230, 223, 208, 1)',
                    '& .tech-gradient': {
                      opacity: 0.1,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: tech.gradient,
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  className="tech-gradient"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: tech.gradient,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: -1,
                  }}
                />
                
                <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3 }, position: 'relative', zIndex: 2 }}>
                  {tech.icon}
                </Box>
                
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: { xs: 1.5, sm: 2 },
                    color: '#04141c',
                    position: 'relative',
                    zIndex: 2,
                    fontSize: { 
                      xs: isVerySmallMobile ? '1.1rem' : '1.3rem',
                      sm: '1.5rem',
                      md: '2rem'
                    },
                    lineHeight: 1.3,
                  }}
                >
                  {tech.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{ 
                    mb: { xs: 2, sm: 2.5, md: 3 }, 
                    lineHeight: 1.6, 
                    position: 'relative', 
                    zIndex: 2,
                    color: '#23364c',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    px: { xs: 0.5, sm: 0 },
                  }}
                >
                  {tech.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: { xs: 6, sm: 8 },
              p: { xs: 3, sm: 4, md: 5 },
              background: `linear-gradient(135deg, #0f9195, #0b7880)`,
              borderRadius: 4,
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              transform: 'translateZ(0)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.3,
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: { xs: 2, sm: 3 },
                position: 'relative',
                zIndex: 1,
                fontSize: { 
                  xs: isVerySmallMobile ? '1.5rem' : '1.8rem',
                  sm: '2.5rem',
                  md: '3rem'
                },
              }}
            >
              ¿Listo para el futuro?
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                mb: { xs: 3, sm: 4 }, 
                maxWidth: { xs: '100%', sm: 500, md: 600 }, 
                mx: 'auto',
                opacity: 0.9,
                position: 'relative',
                zIndex: 1,
                fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
                px: { xs: 1, sm: 0 },
              }}
            >
              Únete a las empresas que ya están transformando su información digital en ventajas competitivas
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                component="button"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  backgroundColor: '#e6dfd0',
                  color: '#04141c',
                  border: 'none',
                  borderRadius: 3,
                  px: { xs: 3, sm: 4, md: 5 },
                  py: { xs: 1.2, sm: 1.5, md: 2 },
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: '#f0e9da',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(15, 145, 149, 0.3)',
                  },
                }}
              >
                Comenzar Ahora
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Technology;