# 📋 Manual de Usuario - Modal Nueva Solicitud (Solicitante)

## 📖 ¿Qué es el Modal de Nueva Solicitud?

El **Modal de Nueva Solicitud** es tu herramienta principal para crear solicitudes de intervención desde cero. Te permite especificar todos los detalles del trabajo que necesitas y configurar el proceso de aprobación.

---

## 🎯 ¿Cuándo crear una nueva solicitud?

### **Situaciones para Crear Solicitudes:**
- **Trabajos programados**: Intervenciones que necesitas planificar
- **Mantenimientos**: Trabajos de mantenimiento preventivo o correctivo
- **Instalaciones nuevas**: Trabajos de instalación de equipos
- **Emergencias planificadas**: Trabajos urgentes pero programables
- **Modificaciones**: Cambios en instalaciones existentes

### **Estado Inicial**
- Las solicitudes se crean en estado **"Pendiente"** por defecto
- Si configuras aprobadores, se crean en estado **"Por Aprobar"**
- Esto determina el flujo que seguirá tu solicitud

---

## 📝 ¿Qué información debes completar?

### **Configuración Inicial (Muy Importante):**

#### **Configuración de Aprobación y Distribución**
- **Requiere Aprobadores**: Marca si necesitas aprobación específica antes del procesamiento
- **Requiere Lista de Distribución**: Marca si quieres que otros reciban notificaciones

### **Información Obligatoria:**

#### **Identificación**
- **Tipo de Trabajo**: SDCN, SDCF, SICN, SICF, IL, MM, SODI (obligatorio)
- **Relación SODI/CEN**: Vínculos con otras solicitudes (opcional)

#### **Fechas Programadas**
- **Fecha de Inicio**: Cuándo debe comenzar la intervención (obligatorio)
- **Fecha de Fin**: Cuándo debe terminar (obligatorio)
- **Validación**: La fecha de fin debe ser posterior al inicio

#### **Empresas Involucradas**
- **Empresa Solicitante**: Quién solicita (obligatorio)
- **Empresa Receptora**: Quién ejecuta (obligatorio)
- **Opciones**: CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa

#### **Instalación y Equipos**
- **Instalación GM**: Ubicación del trabajo (obligatorio)
- **Equipos a Intervenir**: Qué se va a intervenir (obligatorio)
- **Lógica**: Los equipos se cargan según la instalación seleccionada

#### **Características de la Intervención**
- **Tipo de Intervención**: Intervención o Desconexión (obligatorio)
- **Potencia (MWH)**: Potencia involucrada (obligatorio)
- **Aplica SODI**: Sí o No (obligatorio)
- **Riesgo**: Bajo, Medio, Alto (obligatorio)
- **Descripción del Riesgo**: Obligatorio solo si es Medio o Alto

#### **Descripción y Condiciones**
- **Descripción del Trabajo**: Qué se va a realizar (obligatorio)
- **Condiciones Requeridas**: Condiciones necesarias (obligatorio)
- **Comentarios**: Información adicional (opcional)
- **Afectaciones**: SSCC, Protecciones, Medidores (opcional)
- **Descripción de Afectaciones**: Obligatorio solo si seleccionas afectaciones

#### **Archivos Adjuntos**
- **Carga de Archivos**: PDF, Excel, Word, etc. (opcional)
- **SODI Adjunta**: Marca si es documento SODI (opcional)

---

## 🔧 Funcionalidades Especiales

### **Configuración de Aprobadores**
- **¿Cuándo usar?**: Para trabajos que requieren aprobación específica de supervisores
- **¿Cómo funciona?**: Habilita el tab "Aprobadores" donde puedes agregar personas específicas
- **Impacto**: Cambia el estado inicial a "Por Aprobar" en lugar de "Pendiente"
- **Validación**: Debes agregar al menos un aprobador si activas esta opción

### **Lista de Distribución**
- **¿Cuándo usar?**: Para mantener informadas a personas relevantes sobre el progreso
- **¿Cómo funciona?**: Habilita el tab "Lista de Distribución" para agregar usuarios
- **Beneficio**: Otros reciben notificaciones automáticas sobre cambios de estado
- **Flexibilidad**: Puedes agregar usuarios internos y externos

### **Validaciones Inteligentes**
- **Fechas coherentes**: El sistema valida que la fecha de fin sea posterior al inicio
- **Campos obligatorios**: No permite guardar sin completar información esencial
- **Riesgo y descripción**: Si seleccionas riesgo Medio/Alto, debes describir
- **Afectaciones**: Si seleccionas afectaciones, debes describirlas
- **Equipos dinámicos**: Se cargan automáticamente según la instalación

