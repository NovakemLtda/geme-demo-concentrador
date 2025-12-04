# 📋 Manual de Usuario - Modal Clonar Solicitud (Solicitante)

## 📖 ¿Qué es el Modal de Clonar Solicitud?

El **Modal de Clonar Solicitud** te permite crear una nueva solicitud basándote en una existente, copiando la mayor parte de la información para ahorrarte tiempo. Es ideal para solicitudes similares o trabajos que se repiten periódicamente.

---

## 🎯 ¿Cuándo usar esta función?

### **Situaciones Ideales para Clonar:**
- **Trabajos recurrentes**: Intervenciones que solicitas regularmente
- **Solicitudes similares**: Trabajos en la misma instalación con características parecidas
- **Plantillas de solicitud**: Usar solicitudes anteriores como base para nuevas
- **Ahorro de tiempo**: Evitar completar toda la información desde cero

---

## ⚙️ ¿Cómo funciona el clonado?

### **Estado de la Nueva Solicitud**
- La solicitud clonada se crea automáticamente en estado **"Pendiente"**
- Esto significa que ingresa al flujo normal de aprobación y procesamiento
- Puedes editarla completamente antes de enviarla

### **¿Qué información se copia automáticamente?**

#### **✅ Se Copia (Información Reutilizable)**
- **Instalación GM**: Ubicación del trabajo
- **Equipos**: Equipos a intervenir
- **Tipo de Intervención**: Intervención o Desconexión
- **Potencia (MWH)**: Potencia involucrada
- **Aplica SODI**: Si requiere SODI o no
- **Riesgo**: Clasificación del riesgo (Bajo, Medio, Alto)
- **Descripciones**: Trabajo a realizar, condiciones, comentarios
- **Afectaciones**: SSCC, Protecciones, Medidores y sus descripciones
- **Información de empresas**: Solicitante y receptora

#### **🔄 Se Vacía (Debe Completarse)**
- **Fechas Programadas**: Inicio y fin deben establecerse para la nueva solicitud
- **ID de Solicitud**: Se genera automáticamente uno nuevo

### **¿Qué puedes editar después de clonar?**
- **Todos los campos** excepto el estado (que permanece como "Pendiente")
- **Fechas**: Debes establecer nuevas fechas programadas
- **Cualquier información**: Puedes modificar todo lo que necesites

---

## 📝 ¿Qué debes hacer después de clonar?

### **Campos Obligatorios que Completar:**
1. **Fecha de Inicio Programada**: Cuándo debe comenzar esta nueva intervención
2. **Fecha de Fin Programada**: Cuándo debe terminar

### **Campos que Puedes Revisar y Modificar:**
- **Descripción del trabajo**: Ajustar según las necesidades específicas
- **Condiciones requeridas**: Actualizar si hay cambios
- **Equipos**: Modificar si la intervención es diferente
- **Riesgo**: Revisar si aplica la misma clasificación
- **Archivos adjuntos**: Agregar documentación específica para esta solicitud

---

## 🔧 Funcionalidades Especiales

### **Configuración de Aprobadores**
- Puedes configurar si la nueva solicitud requiere aprobación específica
- Si activas esta opción, se habilitará el tab "Aprobadores"
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

---

## 📚 Guía Paso a Paso

### **¿Cómo clonar una solicitud?**
1. Desde la tabla de solicitudes, haz clic en "Clonar" en la solicitud que quieres usar como base
2. Se abre el modal con toda la información copiada
3. **Revisa y modifica** la información según sea necesario
4. **Completa las fechas programadas** (obligatorio)
5. **Configura opciones adicionales** si es necesario:
   - Aprobadores (cambiará el estado inicial)
   - Lista de distribución
6. **Ajusta cualquier información** que sea diferente para esta solicitud
7. Haz clic en "Guardar Solicitud"
8. La nueva solicitud se crea en estado "Pendiente" (o "Por Aprobar" si configuraste aprobadores)

### **¿Qué revisar antes de guardar?**
- ✅ **Fechas programadas**: Deben estar completas y ser realistas
- ✅ **Información específica**: Modifica cualquier detalle que sea diferente
- ✅ **Descripciones**: Que reflejen el nuevo trabajo a realizar
- ✅ **Archivos**: Agregar documentación específica si es necesario
- ✅ **Configuración**: Revisa aprobadores y distribución si los configuraste

---

## 💡 Consejos y Mejores Prácticas

### **Para clonado eficiente:**
- **Elige bien la solicitud base**: Usa solicitudes similares para minimizar cambios
- **Revisa toda la información**: No asumas que todo está correcto para la nueva solicitud
- **Actualiza fechas realistas**: Considera disponibilidad y planificación
- **Modifica descripciones**: Asegúrate de que reflejen el nuevo trabajo

### **Para solicitudes efectivas:**
- **Sé específico**: Usa descripciones claras del trabajo a realizar
- **Considera el contexto**: Puede haber cambios desde la solicitud original
- **Valida equipos**: Que correspondan exactamente a lo que necesitas
- **Planifica fechas**: Considera tiempo de aprobación y preparación

### **Para seguimiento:**
- **Configura notificaciones**: Asegúrate de que las personas correctas reciban información
- **Documenta diferencias**: Si hay cambios importantes respecto a la solicitud original
- **Mantén archivos actualizados**: Sube documentación relevante para esta solicitud

---

## ❓ Preguntas Frecuentes

### **¿Puedo clonar cualquier solicitud?**
Sí, puedes clonar solicitudes en cualquier estado. La nueva solicitud siempre se crea en "Pendiente".

### **¿Se copian los archivos adjuntos?**
La información sobre archivos se copia, pero debes verificar y actualizar la documentación según sea necesario.

### **¿Puedo modificar todo después de clonar?**
Sí, todos los campos son editables excepto el estado, que se mantiene como "Pendiente".

### **¿Qué pasa con las fechas programadas?**
Las fechas se vacían para que establezcas nuevas fechas específicas para esta solicitud.

### **¿Cómo sé si necesito configurar aprobadores?**
Depende de tu organización y el tipo de trabajo. Si tienes dudas, consulta con tu supervisor.

### **¿La nueva solicitud tendrá el mismo ID?**
No, se genera automáticamente un nuevo ID único para la solicitud clonada.

---

*Manual de Usuario - Modal Clonar Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*