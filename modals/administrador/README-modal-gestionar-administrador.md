# 📋 Manual de Usuario - Modal Gestionar Solicitud (Administrador)

## 📖 ¿Qué es el Modal de Gestionar Solicitud?

El **Modal de Gestionar Solicitud** es tu herramienta principal para cambiar estados y procesar solicitudes a través del flujo de trabajo. Te permite tomar decisiones administrativas y mover solicitudes entre diferentes etapas del proceso.

---

## 🎯 ¿Cuándo usar el modal de gestionar?

### **Estados que Puedes Gestionar:**
- **"Pendiente"**: Solicitudes recién creadas que necesitan tu revisión inicial
- **"En Análisis"**: Solicitudes en revisión técnica que requieren tu decisión
- **"Administrador Gestionando"**: Solicitudes que estás procesando activamente

### **¿Qué puedes hacer con cada estado?**
- **Cambiar el estado** de la solicitud según el flujo de trabajo
- **Agregar observaciones** obligatorias para justificar cada cambio
- **Completar información** faltante según el estado
- **Tomar decisiones** sobre el próximo paso del proceso

---

## ⚙️ ¿Cómo funciona según el estado?

### **Para Solicitudes "Pendiente" o "En Análisis":**

#### **Información que Puedes Ver (Solo Lectura):**
- **Estado actual** y observaciones previas
- **Fechas programadas** de inicio y fin
- **Instalación y equipos** involucrados
- **Características** de la intervención
- **Descripciones** y condiciones del trabajo
- **Archivos adjuntos** y documentación

#### **Información que Puedes Editar:**
- **ID de Solicitud**: Si aún no está asignado (opcional)
- **Tipo de Trabajo**: Clasificación SDCN, SDCF, SICN, SICF, IL, MM, SODI (opcional)
- **Relación SODI/CEN**: Vínculos con otras solicitudes (opcional)
- **Empresas**: Solicitante y receptora (opcional)
- **Observaciones**: Comentarios sobre tu decisión (obligatorio)

### **Para Solicitudes "Administrador Gestionando":**

#### **Control Total:**
- **Todos los campos** son editables
- **ID de Solicitud**: Debes asignarlo (obligatorio)
- **Tipo de Trabajo**: Debes confirmarlo (obligatorio)
- **Empresas**: Debes especificarlas (obligatorio)
- **Archivos Adjuntos**: Debes subirlos (obligatorio)
- **Observaciones**: Debes documentar el progreso (obligatorio)

---

## 📝 Decisiones que Puedes Tomar

### **Desde Estado "Pendiente":**
- **"Analizar Solicitud"** → Cambia a "En Análisis": Para revisión técnica detallada
- **"Gestionar Solicitud"** → Cambia a "Administrador Gestionando": Para completar información
- **"Devolver Solicitud"** → Cambia a "Devuelta": Para que el solicitante corrija
- **"Anular Solicitud"** → Cambia a "Anulada": Si no cumple criterios

### **Desde Estado "En Análisis":**
- **"Gestionar Solicitud"** → Cambia a "Administrador Gestionando": Para gestión administrativa
- **"Devolver Solicitud"** → Cambia a "Devuelta": Para correcciones
- **"Anular Solicitud"** → Cambia a "Anulada": Si no es viable

### **Desde Estado "Administrador Gestionando":**
- **"Programar Solicitud"** → Cambia a "Programada": Cuando esté lista para ejecución
- **"Anular Solicitud"** → Cambia a "Anulada": Si no debe continuar el proceso

---

## 🔧 Validaciones y Lógicas Especiales

### **Observaciones Obligatorias:**
- **Siempre debes agregar observaciones** al cambiar de estado
- Explica claramente el motivo del cambio
- Proporciona orientación para el siguiente paso
- Las observaciones son visibles para todos los involucrados

