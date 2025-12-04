# 📋 Manual de Usuario - Vista del Administrador

## 📖 ¿Qué es la Vista del Administrador?

La **Vista del Administrador** es tu centro de control para gestionar todas las solicitudes de intervención del sistema. Como administrador, tienes acceso completo a todas las solicitudes, independientemente de quién las haya creado, y puedes realizar acciones de gestión avanzadas para mantener el flujo de trabajo funcionando correctamente.

---

## 🎯 ¿Qué puedes hacer aquí?

### **Acciones Principales**
- **Gestionar todas las solicitudes** del sistema, sin importar el solicitante
- **Aprobar o rechazar** solicitudes en diferentes etapas del proceso
- **Programar intervenciones** asignando fechas y recursos
- **Monitorear el estado general** del sistema con indicadores completos
- **Filtrar y buscar** cualquier solicitud en el sistema
- **Generar reportes** completos de todas las actividades
- **Administrar el flujo** de solicitudes entre diferentes estados
- **Resolver solicitudes problemáticas** que requieren intervención administrativa

### **¿Quién puede usar esta vista?**
- **Administradores del sistema**: Personal con permisos completos de gestión
- **Supervisores**: Con autorización para revisar y gestionar solicitudes

---

## 📊 Paneles de Información

La vista está organizada para darte una visión completa del estado del sistema:

### **1. Panel de Indicadores Actuales**

Este panel te muestra un resumen visual de todas las solicitudes activas en el sistema:

#### **¿Qué información puedes ver?**
- **Pendiente** (Amarillo): Solicitudes recién creadas que necesitan revisión inicial
- **Por Aprobar** (Azul): Solicitudes esperando aprobación de aprobadores designados
- **En Análisis** (Azul claro): Solicitudes siendo analizadas técnicamente por tu equipo
- **Admin. Gestionando** (Azul claro): Solicitudes que estás procesando actualmente
- **Programada** (Verde): Solicitudes aprobadas y programadas para ejecución
- **Vigente** (Verde): Solicitudes que están actualmente en ejecución
- **Extendida** (Gris oscuro): Solicitudes cuyo periodo de ejecución ha sido extendido
- **Suspendida** (Gris oscuro): Solicitudes que has pausado temporalmente

#### **¿Cómo funciona?**
- Los números se actualizan automáticamente cada vez que ingresas a la vista
- Incluye solicitudes de todos los solicitantes del sistema
- Puedes hacer clic en el ícono de información (ℹ️) para ver detalles de cada indicador
- Los colores te ayudan a priorizar tu trabajo diario

### **2. Panel de Estadísticas Históricas**

Este panel te permite revisar el historial completo del sistema por año:

#### **¿Qué información puedes consultar?**
- **Total Solicitudes Generadas**: Cuántas solicitudes se crearon en el año
- **Total SODIs**: Solicitudes específicas de tipo SODI
- **Total CEN**: Solicitudes del Centro de Control
- **Total Devueltas**: Solicitudes devueltas a solicitantes para corrección
- **Total Anuladas**: Solicitudes marcadas como "No Solicitada" (estado finalizado)
- **Total En Proceso**: Solicitudes que aún están siendo procesadas (incluye Suspendidas)
- **Total Vigentes**: Solicitudes actualmente activas
- **Total Extendidas**: Solicitudes con periodo extendido
- **Total Suspendidas**: Solicitudes pausadas temporalmente (consideradas en proceso)
- **Total Rechazadas**: Solicitudes que no fueron aprobadas
- **Total Finalizadas**: Solicitudes completadas exitosamente

#### **¿Cómo usarlo?**
- Selecciona el año que quieres revisar en el menú desplegable
- Los números se actualizan automáticamente para mostrar solo las solicitudes de ese año
- Te permite analizar tendencias y patrones del sistema
- La información se basa en la fecha de inicio programada de cada solicitud

---

## 🔍 ¿Cómo buscar y filtrar solicitudes?

### **Filtros Detallados**

Como administrador, tienes acceso a filtros avanzados para gestionar eficientemente todas las solicitudes:

#### **¿Qué filtros están disponibles?**

1. **Por ID de Solicitud**
   - Busca directamente por el número de identificación
   - Útil para localizar solicitudes específicas rápidamente
   - Acepta búsqueda parcial

