# 👥 Manual de Usuario - Gestión de Permisos de Usuarios

## 📖 ¿Qué es la Gestión de Permisos de Usuarios?

La **Gestión de Permisos de Usuarios** es el centro de administración donde puedes controlar qué usuarios tienen acceso al sistema y qué funciones pueden realizar. Es tu herramienta para asignar roles, gestionar instalaciones por usuario y mantener la seguridad del sistema.

---

## 🎯 ¿Para qué sirve la gestión de usuarios?

### **Propósito Principal:**
Te permite **controlar el acceso** al sistema definiendo qué usuarios pueden ingresar y qué acciones pueden realizar según su rol y las instalaciones que tienen asignadas.

### **¿Qué puedes gestionar?**
- **Usuarios del sistema**: Agregar, editar y desvincular usuarios
- **Roles y permisos**: Asignar funciones específicas a cada usuario
- **Instalaciones**: Definir a qué instalaciones GM tiene acceso cada usuario
- **Búsqueda**: Localizar usuarios rápidamente por nombre

---

## 🏗️ Estructura de la Vista

### **Matriz de Permisos:**
La vista está organizada como una **tabla matriz** donde cada fila representa un usuario y cada columna representa un permiso o función.

### **Elementos principales:**

#### **1. 🔍 Barra de Búsqueda**
- **Función**: Buscar usuarios por nombre en tiempo real
- **Ubicación**: Parte superior izquierda
- **Uso**: Escribe el nombre del usuario para filtrar la lista

#### **2. ➕ Botón Nuevo Usuario**
- **Función**: Agregar nuevos usuarios al sistema
- **Ubicación**: Parte superior izquierda
- **Acción**: Abre modal para registrar nuevo usuario

#### **3. 📊 Matriz de Permisos**
Tabla con las siguientes columnas:

- **Usuario**: Nombre del usuario registrado
- **Instalaciones**: Gestión de instalaciones asignadas
- **Desvincular**: Eliminar usuario del sistema
- **Control del Sitio**: Permiso para gestión administrativa
- **Solicitante**: Permiso para crear solicitudes
- **Administrador**: Permiso para gestión completa
- **Despachador**: Permiso para coordinación operativa

---

## 🔐 Tipos de Permisos Disponibles

### **1. 🔧 Control del Sitio**
- **Color**: Gris oscuro
- **Propósito**: Acceso a funciones administrativas del sistema
- **Incluye**: Gestión de configuraciones, mantenedores, usuarios
- **Quién lo necesita**: Administradores de sistema, personal TI

### **2. 👤 Solicitante**
- **Color**: Azul
- **Propósito**: Crear y gestionar solicitudes propias
- **Incluye**: Nueva solicitud, seguimiento, edición de solicitudes devueltas
- **Quién lo necesita**: Personal operativo que solicita trabajos

### **3. 🛡️ Administrador**
- **Color**: Verde
- **Propósito**: Gestión completa de solicitudes del sistema
- **Incluye**: Aprobar, rechazar, gestionar todas las solicitudes
- **Quién lo necesita**: Supervisores, coordinadores, jefes de área

### **4. 📋 Despachador**
- **Color**: Amarillo/Naranja
- **Propósito**: Coordinación operativa y seguimiento de trabajos
- **Incluye**: Programar, ejecutar, finalizar trabajos
- **Quién lo necesita**: Personal de despacho, coordinadores operativos

---

## 🏢 Gestión de Instalaciones por Usuario

### **¿Qué son las instalaciones asignadas?**
Cada usuario puede tener acceso a **instalaciones específicas** de GM, lo que determina:
- Qué instalaciones puede ver en sus solicitudes
- Dónde puede crear o gestionar trabajos
- Qué información operativa puede acceder

### **Instalaciones disponibles:**
- **🌞 Santiago Solar**: Instalación solar fotovoltaica
- **🏭 Nueva Renca**: Instalación térmica
- **🏭 Los Vientos**: Instalación térmica  
- **🏭 Santa Lidia**: Instalación térmica
- **🌞 CEME1**: Instalación solar fotovoltaica

### **¿Cómo funciona la asignación?**
- **Contador**: Cada usuario muestra cuántas instalaciones tiene asignadas
- **Modal de gestión**: Permite seleccionar/deseleccionar instalaciones
- **Impacto**: Determina las opciones disponibles en formularios

---

## 📋 Funcionalidades Principales

### **🔍 Búsqueda de Usuarios**

#### **¿Cómo funciona?**
- **Búsqueda en tiempo real**: Filtra mientras escribes
- **Por nombre**: Busca en el nombre completo del usuario
- **Instantánea**: Resultados inmediatos sin necesidad de presionar Enter

#### **¿Cuándo usar?**
- Cuando tienes muchos usuarios registrados
- Para localizar rápidamente un usuario específico
- Para verificar si un usuario ya está registrado

### **👤 Gestión de Permisos**

