// ============================================
// SIDEBAR - Funcionalidad completa del sidebar
// ============================================

// Variables del sidebar - usar namespace para evitar conflictos
window.GEME_SIDEBAR = window.GEME_SIDEBAR || {
    initialized: false
};

$(document).ready(function() {
    console.log('🔧 Sidebar iniciando...');
    console.log('DOM ready - elementos encontrados:');
    console.log('- #sidebar:', $('#sidebar').length);
    console.log('- #sidebarCollapse:', $('#sidebarCollapse').length);
    console.log('- .dropdown-toggle:', $('#sidebar .dropdown-toggle').length);
    
    // Esperar un poco para asegurar que el DOM esté completamente listo
    setTimeout(function() {
        initializeSidebar();
    }, 100);

    // ============================================
    // FUNCIÓN DE INICIALIZACIÓN DEL SIDEBAR
    // ============================================
    function initializeSidebar() {
        if (window.GEME_SIDEBAR.initialized) {
            console.log('Sidebar ya inicializado, saltando...');
            return;
        }
        
        console.log('🚀 Inicializando sidebar...');
        
        // ============================================
        // RESPONSIVE SIDEBAR
        // ============================================
        function checkWindowSize() {
            if ($(window).width() <= 992) {
                $('#sidebar').addClass('active');
                $('#content').removeClass('active');
            } else {
                $('#sidebar').removeClass('active');
                $('#content').removeClass('active');
                $('.overlay').removeClass('active');
            }
        }
        
        // Ejecutar al cargar
        checkWindowSize();
        
        // Ejecutar al redimensionar
        $(window).resize(function() {
            checkWindowSize();
        });
        
        // ============================================
        // INICIALIZACIÓN COMPLETA DEL SIDEBAR
        // ============================================
        var sidebarInitialized = false; // Flag para evitar múltiples inicializaciones
        
        function initSidebar() {
            if (sidebarInitialized) {
                console.log('Sidebar ya inicializado, saltando...');
                return;
            }
            
            console.log('🔧 Inicializando sidebar por primera vez...');
            
            // Limpiar cualquier event listener previo
            $('#sidebarCollapse').off('click.sidebar');
            $('#sidebar .dropdown-toggle').off('click.sidebar');
            $('.overlay').off('click.sidebar');
            $('#sidebar .a-submenu').off('click.sidebar');
            
            // 1. BOTÓN DE COLAPSAR SIDEBAR
            $('#sidebarCollapse').on('click.sidebar', function() {
                console.log('🔘 Botón sidebar clicked');
                $('#sidebar').toggleClass('active');
                $('#content').toggleClass('active');
                $('.overlay').toggleClass('active');
                
                // Cambiar símbolo del botón (> abierto, < cerrado)
                var $icon = $('#sidebarToggleIcon');
                if ($('#sidebar').hasClass('active')) {
                    $icon.text('>');
                } else {
                    $icon.text('<');
                }
                
                // Guardar estado
                setTimeout(saveSidebarState, 100);
            });
            
            // 2. DROPDOWN TOGGLES DEL SIDEBAR
            $('#sidebar .dropdown-toggle').on('click.sidebar', function(e) {
                console.log('📂 Dropdown toggle clicked');
                e.preventDefault();
                e.stopPropagation();
                
                var $this = $(this);
                var $submenu = $this.next('ul');
                var isExpanded = $this.attr('aria-expanded') === 'true';
                
                console.log('Submenu encontrado:', $submenu.length > 0 ? 'SÍ' : 'NO', 'Expandido:', isExpanded);
                
                // Guardar scroll position
                var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
                
                // Cerrar otros submenús
                $('#sidebar .dropdown-toggle').not($this).attr('aria-expanded', 'false').removeClass('active');
                $('#sidebar ul.collapse').not($submenu).removeClass('show');
                
                // Toggle el submenú actual
                if (isExpanded) {
                    $this.attr('aria-expanded', 'false').removeClass('active');
                    $submenu.removeClass('show');
                    console.log('➖ Cerrando submenu');
                } else {
                    $this.attr('aria-expanded', 'true').addClass('active');
                    $submenu.addClass('show');
                    console.log('➕ Abriendo submenu');
                }
                
                // Restaurar scroll position
                setTimeout(function() {
                    window.scrollTo(0, scrollPos);
                    document.documentElement.scrollTop = scrollPos;
                    document.body.scrollTop = scrollPos;
                }, 10);
            });
            
            // 3. OVERLAY CLICK PARA CERRAR EN MÓVILES
            $('.overlay').on('click.sidebar', function() {
                console.log('📱 Overlay clicked - cerrando sidebar');
                $('#sidebar').removeClass('active');
                $('#content').removeClass('active');
                $(this).removeClass('active');
                $('#sidebarToggleIcon').text('<');
            });
            
            // 4. HIGHLIGHT ACTIVE SUBMENU ITEM
            $('#sidebar .a-submenu').on('click.sidebar', function() {
                $('#sidebar .a-submenu').removeClass('active');
                $(this).addClass('active');
            });
            
            sidebarInitialized = true;
            console.log('✅ Sidebar inicializado correctamente');
        }
        
        // ============================================
        // LOCAL STORAGE - RECORDAR ESTADO DEL SIDEBAR
        // ============================================
        function saveSidebarState() {
            var isActive = $('#sidebar').hasClass('active');
            localStorage.setItem('sidebarActive', isActive);
        }
        
        function loadSidebarState() {
            if ($(window).width() > 992) {
                var isActive = localStorage.getItem('sidebarActive') === 'true';
                if (isActive) {
                    $('#sidebar').addClass('active');
                    $('#content').addClass('active');
                    $('#sidebarToggleIcon').text('>');
                } else {
                    $('#sidebarToggleIcon').text('<');
                }
            }
        }
        
        // Cargar estado al iniciar
        loadSidebarState();
        
        // ============================================
        // BÚSQUEDA EN SIDEBAR
        // ============================================
        function createSidebarSearch() {
            var searchHtml = `
                <div class="sidebar-search p-3" style="background: #1a252f; border-bottom: 1px solid #34495e;">
                    <input type="text" id="sidebarSearchInput" class="form-control form-control-sm" 
                           placeholder="Buscar en menú..." style="background: #2c3e50; color: #fff; border: 1px solid #34495e;">
                </div>
            `;
            
            $('#sidebar .sidebar-header').after(searchHtml);
            
            // Funcionalidad de búsqueda
            $('#sidebarSearchInput').on('keyup', function() {
                var searchText = $(this).val().toLowerCase();
                
                $('#sidebar .components li').each(function() {
                    var $li = $(this);
                    var text = $li.text().toLowerCase();
                    
                    if (text.includes(searchText)) {
                        $li.show();
                        // Expandir el padre si es un submenu
                        $li.closest('.collapse').collapse('show');
                    } else {
                        $li.hide();
                    }
                });
                
                // Si no hay búsqueda, mostrar todo
                if (searchText === '') {
                    $('#sidebar .components li').show();
                    $('#sidebar .collapse').collapse('hide');
                }
            });
        }
        
        createSidebarSearch();
        
        // ============================================
        // INICIALIZAR SIDEBAR AL CARGAR LA PÁGINA
        // ============================================
        // Inicializar el sidebar una sola vez al cargar la página
        initSidebar();
        
        // Marcar como inicializado
        window.GEME_SIDEBAR.initialized = true;
        
        console.log('✅ Sidebar inicializado correctamente');
    }

    // Exponer función de inicialización globalmente
    window.initializeSidebar = initializeSidebar;

    console.log('✅ Sidebar module cargado correctamente');

}); // Cierre del $(document).ready()