2. **Por Tipo de Trabajo**
   - Filtra entre múltiples tipos: SDCN, SDCF, SICN, SICF, IL, MM, SODI
   - Puedes seleccionar uno o varios tipos simultáneamente
   - Cada tipo tiene su descripción completa para fácil identificación

3. **Por Instalación GM**
   - Selecciona una o varias instalaciones: Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1
   - Esencial para gestionar trabajos por ubicación
   - Incluye búsqueda rápida por nombre

4. **Por Estado**
   - Filtra por cualquier estado del sistema: Pendiente, Devuelta, En Análisis, etc.
   - Puedes seleccionar múltiples estados para comparaciones
   - Ideal para gestionar flujos de trabajo específicos

5. **Por Empresa Solicitante**
   - Filtra por empresa: CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa
   - Te permite gestionar solicitudes por cliente o empresa
   - Útil para análisis de carga de trabajo por empresa

6. **Por Empresa Receptora**
   - Similar al filtro anterior pero para la empresa que recibe la intervención
   - Ayuda a coordinar trabajos con empresas específicas

7. **Por Rango de Fechas**
   - Define fechas de inicio y fin para filtrar por periodo
   - Esencial para planificación y seguimiento temporal
   - Incluye fechas programadas de inicio y fin

#### **¿Cómo usar los filtros?**
- Haz clic en "Mostrar filtro" para ver todas las opciones
- Puedes combinar múltiples filtros para búsquedas muy específicas
- Usa "Limpiar filtro" para resetear todos los criterios
- Los filtros se aplican inmediatamente al cambiar los valores

### **Filtros Rápidos**

Para gestión diaria eficiente, tienes botones de acceso rápido:
- **En Proceso**: Muestra solo solicitudes que requieren tu atención
- **Finalizadas**: Muestra solicitudes completadas para revisión
- **Todas**: Vista completa sin filtros de estado

---

## 📋 Tu Panel de Control de Solicitudes

### **¿Qué información puedes ver en la tabla?**

Como administrador, tu tabla incluye información completa de todas las solicitudes:

| Información | ¿Qué significa? |
|-------------|----------------|
| **Acciones** | Menú completo de acciones administrativas |
| **ID** | Número único de identificación en el sistema |
| **ID CEN** | Código asignado por el Centro de Control |
| **Tipo de Trabajo** | Clasificación técnica del trabajo (SODI, SICN, etc.) |
| **Instalación GM** | Ubicación donde se realizará la intervención |
| **Empresa Solicitante** | Quién solicita la intervención |
| **Empresa Receptora** | Quién recibe la intervención |
| **Fecha Inicio Programada** | Cuándo está programado que comience |
| **Fecha Fin Programada** | Cuándo está programado que termine |
| **Creado Por** | Qué tipo de usuario creó la solicitud |
| **Estado** | Etapa actual en el flujo de trabajo |

### **¿Qué acciones puedes realizar con cada solicitud?**

Como administrador, tienes el conjunto más completo de acciones disponibles a través de diferentes ventanas especializadas:

#### **Acciones Administrativas Completas:**

##### **Ver Solicitud** 👁️
- **¿Qué hace?**: Te permite consultar todos los detalles de cualquier solicitud sin poder modificarla
- **¿Qué puedes ver?**: Información completa incluyendo estado, fechas programadas, empresas, equipos, características, descripciones y archivos adjuntos
- **Estados especiales**: Para solicitudes "Vigente", "Extendida", "Finalizada", "Rechazada" y "Suspendida" también puedes ver las fechas efectivas de ejecución (cuándo realmente comenzó y terminó el trabajo)
- **¿Cuándo usarla?**: Para revisar información antes de tomar decisiones o para consultas generales

##### **Nueva Solicitud** ➕
- **¿Qué hace?**: Te permite crear solicitudes directamente como administrador
- **Estado inicial**: Las solicitudes que creas se crean automáticamente en estado "Administrador Gestionando"
- **Campos obligatorios**: Debes completar tipo de trabajo, fechas programadas, empresas, instalación, equipos, características de la intervención y descripción del trabajo
- **Lógica especial**: Si seleccionas riesgo "Medio" o "Alto", debes describir obligatoriamente el riesgo. Si seleccionas afectaciones (SSCC, Protecciones, Medidores), debes describir la afectación
- **¿Cuándo usarla?**: Para solicitudes urgentes o cuando necesitas crear solicitudes en nombre de otros

