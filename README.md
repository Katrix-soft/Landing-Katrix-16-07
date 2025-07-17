# Katrix - Web Corporativa

Una web moderna y profesional para una empresa de inteligencia de datos construida con React, TypeScript y Material-UI.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con Material-UI
- **Totalmente Responsive**: Optimizada para todos los dispositivos
- **Animaciones Suaves**: Efectos de transición con Framer Motion
- **Navegación Intuitiva**: Menú de navegación con scroll suave
- **Formulario de Contacto**: Funcional y con validación
- **SEO Optimizado**: Estructura semántica y meta tags

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Material-UI (MUI)** - Componentes de UI modernos
- **Framer Motion** - Animaciones y transiciones
- **CSS Grid & Flexbox** - Layout responsive
- **Google Fonts (Inter)** - Tipografía moderna

## 📱 Secciones de la Web

1. **Header** - Navegación principal con menú responsive
2. **Hero** - Sección principal con llamada a la acción
3. **Servicios** - Catálogo de servicios de inteligencia de datos
4. **Tecnología** - Tecnologías y capacidades técnicas
5. **Contacto** - Formulario de contacto e información
6. **Footer** - Enlaces, redes sociales y legal

## 🎨 Diseño y UX

- **Paleta de Colores**: Indigo moderno (#6366f1) y verde esmeralda (#10b981)
- **Tipografía**: Inter para máxima legibilidad
- **Animaciones**: Transiciones suaves y efectos hover
- **Accesibilidad**: Navegación por teclado y contraste adecuado
- **Performance**: Optimizada para carga rápida

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd web-nvo
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm eject` - Expone la configuración de webpack (irreversible)

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── Services.tsx    # Servicios
│   ├── Technology.tsx  # Tecnologías
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Pie de página
├── theme.ts            # Configuración del tema MUI
├── App.tsx             # Componente principal
├── index.tsx           # Punto de entrada
└── index.css           # Estilos globales
```

## 🎯 Características de la Empresa

**Katrix** se presenta como una empresa sólida y confiable que ofrece:

- **Recopilación Web Inteligente**: Recopilación automatizada de información
- **Análisis Avanzado**: Procesamiento y visualización de datos
- **Seguridad Empresarial**: Protección de datos y cumplimiento GDPR
- **APIs Personalizadas**: Integración con sistemas existentes
- **Monitoreo en Tiempo Real**: Seguimiento continuo de procesos
- **Solución Cloud**: Infraestructura escalable

## 🔧 Personalización

### Cambiar Colores

Edita el archivo `src/theme.ts` para modificar la paleta de colores:

```typescript
palette: {
  primary: {
    main: '#6366f1', // Color principal
  },
  secondary: {
    main: '#10b981', // Color secundario
  },
}
```

### Modificar Contenido

- **Texto**: Edita los componentes en `src/components/`
- **Imágenes**: Reemplaza las referencias en los componentes
- **Información de contacto**: Actualiza en `Contact.tsx` y `Footer.tsx`

## 📱 Responsive Design

La web está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue

### Build para Producción

```bash
npm run build
```

### Despliegue en Netlify

1. Conecta tu repositorio a Netlify
2. Configura el directorio de build como `build`
3. El comando de build será `npm run build`

### Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es una app React
3. Despliegue automático en cada push

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: contacto@katrix.com.ar
- **Ubicación**: Mendoza, Argentina

---

Desarrollado con ❤️ usando React y Material-UI