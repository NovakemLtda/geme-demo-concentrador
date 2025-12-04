// ============================================
// ADMINISTRADOR MODALS - Funciones de modales del administrador
// ============================================

$(document).ready(function() {
    
    // ============================================
    // FUNCIONES PRINCIPALES
    // ============================================
    
    // Función unificada para ver solicitud - Administrador
    window.verSolicitudAdmin = function(solicitudId) {
        console.log('Ver solicitud (Administrador):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        const modal = $('#modalVerAdmin');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalVerAdmin(solicitud);
        });
        modal.modal('show');
    };
    
    // Función para gestionar solicitudes
    window.gestionarSolicitudAdmin = function(solicitudId) {
        console.log('Gestionar solicitud (Administrador):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        const estadosGestionables = ['Pendiente', 'En Análisis', 'Administrador Gestionando'];
        if (!estadosGestionables.includes(solicitud.ESTADO)) {
            alert('Esta solicitud no puede ser gestionada en su estado actual: ' + solicitud.ESTADO);
            return;
        }
        
        const modal = $('#modalGestionarAdmin');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalGestionar(solicitud);
        });
        modal.modal('show');
    };
    
    // Función para abrir modal de nueva solicitud - Administrador
    window.abrirModalNuevaSolicitudAdmin = function() {
        console.log('Abriendo modal nueva solicitud (Administrador)');
        $('#modalNuevaAdmin').modal('show');
    };
    
    // Función para clonar solicitud
    window.clonarSolicitudAdmin = function(solicitudId) {
        console.log('Clonar solicitud (Administrador):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        const modal = $('#modalClonarAdmin');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalClonarAdmin(solicitud);
        });
        modal.modal('show');
    };
    
    // ============================================
    // FUNCIONES DE POBLACIÓN DE MODALES
    // ============================================
    
    // Poblar modal ver administrador (función original completa)
    function poblarModalVerAdmin(solicitud) {
        console.log('Poblando modal ver administrador (unificado):', solicitud);
        
        // Configuración de estilos por estado
        const estadoConfig = {
            'Pendiente': { 
                badge: 'badge-warning', 
                alert: 'alert-warning', 
                header: 'bg-warning text-dark',
                icon: 'fa-clock',
                descripcion: 'La solicitud está pendiente de revisión por el administrador'
            },
            'En Análisis': { 
                badge: 'badge-info', 
                alert: 'alert-info', 
                header: 'bg-info text-white',
                icon: 'fa-search',
                descripcion: 'La solicitud está siendo analizada por el administrador'
            },
            'Devuelta': { 
                badge: 'badge-danger', 
                alert: 'alert-danger', 
                header: 'bg-danger text-white',
                icon: 'fa-undo',
                descripcion: 'La solicitud fue devuelta al solicitante para correcciones'
            },
            'Administrador Gestionando': { 
                badge: 'badge-primary', 
                alert: 'alert-primary', 
                header: 'bg-primary text-white',
                icon: 'fa-user-cog',
                descripcion: 'La solicitud está siendo gestionada por el administrador'
            },
            'Programada': { 
                badge: 'badge-success', 
                alert: 'alert-success', 
                header: 'bg-success text-white',
                icon: 'fa-calendar-check',
                descripcion: 'La solicitud ha sido programada y aprobada'
            },
            'Vigente': { 
                badge: 'badge-success', 
                alert: 'alert-success', 
                header: 'bg-success text-white',
                icon: 'fa-check-circle',
                descripcion: 'La solicitud está vigente y en ejecución'
            },
            'Extendida': { 
                badge: 'badge-info', 
                alert: 'alert-info', 
                header: 'bg-info text-white',
                icon: 'fa-clock',
                descripcion: 'La solicitud ha sido extendida'
            },
            'Finalizada': { 
                badge: 'badge-secondary', 
                alert: 'alert-secondary', 
                header: 'bg-secondary text-white',
                icon: 'fa-check',
                descripcion: 'La solicitud ha sido finalizada'
            },
            'Rechazada': { 
                badge: 'badge-danger', 
                alert: 'alert-danger', 
                header: 'bg-danger text-white',
                icon: 'fa-times-circle',
                descripcion: 'La solicitud ha sido rechazada'
            },
            'Suspendida': { 
                badge: 'badge-warning', 
                alert: 'alert-warning', 
                header: 'bg-warning text-dark',
                icon: 'fa-pause-circle',
                descripcion: 'La solicitud ha sido suspendida'
            },
            'Anulada': { 
                badge: 'badge-dark', 
                alert: 'alert-dark', 
                header: 'bg-dark text-white',
                icon: 'fa-ban',
                descripcion: 'La solicitud ha sido anulada'
            }
        };
        
        const config = estadoConfig[solicitud.ESTADO] || { 
            badge: 'badge-secondary', 
            alert: 'alert-secondary', 
            header: 'bg-secondary text-white',
            icon: 'fa-circle',
            descripcion: ''
        };
        
        // Actualizar header del modal
        $('#verAdminModalHeader').removeClass().addClass('modal-header text-white ' + config.header);
        
        // Header: Estado y Observaciones
        $('#verAdminEstadoAlert').removeClass().addClass('alert mb-0 d-flex align-items-center ' + config.alert);
        $('#verAdminEstadoIcon').removeClass().addClass('fas mr-2 ' + config.icon);
        $('#verAdminEstadoBadge').removeClass().addClass('badge ml-2 ' + config.badge).text(solicitud.ESTADO);
        $('#verAdminEstadoDescripcion').text(config.descripcion);
        
        // Observaciones (mostrar solo si existen)
        if (solicitud.OBSERVACIONES && solicitud.OBSERVACIONES !== '-') {
            $('#verAdminObservaciones').text(solicitud.OBSERVACIONES);
            $('#verAdminObservacionesContainer').show();
        } else {
            $('#verAdminObservacionesContainer').hide();
        }
        
        // Identificación
        $('#verAdminIDSolicitud').val(solicitud.ID_SOLICITUD || '');
        $('#verAdminTipo').val(solicitud.TIPO_TRABAJO || '');
        $('#verAdminRelacionSODICEN').val(solicitud.RELACION_SODI_CEN || '');
        
        // Fechas Programadas
        $('#verAdminInicioProgramado').val(solicitud.INICIO_PROGRAMADO || '');
        $('#verAdminFinProgramado').val(solicitud.FIN_PROGRAMADO || '');
        
        // Fechas Efectivas (mostrar solo en estados Vigente, Extendida, Finalizada)
        const estadosConFechasEfectivas = ['Vigente', 'Extendida', 'Finalizada'];
        if (estadosConFechasEfectivas.includes(solicitud.ESTADO)) {
            $('#verAdminInicioEfectivo').val(solicitud.INICIO_EFECTIVO || '-');
            $('#verAdminFinEfectivo').val(solicitud.FIN_EFECTIVO || '-');
            $('#verAdminFechasEfectivasCard').show();
        } else {
            $('#verAdminFechasEfectivasCard').hide();
        }
        
        // Empresas Involucradas
        $('#verAdminEmpresaSolicitante').val(solicitud.EMPRESA_SOLICITANTE || '');
        $('#verAdminEmpresaReceptora').val(solicitud.EMPRESA_RECEPTORA || '');
        
        // Instalación y Equipos
        $('#verAdminInstalacionGM').val(solicitud.INSTALACION_GM || '');
        poblarEquiposSelectMultiple('#verAdminEquipos', solicitud.EQUIPOS);
        
        // Características de la Intervención
        $('#verAdminTipoIntervencion').val(solicitud.TIPO_INTERVENCION || '');
        $('#verAdminPotencia').val(solicitud.POTENCIA || '');
        $('#verAdminAplicaSODI').val(solicitud.APLICA_SODI || '');
        $('#verAdminRiesgo').val(solicitud.RIESGO || '');
        
        // Campo condicional - DESCRIPCION_RIESGO
        if (solicitud.DESCRIPCION_RIESGO && (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto')) {
            $('#verAdminDescripcionRiesgo').val(solicitud.DESCRIPCION_RIESGO);
            $('#verAdminDescripcionRiesgoContainer').show();
        } else {
            $('#verAdminDescripcionRiesgoContainer').hide();
        }
        
        // SODI Adjunto (mostrar solo si aplica SODI)
        if (solicitud.APLICA_SODI === 'Sí') {
            $('#verAdminSODIAdjunto').val(solicitud.APLICA_SODI_ADJUNTO ? 'Sí' : 'No');
            if (solicitud.SODI_ADJUNTO && solicitud.SODI_ADJUNTO !== '-') {
                $('#verAdminArchivoSODI').val(solicitud.SODI_ADJUNTO);
                $('#verAdminDescargarSODI').show();
            } else {
                $('#verAdminArchivoSODI').val('Sin archivo');
                $('#verAdminDescargarSODI').hide();
            }
            $('#verAdminSODIAdjuntoCard').show();
        } else {
            $('#verAdminSODIAdjuntoCard').hide();
        }
        
        // Descripción y Condiciones
        $('#verAdminDescripcion').val(solicitud.DESCRIPCION || '');
        $('#verAdminCondiciones').val(solicitud.CONDICIONES || '');
        $('#verAdminComentarios').val(solicitud.COMENTARIOS || '');
        $('#verAdminAfectaciones').val(solicitud.AFECTACIONES || '');
        
        // Campo condicional - DESCRIPCION_AFECTACION
        if (solicitud.DESCRIPCION_AFECTACION && solicitud.AFECTACIONES) {
            $('#verAdminDescripcionAfectacion').val(solicitud.DESCRIPCION_AFECTACION);
            $('#verAdminDescripcionAfectacionContainer').show();
        } else {
            $('#verAdminDescripcionAfectacionContainer').hide();
        }
        
        // Archivos Adjuntos
        if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
            $('#verAdminAdjunto').val(solicitud.ADJUNTO);
            $('#verAdminDescargarAdjunto').show();
        } else {
            $('#verAdminAdjunto').val('Sin archivo adjunto');
            $('#verAdminDescargarAdjunto').hide();
        }
        
        // Metadata del Sistema
        $('#verAdminIDRegistro').text(solicitud.ID_REGISTRO || '-');
        $('#verAdminCreado').text(solicitud.CREADO || '-');
        $('#verAdminActualizado').text(solicitud.ACTUALIZADO || '-');
        $('#verAdminAdministrador').text(solicitud.ADMINISTRADOR || '-');
        $('#verAdminSolicitante').text(solicitud.SOLICITANTE || '-');
        $('#verAdminCreadoPor').text(solicitud.CREADO_POR || '-');
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('verAdmin', solicitud);
    }
    
    // Poblar modal gestionar (función original completa)
    function poblarModalGestionar(solicitud) {
        const modalContext = '#modalGestionarAdmin';
        
        // Configurar estado actual
        configurarEstadoGestion(solicitud.ESTADO);
        
        // Header: Observaciones
        $(`${modalContext} #gestionarObservacionesHeader`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
        
        // Identificación (EDITABLE)
        $(`${modalContext} #gestionarIDSolicitud`).val(solicitud.ID_SOLICITUD || '');
        $(`${modalContext} #gestionarTipo`).val(solicitud.TIPO_TRABAJO || '');
        $(`${modalContext} #gestionarRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
        
        // Fechas Programadas (SOLO LECTURA)
        $(`${modalContext} #gestionarInicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '');
        $(`${modalContext} #gestionarFinProgramado`).val(solicitud.FIN_PROGRAMADO || '');
        
        // Empresas Involucradas (EDITABLE)
        $(`${modalContext} #gestionarEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
        $(`${modalContext} #gestionarEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
        
        // Instalación y Equipos (SOLO LECTURA)
        $(`${modalContext} #gestionarInstalacionGM`).val(solicitud.INSTALACION_GM || '');
        poblarEquiposSelectMultiple(`${modalContext} #gestionarEquipos`, solicitud.EQUIPOS);
        
        // Características de la Intervención (SOLO LECTURA)
        $(`${modalContext} #gestionarTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
        $(`${modalContext} #gestionarPotencia`).val(solicitud.POTENCIA || '');
        $(`${modalContext} #gestionarAplicaSODI`).val(solicitud.APLICA_SODI || '');
        $(`${modalContext} #gestionarRiesgo`).val(solicitud.RIESGO || '');
        
        // Descripción del Riesgo del Trabajo (condicional - solo si es Medio o Alto)
        if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
            $(`${modalContext} #gestionarDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO || '');
            $(`${modalContext} #gestionarDescripcionRiesgoContainer`).show();
        } else {
            $(`${modalContext} #gestionarDescripcionRiesgoContainer`).hide();
        }
        
        // Descripción y Condiciones (SOLO LECTURA)
        $(`${modalContext} #gestionarDescripcion`).val(solicitud.DESCRIPCION || '');
        $(`${modalContext} #gestionarCondiciones`).val(solicitud.CONDICIONES || '');
        $(`${modalContext} #gestionarComentariosActuales`).val(solicitud.COMENTARIOS || '');
        $(`${modalContext} #gestionarAfectaciones`).val(solicitud.AFECTACIONES || '');
        
        // Descripción de Afectación (condicional - solo si hay afectaciones)
        if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '' && solicitud.AFECTACIONES !== '-') {
            $(`${modalContext} #gestionarDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION || '');
            $(`${modalContext} #gestionarDescripcionAfectacionContainer`).show();
        } else {
            $(`${modalContext} #gestionarDescripcionAfectacionContainer`).hide();
        }
        
        // Observaciones actuales (mostrar en alert)
        $(`${modalContext} #gestionarObservacionesActuales`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
        
        // Adjunto
        if (solicitud.ADJUNTO) {
            $(`${modalContext} #gestionarAdjunto`).text(solicitud.ADJUNTO);
            $(`${modalContext} #gestionarDescargarAdjunto`).show();
        } else {
            $(`${modalContext} #gestionarAdjunto`).text('Sin archivo adjunto');
            $(`${modalContext} #gestionarDescargarAdjunto`).hide();
        }
        
        // SODI Adjunto (campo editable)
        $(`${modalContext} #gestionarSODIAdjunto`).val(solicitud.SODI_ADJUNTO || '');
        
        // Limpiar comentarios
        $(`${modalContext} #gestionarComentarios`).val('');
        
        // Metadata
        $(`${modalContext} #gestionarIDRegistro`).text(solicitud.ID_REGISTRO || '');
        $(`${modalContext} #gestionarCreado`).text(solicitud.CREADO || '');
        $(`${modalContext} #gestionarActualizado`).text(solicitud.ACTUALIZADO || '');
        $(`${modalContext} #gestionarAdministrador`).text(solicitud.ADMINISTRADOR || '');
        $(`${modalContext} #gestionarSolicitante`).text(solicitud.SOLICITANTE || '');
        $(`${modalContext} #gestionarCreadoPor`).text(solicitud.CREADO_POR || '');
        
        // Guardar ID de solicitud para usar en la confirmación
        $(`${modalContext}`).data('solicitudId', solicitud.ID_REGISTRO);
        
        // Aplicar reglas de editabilidad según estado
        aplicarReglasEditabilidadGestion(solicitud.ESTADO);
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('gestionar', solicitud);
    }
    
    // Poblar modal clonar administrador (función original completa)
    function poblarModalClonarAdmin(solicitud) {
        const modalContext = '#modalClonarAdmin';
        
        console.log('Poblando modal clonar administrador:', solicitud);
        
        // Identificación - ID Solicitud queda vacío, Tipo y Relación se copian
        $(`${modalContext} #clonarAdminIDSolicitud`).val('');
        $(`${modalContext} #clonarAdminTipo`).val(solicitud.TIPO_TRABAJO || '');
        $(`${modalContext} #clonarAdminRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('clonarAdmin', solicitud);
        
        // Fechas Programadas - quedan vacías
        $(`${modalContext} #clonarAdminInicioProgramado`).val('');
        $(`${modalContext} #clonarAdminFinProgramado`).val('');
        
        // Empresas Involucradas - se copian
        $(`${modalContext} #clonarAdminEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
        $(`${modalContext} #clonarAdminEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
        
        // Instalación y Equipos - se copian
        $(`${modalContext} #clonarAdminInstalacionGM`).val(solicitud.INSTALACION_GM || '');
        $(`${modalContext} #clonarAdminEquipos`).val(solicitud.EQUIPOS || '');
        
        // Características de la Intervención - se copian
        $(`${modalContext} #clonarAdminTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
        $(`${modalContext} #clonarAdminPotencia`).val(solicitud.POTENCIA || '');
        $(`${modalContext} #clonarAdminAplicaSODI`).val(solicitud.APLICA_SODI || '');
        $(`${modalContext} #clonarAdminRiesgo`).val(solicitud.RIESGO || '');
        
        // Descripción del Riesgo del Trabajo (condicional) - se copia
        if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
            $(`${modalContext} #clonarAdminDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO || '');
            $(`${modalContext} #clonarAdminDescripcionRiesgoContainer`).show();
            $(`${modalContext} #clonarAdminDescripcionRiesgo`).attr('required', 'required');
        } else {
            $(`${modalContext} #clonarAdminDescripcionRiesgoContainer`).hide();
            $(`${modalContext} #clonarAdminDescripcionRiesgo`).val('').removeAttr('required');
        }
        
        // Descripción y Condiciones - se copian
        $(`${modalContext} #clonarAdminDescripcion`).val(solicitud.DESCRIPCION || '');
        $(`${modalContext} #clonarAdminCondiciones`).val(solicitud.CONDICIONES || '');
        $(`${modalContext} #clonarAdminComentarios`).val(solicitud.COMENTARIOS || '');
        
        // Afectaciones - se copian
        $(`${modalContext} #clonarAdminAfectaciones`).val(solicitud.AFECTACIONES || '');
        
        // Descripción de Afectación (condicional) - se copia
        if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '') {
            $(`${modalContext} #clonarAdminDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION || '');
            $(`${modalContext} #clonarAdminDescripcionAfectacionContainer`).show();
            $(`${modalContext} #clonarAdminDescripcionAfectacion`).attr('required', 'required');
        } else {
            $(`${modalContext} #clonarAdminDescripcionAfectacionContainer`).hide();
            $(`${modalContext} #clonarAdminDescripcionAfectacion`).val('').removeAttr('required');
        }
        
        // Archivos Adjuntos - quedan vacíos
        $(`${modalContext} #clonarAdminAdjunto`).val('');
        $(`${modalContext} #clonarAdminSODIAdjunto`).val('');
        $(`${modalContext} .custom-file-label`).text('Seleccionar archivo...');
        
        console.log('Modal clonar administrador poblado correctamente');
    }
    
    // NOTA: La función poblarModalClonar ahora está en global-functions.js
    
    // ============================================
    // FUNCIONES AUXILIARES
    // ============================================
    
    // Función para configurar el estado y las acciones disponibles
    function configurarEstadoGestion(estado) {
        const modalContext = '#modalGestionarAdmin';
        const alertElement = $(`${modalContext} #gestionarEstadoAlert`);
        const badgeElement = $(`${modalContext} #gestionarEstadoBadge`);
        const descripcionElement = $(`${modalContext} #gestionarEstadoDescripcion`);
        const accionesContainer = $(`${modalContext} #gestionarAccionesContainer`);
        
        // Limpiar clases anteriores
        alertElement.removeClass('alert-warning alert-info alert-danger alert-secondary');
        badgeElement.removeClass('badge-warning badge-info badge-danger badge-secondary');
        
        // Configurar según el estado
        let acciones = '';
        
        switch(estado) {
            case 'Pendiente':
                alertElement.addClass('alert-warning');
                badgeElement.addClass('badge-warning').text('Pendiente');
                descripcionElement.text('Esta solicitud está pendiente de gestión');
                acciones = `
                    <div class="custom-control custom-radio">
                        <input type="radio" id="accionEnviarAnalisis" name="accionGestion" class="custom-control-input" value="En Análisis" checked>
                        <label class="custom-control-label" for="accionEnviarAnalisis">
                            <i class="fas fa-search mr-1"></i>Analizar Solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "En Análisis"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionDevolver" name="accionGestion" class="custom-control-input" value="Devuelta">
                        <label class="custom-control-label" for="accionDevolver">
                            <i class="fas fa-undo mr-1"></i>Devolver Solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "Devuelta"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionAdminGestionando" name="accionGestion" class="custom-control-input" value="Administrador Gestionando">
                        <label class="custom-control-label" for="accionAdminGestionando">
                            <i class="fas fa-user-cog mr-1"></i>Gestionar Solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "Administrador Gestionando"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionAnular" name="accionGestion" class="custom-control-input" value="Anulada">
                        <label class="custom-control-label text-danger" for="accionAnular">
                            <i class="fas fa-ban mr-1"></i>Anular solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "Anulada"</small>
                    </div>
                `;
                break;
                
            case 'En Análisis':
                alertElement.addClass('alert-info');
                badgeElement.addClass('badge-info').text('En Análisis');
                descripcionElement.text('Esta solicitud está en proceso de análisis');
                acciones = `
                    <div class="custom-control custom-radio">
                        <input type="radio" id="accionDevolver" name="accionGestion" class="custom-control-input" value="Devuelta" checked>
                        <label class="custom-control-label" for="accionDevolver">
                            <i class="fas fa-undo mr-1"></i>Devolver Solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "Devuelta"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionAdminGestionando" name="accionGestion" class="custom-control-input" value="Administrador Gestionando">
                        <label class="custom-control-label" for="accionAdminGestionando">
                            <i class="fas fa-user-cog mr-1"></i>Gestionar Solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "Administrador Gestionando"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionAnular" name="accionGestion" class="custom-control-input" value="Anulada">
                        <label class="custom-control-label text-danger" for="accionAnular">
                            <i class="fas fa-ban mr-1"></i>Anular solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "Anulada"</small>
                    </div>
                `;
                break;
                
            case 'Administrador Gestionando':
                alertElement.addClass('alert-secondary');
                badgeElement.addClass('badge-secondary').text('Administrador Gestionando');
                descripcionElement.text('Esta solicitud está siendo gestionada por el administrador');
                acciones = `
                    <div class="custom-control custom-radio">
                        <input type="radio" id="accionProgramar" name="accionGestion" class="custom-control-input" value="Programada" checked>
                        <label class="custom-control-label" for="accionProgramar">
                            <i class="fas fa-calendar-check mr-1"></i>Programar Solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "Programada"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionAnular" name="accionGestion" class="custom-control-input" value="Anulada">
                        <label class="custom-control-label text-danger" for="accionAnular">
                            <i class="fas fa-ban mr-1"></i>Anular solicitud
                        </label>
                        <small class="form-text text-muted ml-4">Enviar a "Anulada"</small>
                    </div>
                `;
                break;
                
            default:
                alertElement.addClass('alert-secondary');
                badgeElement.addClass('badge-secondary').text(estado);
                descripcionElement.text('Estado no gestionable');
                acciones = '<p class="text-muted">No hay acciones disponibles para este estado</p>';
        }
        
        accionesContainer.html(acciones);
    }

    // Aplicar reglas de editabilidad según estado
    function aplicarReglasEditabilidadGestion(estado) {
        const modalContext = '#modalGestionarAdmin';
        
        // Resetear campos a readonly
        $(`${modalContext} input, ${modalContext} select, ${modalContext} textarea`).prop('readonly', true).prop('disabled', true);
        
        // Aplicar reglas según estado
        if (estado === 'Pendiente' || estado === 'En Análisis') {
            $(`${modalContext} #gestionarIDSolicitud`).prop('readonly', false);
            $(`${modalContext} #gestionarTipo`).prop('disabled', false);
        } else if (estado === 'Administrador Gestionando') {
            $(`${modalContext} #gestionarIDSolicitud`).prop('readonly', false).attr('required', true);
            $(`${modalContext} #gestionarTipo`).prop('disabled', false).attr('required', true);
        }
    }
    
    // Confirmar gestión de solicitud
    window.confirmarGestionSolicitudAdmin = function() {
        const modalContext = '#modalGestionarAdmin';
        const solicitudId = $(`${modalContext}`).data('solicitudId');
        const comentarios = $(`${modalContext} #gestionarComentarios`).val().trim();
        const accionSeleccionada = $(`${modalContext} input[name="accionGestion"]:checked`).val();
        
        if (!comentarios) {
            alert('Por favor ingrese comentarios sobre la gestión');
            return;
        }
        
        if (!accionSeleccionada) {
            alert('Por favor seleccione una acción');
            return;
        }
        
        console.log('Confirmando gestión:', { solicitudId, nuevoEstado: accionSeleccionada, comentarios });
        alert(`Funcionalidad en desarrollo.\n\nSolicitud: ${solicitudId}\nNuevo Estado: ${accionSeleccionada}\nComentarios: ${comentarios}`);
        $(`${modalContext}`).modal('hide');
    };
    
    // ============================================
    // FUNCIONES DE EDITAR
    // ============================================
    
    // Función para abrir modal de editar solicitud - Administrador
    window.abrirModalEditarAdmin = function(solicitudId) {
        console.log('Abriendo modal editar (Administrador) para solicitud:', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        if (solicitud) {
            poblarModalEditar(solicitud, 'Admin');
        }
        $('#modalEditarAdmin').modal('show');
    };
    
    // Función para editar solicitud (estados "Administrador Gestionando" y "En Análisis")
    window.editarSolicitudAdmin = function(solicitudId) {
        console.log('Editar solicitud (Administrador):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        // Verificar que esté en estado "Administrador Gestionando" o "En Análisis"
        const estadosEditables = ['Administrador Gestionando', 'En Análisis'];
        if (!estadosEditables.includes(solicitud.ESTADO)) {
            alert('Solo se pueden editar solicitudes en estado "Administrador Gestionando" o "En Análisis".\nEstado actual: ' + solicitud.ESTADO);
            return;
        }
        
        const modal = $('#modalEditarAdmin');
        
        // Limpiar eventos previos y agregar nuevo listener
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalEditar(solicitud);
        });
        
        modal.modal('show');
    };
    
    // Función para poblar el modal de edición
    function poblarModalEditar(solicitud) {
        const modalContext = '#modalEditarAdmin';
        
        // Header: Estado
        $(`${modalContext} #editarEstadoBadge`).text(solicitud.ESTADO);
        
        // TODOS LOS CAMPOS SON EDITABLES PARA EL ADMINISTRADOR
        // (independiente de quién creó la solicitud)
        
        // Identificación
        $(`${modalContext} #editarIDSolicitud`).val(solicitud.ID_SOLICITUD || '').prop('readonly', false);
        $(`${modalContext} #editarTipo`).val(solicitud.TIPO_TRABAJO || '').prop('disabled', false);
        $(`${modalContext} #editarRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '').prop('readonly', false);
        
        // Fechas Programadas - EDITABLE
        if (solicitud.INICIO_PROGRAMADO) {
            const fechaInicio = convertirFechaParaInput(solicitud.INICIO_PROGRAMADO);
            $(`${modalContext} #editarInicioProgramado`).val(fechaInicio).prop('readonly', false);
        }
        if (solicitud.FIN_PROGRAMADO) {
            const fechaFin = convertirFechaParaInput(solicitud.FIN_PROGRAMADO);
            $(`${modalContext} #editarFinProgramado`).val(fechaFin).prop('readonly', false);
        }
        
        // Empresas Involucradas - EDITABLE
        $(`${modalContext} #editarEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '').prop('disabled', false);
        $(`${modalContext} #editarEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '').prop('disabled', false);
        
        // Instalación GM - EDITABLE
        $(`${modalContext} #editarInstalacionGM`).val(solicitud.INSTALACION_GM || '').prop('disabled', false);
        
        // Equipos - EDITABLE (se poblará dinámicamente según instalación)
        // Primero poblar los equipos si hay una instalación seleccionada
        if (solicitud.INSTALACION_GM && solicitud.EQUIPOS) {
            // Habilitar el select de equipos
            $(`${modalContext} #editarEquipos`).prop('disabled', false);
            
            // Poblar con los equipos de la instalación
            const equiposArray = solicitud.EQUIPOS.split(',').map(e => e.trim());
            const $equiposSelect = $(`${modalContext} #editarEquipos`);
            $equiposSelect.empty();
            
            // Agregar opciones de equipos disponibles para esta instalación
            if (window.equiposPorInstalacion && window.equiposPorInstalacion[solicitud.INSTALACION_GM]) {
                window.equiposPorInstalacion[solicitud.INSTALACION_GM].forEach(equipo => {
                    const selected = equiposArray.includes(equipo) ? 'selected' : '';
                    $equiposSelect.append(`<option value="${equipo}" ${selected}>${equipo}</option>`);
                });
            }
        }
        
        // Características de la Intervención - EDITABLE
        $(`${modalContext} #editarTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '').prop('disabled', false);
        $(`${modalContext} #editarPotencia`).val(solicitud.POTENCIA || '').prop('readonly', false);
        $(`${modalContext} #editarAplicaSODI`).val(solicitud.APLICA_SODI || '').prop('disabled', false);
        $(`${modalContext} #editarRiesgo`).val(solicitud.RIESGO || '').prop('disabled', false);
        
        // Descripción del Riesgo del Trabajo (condicional) - EDITABLE
        if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
            $(`${modalContext} #editarDescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO || '').prop('readonly', false);
            $(`${modalContext} #editarDescripcionRiesgoContainer`).show();
        } else {
            $(`${modalContext} #editarDescripcionRiesgoContainer`).hide();
            $(`${modalContext} #editarDescripcionRiesgo`).val('');
        }
        
        // Descripción y Condiciones - EDITABLE
        $(`${modalContext} #editarDescripcion`).val(solicitud.DESCRIPCION || '').prop('readonly', false);
        $(`${modalContext} #editarCondiciones`).val(solicitud.CONDICIONES || '').prop('readonly', false);
        $(`${modalContext} #editarComentarios`).val(solicitud.COMENTARIOS || '').prop('readonly', false);
        
        // Afectaciones - EDITABLE
        $(`${modalContext} #editarAfectaciones`).val(solicitud.AFECTACIONES || '').prop('disabled', false);
        
        // Descripción de Afectación (condicional) - EDITABLE
        if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '') {
            $(`${modalContext} #editarDescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION || '').prop('readonly', false);
            $(`${modalContext} #editarDescripcionAfectacionContainer`).show();
        } else {
            $(`${modalContext} #editarDescripcionAfectacionContainer`).hide();
            $(`${modalContext} #editarDescripcionAfectacion`).val('');
        }
        
        // Archivos Adjuntos - EDITABLE
        if (solicitud.ARCHIVOS_ADJUNTOS && solicitud.ARCHIVOS_ADJUNTOS !== '-') {
            $(`${modalContext} #editarArchivosAdjuntos`).val(solicitud.ARCHIVOS_ADJUNTOS);
        } else {
            $(`${modalContext} #editarArchivosAdjuntos`).val('');
        }
        
        // SODI Adjunto - EDITABLE
        $(`${modalContext} #editarSODIAdjunto`).val(solicitud.SODI_ADJUNTO || '');
        
        // Guardar ID de solicitud y CREADO_POR para usar en la actualización
        $(`${modalContext} #editSolicitudId`).val(solicitud.ID_REGISTRO);
        $(`${modalContext} #editCreadoPor`).val(solicitud.CREADO_POR);
        
        console.log('Modal editar poblado. CREADO_POR:', solicitud.CREADO_POR, '| Todos los campos EDITABLES para Administrador');
    }
    
    // Función para actualizar la solicitud
    window.actualizarSolicitud = function() {
        const modalContext = '#modalEditarAdmin';
        const solicitudId = $(`${modalContext} #editSolicitudId`).val();
        
        // Recopilar datos del formulario
        const datosActualizados = {
            ID_SOLICITUD: $(`${modalContext} #editarIDSolicitud`).val(),
            TIPO: $(`${modalContext} #editarTipo`).val(),
            RELACION_SODI_CEN: $(`${modalContext} #editarRelacionSODICEN`).val(),
            INICIO_PROGRAMADO: $(`${modalContext} #editarInicioProgramado`).val(),
            FIN_PROGRAMADO: $(`${modalContext} #editarFinProgramado`).val(),
            EMPRESA_SOLICITANTE: $(`${modalContext} #editarEmpresaSolicitante`).val(),
            EMPRESA_RECEPTORA: $(`${modalContext} #editarEmpresaReceptora`).val(),
            INSTALACION_GM: $(`${modalContext} #editarInstalacionGM`).val(),
            POTENCIA: $(`${modalContext} #editarPotencia`).val(),
            DESCRIPCION: $(`${modalContext} #editarDescripcion`).val(),
            CONDICIONES: $(`${modalContext} #editarCondiciones`).val(),
            COMENTARIOS: $(`${modalContext} #editarComentarios`).val()
        };
        
        console.log('Actualizando solicitud:', solicitudId, datosActualizados);
        
        // Aquí iría la lógica para actualizar la solicitud
        alert(`Funcionalidad en desarrollo.\n\nSolicitud ID: ${solicitudId}\nDatos actualizados correctamente.`);
        
        // Cerrar modal
        $(`${modalContext}`).modal('hide');
    };
    
    // ============================================
    // FUNCIONES DE COMPATIBILIDAD
    // ============================================
    
    // Funciones antiguas que redirigen a la nueva función unificada
    window.verSolicitudPendienteAdmin = function(solicitudId) { verSolicitudAdmin(solicitudId); };
    window.verSolicitudDevueltaAdmin = function(solicitudId) { verSolicitudAdmin(solicitudId); };
    window.verSolicitudEnAnalisisAdmin = function(solicitudId) { verSolicitudAdmin(solicitudId); };
    window.verSolicitudProgramadaAdmin = function(solicitudId) { verSolicitudAdmin(solicitudId); };
    window.verSolicitudVigenteAdmin = function(solicitudId) { verSolicitudAdmin(solicitudId); };
    window.verSolicitudExtendidaAdmin = function(solicitudId) { verSolicitudAdmin(solicitudId); };
    window.gestionarSolicitudAnalisisAdmin = function(solicitudId) { gestionarSolicitudAdmin(solicitudId); };
    window.verSolicitudAdminGestionandoAdmin = function(solicitudId) { verSolicitudAdmin(solicitudId); };
    
    console.log('✅ Administrador Modals cargado correctamente');
});
