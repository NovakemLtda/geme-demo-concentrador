// ============================================
// GLOBAL FUNCTIONS - Funciones globales y stubs
// ============================================

$(document).ready(function() {
    
    // ============================================
    // FUNCIONES GLOBALES (STUBS)
    // ============================================
    
    // Función para instanciar camino (navegación)
    window.InstanciarCamino = function(nivel, id, param, url) {
        console.log('InstanciarCamino:', { nivel, id, param, url });
        
        // Aquí iría la lógica real de navegación
        // Por ahora solo mostramos un mensaje
        if (url) {
            console.log('Navegando a:', url);
            // window.location.href = url;
            
            // Para demo, mostrar alerta
            alert('Navegación a: ' + url);
        }
    };
    
    // Función para obtener contador de Tomas de Conocimiento
    window.getCountTC = function() {
        console.log('Obteniendo contador TC...');
        
        var $spinner = $('#spinner-cargatc');
        var $icon = $('#btnRecargaTC');
        var $count = $('#countTC');
        
        // Mostrar spinner
        $spinner.removeClass('d-none');
        $icon.addClass('d-none');
        
        // Simular llamada AJAX
        setTimeout(function() {
            var newCount = Math.floor(Math.random() * 10);
            $count.text(newCount);
            
            // Ocultar spinner
            $spinner.addClass('d-none');
            $icon.removeClass('d-none');
            
            // Animación
            $count.addClass('badge-warning');
            setTimeout(function() {
                $count.removeClass('badge-warning');
            }, 500);
            
            console.log('Contador TC actualizado:', newCount);
        }, 1000);
    };
    
    // Función para ir a Tomas de Conocimiento
    window.irTomasConocimiento = function() {
        console.log('Ir a Tomas de Conocimiento');
        alert('Navegando a Mis Tomas de Conocimiento');
        // window.location.href = '/sites/geme/SitePages/TomasConocimiento.aspx';
    };
    
    // Función para obtener datos de tareas
    window.getDatosTareasInit = function(filtro) {
        console.log('Obteniendo tareas con filtro:', filtro);
        
        var $spinner = $('#spinner-cargatareas');
        var $icon = $('#btnRecarga');
        var $count = $('#countTareas');
        
        // Mostrar spinner
        $spinner.removeClass('d-none');
        $icon.addClass('d-none');
        
        // Simular llamada AJAX
        setTimeout(function() {
            var newCount = Math.floor(Math.random() * 200);
            $count.text(newCount);
            
            // Ocultar spinner
            $spinner.addClass('d-none');
            $icon.removeClass('d-none');
            
            // Animación
            $count.addClass('badge-warning');
            setTimeout(function() {
                $count.removeClass('badge-warning');
            }, 500);
            
            console.log('Contador Tareas actualizado:', newCount);
        }, 1000);
    };
    
    // Función para ver mis tareas
    window.verMisTarea = function() {
        console.log('Ver Mis Tareas');
        loadView('views/mis-tareas.html?v=14');
    };
    
    // Variable global para filtros de tareas
    window.H_filtroTareas = {
        filtro: 'todos'
    };
    
    // ============================================
    // ANIMACIONES DE ENTRADA
    // ============================================
    function animateElements() {
        $('.card').each(function(index) {
            var $this = $(this);
            setTimeout(function() {
                $this.addClass('fade-in');
            }, index * 100);
        });
    }
    
    // Ejecutar animaciones
    animateElements();
    
    // ============================================
    // ACTUALIZACIÓN AUTOMÁTICA DE CONTADORES
    // ============================================
    function autoUpdateCounters() {
        // Actualizar cada 5 minutos
        setInterval(function() {
            console.log('Actualizando contadores automáticamente...');
            // getCountTC();
            // getDatosTareasInit(H_filtroTareas['filtro']);
        }, 300000); // 5 minutos
    }
    
    // Iniciar actualización automática (comentado para demo)
    // autoUpdateCounters();
    
    // ============================================
    // BREADCRUMB DINÁMICO
    // ============================================
    function updateBreadcrumb(path) {
        var breadcrumbHtml = '<nav aria-label="breadcrumb"><ol class="breadcrumb">';
        breadcrumbHtml += '<li class="breadcrumb-item"><a href="/sites/geme/">Inicio</a></li>';
        
        if (path && path.length > 0) {
            path.forEach(function(item, index) {
                if (index === path.length - 1) {
                    breadcrumbHtml += '<li class="breadcrumb-item active" aria-current="page">' + item + '</li>';
                } else {
                    breadcrumbHtml += '<li class="breadcrumb-item"><a href="#">' + item + '</a></li>';
                }
            });
        }
        
        breadcrumbHtml += '</ol></nav>';
        
        return breadcrumbHtml;
    }
    
    window.updateBreadcrumb = updateBreadcrumb;
    
    // ============================================
    // FUNCIONES DE BITÁCORA
    // ============================================
    
    // Función para abrir bitácora
    window.abrirBitacora = function(solicitudId) {
        console.log('Abriendo bitácora de solicitud:', solicitudId);
        
        // Verificar si el modal existe
        if ($('#modalBitacora').length === 0) {
            console.error('Modal #modalBitacora no encontrado en el DOM');
            alert('Error: Modal de bitácora no cargado. Por favor recarga la página.');
            return;
        }
        
        console.log('Modal bitácora encontrado, actualizando ID...');
        $('#bitacoraIdSolicitud').text('SOL-' + String(solicitudId).padStart(3, '0'));
        
        console.log('Mostrando modal bitácora...');
        $('#modalBitacora').modal('show');
    };
    
    // Función para agregar entrada a bitácora
    window.agregarEntradaBitacora = function() {
        console.log('Agregando nueva entrada a bitácora');
        alert('Funcionalidad de agregar entrada en desarrollo');
    };
    
    // Función para editar entrada de bitácora
    window.editarEntradaBitacora = function(entradaId) {
        console.log('Editando entrada de bitácora:', entradaId);
        alert('Funcionalidad de editar entrada en desarrollo');
    };
    
    // Función para eliminar entrada de bitácora
    window.eliminarEntradaBitacora = function(entradaId) {
        console.log('Eliminando entrada de bitácora:', entradaId);
        if (confirm('¿Está seguro de que desea eliminar esta entrada de la bitácora?')) {
            alert('Funcionalidad de eliminar entrada en desarrollo');
        }
    };
    
    // Función de ejemplo para demostrar la carga
    window.showEjemplo = function() {
        $('#dynamic-content').html($('#ejemplo-estilos').html());
    };
    
    console.log('✅ Global Functions cargado correctamente');
});