#### **¿Cómo asignar/quitar permisos?**
1. **Localiza** al usuario en la tabla
2. **Haz clic** en la columna del permiso que quieres cambiar
3. **Observa el cambio visual**:
   - ✅ **Verde con check**: Permiso activado
   - ❌ **Gris con X**: Permiso desactivado
4. **El cambio se guarda** automáticamente

#### **Estados visuales:**
- **✅ Activado**: Ícono verde con check (fa-check-circle)
- **❌ Desactivado**: Ícono gris con X (fa-times-circle)

### **🏢 Gestión de Instalaciones**

#### **¿Cómo asignar instalaciones?**
1. **Localiza** al usuario en la tabla
2. **Haz clic** en el botón de instalaciones (muestra el contador)
3. **En el modal**:
   - Selecciona/deselecciona instalaciones con checkboxes
   - Ve las instalaciones con sus íconos de tecnología
4. **Guarda** los cambios
5. **Verifica** que el contador se actualice

#### **Información del modal:**
- **Título dinámico**: Muestra el nombre del usuario
- **Checkboxes**: Una por cada instalación GM
- **Íconos**: Identifican el tipo de tecnología
- **Contador actualizado**: Se refleja inmediatamente

### **🗑️ Desvinculación de Usuarios**

#### **¿Cómo desvincular un usuario?**
1. **Localiza** al usuario en la tabla
2. **Haz clic** en el ícono de papelera (🗑️)
3. **Confirma** la acción en el diálogo
4. **El usuario desaparece** de la tabla

#### **⚠️ Consideraciones importantes:**
- **Acción permanente**: No se puede deshacer fácilmente
- **Confirmación obligatoria**: Sistema solicita confirmación
- **Impacto**: Usuario pierde acceso inmediatamente

---

## 📚 Guías Paso a Paso

### **¿Cómo agregar un nuevo usuario?**

1. **Haz clic** en el botón "➕ Nuevo Usuario"
2. **Completa** la información del usuario:
   - Nombre completo
   - Email/Login
   - Datos de contacto (si aplica)
3. **Guarda** el nuevo usuario
4. **Asigna permisos** haciendo clic en las columnas correspondientes
5. **Configura instalaciones** usando el botón de instalaciones
6. **Verifica** que el usuario aparezca en la tabla

### **¿Cómo configurar permisos para un usuario existente?**

#### **Paso 1: Localizar usuario**
- Usa la búsqueda si hay muchos usuarios
- Identifica la fila del usuario objetivo

#### **Paso 2: Asignar roles**
- **Para Solicitante**: Haz clic en columna azul
- **Para Administrador**: Haz clic en columna verde  
- **Para Despachador**: Haz clic en columna amarilla
- **Para Control del Sitio**: Haz clic en columna gris

#### **Paso 3: Configurar instalaciones**
1. Haz clic en el botón de instalaciones
2. Selecciona las instalaciones apropiadas
3. Guarda los cambios
4. Verifica el contador actualizado

#### **Paso 4: Verificar configuración**
- Confirma que los íconos muestren el estado correcto
- Verifica que el contador de instalaciones sea correcto
- Prueba el acceso del usuario si es posible

### **¿Cómo gestionar usuarios masivamente?**

#### **Para múltiples usuarios:**
1. **Usa la búsqueda** para filtrar grupos de usuarios
2. **Configura uno por uno** los permisos necesarios
3. **Mantén consistencia** en roles similares
4. **Documenta** los cambios realizados

#### **Para roles estándar:**
- **Solicitante básico**: Solo permiso de Solicitante + instalaciones específicas
- **Administrador completo**: Administrador + Control del Sitio + todas las instalaciones
- **Despachador operativo**: Despachador + Solicitante + instalaciones operativas

---

## 💡 Mejores Prácticas

### **Para asignación de permisos:**
- **Principio de menor privilegio**: Asigna solo los permisos necesarios
- **Roles coherentes**: Mantén consistencia entre usuarios similares
- **Revisión periódica**: Verifica permisos regularmente
- **Documentación**: Mantén registro de cambios importantes

### **Para gestión de instalaciones:**
- **Asignación específica**: Solo instalaciones que el usuario realmente gestiona
- **Actualización oportuna**: Modifica cuando cambien responsabilidades
- **Verificación**: Confirma que las asignaciones sean correctas
- **Impacto operativo**: Considera cómo afecta el trabajo diario

### **Para búsqueda y organización:**
- **Nombres consistentes**: Usa formato estándar para nombres
- **Búsqueda eficiente**: Utiliza la función de búsqueda para listas largas
- **Orden lógico**: Organiza usuarios por área o función si es posible
- **Limpieza regular**: Remueve usuarios inactivos periódicamente

### **Para seguridad del sistema:**
- **Acceso controlado**: Solo administradores deben gestionar permisos
- **Cambios documentados**: Registra quién hizo qué cambios
- **Verificación**: Confirma que los cambios funcionen correctamente
- **Respaldo**: Mantén registro de configuraciones importantes

---

## ⚠️ Consideraciones Importantes