---

## 📚 Guía Paso a Paso

### **¿Cómo crear una nueva solicitud?**
1. Desde la vista de solicitante, haz clic en "Nueva Solicitud"
2. Se abre el modal con formulario vacío
3. **Configura opciones iniciales** (muy importante):
   - Marca "Requiere Aprobadores" si necesitas aprobación específica
   - Marca "Requiere Lista de Distribución" si quieres notificar a otros
4. **Completa la información obligatoria**:
   - Selecciona tipo de trabajo
   - Establece fechas programadas realistas
   - Especifica empresas involucradas
   - Selecciona instalación y equipos
   - Define características de la intervención
   - Describe el trabajo y condiciones detalladamente
   - Sube archivos necesarios
5. **Configura aprobadores y distribución** (si activaste las opciones):
   - Tab "Aprobadores": Agrega personas que deben aprobar
   - Tab "Lista de Distribución": Agrega quienes deben recibir notificaciones
6. **Revisa toda la información** antes de guardar
7. Haz clic en "Guardar Solicitud"
8. La solicitud se crea en estado "Pendiente" o "Por Aprobar" según tu configuración

### **¿Qué revisar antes de guardar?**
- ✅ **Configuración inicial**: Aprobadores y distribución según necesites
- ✅ **Campos obligatorios**: Todos los marcados con (*) deben estar completos
- ✅ **Fechas realistas**: Considera tiempo de aprobación y preparación
- ✅ **Información precisa**: Verifica que todos los datos sean correctos
- ✅ **Descripciones claras**: Que cualquiera pueda entender el trabajo
- ✅ **Archivos relevantes**: Documentación necesaria para el trabajo

---

## 💡 Consejos y Mejores Prácticas

### **Para solicitudes exitosas:**
- **Planifica con anticipación**: Crea solicitudes con tiempo suficiente
- **Sé específico**: Usa descripciones detalladas y claras
- **Considera aprobaciones**: Si hay dudas, mejor configurar aprobadores
- **Documenta bien**: Sube archivos relevantes desde el inicio

### **Para fechas efectivas:**
- **Considera tiempos**: Incluye tiempo de aprobación y preparación
- **Sé realista**: Fechas muy ajustadas pueden causar problemas
- **Planifica recursos**: Verifica disponibilidad de equipos y personal
- **Incluye contingencias**: Considera posibles demoras

### **Para configuración de aprobadores:**
- **Identifica responsables**: Quién debe aprobar según el tipo de trabajo
- **Incluye supervisores**: Personas con autoridad para aprobar
- **Considera jerarquías**: Respeta la estructura organizacional
- **Documenta criterios**: Por qué necesitas esa aprobación específica

### **Para seguimiento efectivo:**
- **Configura distribución**: Incluye personas que deben estar informadas
- **Mantén comunicación**: Informa cambios importantes manualmente también
- **Haz seguimiento**: Revisa regularmente el estado de tus solicitudes
- **Responde rápido**: Si te devuelven la solicitud, corrige pronto

---

## ❓ Preguntas Frecuentes

### **¿Cuál es la diferencia entre "Pendiente" y "Por Aprobar"?**
- **Pendiente**: Va directo al administrador para procesamiento
- **Por Aprobar**: Debe ser aprobada primero por las personas que configuraste

### **¿Debo siempre configurar aprobadores?**
No, solo si tu organización lo requiere o si el trabajo necesita aprobación específica. Consulta con tu supervisor si tienes dudas.

### **¿Puedo modificar la solicitud después de crearla?**
Solo si es devuelta para corrección. Una vez en proceso, no puedes modificarla.

### **¿Qué archivos debo subir?**
Cualquier documentación relevante: planos, procedimientos, especificaciones técnicas, permisos, etc.

### **¿Cómo sé si mis fechas son realistas?**
Considera: tiempo de aprobación (si aplica), tiempo de preparación, disponibilidad de recursos, y complejidad del trabajo.

### **¿Puedo agregar aprobadores externos?**
Depende de la configuración de tu sistema. Generalmente solo usuarios internos pueden ser aprobadores.

### **¿Se notifica automáticamente a los aprobadores?**
Sí, si configuras aprobadores, ellos reciben notificación automática cuando creas la solicitud.

### **¿Qué pasa si no completo campos obligatorios?**
El sistema no te permitirá guardar la solicitud hasta que completes toda la información obligatoria.

---

*Manual de Usuario - Modal Nueva Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*
