# GEME - Concentrador de Solicitudes

Sistema web para la gestión centralizada de solicitudes de intervención en el Centro de Operación.

## 🚀 Inicio Rápido

### Prerrequisitos
- **Node.js** (versión 12 o superior)
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)

### Instalación y Ejecución

1. **Clonar o descargar el proyecto**
   ```bash
   git clone <url-del-repositorio>
   cd geme-demo-concentrador
   ```

2. **Instalar servidor HTTP (si no lo tienes)**
   ```bash
   npm install -g http-server
   ```

3. **Ejecutar el proyecto**
   ```bash
   npx http-server -p 8000 -o
   ```
   
   El sistema se abrirá automáticamente en: `http://localhost:8000`

### Alternativas de Ejecución

**Con Python 3:**
```bash
python -m http.server 8000
```

**Con PHP:**
```bash
php -S localhost:8000
```

**Con Live Server (VS Code):**
- Instalar extensión "Live Server"
- Clic derecho en `index.html` → "Open with Live Server"

## 📋 Funcionalidades

### 👥 Roles de Usuario
- **Solicitante**: Crear y gestionar solicitudes propias
- **Aprobador**: Aprobar, devolver o anular solicitudes
- **Administrador**: Gestión completa del sistema
- **Despachador**: Control de programación y ejecución

### 🔄 Flujo de Solicitudes
```
Nueva Solicitud → Por Aprobar → En Análisis → Programada → Vigente → Finalizada
                      ↓
                   Devuelta ← (puede volver al flujo)
                      ↓
                 No Solicitada (anulada)
```

### ✨ Características Principales
- **Gestión de Aprobadores**: Sistema configurable de aprobación
- **Lista de Distribución**: Notificaciones a usuarios específicos
- **Estados Dinámicos**: Flujo automático según configuración
- **Interfaz Responsiva**: Compatible con dispositivos móviles
- **Cache Busting**: Actualizaciones automáticas de versiones

## � Estructura del Proyecto

```
geme-demo-concentrador/
├── index.html                 # Página principal
├── README.md                  # Este archivo
├── 
├── css/                       # Estilos
│   ├── bootstrap.min.css      # Framework CSS
│   ├── fontawesome/           # Iconos
│   └── styles.css             # Estilos personalizados
│
├── js/                        # JavaScript
│   ├── utils/                 # Utilidades
│   │   ├── global-functions.js
│   │   └── data-helpers.js
│   ├── core/                  # Funcionalidades centrales
│   │   ├── app-core.js
│   │   └── sidebar.js
│   └── modals/                # Gestión de modales
│       ├── administrador-modals.js
│       ├── despachador-modals.js
│       ├── solicitante-modals.js
│       └── tabs-manager.js
│
├── data/                      # Datos del sistema
│   ├── solicitudes.js         # Base de datos de solicitudes
│   ├── usuarios.js            # Usuarios del sistema
│   └── mantenedores.js        # Datos de configuración
│
├── views/                     # Vistas principales
│   ├── solicitante.html       # Vista del solicitante
│   ├── administrador.html     # Vista del administrador
│   ├── despachador.html       # Vista del despachador
│   ├── mis-tareas.html        # Gestión de tareas
│   ├── permisos-usuarios.html # Gestión de permisos
│   └── mantenedores.html      # Configuración
│
└── modals/                    # Modales del sistema
    ├── solicitante/           # Modales del solicitante
    │   ├── nueva-solicitud.html
    │   └── gestionar-solicitante.html
    ├── aprobador/             # Modales del aprobador
    │   └── gestionar-aprobador.html
    ├── administrador/         # Modales del administrador
    └── despachador/           # Modales del despachador
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos y responsive design
- **Bootstrap 4.6**: Framework CSS
- **JavaScript ES6**: Lógica de aplicación
- **jQuery 3.6**: Manipulación DOM
- **Font Awesome**: Iconografía

### Características Técnicas
- **SPA (Single Page Application)**: Navegación sin recarga
- **Modular Architecture**: Código organizado en módulos
- **Cache Busting**: Versionado automático de recursos
- **Responsive Design**: Compatible con móviles y tablets

## 🔧 Configuración

### Variables Globales
El sistema utiliza `window.GEME_GLOBALS` para gestionar estado global:
```javascript
window.GEME_GLOBALS = {
    aprobadoresSeleccionados: [],
    distribucionSeleccionada: [],
    // ... otras variables
}
```

### Cache Busting
Las vistas utilizan versionado para forzar actualizaciones:
```html
<script src="views/solicitante.html?v=105"></script>
```

## � Desarrollo

### Agregar Nueva Funcionalidad
1. Modificar archivos correspondientes
2. Incrementar versión en `index.html`
3. Probar con `Ctrl+F5` (recarga forzada)

### Estructura de Datos
Las solicitudes siguen este esquema:
```javascript
{
    ID_REGISTRO: "único",
    ID_SOLICITUD: "CEN-2025-XXX",
    ESTADO: "Pendiente|Por Aprobar|En Análisis|...",
    REQUIERE_APROBACION: true/false,
    REQUIERE_DISTRIBUCION: true/false,
    // ... otros campos
}
```

## 📞 Soporte

Para problemas o consultas sobre el sistema, contactar al equipo de desarrollo.

## 📄 Licencia

Proyecto interno - Todos los derechos reservados.