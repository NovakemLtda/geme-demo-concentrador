// ============================================
// SOLICITANTE MODALS - Funciones de modales del solicitante
// ============================================

$(document).ready(function() {
    
    // ============================================
    // FUNCIONES PRINCIPALES
    // ============================================
    
    // Función unificada para ver solicitud - Solicitante
    window.verSolicitudSolic = function(solicitudId) {
        console.log('Ver solicitud (Solicitante):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        const modal = $('#modalVerSolicitante');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalVerSolicitante(solicitud);
        });
        modal.modal('show');
    };
    
    // Función para gestionar solicitudes devueltas - Solicitante
    window.gestionarSolicitudSolic = function(solicitudId) {
        console.log('Gestionar solicitud devuelta (Solicitante):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        // Solo puede gestionar solicitudes devueltas
        if (solicitud.ESTADO !== 'Devuelta') {
            alert('Solo se pueden gestionar solicitudes en estado "Devuelta".\nEstado actual: ' + solicitud.ESTADO);
            return;
        }
        
        const modal = $('#modalGestionarSolicitudSolicitante');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalGestionarSolicitante(solicitud);
        });
        modal.modal('show');
    };
    
    // Función para clonar solicitud - Solicitante
    window.clonarSolicitudSolic = function(solicitudId) {
        console.log('Clonar solicitud (Solicitante):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        const modal = $('#modalClonarSolicitudSolic');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalClonarSolic(solicitud);
        });
        modal.modal('show');
    };
    
    // Función para abrir modal de nueva solicitud - Solicitante
    window.abrirModalNuevaSolicitudSolic = function() {
        console.log('Abriendo modal nueva solicitud (Solicitante)');
        
        // Limpiar formulario
        $('#formNuevaSolicitud')[0].reset();
        $('#nuevaSolicEquipos').prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
        
        $('#modalNuevaSolicitudSolic').modal('show');
    };
    
    // Función para cargar equipos según la instalación seleccionada
    window.cargarEquiposPorInstalacion = function(instalacion, selectId) {
        const select = $(`#${selectId}`);
        
        if (!instalacion) {
            select.prop('disabled', true).html('<option value="">Primero seleccione Instalación GM</option>');
            return;
        }
        
        // Usar la función ya definida en data-helpers
        poblarEquiposPorInstalacion(select, instalacion);
    };
    
    // Función para abrir modal de editar solicitud
    window.abrirModalEditarSolic = function(solicitudId) {
        console.log('Abrir modal editar (Solicitante):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        // Solo puede editar solicitudes devueltas
        if (solicitud.ESTADO !== 'Devuelta') {
            alert('Solo se pueden editar solicitudes en estado "Devuelta".\nEstado actual: ' + solicitud.ESTADO);
            return;
        }
        
        const modal = $('#modalEditarSolicitudSolic');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalEditarSolic(solicitud);
        });
        modal.modal('show');
    };
    
    // ============================================
    // FUNCIONES AUXILIARES
    // ============================================
    
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
    
    // ============================================
    // FUNCIONES DE POBLACIÓN DE MODALES
    // ============================================
    
    // Poblar modal ver solicitante (función original completa)
    function poblarModalVerSolicitante(solicitud) {
        const modalContext = '#modalVerSolicitante';
        
        // Configurar badge y alert según el estado
        const estadoConfig = {
            'Pendiente': { badge: 'badge-warning', alert: 'alert-warning', descripcion: 'La solicitud está pendiente de revisión' },
            'Devuelta': { badge: 'badge-danger', alert: 'alert-danger', descripcion: 'La solicitud ha sido devuelta para correcciones' },
            'En Análisis': { badge: 'badge-info', alert: 'alert-info', descripcion: 'La solicitud está siendo analizada' },
            'Administrador Gestionando': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'La solicitud está siendo gestionada por el administrador' },
            'Programada': { badge: 'badge-success', alert: 'alert-success', descripcion: 'La solicitud ha sido programada' },
            'Vigente': { badge: 'badge-primary', alert: 'alert-primary', descripcion: 'El trabajo está en ejecución' },
            'Extendida': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'El trabajo ha sido extendido' },
            'Finalizada': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'El trabajo ha sido finalizado' },
            'Rechazada': { badge: 'badge-danger', alert: 'alert-danger', descripcion: 'La solicitud ha sido rechazada' },
            'Suspendida': { badge: 'badge-dark', alert: 'alert-dark', descripcion: 'El trabajo ha sido suspendido' },
            'No Solicitada': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'Trabajo no solicitado formalmente' }
        };
        
        const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: '-' };
        
        // Header: Estado y Observaciones
        $(`${modalContext} #verSolicEstadoAlert`).removeClass().addClass(`alert mb-0 d-flex align-items-center ${config.alert}`);
        $(`${modalContext} #verSolicEstadoBadge`).removeClass().addClass(`badge ml-2 ${config.badge}`).text(solicitud.ESTADO);
        $(`${modalContext} #verSolicEstadoDescripcion`).text(config.descripcion);
        $(`${modalContext} #verSolicObservaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
        
        // Identificación
        $(`${modalContext} #verSolicIDSolicitud`).val(solicitud.ID_SOLICITUD || '-');
        $(`${modalContext} #verSolicTipo`).val(solicitud.TIPO_TRABAJO || '-');
        $(`${modalContext} #verSolicRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '-');
        
        // Fechas Programadas
        $(`${modalContext} #verSolicInicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '-');
        $(`${modalContext} #verSolicFinProgramado`).val(solicitud.FIN_PROGRAMADO || '-');
        
        // Fechas Efectivas de Ejecución
        $(`${modalContext} #verSolicInicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '-');
        $(`${modalContext} #verSolicFinEfectivo`).val(solicitud.FIN_EFECTIVO || '-');
        
        // Empresas Involucradas
        $(`${modalContext} #verSolicEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '-');
        $(`${modalContext} #verSolicEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '-');
        
        // Instalación y Equipos
        $(`${modalContext} #verSolicInstalacionGM`).val(solicitud.INSTALACION_GM || '-');
        poblarEquiposSelectMultiple(`${modalContext} #verSolicEquipos`, solicitud.EQUIPOS);
        
        // Características de la Intervención
        $(`${modalContext} #verSolicTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '-');
        $(`${modalContext} #verSolicPotencia`).val(solicitud.POTENCIA || '-');
        $(`${modalContext} #verSolicAplicaSODI`).val(solicitud.APLICA_SODI || '-');
        $(`${modalContext} #verSolicRiesgo`).val(solicitud.RIESGO || '-');
        
        // Campos condicionales - DESCRIPCION_RIESGO
        if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
            $(`${modalContext} #verSolicDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO);
            $(`${modalContext} #verSolicDescripcionRiesgoContainer`).show();
        } else {
            $(`${modalContext} #verSolicDescripcionRiesgoContainer`).hide();
        }
        
        // Descripción y Condiciones
        $(`${modalContext} #verSolicDescripcion`).val(solicitud.DESCRIPCION || '-');
        $(`${modalContext} #verSolicCondiciones`).val(solicitud.CONDICIONES || '-');
        $(`${modalContext} #verSolicComentarios`).val(solicitud.COMENTARIOS || '-');
        $(`${modalContext} #verSolicAfectaciones`).val(solicitud.AFECTACIONES || '-');
        
        // Campos condicionales - DESCRIPCION_AFECTACION
        if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
            $(`${modalContext} #verSolicDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION);
            $(`${modalContext} #verSolicDescripcionAfectacionContainer`).show();
        } else {
            $(`${modalContext} #verSolicDescripcionAfectacionContainer`).hide();
        }
        
        // Archivos Adjuntos
        if (solicitud.ADJUNTO) {
            $(`${modalContext} #verSolicAdjunto`).text(solicitud.ADJUNTO);
            $(`${modalContext} #verSolicDescargarAdjunto`).show();
        } else {
            $(`${modalContext} #verSolicAdjunto`).text('Sin archivo adjunto');
            $(`${modalContext} #verSolicDescargarAdjunto`).hide();
        }
        $(`${modalContext} #verSolicSODIAdjunto`).val(solicitud.APLICA_SODI_ADJUNTO ? 'Sí' : 'No');
        
        // Footer: Información del Sistema
        $(`${modalContext} #verSolicIDRegistro`).val(solicitud.ID_REGISTRO || '-');
        $(`${modalContext} #verSolicCreado`).val(solicitud.CREADO || '-');
        $(`${modalContext} #verSolicActualizado`).val(solicitud.ACTUALIZADO || '-');
        $(`${modalContext} #verSolicAdministrador`).val(solicitud.ADMINISTRADOR || '-');
        $(`${modalContext} #verSolicSolicitante`).val(solicitud.SOLICITANTE || '-');
        
        // Configurar visibilidad de secciones según el estado
        configurarVisibilidadVerSolicitud(solicitud.ESTADO);
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('verSolic', solicitud);
    }
    
    // Poblar modal gestionar solicitante (función original completa)
    function poblarModalGestionarSolicitante(solicitud) {
        console.log('Poblando modal gestionar solicitante:', solicitud);
        
        // Header: Estado y Observaciones (SOLO LECTURA)
        const estadoConfig = {
            'Devuelta': { badge: 'badge-danger', alert: 'alert-danger', descripcion: 'La solicitud fue devuelta por el administrador para correcciones' }
        };
        
        const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: '' };
        
        $('#gestionarSolEstadoAlert').removeClass().addClass('alert mb-0 d-flex align-items-center ' + config.alert);
        $('#gestionarSolEstadoBadge').removeClass().addClass('badge ml-2 ' + config.badge).text(solicitud.ESTADO);
        $('#gestionarSolEstadoDescripcion').text(config.descripcion);
        $('#gestionarSolObservacionesHeader').text(solicitud.OBSERVACIONES || 'Sin observaciones');
        
        // Identificación (SOLO LECTURA)
        $('#gestionarSolIDSolicitud').val(solicitud.ID_SOLICITUD || '');
        $('#gestionarSolTipo').val(solicitud.TIPO_TRABAJO || '');
        $('#gestionarSolRelacionSODICEN').val(solicitud.RELACION_SODI_CEN || '');
        
        // Fechas Programadas (EDITABLE)
        $('#gestionarSolInicioProgramado').val(solicitud.INICIO_PROGRAMADO ? formatDateTimeForInput(solicitud.INICIO_PROGRAMADO) : '');
        $('#gestionarSolFinProgramado').val(solicitud.FIN_PROGRAMADO ? formatDateTimeForInput(solicitud.FIN_PROGRAMADO) : '');
        
        // Empresas Involucradas (SOLO LECTURA)
        $('#gestionarSolEmpresaSolicitante').val(solicitud.EMPRESA_SOLICITANTE || '');
        $('#gestionarSolEmpresaReceptora').val(solicitud.EMPRESA_RECEPTORA || '');
        
        // Instalación y Equipos (EDITABLE)
        $('#gestionarSolInstalacionGM').val(solicitud.INSTALACION_GM || '');
        $('#gestionarSolEquipos').val(solicitud.EQUIPOS || '');
        
        // Características de la Intervención (EDITABLE)
        $('#gestionarSolTipoIntervencion').val(solicitud.TIPO_INTERVENCION || '');
        $('#gestionarSolPotencia').val(solicitud.POTENCIA || '');
        
        // APLICA_SODI - radio buttons
        if (solicitud.APLICA_SODI === 'Sí') {
            $('#gestionarSolAplicaSODISi').prop('checked', true);
        } else if (solicitud.APLICA_SODI === 'No') {
            $('#gestionarSolAplicaSODINo').prop('checked', true);
        }
        
        $('#gestionarSolRiesgo').val(solicitud.RIESGO || '');
        
        // Campo condicional - DESCRIPCION_RIESGO
        if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
            $('#gestionarSolDescripcionRiesgo').val(solicitud.DESCRIPCION_RIESGO);
            $('#gestionarSolDescripcionRiesgoContainer').show();
        } else {
            $('#gestionarSolDescripcionRiesgoContainer').hide();
        }
        
        // Descripción y Condiciones (EDITABLE)
        $('#gestionarSolDescripcion').val(solicitud.DESCRIPCION || '');
        $('#gestionarSolCondiciones').val(solicitud.CONDICIONES || '');
        $('#gestionarSolComentariosActuales').val(solicitud.COMENTARIOS || '');
        $('#gestionarSolAfectaciones').val(solicitud.AFECTACIONES || '');
        
        // Campo condicional - DESCRIPCION_AFECTACION
        if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
            $('#gestionarSolDescripcionAfectacion').val(solicitud.DESCRIPCION_AFECTACION);
            $('#gestionarSolDescripcionAfectacionContainer').show();
        } else {
            $('#gestionarSolDescripcionAfectacionContainer').hide();
        }
        
        // Archivo Adjunto (EDITABLE)
        if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
            $('#gestionarSolAdjuntoActual').text(solicitud.ADJUNTO);
            $('#gestionarSolDescargarAdjunto').show();
        } else {
            $('#gestionarSolAdjuntoActual').text('Sin archivo adjunto');
            $('#gestionarSolDescargarAdjunto').hide();
        }
        
        // Limpiar campo de nuevo archivo
        $('#gestionarSolAdjunto').val('');
        
        // Limpiar observaciones del solicitante y resetear acción a Pendiente
        $('#gestionarSolObservaciones').val('');
        $('#gestionarSolAccionPendiente').prop('checked', true);
        
        // Metadata del Sistema
        $('#gestionarSolIDRegistro').text(solicitud.ID_REGISTRO || '-');
        $('#gestionarSolCreado').text(solicitud.CREADO || '-');
        $('#gestionarSolActualizado').text(solicitud.ACTUALIZADO || '-');
        $('#gestionarSolAdministrador').text(solicitud.ADMINISTRADOR || '-');
        $('#gestionarSolSolicitante').text(solicitud.SOLICITANTE || '-');
        $('#gestionarSolCreadoPor').text(solicitud.CREADO_POR || '-');
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('gestionarSol', solicitud);
    }
    
    // Poblar modal clonar solicitante
    function poblarModalClonarSolic(solicitud) {
        const modalContext = '#modalClonarSolicitudSolic';
        
        console.log('Poblando modal clonar solicitante:', solicitud);
        
        // Identificación - ID Solicitud queda vacío, Tipo se copia
        $(`${modalContext} #clonarSolicIDSolicitud`).val('');
        $(`${modalContext} #clonarSolicTipo`).val(solicitud.TIPO_TRABAJO || '');
        $(`${modalContext} #clonarSolicRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
        
        // Fechas Programadas - quedan vacías para que el usuario las complete
        $(`${modalContext} #clonarSolicInicioProgramado`).val('');
        $(`${modalContext} #clonarSolicFinProgramado`).val('');
        
        // Empresas Involucradas - se copian
        $(`${modalContext} #clonarSolicEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
        $(`${modalContext} #clonarSolicEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
        
        // Instalación y Equipos - se copian
        $(`${modalContext} #clonarSolicInstalacionGM`).val(solicitud.INSTALACION_GM || '');
        
        // Poblar equipos según instalación
        if (solicitud.INSTALACION_GM) {
            poblarEquiposPorInstalacion(`${modalContext} #clonarSolicEquipos`, solicitud.INSTALACION_GM);
            
            // Preseleccionar equipos si existen
            if (solicitud.EQUIPOS) {
                const equiposArray = solicitud.EQUIPOS.split(',').map(e => e.trim());
                $(`${modalContext} #clonarSolicEquipos`).val(equiposArray);
            }
        }
        
        // Características de la Intervención - se copian
        $(`${modalContext} #clonarSolicTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
        $(`${modalContext} #clonarSolicPotencia`).val(solicitud.POTENCIA || '');
        $(`${modalContext} #clonarSolicAplicaSODI`).val(solicitud.APLICA_SODI || '');
        $(`${modalContext} #clonarSolicRiesgo`).val(solicitud.RIESGO || '');
        
        // Descripción y Condiciones - se copian
        $(`${modalContext} #clonarSolicDescripcion`).val(solicitud.DESCRIPCION || '');
        $(`${modalContext} #clonarSolicCondiciones`).val(solicitud.CONDICIONES || '');
        $(`${modalContext} #clonarSolicComentarios`).val(solicitud.COMENTARIOS || '');
        
        // Afectaciones - se copian
        $(`${modalContext} #clonarSolicAfectaciones`).val(solicitud.AFECTACIONES || '');
        
        // Archivos Adjuntos - quedan vacíos
        $(`${modalContext} #clonarSolicAdjunto`).val('');
        $(`${modalContext} .custom-file-label`).text('Seleccionar archivo...');
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('clonarSolic', solicitud);
        
        console.log('Modal clonar solicitante poblado correctamente');
    }
    
    // Poblar modal editar solicitante (función original completa)
    function poblarModalEditarSolic(solicitud) {
        const modalContext = '#modalEditarSolicitudSolic';
        
        console.log('Poblando modal editar solicitante:', solicitud);
        
        // Estado - mostrar con badge dinámico
        const estadoConfig = {
            'Pendiente': { badge: 'badge-warning', alert: 'alert-warning' },
            'Devuelta': { badge: 'badge-danger', alert: 'alert-danger' }
        };
        
        const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary' };
        
        $(`${modalContext} #editarSolicEstadoAlert`).removeClass().addClass(`alert mb-0 ${config.alert}`);
        $(`${modalContext} #editarSolicEstadoBadge`).removeClass().addClass(`badge ml-2 ${config.badge}`).text(solicitud.ESTADO);
        
        // Fechas Programadas - convertir formato
        $(`${modalContext} #editarSolicInicioProgramado`).val(convertirFechaParaInput(solicitud.INICIO_PROGRAMADO));
        $(`${modalContext} #editarSolicFinProgramado`).val(convertirFechaParaInput(solicitud.FIN_PROGRAMADO));
        
        // Configurar listener para cambio de instalación
        $(`${modalContext} #editarSolicInstalacionGM`).off('change').on('change', function() {
            const instalacion = $(this).val();
            const selectEquipos = $(`${modalContext} #editarSolicEquipos`);
            
            if (instalacion && window.equiposPorInstalacion && window.equiposPorInstalacion[instalacion]) {
                selectEquipos.prop('disabled', false);
                selectEquipos.empty();
                selectEquipos.append('<option value="">Seleccione...</option>');
                
                window.equiposPorInstalacion[instalacion].forEach(equipo => {
                    selectEquipos.append(`<option value="${equipo}">${equipo}</option>`);
                });
            } else {
                selectEquipos.prop('disabled', true);
                selectEquipos.empty();
                selectEquipos.append('<option value="">Primero seleccione Instalación GM</option>');
            }
        });
        
        // Instalación y Equipos
        $(`${modalContext} #editarSolicInstalacionGM`).val(solicitud.INSTALACION_GM || '');
        $(`${modalContext} #editarSolicInstalacionGM`).trigger('change');
        
        // Esperar que se carguen los equipos y luego seleccionar
        setTimeout(() => {
            $(`${modalContext} #editarSolicEquipos`).val(solicitud.EQUIPOS || '');
        }, 100);
        
        // Características de la Intervención
        $(`${modalContext} #editarSolicTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
        $(`${modalContext} #editarSolicRiesgo`).val(solicitud.RIESGO || '');
        
        // Campo condicional - DESCRIPCION_RIESGO
        if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
            $(`${modalContext} #editarSolicDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO);
            $(`${modalContext} #editarSolicDescripcionRiesgoContainer`).show();
        } else {
            $(`${modalContext} #editarSolicDescripcionRiesgoContainer`).hide();
        }
        
        // SODI - radio buttons
        if (solicitud.APLICA_SODI === 'Sí') {
            $(`${modalContext} #editarSolicSODISi`).prop('checked', true);
        } else if (solicitud.APLICA_SODI === 'No') {
            $(`${modalContext} #editarSolicSODINo`).prop('checked', true);
        }
        
        $(`${modalContext} #editarSolicPotencia`).val(solicitud.POTENCIA || '');
        
        // Descripción y Condiciones
        $(`${modalContext} #editarSolicDescripcion`).val(solicitud.DESCRIPCION || '');
        $(`${modalContext} #editarSolicCondiciones`).val(solicitud.CONDICIONES || '');
        $(`${modalContext} #editarSolicComentarios`).val(solicitud.COMENTARIOS || '');
        
        // Afectaciones - select simple
        $(`${modalContext} #editarSolicAfectaciones`).val(solicitud.AFECTACIONES || '');
        
        // Campo condicional - DESCRIPCION_AFECTACION
        if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
            $(`${modalContext} #editarSolicDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION);
            $(`${modalContext} #editarSolicDescripcionAfectacionContainer`).show();
        } else {
            $(`${modalContext} #editarSolicDescripcionAfectacionContainer`).hide();
        }
        
        // Configurar tabs de Aprobadores y Distribución - Solo para estado "Devuelta"
        if (solicitud.ESTADO === 'Devuelta') {
            // Mostrar tabs de aprobadores y distribución
            $('#editarSolic-aprobadores-tab-li').show();
            $('#editarSolic-distribucion-tab-li').show();
            
            // Configurar tabs de Aprobadores y Distribución
            configurarTabsAprobadoresDistribucion('editarSolic', solicitud);
            
            // Cargar datos existentes de aprobadores y distribución
            if (typeof cargarDatosExistentesEditar === 'function') {
                cargarDatosExistentesEditar(solicitud);
            }
        } else {
            // Ocultar tabs de aprobadores y distribución para otros estados
            $('#editarSolic-aprobadores-tab-li').hide();
            $('#editarSolic-distribucion-tab-li').hide();
        }
        
        // Guardar ID para actualización
        $(`${modalContext}`).data('solicitudId', solicitud.ID_REGISTRO);
    }
    
    // ============================================
    // FUNCIONES DE CONFIRMACIÓN
    // ============================================
    
    // Confirmar reenvío de solicitud corregida
    window.confirmarReenvioSolicitud = function() {
        const modalContext = '#modalGestionarSolicitudSolicitante';
        const solicitudId = $(`${modalContext}`).data('solicitudId');
        const comentarios = $(`${modalContext} #gestionarSolComentarios`).val().trim();
        
        if (!comentarios) {
            alert('Por favor ingrese comentarios sobre las correcciones realizadas');
            return;
        }
        
        console.log('Confirmando reenvío de solicitud:', { solicitudId, comentarios });
        
        // Simulación de actualización
        alert('✓ Solicitud reenviada exitosamente.\n\nLa solicitud ha vuelto a estado "Pendiente" y será revisada por el administrador.');
        
        $(`${modalContext}`).modal('hide');
        
        // Recargar la página para ver cambios
        location.reload();
    };
    
    // Actualizar solicitud editada
    window.actualizarSolicitudSolic = function() {
        const modalContext = '#modalEditarSolicitudSolic';
        const solicitudId = $(`${modalContext}`).data('solicitudId');
        
        // Recopilar datos del formulario
        const datosActualizados = {
            ID_SOLICITUD: $(`${modalContext} #editarSolicIDSolicitud`).val(),
            TIPO_TRABAJO: $(`${modalContext} #editarSolicTipo`).val(),
            INICIO_PROGRAMADO: $(`${modalContext} #editarSolicInicioProgramado`).val(),
            FIN_PROGRAMADO: $(`${modalContext} #editarSolicFinProgramado`).val(),
            INSTALACION_GM: $(`${modalContext} #editarSolicInstalacionGM`).val(),
            DESCRIPCION: $(`${modalContext} #editarSolicDescripcion`).val(),
            CONDICIONES: $(`${modalContext} #editarSolicCondiciones`).val(),
            COMENTARIOS: $(`${modalContext} #editarSolicComentarios`).val()
        };
        
        console.log('Actualizando solicitud solicitante:', solicitudId, datosActualizados);
        
        alert(`Funcionalidad en desarrollo.\n\nSolicitud ID: ${solicitudId}\nDatos actualizados correctamente.`);
        
        $(`${modalContext}`).modal('hide');
    };
    
    // NOTA: Las funciones de gestión de aprobadores y distribución están ahora en el modal HTML
    
    // ============================================
    // FUNCIONES DE COMPATIBILIDAD
    // ============================================
    
    // Funciones antiguas que redirigen a las nuevas funciones unificadas
    window.verSolicitudPendienteSolic = function(solicitudId) { verSolicitudSolic(solicitudId); };
    window.verSolicitudDevueltaSolic = function(solicitudId) { verSolicitudSolic(solicitudId); };
    window.verSolicitudEnAnalisisSolic = function(solicitudId) { verSolicitudSolic(solicitudId); };
    window.verSolicitudAdminGestionandoSolic = function(solicitudId) { verSolicitudSolic(solicitudId); };
    window.verSolicitudProgramadaSolic = function(solicitudId) { verSolicitudSolic(solicitudId); };
    window.verSolicitudVigenteSolic = function(solicitudId) { verSolicitudSolic(solicitudId); };
    window.verSolicitudExtendidaSolic = function(solicitudId) { verSolicitudSolic(solicitudId); };
    
    console.log('✅ Solicitante Modals cargado correctamente');
});
