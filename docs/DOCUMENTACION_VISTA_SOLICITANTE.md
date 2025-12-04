# 📋 Manual de Usuario - Vista del Solicitante

## 📖 ¿Qué es la Vista del Solicitante?

La **Vista del Solicitante** es tu espacio personal para gestionar todas las solicitudes de intervención en instalaciones eléctricas que has creado. Desde aquí puedes crear nuevas solicitudes, revisar el estado de las existentes, editarlas cuando sea necesario y obtener información estadística sobre tu gestión.

---

## 🎯 ¿Qué puedes hacer aquí?

### **Acciones Principales**
- **Crear solicitudes nuevas** de intervención eléctrica
- **Revisar el estado** de todas tus solicitudes
- **Editar solicitudes** que han sido devueltas para corrección
- **Clonar solicitudes** existentes para crear nuevas similares
- **Consultar la bitácora** de cambios de cada solicitud
- **Filtrar y buscar** solicitudes específicas
- **Descargar reportes** en Excel de tus solicitudes
- **Monitorear indicadores** de tu gestión

### **¿Quién puede usar esta vista?**
- **Solicitantes**: Usuarios que crean solicitudes de intervención
- **Personal autorizado**: Con permisos para revisar solicitudes del solicitante

---

## 📊 Paneles de Información

La vista está organizada en secciones que te permiten acceder rápidamente a la información más importante:

---

### **1. Panel de Indicadores Actuales**

Este panel te muestra un resumen visual de todas tus solicitudes que están actualmente en proceso:

#### **¿Qué información puedes ver?**
- **Pendiente** (Amarillo): Solicitudes que acabas de crear y están esperando revisión inicial
- **Por Aprobar** (Azul): Solicitudes que están esperando la aprobación de los aprobadores designados
- **En Análisis** (Azul claro): Solicitudes que están siendo analizadas técnicamente por el equipo
- **Admin. Gestionando** (Azul claro): Solicitudes que están siendo procesadas por el administrador
- **Programada** (Verde): Solicitudes aprobadas y programadas para su ejecución
- **Vigente** (Verde): Solicitudes que están actualmente en ejecución
- **Extendida** (Gris oscuro): Solicitudes cuyo periodo de ejecución ha sido extendido
- **Suspendida** (Gris oscuro): Solicitudes que han sido pausadas temporalmente

#### **¿Cómo funciona?**
- Los números se actualizan automáticamente cada vez que ingresas a la vista
- Puedes hacer clic en el ícono de información (ℹ️) junto a cada indicador para ver más detalles
- Los colores te ayudan a identificar rápidamente el estado de tus solicitudes

### **2. Panel de Estadísticas Históricas**

Este panel te permite revisar el historial de todas tus solicitudes por año:

#### **¿Qué información puedes consultar?**
- **Total Solicitudes Generadas**: Cuántas solicitudes has creado en el año
- **Total Devueltas**: Solicitudes que te fueron devueltas para que las corrijas
- **Total Anuladas**: Solicitudes que fueron marcadas como "No Solicitada" (estado finalizado)
- **Total En Proceso**: Solicitudes que aún están siendo procesadas (incluye Suspendidas)
- **Total Vigentes**: Solicitudes que están actualmente activas
- **Total Extendidas**: Solicitudes cuyo periodo fue extendido
- **Total Suspendidas**: Solicitudes que fueron pausadas temporalmente (consideradas en proceso)
- **Total No Solicitadas**: Solicitudes que fueron anuladas durante el proceso
- **Total Rechazadas**: Solicitudes que no fueron aprobadas
- **Total Finalizadas**: Solicitudes que completaron todo su ciclo exitosamente

#### **¿Cómo usarlo?**
- Selecciona el año que quieres revisar en el menú desplegable
- Los números se actualizan automáticamente para mostrar solo las solicitudes de ese año
- La información se basa en la fecha en de Inicio Programada de cada solicitud

---

## 🔍 ¿Cómo buscar y filtrar tus solicitudes?

### **Filtros Detallados**

Puedes usar filtros específicos para encontrar exactamente las solicitudes que necesitas:

#### **¿Qué filtros están disponibles?**

1. **Por Instalación GM**
   - Puedes seleccionar una o varias instalaciones: Santiago Solar, Nueva Renca, Los Vientos, Santa Lidia, CEME1
   - Útil cuando trabajas con instalaciones específicas
   - Puedes escribir para buscar rápidamente la instalación que necesitas

2. **Por Equipos a Intervenir**
   - Escribe parte del nombre del equipo que buscas
   - El sistema encontrará todas las solicitudes que contengan ese texto
   - No necesitas escribir el nombre completo

3. **Por Tipo de Intervención**
   - Filtra entre "Intervención" o "Desconexión"
   - Te ayuda a separar los diferentes tipos de trabajo

4. **Por Nivel de Riesgo**
   - Filtra por "Bajo", "Medio" o "Alto"
   - Útil para priorizar solicitudes según su criticidad

5. **Por SODI**
   - Filtra solicitudes que requieren o no SODI (Solicitud de Desconexión de Instalación)
   - Selecciona "Sí" o "No" según lo que necesites

