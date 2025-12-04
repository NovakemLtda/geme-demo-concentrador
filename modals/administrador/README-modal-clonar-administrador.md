# 📋 Manual de Usuario - Modal Clonar Solicitud (Administrador)

## 📖 ¿Qué es el Modal de Clonar Solicitud?

El **Modal de Clonar Solicitud** te permite crear una nueva solicitud basándote en una existente, copiando la mayor parte de la información para ahorrarte tiempo. Es ideal para solicitudes similares o recurrentes.

---

## 🎯 ¿Cuándo usar esta función?

### **Situaciones Ideales para Clonar:**
- **Solicitudes recurrentes**: Trabajos que se repiten periódicamente
- **Solicitudes similares**: Intervenciones en la misma instalación con características parecidas
- **Plantillas de trabajo**: Usar solicitudes anteriores como base para nuevas
- **Ahorro de tiempo**: Evitar completar toda la información desde cero

---

## ⚙️ ¿Cómo funciona el clonado?

### **Estado de la Nueva Solicitud**
- La solicitud clonada se crea automáticamente en estado **"Administrador Gestionando"**
- Esto significa que queda bajo tu responsabilidad para completar y gestionar

### **¿Qué información se copia automáticamente?**

#### **✅ Se Copia (Información Reutilizable)**
- **Tipo de Trabajo**: SDCN, SDCF, SICN, SICF, IL, MM, SODI
- **Relación SODI/CEN**: Vínculos con otras solicitudes
- **Empresas**: Solicitante y receptora
- **Instalación GM**: Ubicación del trabajo
- **Equipos**: Equipos a intervenir
- **Características**: Tipo de intervención, potencia, aplica SODI, riesgo
- **Descripciones**: Trabajo a realizar, condiciones, comentarios
- **Afectaciones**: SSCC, Protecciones, Medidores y sus descripciones
- **Archivos**: Documentos adjuntos y marcas SODI

#### **🔄 Se Vacía (Debe Completarse)**
- **ID de Solicitud**: Debe asignarse un nuevo número único
- **Fechas Programadas**: Inicio y fin deben establecerse para la nueva solicitud

---

## 📝 ¿Qué debes hacer después de clonar?

### **Campos Obligatorios que Completar:**
1. **ID de Solicitud**: Asigna el nuevo número CEN o SODI
2. **Fecha de Inicio Programada**: Cuándo comenzará esta nueva intervención
3. **Fecha de Fin Programada**: Cuándo terminará

### **Campos que Puedes Modificar:**
- **Cualquier información copiada** puede editarse según las necesidades específicas
- **Configuración de Aprobadores**: Si la solicitud requiere aprobación
- **Lista de Distribución**: Quién debe recibir notificaciones

---

## 🔧 Funcionalidades Especiales

### **Configuración de Aprobadores**
- Puedes configurar si la nueva solicitud requiere aprobadores
- Si activas esta opción, se habilitará el tab "Aprobadores"
- Debes agregar al menos un aprobador si activas esta función

### **Lista de Distribución**
- Puedes configurar quién recibirá notificaciones sobre esta solicitud
- Si activas esta opción, se habilitará el tab "Lista de Distribución"
- Puedes agregar usuarios internos y externos

### **Validaciones Inteligentes**
- **Fechas**: El sistema valida que la fecha de fin sea posterior al inicio
- **Riesgos**: Si seleccionas riesgo medio o alto, debes describir el riesgo
- **Afectaciones**: Si seleccionas afectaciones, debes describirlas
- **Equipos**: Se cargan automáticamente según la instalación seleccionada

---

## 📚 Guía Paso a Paso

### **¿Cómo clonar una solicitud?**
1. Desde la tabla de solicitudes, haz clic en "Clonar" en la solicitud que quieres usar como base
2. Se abre el modal con toda la información copiada
3. **Revisa y modifica** la información según sea necesario
4. **Completa los campos obligatorios**:
   - Asigna nuevo ID de solicitud
   - Establece nuevas fechas programadas
5. **Configura opciones adicionales** si es necesario:
   - Aprobadores
   - Lista de distribución
6. Haz clic en "Guardar Solicitud"
7. La nueva solicitud se crea en estado "Administrador Gestionando"

### **¿Qué revisar antes de guardar?**
- ✅ **ID único**: Asegúrate de que el nuevo ID no esté duplicado
- ✅ **Fechas lógicas**: Verifica que las fechas sean realistas y futuras
- ✅ **Información específica**: Modifica cualquier detalle que sea diferente
- ✅ **Configuración**: Revisa aprobadores y distribución si los configuraste

---

## 💡 Consejos y Mejores Prácticas

### **Para un clonado eficiente:**
- **Elige bien la solicitud base**: Usa solicitudes similares para minimizar cambios
- **Revisa toda la información**: No asumas que todo está correcto
- **Actualiza fechas realistas**: Considera disponibilidad y recursos
- **Modifica descripciones**: Asegúrate de que reflejen el nuevo trabajo

### **Para evitar errores:**
- **Verifica el ID**: Debe ser único en el sistema
- **Revisa empresas**: Confirma que solicitante y receptora sean correctas
- **Valida equipos**: Asegúrate de que correspondan a la nueva intervención
- **Actualiza riesgos**: Pueden ser diferentes para la nueva solicitud

### **Para optimizar el flujo:**
- **Usa plantillas**: Identifica solicitudes que funcionan bien como base
- **Documenta cambios**: Usa el campo comentarios para explicar diferencias
- **Configura distribución**: Asegúrate de que las personas correctas reciban notificaciones

---

## ❓ Preguntas Frecuentes

### **¿Puedo clonar cualquier solicitud?**
Sí, puedes clonar solicitudes en cualquier estado. La nueva solicitud siempre se crea en "Administrador Gestionando".

### **¿Se copian los archivos adjuntos?**
Sí, los archivos se copian, pero debes verificar que sean relevantes para la nueva solicitud.

### **¿Qué pasa con los aprobadores configurados?**
Los aprobadores no se copian automáticamente. Debes configurarlos nuevamente si la nueva solicitud los requiere.

### **¿Puedo modificar todo después de clonar?**
Sí, todos los campos son editables excepto el estado, que se mantiene como "Administrador Gestionando".

### **¿Cómo sé si el ID ya existe?**
El sistema te alertará si intentas usar un ID que ya existe. Debes elegir uno único.

---

*Manual de Usuario - Modal Clonar Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*.