# 📋 Manual de Usuario - Modal Editar Solicitud (Administrador)

## 📖 ¿Qué es el Modal de Editar Solicitud?

El **Modal de Editar Solicitud** te permite modificar solicitudes que están bajo tu gestión. Es tu herramienta para corregir, completar o actualizar información de solicitudes en estados específicos.

---

## 🎯 ¿Cuándo puedes editar una solicitud?

### **Estados Editables:**
- **"Administrador Gestionando"**: Solicitudes que estás procesando activamente
- **"En Análisis"**: Solicitudes en revisión técnica que necesitan ajustes

### **¿Por qué solo estos estados?**
- Garantiza que no se modifiquen solicitudes en proceso de aprobación o ejecución
- Mantiene la integridad del flujo de trabajo
- Evita conflictos con otros roles del sistema

---

## ⚙️ ¿Qué puedes editar?

### **Información Completamente Editable:**

#### **Identificación**
- **ID de Solicitud**: Número CEN o SODI (opcional si aún no se asigna)
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

### **Información de Solo Lectura:**
- **Estado**: Permanece como "Administrador Gestionando"
- **Observaciones**: Historial de observaciones previas
- **Información del Sistema**: ID, fechas de creación, responsables

---

## 📝 Validaciones y Lógicas Especiales

### **Validaciones Automáticas:**
- **Fechas coherentes**: Fin posterior al inicio
- **Campos obligatorios**: El sistema no permite guardar sin completarlos
- **Riesgo y descripción**: Si seleccionas riesgo Medio/Alto, debes describir
- **Afectaciones**: Si seleccionas afectaciones, debes describirlas

### **Lógicas Inteligentes:**
- **Equipos dinámicos**: Se actualizan según la instalación seleccionada
- **Validación de ID**: Verifica que no esté duplicado en el sistema
- **Formato de fechas**: Debe incluir fecha y hora

---

## 📚 Guía Paso a Paso

### **¿Cómo editar una solicitud?**
1. Desde la tabla de solicitudes, localiza una solicitud en estado "Administrador Gestionando" o "En Análisis"
2. Haz clic en "Editar" en el menú de acciones
3. Se abre el modal con toda la información actual
4. **Modifica los campos** que necesites cambiar
5. **Verifica las validaciones**:
   - Campos obligatorios completados
   - Fechas lógicas
   - Descripciones de riesgo/afectaciones si aplican
6. Haz clic en "Guardar Cambios"
7. La solicitud se actualiza manteniendo su estado actual

### **¿Qué revisar antes de guardar?**
- ✅ **Campos obligatorios**: Todos los marcados con (*) deben estar completos
- ✅ **Fechas realistas**: Considera disponibilidad y recursos
- ✅ **Información coherente**: Verifica que todo sea consistente
- ✅ **Descripciones completas**: Especialmente para riesgos y afectaciones

---

## 💡 Consejos y Mejores Prácticas

### **Para ediciones efectivas:**
- **Lee las observaciones**: Revisa el historial antes de hacer cambios
- **Sé específico**: Usa descripciones claras y detalladas
- **Considera el impacto**: Piensa en cómo afectan los cambios al proceso
- **Documenta cambios**: Usa el campo comentarios para explicar modificaciones importantes

### **Para evitar errores:**
- **Verifica fechas**: Deben ser futuras y realistas
- **Confirma empresas**: Asegúrate de que sean las correctas
- **Valida equipos**: Que correspondan a la instalación seleccionada
- **Revisa archivos**: Que sean relevantes y estén actualizados

### **Para optimizar el flujo:**
- **Completa toda la información**: Evita dejar campos importantes vacíos
- **Usa IDs únicos**: Verifica que no existan duplicados
- **Actualiza regularmente**: No dejes solicitudes incompletas mucho tiempo
- **Comunica cambios**: Informa a otros involucrados sobre modificaciones importantes

---

## ❓ Preguntas Frecuentes

### **¿Por qué no puedo editar algunas solicitudes?**
Solo puedes editar solicitudes en estado "Administrador Gestionando" o "En Análisis". Solicitudes en otros estados requieren usar "Gestionar" para cambiar el estado primero.

### **¿Qué pasa si cambio las fechas programadas?**
Los cambios se guardan inmediatamente. Asegúrate de coordinar con otros involucrados si las fechas afectan la planificación.

### **¿Puedo cambiar el tipo de trabajo después de crear la solicitud?**
Sí, pero considera que esto puede afectar otros aspectos como equipos, riesgos y procedimientos.

### **¿Se notifica a alguien cuando edito una solicitud?**
Los cambios se registran en el sistema, pero debes comunicar cambios importantes manualmente a los involucrados.

### **¿Qué hago si el ID que quiero usar ya existe?**
El sistema te alertará. Debes elegir un ID único o verificar si la solicitud existente es la que necesitas.

### **¿Puedo agregar o quitar archivos adjuntos?**
Sí, puedes gestionar archivos adjuntos libremente. Asegúrate de marcar correctamente si son documentos SODI.

---

*Manual de Usuario - Modal Editar Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*