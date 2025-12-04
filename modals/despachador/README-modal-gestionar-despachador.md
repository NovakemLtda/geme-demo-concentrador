# 📋 Manual de Usuario - Modal Gestionar Solicitud (Despachador)

## 📖 ¿Qué es el Modal de Gestionar Solicitud?

El **Modal de Gestionar Solicitud** es tu herramienta principal para cambiar estados y coordinar solicitudes a través del flujo operativo. Te permite tomar decisiones operativas y mover solicitudes entre diferentes etapas del proceso.

---

## 🎯 ¿Cuándo usar el modal de gestionar?

### **Estados que Puedes Gestionar:**
- **"Despachador Gestionando"**: Solicitudes que estás coordinando operativamente
- **"Programada"**: Solicitudes programadas que requieren seguimiento
- **"Vigente"**: Solicitudes en ejecución que necesitas monitorear
- **"Extendida"**: Solicitudes con extensión de tiempo
- **"Suspendida"**: Solicitudes suspendidas que requieren decisión
- **"Finalizada"**: Solicitudes finalizadas que pueden necesitar ajustes

### **¿Qué puedes hacer con cada estado?**
- **Cambiar el estado** de la solicitud según el flujo operativo
- **Agregar observaciones** obligatorias para justificar cada cambio
- **Completar información** operativa según el estado
- **Coordinar** el próximo paso del proceso

---

## 📝 Decisiones que Puedes Tomar

### **Desde Estado "Despachador Gestionando":**
- **"Programar Solicitud"** → Cambia a "Programada": Cuando esté lista para programar
- **"Anular Solicitud"** → Cambia a "Anulada": Si no debe continuar el proceso

### **Desde Estado "Programada":**
- **"Iniciar Trabajo"** → Cambia a "Vigente": Requiere fecha efectiva de inicio
- **"Rechazar Trabajo"** → Cambia a "Rechazada": Si no es viable ejecutar

### **Desde Estado "Vigente":**
- **"Extender Trabajo"** → Cambia a "Extendida": Para extensiones de tiempo
- **"Suspender Trabajo"** → Cambia a "Suspendida": Para pausar temporalmente
- **"Finalizar Trabajo"** → Cambia a "Finalizada": Requiere fecha efectiva de finalización
- **"Devolver a Programada"** → Cambia a "Programada": Borra fecha efectiva de inicio

### **Desde Estado "Extendida":**
- **"Finalizar Trabajo"** → Cambia a "Finalizada": Requiere fecha efectiva de finalización
- **"Devolver a Vigente"** → Cambia a "Vigente": Para continuar normalmente

### **Desde Estado "Suspendida":**
- **"Finalizar Trabajo"** → Cambia a "Finalizada": Requiere fecha efectiva de finalización
- **"Devolver a Vigente"** → Cambia a "Vigente": Para reanudar trabajo

### **Desde Estado "Finalizada":**
- **"Devolver a Extendida"** → Cambia a "Extendida": Borra fecha efectiva de finalización
- **"Devolver a Suspendida"** → Cambia a "Suspendida": Borra fecha efectiva de finalización
- **"Devolver a Vigente"** → Cambia a "Vigente": Borra fecha efectiva de finalización

---

## 🔧 Validaciones y Lógicas Especiales

### **Observaciones Obligatorias:**
- **Siempre debes agregar observaciones** al cambiar de estado
- Explica claramente el motivo del cambio
- Proporciona orientación para el siguiente paso
- Las observaciones son visibles para todos los involucrados

### **Validaciones por Estado:**
- **"Despachador Gestionando"**: Requiere información completa
- **"Programada"**: Necesita fechas y documentación
- **"Vigente"**: Requiere fecha efectiva de inicio
- **"Finalizada"**: Necesita fecha efectiva de finalización

### **Fechas Efectivas:**
- **Inicio Efectivo**: Obligatorio para pasar a "Vigente"
- **Fin Efectivo**: Obligatorio para pasar a "Finalizada"
- **Borrado automático**: Al devolver estados se borran fechas efectivas

---

## 📚 Guía Paso a Paso

### **¿Cómo gestionar una solicitud?**
1. Desde la tabla de solicitudes, haz clic en "Gestionar" en una solicitud
2. Se abre el modal mostrando el estado actual
3. **Revisa toda la información** disponible
4. **Decide el próximo estado** usando las transiciones disponibles
5. **Completa campos** según los requisitos del nuevo estado
6. **Agrega observaciones obligatorias** explicando tu decisión
7. Haz clic en "Guardar Cambios"
8. La solicitud cambia al nuevo estado

### **¿Cómo iniciar un trabajo programado?**
1. Selecciona la transición **"Iniciar Trabajo"**
2. **Ingresa la fecha efectiva de inicio** (obligatorio)
3. **Agrega observaciones** sobre el inicio del trabajo
4. Guarda los cambios
5. La solicitud cambia a "Vigente"

### **¿Cómo finalizar un trabajo?**
1. Selecciona la transición **"Finalizar Trabajo"**
2. **Ingresa la fecha efectiva de finalización** (obligatorio)
3. **Agrega observaciones** sobre la finalización
4. Guarda los cambios
5. La solicitud cambia a "Finalizada"

---

## 💡 Consejos y Mejores Prácticas

### **Para gestión operativa efectiva:**
- **Revisa fechas**: Asegúrate de que las fechas efectivas sean precisas
- **Sé claro**: Usa observaciones específicas para el equipo operativo
- **Mantén el flujo**: Procesa solicitudes según la programación
- **Documenta decisiones**: Explica siempre el motivo de los cambios

### **Para coordinación de trabajos:**
- **Verifica disponibilidad**: Confirma recursos antes de iniciar trabajos
- **Coordina fechas**: Asegúrate de que sean operativamente factibles
- **Comunica cambios**: Informa a equipos sobre extensiones o suspensiones
- **Registra tiempos**: Usa fechas efectivas precisas para seguimiento

### **Para manejo de estados:**
- **Usa transiciones correctas**: Cada transición tiene un propósito específico
- **Completa información**: Asegúrate de tener datos necesarios antes de cambiar
- **Considera impacto**: Piensa en cómo afecta el cambio a la operación
- **Mantén trazabilidad**: Documenta bien cada decisión operativa

---

## ❓ Preguntas Frecuentes

### **¿Qué diferencia hay entre "Gestionar" y "Editar"?**
- **Gestionar**: Cambia estados y toma decisiones del flujo operativo
- **Editar**: Modifica información sin cambiar el estado

### **¿Por qué necesito fechas efectivas?**
Las fechas efectivas registran cuándo realmente ocurrieron los eventos, diferente de las fechas programadas.

### **¿Puedo devolver una solicitud a un estado anterior?**
Sí, hay transiciones específicas para devolver solicitudes, pero pueden borrar fechas efectivas.

### **¿Qué pasa si no agrego observaciones?**
El sistema no te permitirá guardar cambios sin observaciones. Son obligatorias para mantener trazabilidad.

### **¿Cómo sé qué transiciones están disponibles?**
Depende del estado actual. El modal te mostrará solo las transiciones válidas para ese estado.

### **¿Se notifica automáticamente a otros usuarios?**
Los cambios se registran en el sistema, pero debes coordinar manualmente con otros involucrados cuando sea necesario.

---

*Manual de Usuario - Modal Gestionar Solicitud*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*