##### **Editar Solicitud** 📝
- **¿Qué puedes editar?**: Solo solicitudes en estado "Administrador Gestionando" o "En Análisis"
- **Campos editables**: Todos los campos excepto el estado (que permanece como "Administrador Gestionando")
- **Campos obligatorios**: Tipo, fechas programadas, empresas, instalación, equipos, características y descripción
- **¿Cuándo usarla?**: Para corregir o completar información de solicitudes que estás gestionando

##### **Gestionar Solicitud** ⚙️
- **¿Qué hace?**: Tu herramienta principal para cambiar estados y procesar el flujo de solicitudes
- **Estados que puedes gestionar**: "Pendiente", "En Análisis" y "Administrador Gestionando"
- **Lógica por estado**:
  - **Pendiente/En Análisis**: Puedes ver toda la información pero solo algunos campos son editables
  - **Administrador Gestionando**: Tienes control total para completar información faltante
- **Campos críticos**: Cuando una solicitud está en "Administrador Gestionando", debes completar obligatoriamente el ID de solicitud, tipo de trabajo, empresas y archivos adjuntos
- **Observaciones**: Siempre debes agregar observaciones explicando cada cambio de estado
- **¿Cuándo usarla?**: Para procesar solicitudes a través de los diferentes estados del flujo

##### **Clonar Solicitud** 📋
- **¿Qué hace?**: Crea una nueva solicitud copiando información de una existente
- **Estado de la copia**: La nueva solicitud se crea en estado "Administrador Gestionando"
- **Qué se copia**: Tipo, relación SODI/CEN, empresas, instalación, equipos, características, descripciones y archivos
- **Qué se vacía**: ID de solicitud y fechas programadas (debes completarlas nuevamente)
- **¿Cuándo usarla?**: Para solicitudes similares o recurrentes, ahorrando tiempo en la captura de datos

##### **Bitácora** 📊
- **¿Qué hace?**: Te muestra el historial completo de cambios y comentarios de la solicitud
- **Información disponible**: Fechas, estados, responsables, acciones realizadas y observaciones
- **¿Cuándo usarla?**: Para entender el historial de una solicitud, resolver dudas o hacer seguimiento

#### **¿Cuándo usar cada acción?**
- **Ver**: Para consultas rápidas y revisión de información
- **Nueva**: Para solicitudes urgentes o creación directa
- **Editar**: Para corregir solicitudes que estás gestionando
- **Gestionar**: Para procesar el flujo normal de estados
- **Clonar**: Para crear solicitudes similares rápidamente
- **Bitácora**: Para revisar historial y hacer seguimiento

### **¿Cómo navegar en la tabla?**

#### **Paginación y Visualización**
- Por defecto se muestran 10 solicitudes por página
- Puedes cambiar a mostrar 25, 50 o todas las solicitudes
- Usa los controles de navegación para moverte entre páginas

#### **Ordenamiento Inteligente**
- Haz clic en cualquier encabezado para ordenar por ese criterio
- Las solicitudes se ordenan inicialmente por fecha de inicio programada
- Puedes ordenar por múltiples criterios para análisis complejos

#### **Búsqueda Global**
- El campo "Buscar" encuentra cualquier información en la tabla
- Funciona en tiempo real mientras escribes
- Busca en todos los campos visibles simultáneamente

---

## 📋 Lógicas Especiales de los Formularios

### **¿Cómo funcionan los campos inteligentes?**

Como administrador, los formularios tienen lógicas especiales que debes conocer para usarlos eficientemente:

#### **Lógica de Estados y Permisos**
- **Solicitudes nuevas**: Cuando creas una solicitud, siempre comienza en "Administrador Gestionando"
- **Solicitudes clonadas**: Las copias también se crean en "Administrador Gestionando"
- **Campos de solo lectura**: Algunos campos cambian según el estado de la solicitud

#### **Lógica de Campos Dependientes**

##### **Clasificación de Riesgo**
- **¿Cómo funciona?**: Cuando seleccionas el nivel de riesgo, el sistema activa campos adicionales
- **Riesgo Bajo**: Solo necesitas seleccionar la clasificación
- **Riesgo Medio o Alto**: Automáticamente se hace obligatorio el campo "Descripción del Riesgo"
- **¿Por qué?**: Para asegurar que los riesgos importantes estén debidamente documentados