6. **Por Rango de Fechas**
   - Define una fecha de inicio y una fecha de fin
   - Te muestra solo las solicitudes programadas en ese periodo

#### **¿Cómo usar los filtros?**
- Haz clic en "Mostrar/Ocultar filtro" para ver todas las opciones
- Completa los campos que necesites (no es obligatorio usar todos)
- Haz clic en "Filtrar" para aplicar los criterios
- Usa "Limpiar filtro" para volver a ver todas las solicitudes

### **Filtros Rápidos**

Para acceso rápido, tienes tres botones que filtran por estado:
- **En Proceso** (seleccionado por defecto): Muestra solo solicitudes que están siendo procesadas
- **Finalizadas**: Muestra solo solicitudes que ya terminaron su ciclo
- **Todas**: Muestra todas tus solicitudes sin filtro de estado

---

## 📋 Tu Lista de Solicitudes

### **¿Qué información puedes ver en la tabla?**

Cada fila de la tabla representa una de tus solicitudes y contiene la siguiente información:

| Información | ¿Qué significa? |
|-------------|----------------|
| **Acciones** | Botones para realizar acciones sobre la solicitud |
| **ID** | Número único que identifica tu solicitud en el sistema |
| **ID CEN** | Código asignado por el Centro de Control |
| **Tipo de intervención** | Si es una "Intervención" o "Desconexión" |
| **Instalación GM** | En qué instalación se realizará el trabajo |
| **Descripción del trabajo** | Qué trabajo específico se va a realizar |
| **Condiciones requeridas** | Condiciones especiales necesarias para el trabajo |
| **Empresa solicitante** | Tu empresa (quien solicita) |
| **Empresa receptora** | La empresa que recibirá la intervención |
| **Fecha programada de inicio** | Cuándo está programado que comience el trabajo |
| **Fecha programada de fin** | Cuándo está programado que termine el trabajo |
| **Aplica SODI** | Si requiere Solicitud de Desconexión de Instalación |
| **Estado** | En qué etapa del proceso se encuentra (con colores para fácil identificación) |

### **¿Qué acciones puedes realizar con cada solicitud?**

En la columna "Acciones" encontrarás un menú con diferentes opciones según el estado de tu solicitud:

#### **Si tu solicitud está "Devuelta" (puedes editarla):**
- **Editar** 📝: Modificar la información de la solicitud para corregir los puntos señalados
- **Ver** 👁️: Consultar todos los detalles de la solicitud sin poder modificarla
- **Clonar** 📋: Crear una nueva solicitud copiando los datos de esta (útil para solicitudes similares)
- **Gestionar** ➡️: Enviar la solicitud corregida de vuelta al proceso de aprobación
- **Bitácora** 📊: Ver el historial completo de cambios y comentarios de la solicitud

#### **Si tu solicitud está en otros estados (solo consulta):**
- **Ver** 👁️: Consultar todos los detalles de la solicitud
- **Clonar** 📋: Crear una nueva solicitud usando esta como plantilla
- **Bitácora** 📊: Revisar el historial de cambios y el progreso de la solicitud

#### **¿Cuándo puedes editar una solicitud?**
Solo puedes editar solicitudes que han sido **devueltas** para corrección. Una vez que una solicitud entra en el proceso de aprobación y análisis, ya no se puede modificar para mantener la integridad del proceso.

### **¿Cómo navegar en la tabla?**

#### **Paginación**
- Por defecto se muestran 10 solicitudes por página
- Puedes cambiar a mostrar 25, 50 o todas las solicitudes
- Usa los botones "Anterior" y "Siguiente" para navegar entre páginas

#### **Ordenamiento**
- Haz clic en cualquier encabezado de columna para ordenar por ese criterio
- Las solicitudes se ordenan inicialmente por fecha de inicio programada
- La columna de "Acciones" no se puede ordenar

#### **Búsqueda rápida**
- Usa el campo "Buscar" para encontrar rápidamente cualquier solicitud
- Puedes buscar por cualquier información visible en la tabla
- La búsqueda funciona en tiempo real mientras escribes

---

## 💼 Botones de Acción Principal

### **¿Qué acciones principales puedes realizar?**

En la parte superior de la vista encontrarás botones para las acciones más importantes:

#### **Nueva Solicitud**
- **¿Qué hace?**: Abre un formulario para crear una nueva solicitud de intervención
- **¿Cuándo usarlo?**: Cuando necesites solicitar una nueva intervención en cualquier instalación
- **Proceso**: Te guiará paso a paso para completar toda la información necesaria

#### **Descargar Excel**
- **¿Qué hace?**: Genera un archivo Excel con todas tus solicitudes
- **¿Cuándo usarlo?**: Para crear reportes, hacer análisis o tener un respaldo de tu información
- **Contenido**: Incluye toda la información visible en la tabla con los filtros aplicados

---

## 🔄 ¿Cómo funciona el flujo de una solicitud?

### **Estados por los que pasa tu solicitud:**

