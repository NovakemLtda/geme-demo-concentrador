# 🔧 Manual de Usuario - Vista de Mantenedores

## 📖 ¿Qué es la Vista de Mantenedores?

La **Vista de Mantenedores** es el centro de configuración del sistema donde puedes gestionar todos los parámetros y catálogos que utilizan las solicitudes. Es tu herramienta para mantener actualizada la información base del sistema, como empresas, instalaciones, tipos de trabajo, equipos y plazos de envío.

---

## 🎯 ¿Para qué sirven los mantenedores?

### **Propósito Principal:**
Los mantenedores te permiten **configurar y actualizar** toda la información que aparece en los formularios de solicitudes, asegurando que los usuarios tengan opciones actualizadas y correctas.

### **¿Qué puedes gestionar?**
- **Plazos de envío**: Límites de tiempo para crear solicitudes
- **Catálogos**: Empresas, instalaciones, tipos de trabajo, equipos
- **Configuraciones**: Afectaciones, tipos de tecnología
- **Parámetros operativos**: Reglas de negocio del sistema

---

## 🏗️ Estructura de la Vista

### **Navegación por Módulos:**
La vista está organizada en **dos niveles**:

1. **Seleccionar Módulo**: Actualmente solo "Concentrador de Solicitudes"
2. **Seleccionar Mantenedor**: 9 mantenedores específicos disponibles

### **Mantenedores Disponibles:**

#### **1. 📅 Plazo Máximo de Envío de Solicitudes Programadas**
- **Propósito**: Establece límites de tiempo para crear solicitudes por día de la semana
- **Configuración**: Días de anticipación y hora límite para cada día
- **Ejemplo**: "Lunes - 5 días hábiles antes de las 12:00 hrs"

#### **2. ⚠️ Plazo Máximo de Envío de Solicitudes SODI**
- **Propósito**: Límites específicos para solicitudes SODI por instalación
- **Configuración**: Días de anticipación y hora límite por instalación GM
- **Diferencia**: Plazos independientes de las solicitudes programadas regulares

#### **3. 🏢 Empresas Solicitantes/Receptoras**
- **Propósito**: Gestiona las empresas que pueden solicitar o recibir trabajos
- **Información**: Nombre, código/abreviatura, estado
- **Empresas predefinidas**: CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa

#### **4. 📍 Instalaciones GM**
- **Propósito**: Administra las instalaciones coordinadas por el CO de GM
- **Información**: Nombre, código, tipo de tecnología, estado
- **Instalaciones**: Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1

#### **5. ⚡ Tipos de Tecnología**
- **Propósito**: Define los tipos de tecnología de las instalaciones
- **Información**: Código, nombre, ícono visual, estado
- **Tipos**: Solar, Térmica, Eólica, Hidráulica, BESS, Biomasa

#### **6. 🔧 Equipos a Intervenir por Instalación**
- **Propósito**: Configura equipos disponibles para cada instalación
- **Organización**: Por instalación GM específica
- **Gestión**: Agregar, editar, activar/desactivar equipos

#### **7. 🛠️ Tipos de Equipos**
- **Propósito**: Catálogo maestro de tipos de equipos
- **Tipos**: Paños, Transformador, Secciones de barra, SCADA, Medidores, etc.
- **Uso**: Base para asignar equipos a instalaciones

#### **8. ⚠️ Afectaciones**
- **Propósito**: Define las afectaciones disponibles en solicitudes
- **Tipos**: SSCC, Protecciones, Medidores
- **Uso**: Opciones en formularios de solicitudes

#### **9. 💼 Tipo de Trabajo**
- **Propósito**: Gestiona los tipos de trabajo disponibles
- **Tipos**: SDCN, SDCF, SICN, SICF, IL, MM, SODI
- **Información**: Código y descripción detallada

---

## 📋 Funcionalidades por Mantenedor

### **🕒 Mantenedor de Plazos de Envío**

#### **¿Qué configuras?**
- **Días de anticipación**: Cuántos días hábiles antes se puede crear la solicitud
- **Hora límite**: Hasta qué hora del día se pueden crear solicitudes
- **Por día de la semana**: Configuración independiente para cada día

#### **¿Cómo funciona?**
1. **Selecciona el día** que quieres configurar
2. **Establece días de anticipación** (1-30 días hábiles)
3. **Define hora límite** (formato 24 horas)
4. **Guarda individualmente** cada configuración

