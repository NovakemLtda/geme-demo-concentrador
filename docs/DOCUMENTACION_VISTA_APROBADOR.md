# 📋 Manual de Usuario - Vista del Aprobador

## 📖 ¿Qué es la Vista del Aprobador?

La **Vista del Aprobador** es tu interfaz especializada para revisar y tomar decisiones sobre solicitudes que requieren tu aprobación. Como aprobador, juegas un rol clave en el flujo de trabajo, validando que las solicitudes cumplan con los criterios necesarios antes de continuar con el proceso técnico.

---

## 🎯 ¿Qué puedes hacer como aprobador?

### **Acciones Principales**
- **Revisar solicitudes** que están en estado "Por Aprobar"
- **Aprobar solicitudes** que cumplen con los criterios establecidos
- **Devolver solicitudes** que necesitan correcciones del solicitante
- **Anular solicitudes** que no deben continuar el proceso
- **Consultar la bitácora** completa de cada solicitud
- **Gestionar tus tareas** pendientes de aprobación
- **Filtrar y buscar** solicitudes asignadas a tu revisión

### **¿Quién puede usar esta vista?**
- **Aprobadores designados**: Personal autorizado para aprobar solicitudes específicas
- **Supervisores de área**: Con responsabilidad de validar solicitudes de su área
- **Coordinadores técnicos**: Con autoridad para aprobar intervenciones

---

## 📊 Tu Centro de Trabajo: Mis Tareas

### **¿Cómo acceder a tus tareas?**
Tu punto de entrada principal es la sección **"Mis Tareas"** donde encontrarás todas las solicitudes que requieren tu atención.

#### **¿Qué información puedes ver en Mis Tareas?**
- **ID**: Identificador único de la solicitud
- **Tarea Identificador**: Código de referencia de la tarea
- **Tarea**: Descripción de la acción que debes realizar
- **Tipo Tarea**: Clasificación del trabajo (SODI, Intervención CEN, etc.)
- **Fecha Inicial**: Cuándo se creó la tarea
- **Estado Inicial**: Estado actual de la solicitud
- **Responsable**: Quién está asignado a la tarea

#### **¿Qué acciones puedes realizar?**
Cada fila de tu tabla de tareas tiene dos acciones principales:

1. **Gestionar** 🔴: Te permite tomar decisiones sobre la solicitud
2. **Bitácora** 🟢: Te muestra el historial completo de la solicitud

---

## 🔍 ¿Cómo filtrar tus tareas?

### **Filtros Disponibles**

#### **Por Rol**
- Administrador, Despachador, Solicitante
- Te permite ver tareas según el rol responsable

#### **Por Estado**
- **Pendientes**: Solo tareas que requieren tu acción
- **Todas**: Incluye tareas completadas y pendientes

#### **Por Instalación GM**
- Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1
- Filtra por ubicación de la intervención

### **¿Cómo usar los filtros?**
1. Haz clic en "Mostrar filtro"
2. Selecciona los criterios que necesites
3. Haz clic en "Filtrar"
4. Usa "Limpiar filtro" para resetear los criterios

---

## ⚙️ Modal de Aprobación: Tu Herramienta Principal

### **¿Cuándo se abre el modal de aprobación?**
El modal se abre automáticamente cuando haces clic en "Gestionar" en una solicitud que está en estado **"Por Aprobar"**.

### **¿Qué contiene el modal de aprobación?**

#### **Tab 1: Detalle de Solicitud**
Este tab te muestra **toda la información de la solicitud en modo solo lectura**:

##### **Estado y Observaciones**
- Estado actual: "Por Aprobar"
- Observaciones del administrador (si las hay)

##### **Identificación**
- **ID Solicitud**: Número CEN o SODI asignado
- **Tipo de Trabajo**: SDCN, SDCF, SICN, SICF, IL, MM, SODI
- **Relación SODI-CEN**: Vínculos con otras solicitudes

##### **Fechas Programadas**
- **Inicio Programado**: Cuándo debe comenzar la intervención
- **Fin Programado**: Cuándo debe terminar la intervención

##### **Empresas Involucradas**
- **Empresa Solicitante**: Quién solicita la intervención
- **Empresa Receptora**: Quién la ejecutará

##### **Instalación y Equipos**
- **Instalación GM**: Ubicación de la intervención
- **Equipos Involucrados**: Qué equipos se van a intervenir

##### **Descripción del Trabajo**
- Detalle completo de lo que se va a realizar

##### **Riesgos y Afectaciones**
- **Riesgo**: Clasificación (Bajo, Medio, Alto)
- **Afectaciones**: SSCC, Protecciones, Medidores
- **Descripciones**: Detalles de riesgos y afectaciones

##### **Archivo Adjunto**
- Documentos relacionados con la solicitud
- Botón para descargar si existe archivo

##### **Información del Sistema**
- Metadatos como fechas de creación, responsables, etc.

#### **Tab 2: Decisión de Aprobación**
Este es el tab donde **tomas tu decisión**:

##### **Opciones de Decisión**
Tienes tres opciones disponibles:

1. **✅ Aprobar Solicitud** → Cambia a "En Análisis"
   - La solicitud continúa el proceso normal
   - Va al equipo técnico para análisis detallado

2. **↩️ Devolver Solicitud** → Cambia a "Devuelta"
   - El solicitante puede hacer correcciones
   - Debe corregir según tus comentarios

3. **❌ Anular Solicitud** → Cambia a "No Solicitada"
   - La solicitud se cancela definitivamente
   - No continúa el proceso