### **Validaciones por Estado:**
- **"Administrador Gestionando"**: Requiere información completa
- **"Programada"**: Necesita fechas, empresas y documentación
- **Cambios de estado**: Deben seguir la lógica del flujo de trabajo

### **Campos Dependientes:**
- **Riesgo Medio/Alto**: Requiere descripción del riesgo
- **Afectaciones**: Requiere descripción si se seleccionan
- **Archivos SODI**: Deben marcarse correctamente

---

## 📚 Guía Paso a Paso

### **¿Cómo gestionar una solicitud?**
1. Desde la tabla de solicitudes, haz clic en "Gestionar" en una solicitud
2. Se abre el modal mostrando el estado actual
3. **Revisa toda la información** disponible
4. **Decide el próximo estado** según el flujo de trabajo
5. **Completa campos** según los requisitos del nuevo estado
6. **Agrega observaciones obligatorias** explicando tu decisión
7. Haz clic en "Guardar Cambios"
8. La solicitud cambia al nuevo estado

### **¿Cómo completar una solicitud "Administrador Gestionando"?**
1. Abre el modal de gestionar
2. **Completa información obligatoria**:
   - Asigna ID de solicitud único
   - Confirma tipo de trabajo
   - Especifica empresas involucradas
   - Sube archivos necesarios
3. **Revisa información opcional** pero importante
4. **Agrega observaciones** sobre el progreso
5. **Decide el próximo estado** usando "Programar Solicitud" (usualmente)
6. Guarda los cambios

### **¿Cómo devolver una solicitud para correcciones?**
1. Selecciona la transición **"Devolver Solicitud"**
2. **Escribe observaciones específicas** indicando:
   - Qué necesita ser corregido
   - Por qué no cumple los criterios actuales
   - Qué debe hacer el solicitante
3. Guarda los cambios
4. El solicitante recibirá la solicitud para editar

---

## 💡 Consejos y Mejores Prácticas

### **Para gestión efectiva:**
- **Lee el historial**: Revisa observaciones anteriores antes de decidir
- **Sé claro**: Usa observaciones específicas y orientativas
- **Mantén el flujo**: No detengas solicitudes innecesariamente
- **Documenta decisiones**: Explica siempre el motivo de los cambios

### **Para completar información:**
- **Verifica datos**: Asegúrate de que toda la información sea correcta
- **Usa IDs únicos**: Confirma que no existan duplicados
- **Coordina fechas**: Considera disponibilidad y recursos
- **Valida archivos**: Que sean relevantes y estén actualizados

### **Para comunicación clara:**
- **Observaciones descriptivas**: Ayudan a otros a entender las decisiones
- **Orientación constructiva**: Especialmente al devolver solicitudes
- **Información de contacto**: Si se necesita coordinación adicional
- **Próximos pasos**: Indica qué se espera después del cambio

---

## ❓ Preguntas Frecuentes

### **¿Qué diferencia hay entre "Gestionar" y "Editar"?**
- **Gestionar**: Cambia estados y toma decisiones del flujo de trabajo
- **Editar**: Modifica información sin cambiar el estado

### **¿Puedo cambiar cualquier solicitud a cualquier estado?**
No, debes seguir la lógica del flujo de trabajo. Algunos cambios de estado no son válidos.

### **¿Qué pasa si no agrego observaciones?**
El sistema no te permitirá guardar cambios sin observaciones. Son obligatorias para mantener trazabilidad.

### **¿Puedo deshacer un cambio de estado?**
Puedes cambiar el estado nuevamente, pero todos los cambios quedan registrados en la bitácora.

### **¿Cómo sé qué información es obligatoria?**
Depende del estado. Los campos obligatorios están marcados con (*) y el sistema te alertará si faltan.

### **¿Se notifica automáticamente a otros usuarios?**
Los cambios se registran en el sistema, pero debes coordinar manualmente con otros involucrados cuando sea necesario.

---

*Manual de Usuario - Modal Gestionar Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*