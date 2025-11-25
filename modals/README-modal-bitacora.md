# Modal Bitácora de Solicitud

## Descripción General
El modal de Bitácora permite visualizar el historial completo de cambios y acciones realizadas sobre una solicitud específica. Muestra un registro cronológico de todas las transiciones de estado, responsables y observaciones asociadas a cada etapa del proceso.

## Información de Cabecera

### ID Solicitud
- **Nombre de Campo**: ID_SOLICITUD
- **Label**: ID Solicitud
- **Tipo de Dato**: Línea de Texto
- **Descripción**: Identificador único de la solicitud (ejemplo: SOL-001)
- **Ubicación**: Alert informativo en la parte superior del modal
- **Obligatoriedad**: ✅ Solo Lectura

## Tabla de Bitácora

La bitácora se presenta en formato de tabla con los siguientes campos:

### 1. ID
- **Nombre de Campo**: ID
- **Label**: ID
- **Tipo de Dato**: Número
- **Descripción**: Identificador secuencial del registro en la bitácora
- **Obligatoriedad**: ✅ Solo Lectura

### 2. Adjuntos
- **Nombre de Campo**: ADJUNTOS
- **Label**: Adjuntos
- **Tipo de Dato**: Icono/Link
- **Descripción**: Indicador visual de archivos adjuntos asociados al registro. Muestra un ícono de clip (📎) si existen adjuntos, o un guión (-) si no hay archivos
- **Acción**: Al hacer clic permite visualizar los archivos adjuntos
- **Obligatoriedad**: ✅ Solo Lectura

### 3. Tarea Identificador
- **Nombre de Campo**: TAREA_IDENTIFICADOR
- **Label**: Tarea Identificador
- **Tipo de Dato**: Línea de Texto
- **Descripción**: Código único que identifica la tarea específica dentro del flujo de trabajo (ejemplo: TAREA-001)
- **Obligatoriedad**: ✅ Solo Lectura

### 4. Fecha Inicial
- **Nombre de Campo**: FECHA_INICIAL
- **Label**: Fecha Inicial
- **Tipo de Dato**: Fecha y hora
- **Formato**: DD/MM/YYYY HH:MM
- **Descripción**: Fecha y hora en que se inició la tarea o cambio de estado
- **Obligatoriedad**: ✅ Solo Lectura

### 5. Estado Inicial
- **Nombre de Campo**: ESTADO_INICIAL
- **Label**: Estado Inicial
- **Tipo de Dato**: Badge/Etiqueta
- **Descripción**: Estado de la solicitud antes de la acción realizada
- **Valores Posibles**: 
  - Pendiente (badge-warning)
  - En Análisis (badge-info)
  - Administrador Gestionando (badge-warning text-dark)
  - Otros estados según el flujo
- **Obligatoriedad**: ✅ Solo Lectura

### 6. Responsable
- **Nombre de Campo**: RESPONSABLE
- **Label**: Responsable
- **Tipo de Dato**: Línea de Texto
- **Descripción**: Nombre completo de la persona responsable de iniciar la tarea o acción
- **Obligatoriedad**: ✅ Solo Lectura

### 7. Tarea
- **Nombre de Campo**: TAREA
- **Label**: Tarea
- **Tipo de Dato**: Línea de Texto
- **Descripción**: Nombre o título descriptivo de la tarea realizada (ejemplo: "Revisión inicial", "Coordinación con operador")
- **Obligatoriedad**: ✅ Solo Lectura

### 8. Acción
- **Nombre de Campo**: ACCION
- **Label**: Acción
- **Tipo de Dato**: Línea de Texto
- **Descripción**: Descripción detallada de la acción específica ejecutada (ejemplo: "Análisis de documentación", "Solicitud de permisos")
- **Obligatoriedad**: ✅ Solo Lectura

### 9. Estado Final
- **Nombre de Campo**: ESTADO_FINAL
- **Label**: Estado Final
- **Tipo de Dato**: Badge/Etiqueta
- **Descripción**: Estado resultante de la solicitud después de ejecutar la acción
- **Valores Posibles**: 
  - En Análisis (badge-info)
  - Administrador Gestionando (badge-warning text-dark)
  - Otros estados según el flujo
- **Obligatoriedad**: ✅ Solo Lectura

### 10. Responsable Cierre
- **Nombre de Campo**: RESPONSABLE_CIERRE
- **Label**: Responsable Cierre
- **Tipo de Dato**: Línea de Texto
- **Descripción**: Nombre completo de la persona que completó o cerró la tarea
- **Obligatoriedad**: ✅ Solo Lectura

### 11. Fecha Término
- **Nombre de Campo**: FECHA_TERMINO
- **Label**: Fecha Término
- **Tipo de Dato**: Fecha y hora
- **Formato**: DD/MM/YYYY HH:MM
- **Descripción**: Fecha y hora en que se completó la tarea o cambio de estado
- **Obligatoriedad**: ✅ Solo Lectura

### 12. Observaciones
- **Nombre de Campo**: OBSERVACIONES
- **Label**: Observaciones
- **Tipo de Dato**: Múltiples Líneas de Texto
- **Descripción**: Comentarios, notas o detalles adicionales sobre la acción realizada. El texto se muestra truncado con clase CSS "truncate"
- **Obligatoriedad**: ✅ Solo Lectura

## Características del Modal

### Diseño y Presentación
- **Tamaño**: Modal XL (modal-xl) para mejor visualización de la tabla
- **Header**: Fondo verde (bg-success) con ícono de lista de verificación
- **Título**: "Bitácora de Solicitud"
- **Tabla**: Responsive, con bordes, hover effect y tamaño compacto (table-sm)

### Funcionalidades
- **Solo Lectura**: Todos los campos son de visualización únicamente
- **Scroll Horizontal**: La tabla es responsive y permite scroll en dispositivos pequeños
- **Truncado de Texto**: Las observaciones largas se truncan visualmente para mantener el diseño

### Acciones Disponibles
- **Cerrar**: Botón secundario para cerrar el modal
- **Ver Adjuntos**: Click en el ícono de clip para visualizar archivos (si existen)

## Notas Técnicas
- El modal utiliza Bootstrap 4 para el diseño
- Los íconos son de Font Awesome (fas fa-clipboard-list, fas fa-paperclip)
- La tabla incluye clases de Bootstrap para estilos (table-hover, table-bordered, thead-light)
- El modal puede cerrarse mediante el botón X, el botón Cerrar, o haciendo clic fuera del modal (data-backdrop="true")
