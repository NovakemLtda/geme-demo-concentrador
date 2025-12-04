// ============================================
// DATA HELPERS - Funciones auxiliares y datos
// ============================================

// Equipos por instalación
const equiposPorInstalacion = {
    'CEME1': ['Paño 1', 'Paño 2', 'Transformador T1', 'Transformador T2', 'Sección Barra A', 'SCADA', 'Medidor M1', 'Compensador C1', 'Grupo Emergencia', 'Batería', 'Cargador', 'Telecomunicación', 'Línea L1', 'Otros', 'Sistema de Protecciones'],
    'Nueva Renca': ['Paño NR1', 'Paño NR2', 'Transformador TNR1', 'Sección Barra B', 'SCADA', 'Medidor M2', 'Compensador C2', 'Tendido Cable', 'Telecomunicación', 'Línea L2', 'Otros'],
    'Santa Lidia': ['Paño SL1', 'Paño SL2', 'Paño SL3', 'Transformador TSL1', 'Transformador TSL2', 'Sección Barra C', 'SCADA', 'Medidor M3', 'Medidor M4', 'Grupo Emergencia', 'Batería', 'Cargador', 'Telecomunicación', 'Línea L3', 'Otros'],
    'Los Vientos': ['Paño LV1', 'Transformador TLV1', 'SCADA', 'Medidor M5', 'Compensador C3', 'Telecomunicación', 'Línea L4', 'Otros'],
    'Santiago Solar': ['Paño SS1', 'Paño SS2', 'Transformador TSS1', 'SCADA', 'Medidor M6', 'Telecomunicación', 'Otros']
};

// Exponer globalmente para que esté disponible en todos los modales
window.equiposPorInstalacion = equiposPorInstalacion;

// ============================================
// FUNCIONES AUXILIARES PARA DATOS
// ============================================

// Función para obtener solicitud por ID
function obtenerSolicitud(id) {
    if (typeof solicitudesData === 'undefined') {
        console.error('solicitudesData no está definido');
        return null;
    }
    
    return solicitudesData.find(s => s.ID_REGISTRO == id);
}

// Función auxiliar para poblar select múltiple de equipos (solo lectura)
function poblarEquiposSelectMultiple(selectId, equiposString) {
    const $select = $(selectId);
    $select.empty();
    
    if (!equiposString || equiposString === '' || equiposString === '-') {
        $select.append('<option value="">No hay equipos seleccionados</option>');
        return;
    }
    
    // Separar equipos por coma
    const equipos = equiposString.split(',').map(e => e.trim()).filter(e => e !== '');
    
    if (equipos.length === 0) {
        $select.append('<option value="">No hay equipos seleccionados</option>');
        return;
    }
    
    // Agregar cada equipo como opción seleccionada
    equipos.forEach(equipo => {
        $select.append(`<option value="${equipo}" selected>${equipo}</option>`);
    });
}

