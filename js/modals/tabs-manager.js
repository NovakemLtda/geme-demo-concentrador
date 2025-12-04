// ============================================
// TABS MANAGER - Funciones para manejo de tabs de aprobadores/distribución
// ============================================

/**
 * Configurar tabs de aprobadores y distribución en modales
 * @param {string} prefijo - Prefijo del modal (ej: 'verAdmin', 'gestionarDesp')
 * @param {object} solicitud - Objeto de solicitud con datos
 */
function configurarTabsAprobadoresDistribucion(prefijo, solicitud) {
    // Mostrar/ocultar tab de Aprobadores
    if (solicitud.TIENE_APROBACION && solicitud.APROBADORES && solicitud.APROBADORES.length > 0) {
        $(`#${prefijo}-aprobadores-tab-li`).show();
        poblarListaAprobadores(prefijo, solicitud.APROBADORES);
    } else {
        $(`#${prefijo}-aprobadores-tab-li`).hide();
    }
    
    // Mostrar/ocultar tab de Lista de Distribución
    if (solicitud.TIENE_DISTRIBUCION && solicitud.LISTA_DISTRIBUCION && solicitud.LISTA_DISTRIBUCION.length > 0) {
        $(`#${prefijo}-distribucion-tab-li`).show();
        poblarListaDistribucion(prefijo, solicitud.LISTA_DISTRIBUCION);
    } else {
        $(`#${prefijo}-distribucion-tab-li`).hide();
    }
}

/**
 * Poblar lista de aprobadores en el tab correspondiente
 * @param {string} prefijo - Prefijo del modal
 * @param {array} aprobadores - Array de aprobadores
 */
function poblarListaAprobadores(prefijo, aprobadores) {
    const container = $(`#${prefijo}-listaAprobadores`);
    
    if (!aprobadores || aprobadores.length === 0) {
        container.html(`
            <div class="text-center text-muted py-4">
                <i class="fas fa-users fa-2x mb-2"></i>
                <p>No hay aprobadores asignados</p>
            </div>
        `);
        return;
    }
    
    container.empty();
    aprobadores.forEach((aprobador, index) => {
        const item = $(`
            <div class="border-bottom py-3 ${index === aprobadores.length - 1 ? 'border-bottom-0' : ''}">
                <div class="d-flex align-items-center">
                    <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mr-3" 
                         style="width: 40px; height: 40px; font-weight: bold;">
                        ${index + 1}
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="mb-1">
                            ${aprobador.NOMBRE}
                            <span class="badge badge-success ml-2">Aprobador</span>
                        </h6>
                        <p class="mb-0 text-muted">
                            <i class="fas fa-envelope mr-2"></i>${aprobador.EMAIL}
                        </p>
                    </div>
                </div>
            </div>
        `);
        container.append(item);
    });
}

/**
 * Poblar lista de distribución en el tab correspondiente
 * @param {string} prefijo - Prefijo del modal
 * @param {array} distribucion - Array de usuarios de distribución
 */
function poblarListaDistribucion(prefijo, distribucion) {
    const container = $(`#${prefijo}-listaDistribucion`);
    
    if (!distribucion || distribucion.length === 0) {
        container.html(`
            <div class="text-center text-muted py-4">
                <i class="fas fa-share-alt fa-2x mb-2"></i>
                <p>No hay usuarios en la lista de distribución</p>
            </div>
        `);
        return;
    }
    
    container.empty();
    distribucion.forEach((usuario, index) => {
        // Determinar si es usuario del sistema o externo
        const esUsuarioSistema = usuario.TIPO === 'SISTEMA' || usuario.ES_USUARIO_SISTEMA;
        const iconoTipo = esUsuarioSistema ? 'fas fa-user-cog' : 'fas fa-user';
        
        const item = $(`
            <div class="border-bottom py-3 ${index === distribucion.length - 1 ? 'border-bottom-0' : ''}">
                <div class="d-flex align-items-center">
                    <div class="${esUsuarioSistema ? 'bg-info' : 'bg-secondary'} text-white rounded-circle d-flex align-items-center justify-content-center mr-3" 
                         style="width: 40px; height: 40px;">
                        <i class="${iconoTipo}"></i>
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="mb-1">
                            ${usuario.NOMBRE}
                            ${esUsuarioSistema ? '<span class="badge badge-primary ml-2">Sistema</span>' : '<span class="badge badge-secondary ml-2">Externo</span>'}
                        </h6>
                        <p class="mb-0 text-muted">
                            <i class="fas fa-envelope mr-2"></i>${usuario.EMAIL}
                        </p>
                    </div>
                </div>
            </div>
        `);
        container.append(item);
    });
}

// Exponer funciones globalmente
window.configurarTabsAprobadoresDistribucion = configurarTabsAprobadoresDistribucion;
window.poblarListaAprobadores = poblarListaAprobadores;
window.poblarListaDistribucion = poblarListaDistribucion;

console.log('✅ Tabs Manager cargado correctamente');