#### **Ejemplo práctico:**
- **Lunes**: 5 días hábiles antes de las 12:00 hrs
- **Significa**: Para trabajos programados el lunes, la solicitud debe crearse antes del miércoles anterior a las 12:00

### **⚠️ Mantenedor de Plazos SODI**

#### **¿Qué configuras?**
- **Plazos por instalación**: Cada instalación GM tiene su propio plazo
- **Días de anticipación**: Específicos para coordinación SODI
- **Hora límite**: Independiente de plazos regulares

#### **¿Por qué es diferente?**
- **Coordinación especial**: Las solicitudes SODI requieren coordinación adicional
- **Plazos más estrictos**: Generalmente requieren más anticipación
- **Por instalación**: Cada instalación puede tener requisitos diferentes

### **🏢 Mantenedor de Empresas**

#### **¿Qué gestionas?**
- **Información básica**: Nombre completo de la empresa
- **Código**: Abreviatura para identificación rápida
- **Estado**: Activo/Inactivo

#### **¿Cómo se usan?**
- **En solicitudes**: Aparecen en campos "Empresa Solicitante" y "Empresa Receptora"
- **En filtros**: Para buscar y organizar solicitudes
- **En reportes**: Para análisis por empresa

### **📍 Mantenedor de Instalaciones**

#### **¿Qué administras?**
- **Datos básicos**: Nombre, código identificador
- **Tecnología**: Tipo de tecnología asociada
- **Estado**: Disponibilidad para solicitudes

#### **¿Cómo impacta?**
- **Formularios**: Opciones disponibles en selector de instalación
- **Equipos**: Determina qué equipos están disponibles
- **Plazos SODI**: Cada instalación tiene sus propios plazos

### **🔧 Mantenedor de Equipos por Instalación**

#### **¿Cómo funciona?**
1. **Selecciona instalación**: Elige la instalación GM
2. **Ve equipos actuales**: Lista de equipos configurados
3. **Gestiona equipos**: Agregar, editar, activar/desactivar

#### **¿Qué configuras por equipo?**
- **Nombre**: Identificación específica del equipo
- **Tipo**: Categoría del equipo (desde catálogo de tipos)
- **Estado**: Disponible o no para intervención

#### **Lógica de funcionamiento:**
- **Dinámico**: Los equipos cambian según la instalación seleccionada
- **Específico**: Cada instalación tiene su propia lista de equipos
- **Actualizable**: Puedes agregar/quitar equipos según necesidades

---

## 📚 Guías Paso a Paso

### **¿Cómo configurar plazos de envío?**

#### **Para Solicitudes Programadas:**
1. **Accede** a "Plazo Máximo de Envío de Solicitudes Programadas"
2. **Selecciona el día** que quieres configurar
3. **Establece días de anticipación** (considera días hábiles)
4. **Define hora límite** (considera horario laboral)
5. **Guarda** la configuración
6. **Repite** para cada día de la semana según necesites

#### **Para Solicitudes SODI:**
1. **Accede** a "Plazo Máximo de Envío de Solicitudes SODI"
2. **Selecciona la instalación** que quieres configurar
3. **Establece días de anticipación** (generalmente más que solicitudes regulares)
4. **Define hora límite** (considera coordinación adicional)
5. **Guarda** la configuración
6. **Repite** para cada instalación según sus requisitos

### **¿Cómo gestionar catálogos (Empresas, Tipos, etc.)?**

#### **Para agregar nuevos elementos:**
1. **Accede** al mantenedor correspondiente
2. **Haz clic** en "Agregar [Tipo de elemento]"
3. **Completa información** obligatoria:
   - Nombre/Descripción
   - Código (si aplica)
   - Ícono (si aplica)
4. **Guarda** el nuevo elemento
5. **Verifica** que aparezca en la lista

#### **Para editar elementos existentes:**
1. **Localiza** el elemento en la tabla
2. **Haz clic** en el botón "Editar"
3. **Modifica** la información necesaria
4. **Guarda** los cambios
5. **Confirma** que los cambios se reflejen

#### **Para activar/desactivar elementos:**
1. **Localiza** el elemento en la tabla
2. **Cambia** el estado según necesites
3. **Considera** el impacto en solicitudes existentes
4. **Guarda** el cambio de estado

### **¿Cómo configurar equipos por instalación?**