##### **Afectaciones del Sistema**
- **¿Cómo funciona?**: Si seleccionas que la intervención afecta SSCC, Protecciones o Medidores
- **Campo activado**: Se hace obligatorio completar "Descripción de la Afectación"
- **¿Por qué?**: Para documentar el impacto específico en estos sistemas críticos

##### **Archivos Adjuntos SODI**
- **¿Cómo funciona?**: Cuando subes un archivo, puedes marcarlo como "SODI Adjunta"
- **¿Cuándo es obligatorio?**: En solicitudes que están en estado "Administrador Gestionando"
- **¿Por qué?**: Para identificar claramente los documentos SODI en el sistema

#### **Lógica de Validaciones**

##### **Fechas Programadas**
- **Validación**: La fecha de fin debe ser posterior a la fecha de inicio
- **Formato**: Debes incluir tanto fecha como hora
- **¿Por qué?**: Para asegurar cronogramas lógicos de ejecución

##### **Empresas Involucradas**
- **Validación**: Debes seleccionar tanto empresa solicitante como receptora
- **Opciones**: CDC, GM, Transelec Norte, Transelec Sur, Chilquinta, Saesa
- **¿Por qué?**: Para mantener clara la responsabilidad en cada intervención

##### **Equipos a Intervenir**
- **¿Cómo funciona?**: Sistema de búsqueda con filtrado
- **Opciones múltiples**: Algunos equipos tienen subequipos internos
- **Ejemplos**: Paños (varios), Transformadores (varios), Secciones de barra (varios)
- **¿Por qué?**: Para especificar exactamente qué se va a intervenir

#### **Lógica de Información del Sistema**

##### **Campos Automáticos**
- **ID de Registro**: Se genera automáticamente al crear la solicitud
- **Fechas de Creación/Actualización**: Se actualizan automáticamente
- **Usuario Creador**: Se registra automáticamente quién creó la solicitud
- **¿Por qué?**: Para mantener trazabilidad completa del sistema

##### **Observaciones Obligatorias**
- **¿Cuándo?**: Cada vez que cambias el estado de una solicitud
- **¿Qué incluir?**: Explicación clara del motivo del cambio
- **¿Por qué?**: Para mantener un historial comprensible de decisiones

### **¿Cómo usar eficientemente los formularios?**

#### **Al Crear Solicitudes**
1. Completa primero los campos obligatorios básicos
2. Si seleccionas riesgo medio/alto, prepara la descripción del riesgo
3. Si hay afectaciones, ten lista la descripción específica
4. Revisa que las fechas sean lógicas antes de guardar

#### **Al Gestionar Solicitudes**
1. Siempre lee las observaciones anteriores antes de hacer cambios
2. Completa los campos que se vuelven obligatorios según el estado
3. Agrega observaciones claras y específicas
4. Verifica que toda la información crítica esté completa

#### **Al Clonar Solicitudes**
1. Revisa qué información se copió y qué se vació
2. Actualiza las fechas programadas para la nueva solicitud
3. Cambia el ID de solicitud (se vacía automáticamente)
4. Verifica que la información copiada siga siendo relevante

---

## 💼 Botones de Acción Principal

### **¿Qué acciones principales puedes realizar?**

#### **Nueva Solicitud**
- **¿Qué hace?**: Te permite crear solicitudes en nombre de otros usuarios
- **¿Cuándo usarlo?**: Para solicitudes urgentes o cuando un solicitante necesita ayuda
- **Proceso**: Acceso completo al formulario con todos los campos administrativos

#### **Descargar Excel**
- **¿Qué hace?**: Genera reportes completos de todas las solicitudes
- **¿Cuándo usarlo?**: Para análisis, reportes gerenciales o respaldos
- **Contenido**: Incluye toda la información con los filtros aplicados

---

## 🔄 ¿Cómo funciona el flujo administrativo?

### **Estados que gestionas como administrador:**

1. **Pendiente** → Solicitudes nuevas que necesitan tu revisión inicial
2. **Por Aprobar** → Solicitudes en proceso de aprobación (puedes intervenir si es necesario)
3. **En Análisis** → Tu equipo está analizando la viabilidad técnica
4. **Admin. Gestionando** → Estás procesando activamente la solicitud
5. **Programada** → Has aprobado y programado la ejecución
6. **Vigente** → La intervención está en curso bajo tu supervisión
7. **Finalizada** → Has confirmado la finalización exitosa