// Función auxiliar para formatear fecha para input datetime-local
function formatDateTimeForInput(dateString) {
    if (!dateString) return '';
    // Asume formato "DD/MM/YYYY HH:mm" y convierte a "YYYY-MM-DDTHH:mm"
    const parts = dateString.split(' ');
    if (parts.length !== 2) return '';
    const dateParts = parts[0].split('/');
    if (dateParts.length !== 3) return '';
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${parts[1]}`;
}

// Función auxiliar para convertir fecha de DD/MM/YYYY HH:MM a YYYY-MM-DDTHH:MM
function convertirFechaParaInput(fechaStr) {
    if (!fechaStr) return '';
    
    // Formato esperado: "20/03/2025 11:00"
    const partes = fechaStr.split(' ');
    if (partes.length !== 2) return '';
    
    const fecha = partes[0].split('/');
    const hora = partes[1];
    
    if (fecha.length !== 3) return '';
    
    // Convertir a formato ISO: YYYY-MM-DDTHH:MM
    return `${fecha[2]}-${fecha[1].padStart(2, '0')}-${fecha[0].padStart(2, '0')}T${hora}`;
}

// Función para configurar visibilidad de secciones según el estado
function configurarVisibilidadVerSolicitud(estado) {
    // Esta función se puede expandir según las reglas de negocio
    console.log('Configurando visibilidad para estado:', estado);
}

// Función para poblar equipos según instalación seleccionada
function poblarEquiposPorInstalacion(selectEquipos, instalacion) {
    const select = $(selectEquipos);
    
    if (!instalacion) {
        select.prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
        return;
    }
    
    // Obtener equipos de la instalación
    const equipos = window.equiposPorInstalacion && window.equiposPorInstalacion[instalacion] 
        ? window.equiposPorInstalacion[instalacion].filter(e => e.estado === 'Activo')
        : [];
    
    // Si no hay equipos configurados, usar valores por defecto basados en los datos existentes
    const equiposPorDefecto = {
        'Santiago Solar': ['Panel Solar PS1', 'Panel Solar PS2', 'Panel Solar PS3', 'Inversor I1', 'Inversor I2', 'Inversor I3'],
        'Nueva Renca': ['Paño NR1', 'Paño NR2', 'Paño NR3', 'Paño NR4', 'Transformador TNR1'],
        'Los Vientos': ['Paño LV1', 'Paño LV2', 'Transformador TLV1', 'Aerogenerador A1', 'Aerogenerador A2', 'Aerogenerador A3', 'Aerogenerador A4'],
        'Santa Lidia': ['Paño SL1', 'Paño SL2', 'Paño SL3', 'Transformador TSL1', 'Transformador TSL2'],
        'CEME1': ['Sistema de Control', 'Sistema SCADA', 'Medidor M1', 'Medidor M2', 'Medidor M3', 'Transformador T1', 'Transformador T2', 'Transformador T3', 'Transformador T4', 'Transformador T5', 'Transformador T6', 'Barra B1', 'Barra B2', 'Barra B3', 'Barra B4', 'Línea L1', 'Línea L2', 'Torre T6']
    };
    
    let opcionesEquipos = equipos.length > 0 
        ? equipos.map(e => e.nombre)
        : (equiposPorDefecto[instalacion] || []);
    
    if (opcionesEquipos.length === 0) {
        select.prop('disabled', true).html('<option value="">No hay equipos disponibles para esta instalación</option>');
        return;
    }
    
    // Poblar select con opciones
    let html = '<option value="">Seleccione equipo(s)...</option>';
    opcionesEquipos.forEach(equipo => {
        html += `<option value="${equipo}">${equipo}</option>`;
    });
    
    select.prop('disabled', false).html(html);
}

// ============================================
// GESTIÓN DE VARIABLES GLOBALES COMPARTIDAS
// ============================================

// Variables globales para evitar conflictos entre módulos
if (typeof window.GEME_GLOBALS === 'undefined') {
    window.GEME_GLOBALS = {
        aprobadoresDisponibles: [],
        aprobadoresSeleccionados: [],
        distribucionDisponible: [],
        distribucionSeleccionada: [],
        initialized: false
    };
}

// Función para inicializar datos globales una sola vez
function initializeGlobalData() {
    if (window.GEME_GLOBALS.initialized) {
        return;
    }
    
    // Inicializar aprobadores disponibles
    window.GEME_GLOBALS.aprobadoresDisponibles = [
        {id: 1, nombre: 'Juan Pérez', cargo: 'Administrador Senior', email: 'juan.perez@empresa.com', departamento: 'Administración'},
        {id: 2, nombre: 'María González', cargo: 'Jefe de Operaciones', email: 'maria.gonzalez@empresa.com', departamento: 'Operaciones'},
        {id: 3, nombre: 'Carlos Rodríguez', cargo: 'Supervisor Técnico', email: 'carlos.rodriguez@empresa.com', departamento: 'Técnico'},
        {id: 4, nombre: 'Ana Martínez', cargo: 'Coordinadora de Seguridad', email: 'ana.martinez@empresa.com', departamento: 'Seguridad'},
        {id: 5, nombre: 'Luis Torres', cargo: 'Ingeniero de Mantenimiento', email: 'luis.torres@empresa.com', departamento: 'Mantenimiento'}
    ];
    
    // Inicializar distribución disponible
    window.GEME_GLOBALS.distribucionDisponible = [
        {id: 1, nombre: 'Equipo Operaciones', email: 'operaciones@empresa.com', tipo: 'SISTEMA', ES_USUARIO_SISTEMA: true},
        {id: 2, nombre: 'Equipo Mantenimiento', email: 'mantenimiento@empresa.com', tipo: 'SISTEMA', ES_USUARIO_SISTEMA: true},
        {id: 3, nombre: 'Cliente Externo A', email: 'cliente.a@external.com', tipo: 'EXTERNO', ES_USUARIO_SISTEMA: false},
        {id: 4, nombre: 'Cliente Externo B', email: 'cliente.b@external.com', tipo: 'EXTERNO', ES_USUARIO_SISTEMA: false}
    ];
    
    window.GEME_GLOBALS.initialized = true;
    console.log('✅ Datos globales inicializados');
}

// Exponer funciones globalmente
window.obtenerSolicitud = obtenerSolicitud;
window.poblarEquiposSelectMultiple = poblarEquiposSelectMultiple;
window.formatDateTimeForInput = formatDateTimeForInput;
window.convertirFechaParaInput = convertirFechaParaInput;
window.configurarVisibilidadVerSolicitud = configurarVisibilidadVerSolicitud;
window.poblarEquiposPorInstalacion = poblarEquiposPorInstalacion;
window.initializeGlobalData = initializeGlobalData;

// Inicializar datos al cargar
initializeGlobalData();

console.log('✅ Data Helpers cargado correctamente');