1. **Accede** a "Equipos a Intervenir por Instalación"
2. **Selecciona** la instalación GM en el dropdown
3. **Revisa** equipos actuales (si los hay)
4. **Para agregar equipo**:
   - Haz clic en "Agregar Equipo"
   - Completa nombre del equipo
   - Selecciona tipo de equipo
   - Guarda
5. **Para editar equipo**:
   - Haz clic en "Editar" del equipo
   - Modifica información
   - Guarda cambios
6. **Para activar/desactivar**:
   - Cambia estado del equipo
   - Considera impacto en solicitudes

---

## 💡 Mejores Prácticas

### **Para configuración de plazos:**
- **Considera días hábiles**: Los plazos se calculan en días hábiles
- **Horarios realistas**: Define horas que permitan procesamiento adecuado
- **Diferencia SODI**: Plazos SODI suelen ser más estrictos
- **Revisa periódicamente**: Ajusta según experiencia operativa

### **Para gestión de catálogos:**
- **Nombres claros**: Usa nombres descriptivos y consistentes
- **Códigos únicos**: Evita duplicados en códigos/abreviaturas
- **Estados coherentes**: Solo desactiva si no afecta solicitudes existentes
- **Documentación**: Mantén registro de cambios importantes

### **Para equipos por instalación:**
- **Nombres específicos**: Identifica claramente cada equipo
- **Tipos correctos**: Asigna el tipo de equipo apropiado
- **Mantén actualizado**: Agrega/quita equipos según cambios reales
- **Estados coherentes**: Desactiva equipos fuera de servicio

### **Para coordinación con usuarios:**
- **Comunica cambios**: Informa a usuarios sobre cambios en plazos
- **Capacita**: Asegúrate de que entiendan las nuevas configuraciones
- **Monitorea impacto**: Revisa cómo afectan los cambios al flujo de trabajo
- **Ajusta según feedback**: Modifica configuraciones basándote en experiencia

---

## ⚠️ Consideraciones Importantes

### **Impacto de cambios:**
- **Plazos**: Afectan cuándo se pueden crear nuevas solicitudes
- **Catálogos**: Cambios se reflejan inmediatamente en formularios
- **Estados**: Desactivar elementos puede afectar funcionalidad
- **Equipos**: Cambios afectan opciones disponibles por instalación

### **Validaciones del sistema:**
- **Campos obligatorios**: El sistema no permite guardar sin información esencial
- **Duplicados**: Previene códigos o nombres duplicados
- **Dependencias**: Considera relaciones entre elementos (ej: equipos y tipos)
- **Estados**: Valida que los cambios de estado sean coherentes

### **Respaldo y recuperación:**
- **Cambios permanentes**: Las modificaciones se guardan inmediatamente
- **Sin historial automático**: Mantén registro manual de cambios importantes
- **Prueba cambios**: Verifica impacto antes de implementar en producción
- **Planifica cambios**: Coordina modificaciones con usuarios del sistema

---

## ❓ Preguntas Frecuentes

### **¿Qué pasa si cambio un plazo de envío?**
El nuevo plazo se aplica inmediatamente a todas las nuevas solicitudes. Las solicitudes existentes no se ven afectadas.

### **¿Puedo eliminar empresas o instalaciones?**
Generalmente no se eliminan, sino que se desactivan para mantener integridad de solicitudes existentes.

### **¿Cómo afectan los cambios a solicitudes en proceso?**
Los cambios en catálogos no afectan solicitudes ya creadas, solo aplican a nuevas solicitudes.

### **¿Qué es la diferencia entre plazos regulares y SODI?**
Los plazos SODI son específicos para solicitudes que requieren coordinación especial y suelen ser más estrictos.

### **¿Puedo tener diferentes equipos por instalación?**
Sí, cada instalación GM puede tener su propia lista de equipos disponibles para intervención.

### **¿Cómo sé si un cambio afectará el sistema?**
Los cambios en mantenedores se reflejan inmediatamente en formularios y opciones disponibles para usuarios.

### **¿Quién puede acceder a los mantenedores?**
Generalmente solo usuarios con permisos administrativos pueden modificar mantenedores.

### **¿Se pueden restaurar configuraciones anteriores?**
El sistema no mantiene historial automático, por lo que es importante documentar cambios importantes.

---

*Manual de Usuario - Vista de Mantenedores*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*