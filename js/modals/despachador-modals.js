// ============================================
// DESPACHADOR MODALS - Funciones de modales del despachador
// ============================================

$(document).ready(function() {
    
    // ============================================
    // FUNCIONES PRINCIPALES
    // ============================================
    
    // Función unificada para ver solicitud - Despachador
    window.verSolicitudDesp = function(solicitudId) {
        console.log('Ver solicitud (Despachador):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        const modal = $('#modalVerDespachador');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalVerDespachador(solicitud);
        });
        modal.modal('show');
    };
    
    // Función para gestionar solicitudes - Despachador
    window.gestionarSolicitudDesp = function(solicitudId) {
        console.log('Gestionar solicitud (Despachador):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        // Estados gestionables por el despachador
        const estadosGestionables = ['Programada', 'Vigente', 'Extendida'];
        if (!estadosGestionables.includes(solicitud.ESTADO)) {
            alert('Esta solicitud no puede ser gestionada por el despachador en su estado actual: ' + solicitud.ESTADO);
            return;
        }
        
        const modal = $('#modalGestionarSolicitudDesp');
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalGestionarDespachador(solicitud);
        });
        modal.modal('show');
    };
    
    // Función para gestionar solicitud programada específicamente
    window.gestionarSolicitudProgramadaDesp = function(solicitudId) {
        console.log('Gestionar solicitud Programada (Despachador):', solicitudId);
        gestionarSolicitudDesp(solicitudId);
    };
    
    // Función para abrir modal de nueva solicitud - Despachador
    window.abrirModalNuevaSolicitudDesp = function() {
        console.log('Abriendo modal nueva solicitud (Despachador)');
        $('#modalNuevaSolicitudDesp').modal('show');
    };
    
    // Función para clonar solicitud - Despachador
    window.clonarSolicitudDesp = function(solicitudId) {
        console.log('Clonar solicitud (Despachador):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        // Usar la función genérica de clonar
        poblarModalClonar(solicitud, 'Desp');
        $('#modalClonarSolicitudDesp').modal('show');
    };
    
    // ============================================
    // FUNCIONES DE POBLACIÓN DE MODALES
    // ============================================
    
    // Poblar modal ver despachador (función original completa)
    function poblarModalVerDespachador(solicitud) {
        const modalContext = '#modalVerDespachador';
        
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
        $(`${modalContext} #verDespEstadoAlert`).removeClass().addClass(`alert mb-0 d-flex align-items-center ${config.alert}`);
        $(`${modalContext} #verDespEstadoBadge`).removeClass().addClass(`badge ml-2 ${config.badge}`).text(solicitud.ESTADO);
        $(`${modalContext} #verDespEstadoDescripcion`).text(config.descripcion);
        $(`${modalContext} #verDespObservaciones`).text(solicitud.OBSERVACIONES || 'Sin observaciones');
        
        // Identificación
        $(`${modalContext} #verDespIDSolicitud`).val(solicitud.ID_SOLICITUD || '-');
        $(`${modalContext} #verDespTipo`).val(solicitud.TIPO_TRABAJO || '-');
        $(`${modalContext} #verDespRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '-');
        
        // Fechas Programadas
        $(`${modalContext} #verDespInicioProgramado`).val(solicitud.INICIO_PROGRAMADO || '-');
        $(`${modalContext} #verDespFinProgramado`).val(solicitud.FIN_PROGRAMADO || '-');
        
        // Fechas Efectivas de Ejecución
        $(`${modalContext} #verDespInicioEfectivo`).val(solicitud.INICIO_EFECTIVO || '-');
        $(`${modalContext} #verDespFinEfectivo`).val(solicitud.FIN_EFECTIVO || '-');
        
        // Empresas Involucradas
        $(`${modalContext} #verDespEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '-');
        $(`${modalContext} #verDespEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '-');
        
        // Instalación y Equipos
        $(`${modalContext} #verDespInstalacionGM`).val(solicitud.INSTALACION_GM || '-');
        poblarEquiposSelectMultiple(`${modalContext} #verDespEquipos`, solicitud.EQUIPOS);
        
        // Características de la Intervención
        $(`${modalContext} #verDespTipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '-');
        $(`${modalContext} #verDespRiesgo`).val(solicitud.RIESGO || '-');
        $(`${modalContext} #verDespSODI`).val(solicitud.APLICA_SODI || '-');
        $(`${modalContext} #verDespPotencia`).val(solicitud.POTENCIA || '-');
        
        // Descripción y Condiciones
        $(`${modalContext} #verDespDescripcion`).val(solicitud.DESCRIPCION || '-');
        $(`${modalContext} #verDespCondiciones`).val(solicitud.CONDICIONES || '-');
        $(`${modalContext} #verDespAfectaciones`).val(solicitud.AFECTACIONES || '-');
        $(`${modalContext} #verDespComentarios`).val(solicitud.COMENTARIOS || '-');
        
        // Archivos Adjuntos
        if (solicitud.ADJUNTO) {
            $(`${modalContext} #verDespAdjunto`).text(solicitud.ADJUNTO);
            $(`${modalContext} #verDespDescargarAdjunto`).show();
        } else {
            $(`${modalContext} #verDespAdjunto`).text('Sin archivo adjunto');
            $(`${modalContext} #verDespDescargarAdjunto`).hide();
        }
        
        // Footer: Información del Sistema
        $(`${modalContext} #verDespIDRegistro`).val(solicitud.ID_REGISTRO || '-');
        $(`${modalContext} #verDespCreado`).val(solicitud.CREADO || '-');
        $(`${modalContext} #verDespActualizado`).val(solicitud.ACTUALIZADO || '-');
        $(`${modalContext} #verDespAdministrador`).val(solicitud.ADMINISTRADOR || '-');
        $(`${modalContext} #verDespSolicitante`).val(solicitud.SOLICITANTE || '-');
        $(`${modalContext} #verDespCreadoPor`).val(solicitud.CREADO_POR || '-');
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('verDesp', solicitud);
    }
    
    // Poblar modal gestionar despachador (función original completa)
    function poblarModalGestionarDespachador(solicitud) {
        console.log('Poblando modal gestionar despachador:', solicitud);
        
        // Header: Estado y Observaciones
        const estadoConfig = {
            'Despachador Gestionando': { badge: 'badge-warning', alert: 'alert-warning', descripcion: 'Solicitud en gestión por el despachador' },
            'Programada': { badge: 'badge-success', alert: 'alert-success', descripcion: 'Solicitud programada' },
            'Vigente': { badge: 'badge-primary', alert: 'alert-primary', descripcion: 'Solicitud vigente en ejecución' },
            'Extendida': { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: 'Solicitud con plazo extendido' }
        };
        
        const config = estadoConfig[solicitud.ESTADO] || { badge: 'badge-secondary', alert: 'alert-secondary', descripcion: '' };
        
        $('#gestionarDespEstadoAlert').removeClass().addClass('alert mb-0 d-flex align-items-center ' + config.alert);
        $('#gestionarDespEstadoBadge').removeClass().addClass('badge ml-2 ' + config.badge).text(solicitud.ESTADO);
        $('#gestionarDespEstadoDescripcion').text(config.descripcion);
        $('#gestionarDespObservacionesHeader').text(solicitud.OBSERVACIONES || 'Sin observaciones');
        
        // Identificación (EDITABLE)
        $('#gestionarDespIDSolicitud').val(solicitud.ID_SOLICITUD || '');
        $('#gestionarDespTipo').val(solicitud.TIPO_TRABAJO || '');
        $('#gestionarDespRelacionSODICEN').val(solicitud.RELACION_SODI_CEN || '');
        
        // Fechas Programadas (EDITABLE)
        if (solicitud.INICIO_PROGRAMADO) {
            const fechaInicio = convertirFechaParaInput(solicitud.INICIO_PROGRAMADO);
            $('#gestionarDespInicioProgramado').val(fechaInicio);
        }
        if (solicitud.FIN_PROGRAMADO) {
            const fechaFin = convertirFechaParaInput(solicitud.FIN_PROGRAMADO);
            $('#gestionarDespFinProgramado').val(fechaFin);
        }
        
        // Fechas Efectivas (EDITABLE)
        if (solicitud.INICIO_EFECTIVO) {
            const fechaInicioEfectivo = convertirFechaParaInput(solicitud.INICIO_EFECTIVO);
            $('#gestionarDespInicioEfectivo').val(fechaInicioEfectivo);
        }
        if (solicitud.FIN_EFECTIVO) {
            const fechaFinEfectivo = convertirFechaParaInput(solicitud.FIN_EFECTIVO);
            $('#gestionarDespFinEfectivo').val(fechaFinEfectivo);
        }
        
        // Empresas Involucradas (EDITABLE)
        $('#gestionarDespEmpresaSolicitante').val(solicitud.EMPRESA_SOLICITANTE || '');
        $('#gestionarDespEmpresaReceptora').val(solicitud.EMPRESA_RECEPTORA || '');
        
        // Instalación y Equipos (SOLO LECTURA)
        $('#gestionarDespInstalacionGM').val(solicitud.INSTALACION_GM || '');
        poblarEquiposSelectMultiple('#gestionarDespEquipos', solicitud.EQUIPOS);
        
        // Características de la Intervención (SOLO LECTURA)
        $('#gestionarDespTipoIntervencion').val(solicitud.TIPO_INTERVENCION || '');
        $('#gestionarDespPotencia').val(solicitud.POTENCIA || '');
        $('#gestionarDespAplicaSODI').val(solicitud.APLICA_SODI || '');
        $('#gestionarDespRiesgo').val(solicitud.RIESGO || '');
        
        // Descripción del Riesgo del Trabajo (condicional - solo si es Medio o Alto)
        if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
            $('#gestionarDespDescripcionRiesgo').val(solicitud.DESCRIPCION_RIESGO || '');
            $('#gestionarDespDescripcionRiesgoContainer').show();
        } else {
            $('#gestionarDespDescripcionRiesgoContainer').hide();
        }
        
        // Descripción y Condiciones (SOLO LECTURA)
        $('#gestionarDespDescripcion').val(solicitud.DESCRIPCION || '');
        $('#gestionarDespCondiciones').val(solicitud.CONDICIONES || '');
        $('#gestionarDespComentariosActuales').val(solicitud.COMENTARIOS || '');
        $('#gestionarDespAfectaciones').val(solicitud.AFECTACIONES || '');
        
        // Descripción de Afectación (condicional - solo si hay afectaciones)
        if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '' && solicitud.AFECTACIONES !== '-') {
            $('#gestionarDespDescripcionAfectacion').val(solicitud.DESCRIPCION_AFECTACION || '');
            $('#gestionarDespDescripcionAfectacionContainer').show();
        } else {
            $('#gestionarDespDescripcionAfectacionContainer').hide();
        }
        
        // Archivo Adjunto (SOLO DESCARGA)
        if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
            $('#gestionarDespAdjunto').text(solicitud.ADJUNTO);
            $('#gestionarDespDescargarAdjunto').show();
        } else {
            $('#gestionarDespAdjunto').text('Sin archivo adjunto');
            $('#gestionarDespDescargarAdjunto').hide();
        }
        
        // Metadata del Sistema
        $('#gestionarDespIDRegistro').text(solicitud.ID_REGISTRO || '-');
        $('#gestionarDespCreado').text(solicitud.CREADO || '-');
        $('#gestionarDespActualizado').text(solicitud.ACTUALIZADO || '-');
        $('#gestionarDespAdministrador').text(solicitud.ADMINISTRADOR || '-');
        $('#gestionarDespSolicitante').text(solicitud.SOLICITANTE || '-');
        $('#gestionarDespCreadoPor').text(solicitud.CREADO_POR || '-');
        
        // Limpiar campo de observaciones
        $('#gestionarDespObservaciones').val('');
        
        // Aplicar reglas de editabilidad según estado
        aplicarReglasEditabilidadDespachador(solicitud.ESTADO);
        
        // Configurar transiciones de estado según el estado actual
        configurarTransicionesEstadoDesp(solicitud.ESTADO);
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('gestionar', solicitud);
        
        // Configurar tabs de Aprobadores y Distribución
        configurarTabsAprobadoresDistribucion('gestionarDesp', solicitud);
        
        console.log('Modal gestionar despachador poblado correctamente');
    }
    
    // ============================================
    // FUNCIONES AUXILIARES
    // ============================================
    
    // Función para configurar las transiciones de estado disponibles
    function configurarTransicionesEstadoDesp(estadoActual) {
        const contenedor = $('#gestionarDespAccionesContainer');
        contenedor.empty();
        
        let opcionesHTML = '';
        
        switch(estadoActual) {
            case 'Despachador Gestionando':
                // Puede avanzar a "Programada" o "Anulada"
                opcionesHTML = `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionProgramada" value="Programada" checked>
                        <label class="form-check-label" for="accionProgramada">
                            <strong>Programar Solicitud</strong> - Cambiar estado a "Programada"
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionAnuladaDesp" value="Anulada">
                        <label class="form-check-label text-danger" for="accionAnuladaDesp">
                            <strong>Anular Solicitud</strong> - Cambiar estado a "Anulada"
                        </label>
                    </div>
                `;
                break;
                
            case 'Programada':
                // Puede avanzar a "Vigente" o "Rechazada"
                opcionesHTML = `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionVigente" value="Vigente" checked>
                        <label class="form-check-label" for="accionVigente">
                            <strong>Iniciar Trabajo</strong> - Cambiar estado a "Vigente" (requiere fecha efectiva de inicio)
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionRechazadaP" value="Rechazada">
                        <label class="form-check-label" for="accionRechazadaP">
                            <strong>Rechazar Trabajo</strong> - Cambiar estado a "Rechazada"
                        </label>
                    </div>
                `;
                break;
                
            case 'Vigente':
                // Puede avanzar a "Extendida", "Suspendida", "Finalizada" o "Programada"
                opcionesHTML = `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionExtendida" value="Extendida" checked>
                        <label class="form-check-label" for="accionExtendida">
                            <strong>Extender Trabajo</strong> - Cambiar estado a "Extendida"
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionSuspendidaV" value="Suspendida">
                        <label class="form-check-label" for="accionSuspendidaV">
                            <strong>Suspender Trabajo</strong> - Cambiar estado a "Suspendida"
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionFinalizada" value="Finalizada">
                        <label class="form-check-label" for="accionFinalizada">
                            <strong>Finalizar Trabajo</strong> - Cambiar estado a "Finalizada" (requiere fecha efectiva de fin)
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionDevolverProgramada" value="Programada">
                        <label class="form-check-label" for="accionDevolverProgramada">
                            <strong>Devolver a Programada</strong> - Cambiar estado a "Programada"
                            <small class="text-warning d-block"><i class="fas fa-exclamation-triangle mr-1"></i>Se borrará la fecha efectiva de inicio</small>
                        </label>
                    </div>
                `;
                break;
                
            case 'Extendida':
                // Puede avanzar a "Finalizada" o "Vigente"
                opcionesHTML = `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionFinalizadaE" value="Finalizada" checked>
                        <label class="form-check-label" for="accionFinalizadaE">
                            <strong>Finalizar Trabajo</strong> - Cambiar estado a "Finalizada" (requiere fecha efectiva de fin - OBLIGATORIA)
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionDevolverVigenteE" value="Vigente">
                        <label class="form-check-label" for="accionDevolverVigenteE">
                            <strong>Devolver a Vigente</strong> - Cambiar estado a "Vigente"
                        </label>
                    </div>
                `;
                break;
                
            case 'Suspendida':
                // Puede avanzar a "Finalizada" o "Vigente"
                opcionesHTML = `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionFinalizadaS" value="Finalizada" checked>
                        <label class="form-check-label" for="accionFinalizadaS">
                            <strong>Finalizar Trabajo</strong> - Cambiar estado a "Finalizada" (requiere fecha efectiva de fin - OBLIGATORIA)
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionDevolverVigenteS" value="Vigente">
                        <label class="form-check-label" for="accionDevolverVigenteS">
                            <strong>Devolver a Vigente</strong> - Cambiar estado a "Vigente"
                        </label>
                    </div>
                `;
                break;
                
            case 'Finalizada':
                // Puede devolver a "Extendida", "Suspendida" o "Vigente"
                opcionesHTML = `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionDevolverExtendida" value="Extendida" checked>
                        <label class="form-check-label" for="accionDevolverExtendida">
                            <strong>Devolver a Extendida</strong> - Cambiar estado a "Extendida"
                            <small class="text-warning d-block"><i class="fas fa-exclamation-triangle mr-1"></i>La fecha efectiva de finalización se borrará</small>
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionDevolverSuspendida" value="Suspendida">
                        <label class="form-check-label" for="accionDevolverSuspendida">
                            <strong>Devolver a Suspendida</strong> - Cambiar estado a "Suspendida"
                            <small class="text-warning d-block"><i class="fas fa-exclamation-triangle mr-1"></i>La fecha efectiva de finalización se borrará</small>
                        </label>
                    </div>
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="radio" name="accionGestionDesp" id="accionDevolverVigenteF" value="Vigente">
                        <label class="form-check-label" for="accionDevolverVigenteF">
                            <strong>Devolver a Vigente</strong> - Cambiar estado a "Vigente"
                            <small class="text-warning d-block"><i class="fas fa-exclamation-triangle mr-1"></i>La fecha efectiva de finalización se borrará</small>
                        </label>
                    </div>
                `;
                break;
                
            default:
                opcionesHTML = `
                    <div class="alert alert-warning mb-0">
                        <i class="fas fa-exclamation-triangle mr-2"></i>
                        No hay transiciones de estado disponibles para el estado actual: <strong>${estadoActual}</strong>
                    </div>
                `;
        }
        
        contenedor.html(opcionesHTML);
    }

    // Aplicar reglas de editabilidad según estado (Despachador)
    function aplicarReglasEditabilidadDespachador(estado) {
        const modalContext = '#modalGestionarSolicitudDesp';
        
        // Resetear campos a readonly/disabled
        $(`${modalContext} input, ${modalContext} select, ${modalContext} textarea`).prop('readonly', true).prop('disabled', true);
        
        // Campos siempre editables para el despachador
        $(`${modalContext} #gestionarDespComentarios`).prop('readonly', false);
        
        // Aplicar reglas según estado
        if (estado === 'Programada') {
            // En estado Programada, puede editar fechas efectivas para iniciar
            $(`${modalContext} #gestionarDespInicioEfectivo`).prop('readonly', false).attr('required', true);
        } else if (estado === 'Vigente') {
            // En estado Vigente, puede editar fecha fin efectiva para finalizar
            $(`${modalContext} #gestionarDespFinEfectivo`).prop('readonly', false).attr('required', true);
        } else if (estado === 'Extendida') {
            // En estado Extendida, puede editar fecha fin efectiva
            $(`${modalContext} #gestionarDespFinEfectivo`).prop('readonly', false).attr('required', true);
        }
    }
    
    // Configurar estado y acciones disponibles para el despachador
    function configurarEstadoGestionDespachador(estado) {
        const modalContext = '#modalGestionarSolicitudDesp';
        const accionesContainer = $(`${modalContext} #gestionarDespAccionesContainer`);
        
        let acciones = '';
        
        switch(estado) {
            case 'Programada':
                acciones = `
                    <div class="custom-control custom-radio">
                        <input type="radio" id="accionIniciar" name="accionGestionDesp" class="custom-control-input" value="Vigente" checked>
                        <label class="custom-control-label" for="accionIniciar">
                            <i class="fas fa-play mr-1"></i>Iniciar Trabajo
                        </label>
                        <small class="form-text text-muted ml-4">Cambiar a "Vigente"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionSuspender" name="accionGestionDesp" class="custom-control-input" value="Suspendida">
                        <label class="custom-control-label" for="accionSuspender">
                            <i class="fas fa-pause mr-1"></i>Suspender Trabajo
                        </label>
                        <small class="form-text text-muted ml-4">Cambiar a "Suspendida"</small>
                    </div>
                `;
                break;
                
            case 'Vigente':
                acciones = `
                    <div class="custom-control custom-radio">
                        <input type="radio" id="accionFinalizar" name="accionGestionDesp" class="custom-control-input" value="Finalizada" checked>
                        <label class="custom-control-label" for="accionFinalizar">
                            <i class="fas fa-check mr-1"></i>Finalizar Trabajo
                        </label>
                        <small class="form-text text-muted ml-4">Cambiar a "Finalizada"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionExtender" name="accionGestionDesp" class="custom-control-input" value="Extendida">
                        <label class="custom-control-label" for="accionExtender">
                            <i class="fas fa-clock mr-1"></i>Extender Trabajo
                        </label>
                        <small class="form-text text-muted ml-4">Cambiar a "Extendida"</small>
                    </div>
                    <div class="custom-control custom-radio mt-2">
                        <input type="radio" id="accionSuspender" name="accionGestionDesp" class="custom-control-input" value="Suspendida">
                        <label class="custom-control-label" for="accionSuspender">
                            <i class="fas fa-pause mr-1"></i>Suspender Trabajo
                        </label>
                        <small class="form-text text-muted ml-4">Cambiar a "Suspendida"</small>
                    </div>
                `;
                break;
                
            case 'Extendida':
                acciones = `
                    <div class="custom-control custom-radio">
                        <input type="radio" id="accionFinalizar" name="accionGestionDesp" class="custom-control-input" value="Finalizada" checked>
                        <label class="custom-control-label" for="accionFinalizar">
                            <i class="fas fa-check mr-1"></i>Finalizar Trabajo
                        </label>
                        <small class="form-text text-muted ml-4">Cambiar a "Finalizada"</small>
                    </div>
                `;
                break;
                
            default:
                acciones = '<p class="text-muted">No hay acciones disponibles para este estado</p>';
        }
        
        accionesContainer.html(acciones);
    }
    
    // Confirmar gestión de solicitud - Despachador
    window.confirmarGestionSolicitudDesp = function() {
        const modalContext = '#modalGestionarSolicitudDesp';
        const solicitudId = $(`${modalContext}`).data('solicitudId');
        const comentarios = $(`${modalContext} #gestionarDespComentarios`).val().trim();
        const accionSeleccionada = $(`${modalContext} input[name="accionGestionDesp"]:checked`).val();
        
        if (!comentarios) {
            alert('Por favor ingrese comentarios sobre la gestión');
            return;
        }
        
        if (!accionSeleccionada) {
            alert('Por favor seleccione una acción');
            return;
        }
        
        console.log('Confirmando gestión despachador:', { solicitudId, nuevoEstado: accionSeleccionada, comentarios });
        alert(`Funcionalidad en desarrollo.\n\nSolicitud: ${solicitudId}\nNuevo Estado: ${accionSeleccionada}\nComentarios: ${comentarios}`);
        $(`${modalContext}`).modal('hide');
    };
    
    // ============================================
    // FUNCIONES DE EDITAR
    // ============================================
    
    // Función para editar solicitud (solo en estado "Despachador Gestionando")
    window.editarSolicitudDesp = function(solicitudId) {
        console.log('Editar solicitud (Despachador):', solicitudId);
        const solicitud = obtenerSolicitud(solicitudId);
        
        if (!solicitud) {
            console.error('Solicitud no encontrada:', solicitudId);
            return;
        }
        
        // Verificar que esté en estado "Despachador Gestionando"
        if (solicitud.ESTADO !== 'Despachador Gestionando') {
            alert('Solo se pueden editar solicitudes en estado "Despachador Gestionando"');
            return;
        }
        
        const modal = $('#modalEditarSolicitudDesp');
        
        // Limpiar eventos previos y agregar nuevo listener
        modal.off('shown.bs.modal').on('shown.bs.modal', function() {
            poblarModalEditarDesp(solicitud);
        });
        
        modal.modal('show');
    };
    
    // Función para poblar el modal de edición del despachador
    function poblarModalEditarDesp(solicitud) {
        const modalContext = '#modalEditarSolicitudDesp';
        
        // Header: Estado
        $(`${modalContext} #editarDespEstadoBadge`).text(solicitud.ESTADO);
        
        // Identificación (EDITABLE)
        $(`${modalContext} #editarDespIDSolicitud`).val(solicitud.ID_SOLICITUD || '').prop('readonly', false);
        $(`${modalContext} #editarDespTipo`).val(solicitud.TIPO_TRABAJO || '').prop('disabled', false);
        $(`${modalContext} #editarDespRelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '').prop('readonly', false);
        
        // Fechas Programadas (EDITABLE)
        if (solicitud.INICIO_PROGRAMADO) {
            const fechaInicio = convertirFechaParaInput(solicitud.INICIO_PROGRAMADO);
            $(`${modalContext} #editarDespInicioProgramado`).val(fechaInicio).prop('readonly', false);
        }
        if (solicitud.FIN_PROGRAMADO) {
            const fechaFin = convertirFechaParaInput(solicitud.FIN_PROGRAMADO);
            $(`${modalContext} #editarDespFinProgramado`).val(fechaFin).prop('readonly', false);
        }
        
        // Empresas Involucradas (EDITABLE)
        $(`${modalContext} #editarDespEmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '').prop('disabled', false);
        $(`${modalContext} #editarDespEmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '').prop('disabled', false);
        
        // Instalación GM (EDITABLE)
        $(`${modalContext} #editarDespInstalacionGM`).val(solicitud.INSTALACION_GM || '').prop('disabled', false);
        
        // Equipos (SOLO LECTURA - vacío)
        $(`${modalContext} #editarDespEquipos`).val('').prop('readonly', true);
        
        // Características de la Intervención (SOLO LECTURA - vacío)
        $(`${modalContext} #editarDespTipoIntervencion`).val('').prop('disabled', true);
        $(`${modalContext} #editarDespRiesgo`).val('').prop('disabled', true);
        $(`${modalContext} #editarDespSODI`).val('').prop('disabled', true);
        
        // Potencia (EDITABLE)
        $(`${modalContext} #editarDespPotencia`).val(solicitud.POTENCIA || '').prop('readonly', false);
        
        // Descripción y Condiciones (EDITABLE)
        $(`${modalContext} #editarDespDescripcion`).val(solicitud.DESCRIPCION || '').prop('readonly', false);
        $(`${modalContext} #editarDespCondiciones`).val(solicitud.CONDICIONES || '').prop('readonly', false);
        
        // Afectaciones (SOLO LECTURA - vacío)
        $(`${modalContext} #editarDespAfectaciones`).val('').prop('readonly', true);
        
        // Comentarios (EDITABLE)
        $(`${modalContext} #editarDespComentarios`).val(solicitud.COMENTARIOS || '').prop('readonly', false);
        
        // Archivo Adjunto (EDITABLE)
        if (solicitud.ADJUNTO && solicitud.ADJUNTO !== '-') {
            $(`${modalContext} #editarDespAdjuntoActual`).text(solicitud.ADJUNTO);
            $(`${modalContext} #editarDespDescargarAdjunto`).show();
        } else {
            $(`${modalContext} #editarDespAdjuntoActual`).text('Sin archivo adjunto');
            $(`${modalContext} #editarDespDescargarAdjunto`).hide();
        }
        
        // Guardar ID de solicitud
        $(`${modalContext} #editDespSolicitudId`).val(solicitud.ID_REGISTRO);
        
        console.log('Modal editar despachador poblado correctamente');
    }
    
    // Función para actualizar la solicitud del despachador
    window.actualizarSolicitudDesp = function() {
        const modalContext = '#modalEditarSolicitudDesp';
        const solicitudId = $(`${modalContext} #editDespSolicitudId`).val();
        
        // Recopilar datos del formulario
        const datosActualizados = {
            ID_SOLICITUD: $(`${modalContext} #editarDespIDSolicitud`).val(),
            TIPO: $(`${modalContext} #editarDespTipo`).val(),
            RELACION_SODI_CEN: $(`${modalContext} #editarDespRelacionSODICEN`).val(),
            INICIO_PROGRAMADO: $(`${modalContext} #editarDespInicioProgramado`).val(),
            FIN_PROGRAMADO: $(`${modalContext} #editarDespFinProgramado`).val(),
            EMPRESA_SOLICITANTE: $(`${modalContext} #editarDespEmpresaSolicitante`).val(),
            EMPRESA_RECEPTORA: $(`${modalContext} #editarDespEmpresaReceptora`).val(),
            INSTALACION_GM: $(`${modalContext} #editarDespInstalacionGM`).val(),
            POTENCIA: $(`${modalContext} #editarDespPotencia`).val(),
            DESCRIPCION: $(`${modalContext} #editarDespDescripcion`).val(),
            CONDICIONES: $(`${modalContext} #editarDespCondiciones`).val(),
            COMENTARIOS: $(`${modalContext} #editarDespComentarios`).val()
        };
        
        console.log('Actualizando solicitud (Despachador):', solicitudId, datosActualizados);
        
        // Aquí iría la lógica para actualizar la solicitud
        alert(`Funcionalidad en desarrollo.\n\nSolicitud ID: ${solicitudId}\nDatos actualizados correctamente.`);
        
        // Cerrar modal
        $(`${modalContext}`).modal('hide');
    };
    
    // ============================================
    // FUNCIONES DE COMPATIBILIDAD
    // ============================================
    
    // Funciones antiguas que redirigen a las nuevas funciones unificadas
    window.verSolicitudPendienteDesp = function(solicitudId) { verSolicitudDesp(solicitudId); };
    window.verSolicitudEnAnalisisDesp = function(solicitudId) { verSolicitudDesp(solicitudId); };
    window.verSolicitudProgramadaDesp = function(solicitudId) { verSolicitudDesp(solicitudId); };
    window.verSolicitudAdminGestionandoDesp = function(solicitudId) { verSolicitudDesp(solicitudId); };
    window.verSolicitudVigenteDesp = function(solicitudId) { verSolicitudDesp(solicitudId); };
    window.verSolicitudExtendidaDesp = function(solicitudId) { verSolicitudDesp(solicitudId); };
    
    console.log('✅ Despachador Modals cargado correctamente');
});