### **Impacto de cambios de permisos:**
- **Inmediato**: Los cambios se aplican de inmediato
- **Sesiones activas**: Pueden requerir que el usuario vuelva a iniciar sesión
- **Funcionalidades**: Cambios afectan qué puede hacer el usuario
- **Instalaciones**: Determina qué información puede ver

### **Combinaciones de permisos:**
- **Múltiples roles**: Un usuario puede tener varios permisos
- **Complementarios**: Algunos roles se complementan (ej: Solicitante + Despachador)
- **Jerárquicos**: Administrador generalmente incluye otras funciones
- **Específicos**: Control del Sitio es independiente de roles operativos

### **Gestión de instalaciones:**
- **Filtrado automático**: Solo ve instalaciones asignadas
- **Formularios**: Opciones limitadas a sus instalaciones
- **Reportes**: Información filtrada por instalaciones
- **Coordinación**: Importante para trabajo en equipo

### **Seguridad y acceso:**
- **Principio de menor privilegio**: Solo permisos necesarios
- **Revisión regular**: Verificar permisos periódicamente
- **Cambios controlados**: Solo personal autorizado modifica permisos
- **Trazabilidad**: Mantener registro de cambios

---

## 🔄 Flujo Típico de Gestión

### **Para nuevo empleado:**
1. **Crear usuario** con información básica
2. **Asignar rol principal** según función
3. **Configurar instalaciones** según responsabilidades
4. **Verificar acceso** con pruebas básicas
5. **Capacitar** en uso del sistema

### **Para cambio de rol:**
1. **Evaluar nuevas responsabilidades**
2. **Modificar permisos** según nuevo rol
3. **Actualizar instalaciones** si es necesario
4. **Verificar** que el acceso sea correcto
5. **Informar** al usuario sobre cambios

### **Para usuario inactivo:**
1. **Evaluar** si sigue siendo necesario
2. **Desactivar permisos** temporalmente o
3. **Desvincular** si ya no es necesario
4. **Documentar** la razón del cambio
5. **Verificar** que no afecte operaciones

---

## ❓ Preguntas Frecuentes

### **¿Puede un usuario tener múltiples roles?**
Sí, un usuario puede tener varios permisos activos simultáneamente. Por ejemplo, puede ser Solicitante y Despachador al mismo tiempo.

### **¿Qué pasa si quito todos los permisos a un usuario?**
El usuario podrá iniciar sesión pero no tendrá acceso a ninguna funcionalidad del sistema. Es recomendable desvincular en lugar de dejar sin permisos.

### **¿Cómo afectan las instalaciones asignadas?**
Las instalaciones determinan qué opciones ve el usuario en formularios y qué información puede acceder. Solo verá datos de sus instalaciones asignadas.

### **¿Se pueden restaurar permisos después de desvincular?**
La desvinculación elimina al usuario de la tabla. Para restaurar, necesitarías agregarlo nuevamente como usuario nuevo.

### **¿Los cambios de permisos requieren reiniciar sesión?**
Depende del sistema, pero generalmente los cambios se aplican inmediatamente o requieren que el usuario actualice la página.

### **¿Quién puede gestionar permisos de usuarios?**
Generalmente solo usuarios con permisos de "Control del Sitio" o "Administrador" pueden gestionar permisos de otros usuarios.

### **¿Hay límite en el número de instalaciones por usuario?**
No hay límite técnico, pero es recomendable asignar solo las instalaciones que el usuario realmente gestiona.

### **¿Qué significa el contador de instalaciones?**
El número en el botón de instalaciones indica cuántas instalaciones GM tiene asignadas ese usuario.

---

## 📊 Ejemplos de Configuraciones Típicas

### **👤 Solicitante Básico:**
- **Permisos**: ✅ Solicitante
- **Instalaciones**: 1-2 instalaciones específicas de su área
- **Uso**: Crear solicitudes para trabajos en sus instalaciones

### **🛡️ Administrador de Área:**
- **Permisos**: ✅ Administrador, ✅ Solicitante
- **Instalaciones**: Todas las instalaciones de su área
- **Uso**: Gestionar solicitudes de su área, aprobar trabajos

### **📋 Despachador Operativo:**
- **Permisos**: ✅ Despachador, ✅ Solicitante
- **Instalaciones**: Todas las instalaciones GM
- **Uso**: Coordinar trabajos, programar actividades

### **🔧 Administrador de Sistema:**
- **Permisos**: ✅ Control del Sitio, ✅ Administrador, ✅ Solicitante
- **Instalaciones**: Todas las instalaciones GM
- **Uso**: Gestión completa del sistema, configuraciones, usuarios

### **👥 Supervisor General:**
- **Permisos**: ✅ Administrador, ✅ Despachador, ✅ Solicitante, ✅ Control del Sitio
- **Instalaciones**: Todas las instalaciones GM
- **Uso**: Acceso completo para supervisión general

---

*Manual de Usuario - Gestión de Permisos de Usuarios*  
*Sistema de Gestión de Solicitudes de Intervención Eléctrica*  
*Última actualización: Diciembre 2024*