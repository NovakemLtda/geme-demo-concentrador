# 📋 Manual de Usuario - Modal Nueva Solicitud (Administrador)

## 📖 ¿Qué es el Modal de Nueva Solicitud?

El **Modal de Nueva Solicitud** te permite crear solicitudes desde cero como administrador. Es tu herramienta para generar solicitudes directamente en el sistema cuando necesitas iniciar un proceso de intervención.

---

## 🎯 ¿Cuándo crear una nueva solicitud?

### **Situaciones para Crear Solicitudes:**
- **Solicitudes urgentes**: Que requieren procesamiento inmediato
- **Solicitudes de terceros**: Cuando otros no pueden crearlas directamente
- **Solicitudes especiales**: Que necesitan configuración administrativa específica
- **Corrección de procesos**: Cuando una solicitud anterior tiene problemas

### **Estado Inicial**
- Todas las solicitudes creadas por administrador se inician en estado **"Administrador Gestionando"**
- Esto significa que quedan bajo tu responsabilidad inmediata
- Puedes completar toda la información antes de moverla a otro estado

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

### **Configuración de Aprobadores**
- Puedes configurar si la solicitud requiere aprobación antes de continuar
- Si activas esta opción, se habilitará el tab "Aprobadores"
- Debes agregar al menos un aprobador si activas esta función
- **Importante**: Si configuras aprobadores, la solicitud cambiará a estado "Por Aprobar"

### **Lista de Distribución**
- Puedes configurar quién recibirá notificaciones sobre esta solicitud
- Si activas esta opción, se habilitará el tab "Lista de Distribución"
- Puedes agregar usuarios internos y externos

### **Validaciones Inteligentes**
- **Fechas coherentes**: El sistema valida que la fecha de fin sea posterior al inicio
- **Campos obligatorios**: No permite guardar sin completar información esencial
- **Riesgo y descripción**: Si seleccionas riesgo Medio/Alto, debes describir
- **Afectaciones**: Si seleccionas afectaciones, debes describirlas
- **Equipos dinámicos**: Se cargan automáticamente según la instalación

---

## 📚 Guía Paso a Paso

### **¿Cómo crear una nueva solicitud?**
1. Desde la vista de administrador, haz clic en "Nueva Solicitud"
2. Se abre el modal con formulario vacío
3. **Completa la información obligatoria**:
   - Selecciona tipo de trabajo
   - Establece fechas programadas
   - Especifica empresas involucradas
   - Selecciona instalación y equipos
   - Define características de la intervención
   - Describe el trabajo y condiciones
   - Sube archivos necesarios
4. **Configura opciones adicionales** si es necesario:
   - Aprobadores (cambiará el estado inicial)
   - Lista de distribución
5. **Revisa toda la información** antes de guardar
6. Haz clic en "Guardar Solicitud"
7. La solicitud se crea en estado "Administrador Gestionando" (o "Por Aprobar" si configuraste aprobadores)

### **¿Qué revisar antes de guardar?**
- ✅ **Campos obligatorios**: Todos los marcados con (*) deben estar completos
- ✅ **Fechas lógicas**: Verifica que sean realistas y futuras
- ✅ **ID único**: Si lo asignas, asegúrate de que no esté duplicado
- ✅ **Información coherente**: Que todo sea consistente
- ✅ **Archivos relevantes**: Que estén relacionados con el trabajo
- ✅ **Configuración**: Revisa aprobadores y distribución si los configuraste

---

## 💡 Consejos y Mejores Prácticas

### **Para creación eficiente:**
- **Planifica antes**: Ten clara toda la información antes de empezar
- **Usa información precisa**: Verifica fechas, empresas y equipos
- **Sé descriptivo**: Usa descripciones claras y completas
- **Considera el flujo**: Piensa en el siguiente paso del proceso

### **Para evitar errores:**
- **Verifica fechas**: Deben ser futuras y realistas
- **Confirma empresas**: Que sean las correctas para el tipo de trabajo
- **Valida equipos**: Que correspondan a la instalación seleccionada
- **Revisa archivos**: Que sean relevantes y estén actualizados
- **Usa IDs únicos**: Si asignas ID, confirma que no exista

### **Para optimizar el proceso:**
- **Completa toda la información**: Evita dejar campos importantes vacíos
- **Configura notificaciones**: Asegúrate de que las personas correctas reciban información
- **Documenta bien**: Usa descripciones detalladas para facilitar el proceso
- **Considera aprobadores**: Si el trabajo requiere aprobación especial

---

## ❓ Preguntas Frecuentes

### **¿Por qué mis solicitudes se crean en "Administrador Gestionando"?**
Es el estado por defecto para solicitudes creadas por administradores, lo que te permite completar y revisar toda la información antes de moverla al siguiente estado.

### **¿Puedo cambiar el estado después de crear la solicitud?**
Sí, puedes usar "Gestionar" para cambiar el estado según el flujo de trabajo.

### **¿Qué pasa si configuro aprobadores?**
La solicitud se creará en estado "Por Aprobar" en lugar de "Administrador Gestionando", y será enviada a los aprobadores designados.

### **¿Puedo crear solicitudes sin ID?**
Sí, el ID es opcional al crear. Puedes asignarlo después usando "Editar" o "Gestionar".

### **¿Se notifica automáticamente a alguien?**
Solo si configuras la lista de distribución. De lo contrario, debes comunicar manualmente la creación.

### **¿Puedo modificar la solicitud después de crearla?**
Sí, mientras esté en "Administrador Gestionando" puedes usar "Editar" para modificar cualquier información.

---

*Manual de Usuario - Modal Nueva Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*