### **Estados especiales que manejas:**
- **Devuelta** → Has devuelto la solicitud al solicitante para correcciones
- **Extendida** → Has extendido el periodo de ejecución  
- **Suspendida** → Has pausado la solicitud temporalmente (sigue en proceso)
- **Rechazada** → Has rechazado la solicitud por no cumplir criterios (finalizada)
- **No Solicitada** → Has anulado la solicitud durante el proceso (finalizada)

### **¿Qué significa cada color para tu gestión?**
- **Amarillo**: Solicitudes que necesitan tu atención inmediata
- **Azul**: Solicitudes en proceso normal que puedes supervisar
- **Verde**: Solicitudes aprobadas y ejecutándose correctamente
- **Rojo**: Solicitudes con problemas que requieren tu intervención
- **Gris**: Solicitudes pausadas o finalizadas que puedes revisar

---

## 📚 Guías Paso a Paso para Administradores

### **¿Cómo gestionar una solicitud pendiente?**
1. Localiza la solicitud con estado "Pendiente" en tu tabla
2. Haz clic en el menú de acciones de esa solicitud
3. Selecciona "Gestionar" para abrir la ventana de gestión
4. **En la ventana de gestión**:
   - Revisa el estado actual y las observaciones previas
   - Examina toda la información de la solicitud (la mayoría será de solo lectura)
   - Verifica que la información esté completa y correcta
   - Decide el próximo estado: mantener "Pendiente", cambiar a "En Análisis" o "Administrador Gestionando"
5. **Agrega observaciones obligatorias** explicando tu decisión
6. Guarda los cambios para actualizar el estado

### **¿Cómo completar una solicitud en "Administrador Gestionando"?**
1. Localiza la solicitud en estado "Administrador Gestionando"
2. Selecciona "Gestionar" o "Editar" desde el menú de acciones
3. **Completa los campos obligatorios**:
   - **ID de Solicitud**: Asigna el número CEN o SODI correspondiente
   - **Tipo de Trabajo**: Confirma la clasificación (SDCN, SDCF, SICN, SICF, IL, MM, SODI)
   - **Empresas**: Verifica solicitante y receptora
   - **Archivos Adjuntos**: Sube los documentos necesarios y marca si es "SODI Adjunta"
4. **Revisa campos dependientes**:
   - Si el riesgo es medio/alto, completa la descripción del riesgo
   - Si hay afectaciones, describe el impacto específico
5. **Agrega observaciones** explicando el progreso
6. Guarda para mantener el estado o cambia a "Programada" si está lista

### **¿Cómo manejar solicitudes problemáticas?**
1. **Para solicitudes con errores**: Usa "Devolver" con comentarios específicos
2. **Para solicitudes que no cumplen criterios**: Usa "Rechazar" con justificación
3. **Para solicitudes que necesitan pausa**: Usa "Suspender" temporalmente
4. **Para solicitudes que necesitan más tiempo**: Usa "Extender" el periodo

### **¿Cómo crear una solicitud desde cero?**
1. Haz clic en el botón "Nueva Solicitud"
2. **En la ventana de creación**:
   - El estado se establece automáticamente como "Administrador Gestionando"
   - Completa todos los campos obligatorios marcados con asterisco
   - **Campos críticos**: Tipo, fechas programadas, empresas, instalación, equipos, características y descripción
3. **Presta atención a las validaciones**:
   - Las fechas de fin deben ser posteriores a las de inicio
   - Si seleccionas riesgo medio/alto, describe el riesgo
   - Si hay afectaciones, describe el impacto
4. **Sube archivos** si es necesario y marca si son documentos SODI
5. Guarda la solicitud - quedará lista para tu gestión posterior

### **¿Cómo clonar una solicitud existente?**
1. Encuentra la solicitud que quieres usar como base
2. Selecciona "Clonar" desde el menú de acciones
3. **En la ventana de clonación**:
   - Revisa qué información se copió automáticamente
   - **Campos vaciados**: ID de solicitud y fechas programadas
   - **Campos copiados**: Tipo, empresas, instalación, equipos, características, descripciones
4. **Completa los campos vaciados**:
   - Asigna un nuevo ID de solicitud
   - Establece nuevas fechas programadas
5. **Modifica** cualquier información que sea diferente para la nueva solicitud
6. Guarda - la nueva solicitud se crea en estado "Administrador Gestionando"

