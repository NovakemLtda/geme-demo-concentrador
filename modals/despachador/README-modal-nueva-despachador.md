# 📋 Manual de Usuario - Modal Nueva Solicitud (Despachador)

## 📖 ¿Qué es el Modal de Nueva Solicitud?

El **Modal de Nueva Solicitud** te permite crear solicitudes desde cero como despachador. Es tu herramienta para generar solicitudes operativas directamente cuando necesitas iniciar un proceso de intervención bajo tu coordinación.

---

## 🎯 ¿Cuándo crear una nueva solicitud?

### **Situaciones para Crear Solicitudes:**
- **Solicitudes operativas urgentes**: Que requieren coordinación inmediata
- **Trabajos planificados**: Que necesitas programar y coordinar
- **Intervenciones especiales**: Que requieren gestión operativa específica
- **Corrección de procesos**: Cuando una solicitud anterior tiene problemas operativos

### **Estado Inicial**
- Todas las solicitudes creadas por despachador se inician en estado **"Despachador Gestionando"**
- Esto significa que quedan bajo tu responsabilidad operativa inmediata
- Puedes completar toda la información antes de programarla

---

## 📝 ¿Qué información debes completar?

### **Información Obligatoria:**

#### **Identificación**
- **Tipo de Trabajo**: SDCN, SDCF, SICN, SICF, IL, MM, SODI (obligatorio)
- **ID de Solicitud**: Número CEN o SODI (opcional, puedes asignarlo después)
- **Relación SODI/CEN**: Vínculos con otras solicitudes (opcional)

#### **Fechas Programadas**
- **Fecha de Inicio**: Cuándo debe comenzar la intervención (obligatorio)
- **Fecha de Fin**: Cuándo debe terminar (obligatorio)
- **Validación**: La fecha de fin debe ser posterior al inicio

#### **Empresas Involucradas**
- **Empresa Solicitante**: Quién solicita el trabajo (obligatorio)
- **Empresa Receptora**: Quién lo ejecutará (obligatorio)
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
- **Carga de Archivos**: PDF, Excel, Word, etc. (obligatorio)
- **SODI Adjunta**: Marca si es documento SODI (obligatorio)

---

## 🔧 Funcionalidades Especiales

### **Validaciones Operativas**
- **Fechas coherentes**: El sistema valida que la fecha de fin sea posterior al inicio
- **Campos obligatorios**: No permite guardar sin completar información esencial
- **Riesgo y descripción**: Si seleccionas riesgo Medio/Alto, debes describir
- **Afectaciones**: Si seleccionas afectaciones, debes describirlas
- **Equipos dinámicos**: Se cargan automáticamente según la instalación

### **Coordinación Operativa**
- **Fechas realistas**: Considera disponibilidad operativa y recursos
- **Información técnica**: Completa para facilitar la coordinación
- **Documentación**: Archivos necesarios para la ejecución

---

## 📚 Guía Paso a Paso

### **¿Cómo crear una nueva solicitud?**
1. Desde la vista de despachador, haz clic en "Nueva Solicitud"
2. Se abre el modal con formulario vacío
3. **Completa la información obligatoria**:
   - Selecciona tipo de trabajo
   - Establece fechas programadas
   - Especifica empresas involucradas
   - Selecciona instalación y equipos
   - Define características de la intervención
   - Describe el trabajo y condiciones
   - Sube archivos necesarios
4. **Revisa toda la información** antes de guardar
5. Haz clic en "Guardar Solicitud"
6. La solicitud se crea en estado "Despachador Gestionando"

### **¿Qué revisar antes de guardar?**
- ✅ **Campos obligatorios**: Todos los marcados con (*) deben estar completos
- ✅ **Fechas operativas**: Verifica que sean realistas y coordinables
- ✅ **ID único**: Si lo asignas, asegúrate de que no esté duplicado
- ✅ **Información coherente**: Que todo sea consistente operativamente
- ✅ **Archivos relevantes**: Que estén relacionados con el trabajo
- ✅ **Coordinación**: Que las fechas permitan la coordinación necesaria

---

## 💡 Consejos y Mejores Prácticas

### **Para creación operativa eficiente:**
- **Planifica operativamente**: Ten clara la coordinación antes de empezar
- **Usa información precisa**: Verifica fechas, empresas y equipos
- **Sé específico**: Usa descripciones claras para el equipo operativo
- **Considera recursos**: Piensa en disponibilidad de personal y equipos

### **Para evitar errores operativos:**
- **Verifica fechas**: Deben ser futuras y operativamente factibles
- **Confirma empresas**: Que sean las correctas para la coordinación
- **Valida equipos**: Que correspondan a la instalación seleccionada
- **Revisa archivos**: Que sean relevantes y estén actualizados
- **Usa IDs únicos**: Si asignas ID, confirma que no exista

### **Para optimizar la coordinación:**
- **Completa toda la información**: Evita dejar campos importantes vacíos
- **Documenta bien**: Usa descripciones detalladas para facilitar la coordinación
- **Considera tiempos**: Permite tiempo suficiente para preparación y ejecución
- **Coordina recursos**: Asegúrate de que estén disponibles

---

## ❓ Preguntas Frecuentes

### **¿Por qué mis solicitudes se crean en "Despachador Gestionando"?**
Es el estado por defecto para solicitudes creadas por despachadores, lo que te permite completar y coordinar toda la información antes de programarla.

### **¿Puedo cambiar el estado después de crear la solicitud?**
Sí, puedes usar "Gestionar" para cambiar el estado según el flujo operativo.

### **¿Puedo crear solicitudes sin ID?**
Sí, el ID es opcional al crear. Puedes asignarlo después usando "Editar" o "Gestionar".

### **¿Se notifica automáticamente a alguien?**
Los cambios se registran en el sistema, pero debes comunicar manualmente la creación a los involucrados.

### **¿Puedo modificar la solicitud después de crearla?**
Sí, mientras esté en "Despachador Gestionando" puedes usar "Editar" para modificar cualquier información.

### **¿Qué archivos debo subir?**
Documentos técnicos, planos, procedimientos, y cualquier archivo necesario para la ejecución del trabajo.

---

*Manual de Usuario - Modal Nueva Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*
