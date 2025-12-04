# 📋 Manual de Usuario - Modal Clonar Solicitud (Despachador)

## 📖 ¿Qué es el Modal de Clonar Solicitud?

El **Modal de Clonar Solicitud** te permite crear una nueva solicitud basándote en una existente, copiando la mayor parte de la información para optimizar tu trabajo operativo. Es ideal para solicitudes similares o trabajos recurrentes en las mismas instalaciones.

---

## 🎯 ¿Cuándo usar esta función?

### **Situaciones Ideales para Clonar:**
- **Trabajos recurrentes**: Intervenciones que se repiten en las mismas instalaciones
- **Solicitudes similares**: Trabajos con características operativas parecidas
- **Plantillas operativas**: Usar solicitudes anteriores como base para nuevas intervenciones
- **Eficiencia operativa**: Evitar completar toda la información técnica desde cero

---

## ⚙️ ¿Cómo funciona el clonado?

### **Estado de la Nueva Solicitud**
- La solicitud clonada se crea automáticamente en estado **"Despachador Gestionando"**
- Esto significa que queda bajo tu responsabilidad operativa para completar y coordinar

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

#### **🔄 Se Vacía (Debe Completarse)**
- **ID de Solicitud**: Debe asignarse un nuevo número único
- **Fechas Programadas**: Inicio y fin deben establecerse para la nueva intervención
- **Archivos Adjuntos**: Deben subirse documentos específicos para esta solicitud

---

## 📝 ¿Qué debes hacer después de clonar?

### **Campos Obligatorios que Completar:**
1. **ID de Solicitud**: Asigna el nuevo número CEN o SODI
2. **Fecha de Inicio Programada**: Cuándo comenzará esta nueva intervención
3. **Fecha de Fin Programada**: Cuándo terminará
4. **Archivos Adjuntos**: Sube documentación específica para esta solicitud

### **Campos que Puedes Modificar:**
- **Cualquier información copiada** puede editarse según las necesidades operativas específicas
- **Fechas y horarios** para ajustar a la planificación operativa
- **Condiciones específicas** según las circunstancias actuales

---

## 🔧 Funcionalidades Especiales

### **Validaciones Operativas**
- **Fechas coherentes**: El sistema valida que la fecha de fin sea posterior al inicio
- **Campos obligatorios**: No permite guardar sin completar información esencial
- **Riesgo y descripción**: Si seleccionas riesgo Medio/Alto, debes describir
- **Afectaciones**: Si seleccionas afectaciones, debes describirlas
- **Equipos dinámicos**: Se cargan automáticamente según la instalación

### **Coordinación Operativa**
- **Información técnica preservada**: Mantiene detalles técnicos de la solicitud original
- **Flexibilidad de fechas**: Permite ajustar horarios según disponibilidad operativa
- **Gestión de archivos**: Control sobre documentación específica de cada intervención

---

## 📚 Guía Paso a Paso

### **¿Cómo clonar una solicitud?**
1. Desde la tabla de solicitudes, haz clic en "Clonar" en la solicitud que quieres usar como base
2. Se abre el modal con toda la información copiada
3. **Revisa y modifica** la información según sea necesario
4. **Completa los campos obligatorios**:
   - Asigna nuevo ID de solicitud
   - Establece nuevas fechas programadas
   - Sube archivos específicos
5. **Ajusta información operativa** si es necesario
6. Haz clic en "Guardar Solicitud"
7. La nueva solicitud se crea en estado "Despachador Gestionando"

### **¿Qué revisar antes de guardar?**
- ✅ **ID único**: Asegúrate de que el nuevo ID no esté duplicado
- ✅ **Fechas operativas**: Verifica que sean realistas y coordinables
- ✅ **Información específica**: Modifica cualquier detalle que sea diferente
- ✅ **Archivos actualizados**: Que correspondan a esta intervención específica

---

## 💡 Consejos y Mejores Prácticas

### **Para clonado eficiente:**
- **Elige bien la solicitud base**: Usa solicitudes similares para minimizar cambios
- **Revisa información técnica**: No asumas que todo está correcto
- **Actualiza fechas realistas**: Considera disponibilidad operativa y recursos
- **Modifica descripciones**: Asegúrate de que reflejen el nuevo trabajo

### **Para coordinación operativa:**
- **Verifica disponibilidad**: Confirma que las fechas sean factibles
- **Coordina con equipos**: Asegúrate de que los recursos estén disponibles
- **Valida instalaciones**: Que correspondan a la nueva intervención
- **Actualiza condiciones**: Pueden ser diferentes para la nueva solicitud

### **Para gestión de archivos:**
- **Documentos específicos**: Sube archivos relevantes para esta intervención
- **Elimina archivos obsoletos**: No mantengas documentación de la solicitud original
- **Marca SODI correctamente**: Si corresponde a documentos SODI

---

## ❓ Preguntas Frecuentes

### **¿Puedo clonar cualquier solicitud?**
Sí, puedes clonar solicitudes en cualquier estado. La nueva solicitud siempre se crea en "Despachador Gestionando".

### **¿Se copian los archivos adjuntos?**
No, los archivos se vacían para que subas documentación específica para la nueva solicitud.

### **¿Puedo modificar todo después de clonar?**
Sí, todos los campos son editables excepto el estado, que se mantiene como "Despachador Gestionando".

### **¿Cómo sé si el ID ya existe?**
El sistema te alertará si intentas usar un ID que ya existe. Debes elegir uno único.

### **¿Qué pasa con las fechas programadas?**
Las fechas se vacían para que establezcas nuevas fechas específicas para esta intervención.

### **¿Puedo clonar solicitudes de otras instalaciones?**
Sí, pero debes revisar y ajustar toda la información técnica según la nueva instalación.

---

*Manual de Usuario - Modal Clonar Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*