##### **Comentarios Obligatorios**
- **Siempre debes agregar comentarios** explicando tu decisión
- Mínimo 10 caracteres para ser descriptivos
- Los comentarios son visibles para el solicitante y administradores
- Ayudan a justificar tu decisión y dar retroalimentación

---

## 📚 Guías Paso a Paso para Aprobadores

### **¿Cómo aprobar una solicitud?**
1. Ve a "Mis Tareas" y localiza la solicitud "Por Aprobar"
2. Haz clic en el ícono "Gestionar" (🔴)
3. Se abre el modal de aprobación automáticamente
4. **Revisa toda la información** en el tab "Detalle de Solicitud"
5. Ve al tab "Decisión de Aprobación"
6. Selecciona "Aprobar Solicitud"
7. **Escribe comentarios descriptivos** explicando por qué apruebas
8. Haz clic en "Confirmar Decisión"
9. La solicitud cambia a "En Análisis"

### **¿Cómo devolver una solicitud para correcciones?**
1. Sigue los pasos 1-5 anteriores
2. Selecciona "Devolver Solicitud"
3. **Escribe comentarios específicos** indicando:
   - Qué necesita ser corregido
   - Por qué no cumple los criterios
   - Qué debe hacer el solicitante
4. Confirma la decisión
5. El solicitante recibirá notificación y podrá editar

### **¿Cómo anular una solicitud?**
1. Sigue los pasos 1-5 de aprobación
2. Selecciona "Anular Solicitud"
3. **Escribe comentarios justificando** por qué se anula:
   - Razones por las que no debe continuar
   - Criterios que no cumple
   - Recomendaciones para futuras solicitudes
4. Confirma la decisión
5. La solicitud queda marcada como "No Solicitada"

### **¿Cómo revisar el historial de una solicitud?**
1. En "Mis Tareas", haz clic en el ícono "Bitácora" (🟢)
2. Se abre la ventana de bitácora con todo el historial
3. Puedes ver:
   - Todos los cambios de estado
   - Comentarios de cada participante
   - Fechas de cada acción
   - Responsables de cada cambio

---

## 🎯 Tipos de Tareas que Gestionas

### **Según el Tipo de Trabajo**
- **Solicitud SODI**: Solicitudes especiales de desconexión/intervención
- **Solicitud de Intervención CEN-Facturación**: Trabajos que afectan facturación
- **Solicitud de Intervención CEN-No Facturación**: Trabajos sin impacto en facturación
- **Solicitud de Desconexión CEN-Facturación**: Desconexiones con impacto comercial
- **Solicitud de Desconexión CEN-No Facturación**: Desconexiones sin impacto comercial
- **Solicitud de Intervención en Línea**: Trabajos en líneas de transmisión
- **Solicitud de Migración de Medidor**: Cambios de equipos de medición

### **Según el Estado de la Tarea**
- **Aprobar Solicitud**: Para solicitudes "Por Aprobar"
- **Revisar Solicitud**: Para solicitudes que necesitan validación adicional

---

## ❓ Preguntas Frecuentes para Aprobadores

### **¿Qué criterios debo usar para aprobar o rechazar?**
Evalúa estos aspectos:
- **Completitud**: ¿Está toda la información necesaria?
- **Coherencia**: ¿Las fechas y datos son lógicos?
- **Seguridad**: ¿Los riesgos están bien identificados?
- **Viabilidad**: ¿Es factible realizar el trabajo como se describe?
- **Cumplimiento**: ¿Cumple con políticas y procedimientos?

### **¿Qué pasa después de que tomo una decisión?**
- **Si apruebas**: Va a "En Análisis" para revisión técnica
- **Si devuelves**: Regresa al solicitante para correcciones
- **Si anulas**: Se marca como "No Solicitada" y termina el proceso

### **¿Puedo cambiar mi decisión después?**
Una vez confirmada la decisión, queda registrada en la bitácora. Si necesitas hacer cambios, debes contactar al administrador del sistema.

### **¿Cómo sé si mis comentarios son suficientes?**
Los comentarios deben:
- Tener al menos 10 caracteres
- Ser específicos y claros
- Explicar el motivo de tu decisión
- Dar orientación al solicitante (en caso de devolución)

### **¿Qué hago si no entiendo algo de la solicitud?**
1. Revisa toda la información en el modal
2. Consulta la bitácora para ver el historial
3. Si aún tienes dudas, devuelve la solicitud pidiendo aclaraciones
4. Contacta al administrador si es necesario

### **¿Puedo ver solicitudes que ya procesé?**
Sí, cambia el filtro de estado de "Pendientes" a "Todas" para ver tu historial completo de tareas.

---

## 📝 Mejores Prácticas para Aprobadores

### **Para decisiones efectivas:**
- **Lee toda la información** antes de decidir
- **Sé específico** en tus comentarios
- **Considera el impacto** de tu decisión en el proceso
- **Mantén consistencia** en tus criterios de aprobación

### **Para comunicación clara:**
- **Usa lenguaje profesional** pero comprensible
- **Sé constructivo** en las devoluciones
- **Proporciona orientación** sobre cómo corregir
- **Justifica siempre** tus decisiones

### **Para eficiencia:**
- **Revisa regularmente** tus tareas pendientes
- **Prioriza** según fechas programadas y criticidad
- **Usa los filtros** para organizar tu trabajo
- **Procesa las tareas** en orden de llegada cuando sea posible

### **Para calidad:**
- **Verifica** que las fechas sean realistas
- **Valida** que los riesgos estén bien descritos
- **Confirma** que la información esté completa
- **Asegúrate** de que cumple con estándares de seguridad

---

*Manual de Usuario - Vista del Aprobador*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*
