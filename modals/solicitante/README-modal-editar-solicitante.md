# 📋 Manual de Usuario - Modal Editar Solicitud (Solicitante)

## 📖 ¿Qué es el Modal de Editar Solicitud?

El **Modal de Editar Solicitud** te permite modificar solicitudes que han sido devueltas para corrección. Es tu herramienta para ajustar y corregir información según las observaciones recibidas.

---

## 🎯 ¿Cuándo puedes editar una solicitud?

### **Estado Editable:**
- **"Devuelta"**: Solicitudes que han sido devueltas por el administrador o aprobador para corrección

### **¿Por qué solo este estado?**
- Garantiza que solo modifiques solicitudes que requieren tu atención
- Mantiene la integridad del flujo de aprobación
- Evita cambios en solicitudes que están siendo procesadas
- Asegura que las correcciones se realicen según las observaciones

---

## ⚙️ ¿Qué puedes editar?

### **Información Completamente Editable:**

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

### **Información de Solo Lectura:**
- **Estado**: Permanece como "Devuelta" hasta que guardes los cambios
- **ID de Solicitud**: No se puede modificar
- **Información del Sistema**: Fechas de creación, responsables

---

## 📝 Validaciones y Lógicas Especiales

### **Validaciones Automáticas:**
- **Fechas coherentes**: Fin posterior al inicio
- **Campos obligatorios**: El sistema no permite guardar sin completarlos
- **Riesgo y descripción**: Si seleccionas riesgo Medio/Alto, debes describir
- **Afectaciones**: Si seleccionas afectaciones, debes describirlas

### **Lógicas Inteligentes:**
- **Equipos dinámicos**: Se actualizan según la instalación seleccionada
- **Validación de fechas**: Considera tiempo de procesamiento y aprobación
- **Configuración de aprobadores**: Puedes modificar si la solicitud requiere aprobación

---

## 📚 Guía Paso a Paso

### **¿Cómo editar una solicitud devuelta?**
1. Desde la tabla de solicitudes, localiza una solicitud en estado "Devuelta"
2. **Lee las observaciones** para entender qué necesita corrección
3. Haz clic en "Editar" en el menú de acciones
4. Se abre el modal con toda la información actual
5. **Realiza las correcciones** según las observaciones recibidas
6. **Verifica las validaciones**:
   - Campos obligatorios completados
   - Fechas lógicas y futuras
   - Descripciones de riesgo/afectaciones si aplican
7. **Revisa configuración de aprobadores** si es necesario
8. Haz clic en "Guardar Cambios"
9. La solicitud vuelve al flujo (estado "Pendiente" o "Por Aprobar")

### **¿Qué revisar antes de guardar?**
- ✅ **Observaciones**: Asegúrate de haber corregido todo lo solicitado
- ✅ **Campos obligatorios**: Todos los marcados con (*) deben estar completos
- ✅ **Fechas actualizadas**: Considera si necesitas ajustar las fechas
- ✅ **Información coherente**: Verifica que todo sea consistente
- ✅ **Descripciones claras**: Especialmente para riesgos y afectaciones

---

## 💡 Consejos y Mejores Prácticas

### **Para correcciones efectivas:**
- **Lee cuidadosamente**: Entiende exactamente qué necesita corrección
- **Corrige completamente**: No dejes correcciones a medias
- **Sé específico**: Usa descripciones claras y detalladas
- **Actualiza fechas**: Considera el tiempo adicional de procesamiento

### **Para evitar nuevas devoluciones:**
- **Verifica información**: Asegúrate de que todos los datos sean correctos
- **Confirma fechas**: Que sean realistas y factibles
- **Valida equipos**: Que correspondan exactamente a lo solicitado
- **Revisa archivos**: Que estén actualizados y sean relevantes

### **Para acelerar el proceso:**
- **Responde rápido**: Corrige las observaciones tan pronto como sea posible
- **Comunícate**: Si tienes dudas, contacta a quien devolvió la solicitud
- **Documenta cambios**: Usa el campo comentarios para explicar las correcciones
- **Mantén archivos actualizados**: Sube documentación corregida si es necesario

---

## ❓ Preguntas Frecuentes

### **¿Por qué no puedo editar algunas solicitudes?**
Solo puedes editar solicitudes en estado "Devuelta". Solicitudes en otros estados no requieren tu corrección.

### **¿Dónde veo las observaciones sobre qué corregir?**
Las observaciones aparecen en el historial de la solicitud y en el campo "Observaciones" del modal.

### **¿Qué pasa después de guardar las correcciones?**
La solicitud vuelve al flujo normal, típicamente a estado "Pendiente" o "Por Aprobar" según tu configuración.

### **¿Puedo cambiar las fechas programadas?**
Sí, puedes ajustar las fechas, pero considera que pueden haber pasado días desde la solicitud original.

### **¿Se notifica automáticamente cuando corrijo?**
Los cambios se registran en el sistema, pero es recomendable comunicar que has realizado las correcciones.

### **¿Puedo agregar o cambiar archivos adjuntos?**
Sí, puedes gestionar archivos adjuntos libremente. Asegúrate de subir documentación corregida si es necesario.

### **¿Qué hago si no entiendo las observaciones?**
Contacta a la persona que devolvió la solicitud para aclarar qué necesita corrección específicamente.

---

*Manual de Usuario - Modal Editar Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*