### **¿Cómo generar reportes efectivos?**
1. Aplica los filtros necesarios (fechas, estados, empresas, etc.)
2. Verifica que la tabla muestre exactamente lo que necesitas
3. Haz clic en "Descargar Excel"
4. El archivo incluirá solo las solicitudes filtradas
5. Usa los datos para análisis y reportes gerenciales

### **¿Cómo supervisar el flujo general del sistema?**
1. Revisa diariamente el panel de indicadores actuales
2. Identifica cuellos de botella (muchas solicitudes en un estado)
3. Usa filtros para analizar problemas específicos
4. Revisa el panel histórico para identificar tendencias
5. Toma acciones preventivas basadas en los patrones observados

---

## ❓ Preguntas Frecuentes para Administradores

### **¿Por qué algunas solicitudes no aparecen en mi vista?**
Como administrador, deberías ver todas las solicitudes del sistema. Si no ves alguna, verifica que no tengas filtros activos que la estén ocultando.

### **¿Cuándo debo devolver una solicitud vs rechazarla?**
- **Devolver**: Cuando la solicitud tiene errores menores que el solicitante puede corregir
- **Rechazar**: Cuando la solicitud no cumple criterios fundamentales o no es viable

### **¿Cómo priorizo mi trabajo diario?**
1. Primero atiende solicitudes "Pendiente" (amarillas)
2. Luego revisa "Admin. Gestionando" (azules)
3. Supervisa "Vigente" (verdes) para asegurar ejecución correcta
4. Finalmente revisa "Suspendida" (grises) para reactivar si es posible

### **¿Qué hago si una solicitud está atascada en un estado?**
Usa la acción "Gestionar" para cambiar manualmente el estado. Siempre agrega comentarios explicando el motivo del cambio para mantener la trazabilidad.

### **¿Cómo coordino con otros roles del sistema?**
- Usa la "Bitácora" para comunicarte con solicitantes y aprobadores
- Agrega comentarios detallados en cada acción que realices
- Mantén informados a los stakeholders sobre cambios importantes

### **¿Por qué algunos indicadores históricos muestran números altos?**
Los indicadores históricos incluyen todas las solicitudes del sistema, no solo las tuyas. Esto te da una visión completa del volumen de trabajo anual.

### **¿Por qué algunos campos se vuelven obligatorios automáticamente?**
El sistema tiene lógicas inteligentes: si seleccionas riesgo medio/alto, debes describir el riesgo; si hay afectaciones, debes describirlas; si estás en "Administrador Gestionando", necesitas completar información crítica como ID y archivos.

### **¿Qué pasa si no puedo editar una solicitud?**
Solo puedes editar solicitudes en estado "Administrador Gestionando" o "En Análisis". Para otros estados, usa "Gestionar" para cambiar el estado primero, o "Ver" para consultar información.

### **¿Por qué se vacían algunos campos al clonar?**
Al clonar, se vacían automáticamente el ID de solicitud (debe ser único) y las fechas programadas (deben ser específicas para la nueva solicitud). El resto de la información se copia para ahorrarte tiempo.

### **¿Cómo sé qué campos son obligatorios en cada ventana?**
Los campos obligatorios están marcados con asterisco (*) y el sistema te impedirá guardar si no los completas. Además, algunos campos se vuelven obligatorios dependiendo de tus selecciones (como la descripción de riesgo).

---

## 📝 Consejos y Mejores Prácticas para Administradores

### **Para gestión eficiente:**
- Revisa los indicadores diariamente para identificar tendencias
- Usa filtros combinados para análisis específicos
- Mantén un flujo constante procesando solicitudes pendientes
- Documenta siempre las decisiones importantes en la bitácora

### **Para coordinación efectiva:**
- Comunícate proactivamente con solicitantes sobre cambios
- Mantén fechas de programación realistas y alcanzables
- Coordina con empresas receptoras antes de programar
- Usa la función "Clonar" para solicitudes recurrentes

### **Para análisis y reportes:**
- Combina filtros de fecha con filtros de empresa para análisis específicos
- Usa el panel histórico para identificar patrones estacionales
- Genera reportes regulares para stakeholders
- Mantén respaldos periódicos de la información crítica

### **Para resolución de problemas:**
- Siempre revisa la bitácora completa antes de tomar decisiones
- Consulta con el equipo técnico en casos complejos
- Mantén criterios consistentes para aprobaciones y rechazos
- Documenta procedimientos especiales para casos excepcionales

---

*Manual de Usuario - Vista del Administrador*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*