// ============================================
// FUNCIÓN GENÉRICA PARA POBLAR MODAL DE CLONAR
// ============================================

window.poblarModalClonar = function(solicitud, tipo) {
    const prefix = 'clonar' + tipo;
    
    // Determinar el contexto del modal según el tipo
    const modalContext = tipo === 'Desp' ? '#modalClonarSolicitudDesp' : '#modalClonarAdmin';
    
    console.log('Poblando modal clonar ' + tipo + ':', solicitud);
    
    // Identificación - ID Solicitud queda vacío, Tipo y Relación se copian
    $(`${modalContext} #${prefix}IDSolicitud`).val('');
    $(`${modalContext} #${prefix}Tipo`).val(solicitud.TIPO_TRABAJO || '');
    $(`${modalContext} #${prefix}RelacionSODICEN`).val(solicitud.RELACION_SODI_CEN || '');
    
    // Fechas Programadas - quedan vacías
    $(`${modalContext} #${prefix}InicioProgramado`).val('');
    $(`${modalContext} #${prefix}FinProgramado`).val('');
    
    // Empresas Involucradas - se copian
    $(`${modalContext} #${prefix}EmpresaSolicitante`).val(solicitud.EMPRESA_SOLICITANTE || '');
    $(`${modalContext} #${prefix}EmpresaReceptora`).val(solicitud.EMPRESA_RECEPTORA || '');
    
    // Instalación y Equipos - se copian
    $(`${modalContext} #${prefix}InstalacionGM`).val(solicitud.INSTALACION_GM || '');
    $(`${modalContext} #${prefix}Equipos`).val(solicitud.EQUIPOS || '');
    
    // Características de la Intervención - se copian
    $(`${modalContext} #${prefix}TipoIntervencion`).val(solicitud.TIPO_INTERVENCION || '');
    $(`${modalContext} #${prefix}Potencia`).val(solicitud.POTENCIA || '');
    $(`${modalContext} #${prefix}AplicaSODI`).val(solicitud.APLICA_SODI || '');
    $(`${modalContext} #${prefix}Riesgo`).val(solicitud.RIESGO || '');
    
    // Descripción del Riesgo del Trabajo (condicional) - se copia
    if (solicitud.RIESGO === 'Medio' || solicitud.RIESGO === 'Alto') {
        $(`${modalContext} #${prefix}DescripcionRiesgo`).val(solicitud.DESCRIPCION_RIESGO || '');
        $(`${modalContext} #${prefix}DescripcionRiesgoContainer`).show();
        $(`${modalContext} #${prefix}DescripcionRiesgo`).attr('required', 'required');
    } else {
        $(`${modalContext} #${prefix}DescripcionRiesgoContainer`).hide();
        $(`${modalContext} #${prefix}DescripcionRiesgo`).val('').removeAttr('required');
    }
    
    // Descripción y Condiciones - se copian
    $(`${modalContext} #${prefix}Descripcion`).val(solicitud.DESCRIPCION || '');
    $(`${modalContext} #${prefix}Condiciones`).val(solicitud.CONDICIONES || '');
    $(`${modalContext} #${prefix}Comentarios`).val(solicitud.COMENTARIOS || '');
    
    // Afectaciones - se copian
    $(`${modalContext} #${prefix}Afectaciones`).val(solicitud.AFECTACIONES || '');
    
    // Descripción de Afectación (condicional) - se copia
    if (solicitud.AFECTACIONES && solicitud.AFECTACIONES !== '') {
        $(`${modalContext} #${prefix}DescripcionAfectacion`).val(solicitud.DESCRIPCION_AFECTACION || '');
        $(`${modalContext} #${prefix}DescripcionAfectacionContainer`).show();
        $(`${modalContext} #${prefix}DescripcionAfectacion`).attr('required', 'required');
    } else {
        $(`${modalContext} #${prefix}DescripcionAfectacionContainer`).hide();
        $(`${modalContext} #${prefix}DescripcionAfectacion`).val('').removeAttr('required');
    }
    
    // Archivos Adjuntos - quedan vacíos
    $(`${modalContext} #${prefix}Adjunto`).val('');
    $(`${modalContext} #${prefix}SODIAdjunto`).val('');
    $(`${modalContext} .custom-file-label`).text('Seleccionar archivo...');
    
    // Configurar tabs de Aprobadores y Distribución
    configurarTabsAprobadoresDistribucion(prefix, solicitud);
    
    console.log('Modal clonar ' + tipo + ' poblado correctamente');
};