1. **Pendiente** → Acabas de crear la solicitud, está esperando revisión inicial
2. **Por Aprobar** → Está siendo revisada por los aprobadores que designaste
3. **En Análisis** → El equipo técnico está analizando la viabilidad
4. **Admin. Gestionando** → El administrador está procesando los detalles
5. **Programada** → Ya fue aprobada y tiene fechas definidas para su ejecución
6. **Vigente** → Está actualmente en ejecución
7. **Finalizada** → Se completó exitosamente

### **Estados especiales:**
- **Devuelta** → Te la devolvieron para que corrijas algo (puedes editarla)
- **Extendida** → Se extendió el periodo de ejecución
- **Suspendida** → Se pausó temporalmente (sigue en proceso)
- **Rechazada** → No fue aprobada (finalizada)
- **No Solicitada** → Se anuló durante el proceso (finalizada)

### **¿Qué significa cada color?**
- **Amarillo**: Solicitudes que necesitan atención o están pendientes
- **Azul**: Solicitudes en proceso de revisión o aprobación
- **Verde**: Solicitudes aprobadas y en ejecución
- **Rojo**: Solicitudes con problemas o rechazadas
- **Gris**: Solicitudes pausadas, extendidas o finalizadas

---

## 📚 Guías Paso a Paso

### **¿Cómo crear una nueva solicitud?**
1. Haz clic en el botón "Nueva Solicitud"
2. Completa toda la información requerida en el formulario
3. Revisa que todos los datos estén correctos
4. Haz clic en "Guardar"
5. Tu solicitud aparecerá en la tabla con estado "Pendiente"

### **¿Cómo corregir una solicitud devuelta?**
1. Busca tu solicitud con estado "Devuelta" en la tabla
2. Haz clic en el menú de acciones (tres puntos) de esa solicitud
3. Selecciona "Editar"
4. Modifica los campos que necesiten corrección
5. Guarda los cambios
6. Usa "Gestionar" para enviarla de vuelta al proceso

### **¿Cómo encontrar solicitudes específicas?**
1. **Para búsqueda rápida**: Usa el campo "Buscar" y escribe cualquier dato de la solicitud
2. **Para filtros específicos**: 
   - Haz clic en "Mostrar/Ocultar filtro"
   - Completa los criterios que necesites
   - Haz clic en "Filtrar"
3. **Para filtros rápidos**: Usa los botones "En Proceso", "Finalizadas" o "Todas"

### **¿Cómo revisar el progreso de una solicitud?**
1. Encuentra tu solicitud en la tabla
2. Haz clic en el menú de acciones
3. Selecciona "Bitácora"
4. Podrás ver todo el historial de cambios y comentarios

### **¿Cómo crear solicitudes similares rápidamente?**
1. Encuentra una solicitud similar a la que quieres crear
2. Haz clic en el menú de acciones
3. Selecciona "Clonar"
4. Se abrirá el formulario con los datos copiados
5. Modifica solo lo que sea diferente
6. Guarda la nueva solicitud

---

## ❓ Preguntas Frecuentes

### **¿Por qué no puedo editar mi solicitud?**
Solo puedes editar solicitudes que estén en estado "Devuelta". Una vez que una solicitud entra en el proceso de aprobación, ya no se puede modificar para mantener la integridad del proceso.

### **¿Qué significa que mi solicitud está "Por Aprobar"?**
Significa que está siendo revisada por las personas que designaste como aprobadores cuando creaste la solicitud. Ellos pueden aprobarla, rechazarla o devolverte para que hagas correcciones.

### **¿Cómo sé si mi solicitud tiene problemas?**
Revisa el estado y los colores:
- **Rojo** (Devuelta/Rechazada): Hay problemas que necesitas atender
- **Amarillo** (Pendiente): Está esperando revisión
- **Azul** (Por Aprobar/En Análisis): Está siendo procesada normalmente
- **Verde** (Programada/Vigente): Todo va bien

### **¿Puedo ver solicitudes de otros solicitantes?**
No, en esta vista solo puedes ver las solicitudes que tú has creado. Cada solicitante tiene acceso únicamente a sus propias solicitudes.

### **¿Qué pasa si necesito ayuda con una solicitud?**
Usa la opción "Bitácora" para ver el historial completo y los comentarios. Si necesitas más ayuda, contacta al administrador del sistema.

### **¿Por qué algunos indicadores muestran cero?**
Es normal si no tienes solicitudes en esos estados específicos. Los indicadores muestran solo tus solicitudes, no las de todo el sistema.

---

## 📝 Consejos y Mejores Prácticas

### **Para crear solicitudes efectivas:**
- Completa toda la información requerida con el mayor detalle posible
- Revisa dos veces antes de enviar
- Usa la función "Clonar" para solicitudes similares

### **Para gestionar mejor tus solicitudes:**
- Revisa regularmente el panel de indicadores
- Usa filtros para organizar tu trabajo
- Mantén un seguimiento de las solicitudes "Devueltas"

### **Para encontrar información rápidamente:**
- Usa la búsqueda rápida para encontrar solicitudes específicas
- Combina filtros para búsquedas más precisas
- Ordena las columnas según tus necesidades

---

*Manual de Usuario - Vista del Solicitante*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*
