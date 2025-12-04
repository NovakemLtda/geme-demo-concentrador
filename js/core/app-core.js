// ============================================
// APP CORE - Funcionalidades centrales de la aplicación
// ============================================

$(document).ready(function() {
    console.log('App Core iniciando...');
    
    // ============================================
    // CARGAR CONTENIDO DINÁMICO
    // ============================================
    
    // Función para limpiar modales antes de cargar nueva vista
    function limpiarModales() {
        // Cerrar todos los modales abiertos
        $('.modal').modal('hide');
        
        // Eliminar todos los backdrops
        $('.modal-backdrop').remove();
        
        // Restaurar el body
        $('body').removeClass('modal-open');
        $('body').css({
            'overflow': '',
            'padding-right': ''
        });
        
        // Limpiar eventos de modales para evitar duplicados
        $('.modal').off('hidden.bs.modal');
    }
    
    // Función para limpiar DataTables existentes
    function limpiarDataTables() {
        // Verificar si DataTables está disponible
        if (typeof $.fn.DataTable === 'undefined') {
            console.log('DataTables no está disponible, saltando limpieza...');
            return;
        }
        
        // Destruir todas las instancias de DataTables en el contenido dinámico
        $('#dynamic-content table').each(function() {
            try {
                if ($.fn.DataTable.isDataTable(this)) {
                    $(this).DataTable().destroy();
                    console.log('DataTable destruida:', this.id || 'tabla sin ID');
                }
            } catch (e) {
                console.warn('Error al destruir DataTable:', e);
            }
        });
        
        // Limpiar filtros personalizados de DataTables
        try {
            if ($.fn.dataTable && $.fn.dataTable.ext && $.fn.dataTable.ext.search) {
                $.fn.dataTable.ext.search = [];
                console.log('Filtros de DataTables limpiados');
            }
        } catch (e) {
            console.warn('Error al limpiar filtros de DataTables:', e);
        }
    }
    
    // Función para cargar vistas HTML en el contenedor dinámico
    window.loadView = function(viewPath) {
        console.log('🔄 Cargando vista:', viewPath);
        
        // Limpiar modales y DataTables antes de cargar nueva vista
        limpiarModales();
        limpiarDataTables();
        
        $('#dynamic-content').html('<div class="text-center my-5"><i class="fa fa-spinner fa-spin fa-3x text-primary"></i><p class="mt-3">Cargando...</p></div>');
        
        $.ajax({
            url: viewPath,
            method: 'GET',
            success: function(data) {
                // Insertar el contenido HTML directamente
                $('#dynamic-content').html(data);
                
                // Esperar un momento para que el DOM se actualice completamente
                setTimeout(function() {
                    // Buscar y ejecutar scripts con src primero
                    var scriptsWithSrc = [];
                    $('#dynamic-content script[src]').each(function() {
                        var src = $(this).attr('src');
                        if (src) {
                            scriptsWithSrc.push(src);
                        }
                    });
                    
                    // Cargar scripts externos secuencialmente
                    function loadScriptsSequentially(scripts, callback) {
                        if (scripts.length === 0) {
                            callback();
                            return;
                        }
                        
                        var script = scripts.shift();
                        $.getScript(script).done(function() {
                            loadScriptsSequentially(scripts, callback);
                        }).fail(function() {
                            console.warn('Error cargando script:', script);
                            loadScriptsSequentially(scripts, callback);
                        });
                    }
                    
                    // Después de cargar scripts externos, ejecutar scripts inline
                    loadScriptsSequentially(scriptsWithSrc, function() {
                        // Ejecutar scripts inline
                        $('#dynamic-content script:not([src])').each(function() {
                            var scriptContent = this.text || this.textContent || this.innerHTML;
                            if (scriptContent && scriptContent.trim() !== '') {
                                try {
                                    // Usar eval en lugar de Function constructor para preservar el contexto
                                    eval(scriptContent);
                                } catch (e) {
                                    console.error('Error ejecutando script inline:', e);
                                    console.log('Script content:', scriptContent.substring(0, 200) + '...');
                                }
                            }
                        });
                    });
                }, 50); // Pequeño delay para asegurar que el DOM esté listo
            },
            error: function() {
                $('#dynamic-content').html('<div class="alert alert-danger"><i class="fas fa-exclamation-triangle"></i> Error al cargar la vista</div>');
            }
        });
    };
    
    // ============================================
    // NOTIFICACIONES
    // ============================================
    function showNotification(message, type = 'info') {
        var bgColor = {
            'success': '#28a745',
            'error': '#dc3545',
            'warning': '#ffc107',
            'info': '#17a2b8'
        };
        
        var notification = $('<div>')
            .addClass('notification')
            .css({
                'position': 'fixed',
                'top': '90px',
                'right': '20px',
                'background': bgColor[type] || bgColor.info,
                'color': 'white',
                'padding': '15px 20px',
                'border-radius': '8px',
                'box-shadow': '0 4px 12px rgba(0,0,0,0.3)',
                'z-index': '9999',
                'min-width': '250px',
                'animation': 'slideInRight 0.5s ease'
            })
            .html('<i class="fas fa-info-circle mr-2"></i>' + message);
        
        $('body').append(notification);
        
        setTimeout(function() {
            notification.fadeOut(500, function() {
                $(this).remove();
            });
        }, 3000);
    }
    
    // Exponer función globalmente
    window.showNotification = showNotification;
    
    // ============================================
    // TOOLTIPS Y POPOVERS
    // ============================================
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > 100) {
            $('.header .navbar').addClass('scrolled');
        } else {
            $('.header .navbar').removeClass('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ============================================
    // KEYBOARD SHORTCUTS
    // ============================================
    $(document).keydown(function(e) {
        // Alt + S = Toggle Sidebar
        if (e.altKey && e.keyCode === 83) {
            e.preventDefault();
            $('#sidebarCollapse').click();
        }
        
        // Esc = Cerrar Sidebar (si está abierto en móvil)
        if (e.keyCode === 27) {
            if ($(window).width() <= 992 && !$('#sidebar').hasClass('active')) {
                $('#sidebarCollapse').click();
            }
        }
    });
    
    // ============================================
    // ACTIVE MENU ITEM
    // ============================================
    function setActiveMenuItem() {
        var currentUrl = window.location.href;
        
        $('#sidebar a').each(function() {
            var href = $(this).attr('onclick');
            if (href && href.includes(currentUrl)) {
                $(this).addClass('active');
                $(this).closest('.collapse').collapse('show');
            }
        });
    }
    
    setActiveMenuItem();
    
    // ============================================
    // VERIFICAR ESTADO DE DATATABLES
    // ============================================
    setTimeout(function() {
        console.log('🔍 Estado de DataTables:');
        console.log('- jQuery disponible:', typeof $ !== 'undefined');
        console.log('- DataTables disponible:', typeof $.fn.DataTable !== 'undefined');
        if (typeof $.fn.DataTable !== 'undefined') {
            console.log('- Versión DataTables:', $.fn.dataTable.version);
        }
    }, 1000);
    
    // ============================================
    // CONSOLE LOG DE INFORMACIÓN
    // ============================================
    console.log('%c🚀 Sistema GEME Iniciado', 'background: #667eea; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
    console.log('Versión: 1.0.0');
    console.log('jQuery:', $.fn.jquery);
    console.log('Bootstrap:', $.fn.tooltip.Constructor.VERSION);
    console.log('Componentes cargados: Header, Sidebar, Navigation');
    
    // ============================================
    // MENSAJE DE BIENVENIDA
    // ============================================
    setTimeout(function() {
        showNotification('¡Bienvenido al Sistema GEME!', 'success');
    }, 500);
    
    console.log('✅ App Core cargado correctamente');
});
