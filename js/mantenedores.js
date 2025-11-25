// ===== MANTENEDORES - FUNCIONES GLOBALES =====

// Variables globales para almacenar datos
if (typeof window.equiposPorInstalacion === 'undefined') {
	window.equiposPorInstalacion = {};
}

if (typeof window.empresas === 'undefined') {
	window.empresas = [
		{ id: 1, nombre: 'CDC', codigo: 'CDC', estado: 'Activo' },
		{ id: 2, nombre: 'GM', codigo: 'GM', estado: 'Activo' },
		{ id: 3, nombre: 'Transelec Norte', codigo: 'TN', estado: 'Activo' },
		{ id: 4, nombre: 'Transelec Sur', codigo: 'TS', estado: 'Activo' },
		{ id: 5, nombre: 'Chilquinta', codigo: 'CHQ', estado: 'Activo' },
		{ id: 6, nombre: 'Saesa', codigo: 'SAESA', estado: 'Activo' }
	];
}

// Catálogo de tipos de tecnología iniciales
if (typeof window.tiposTecnologia === 'undefined') {
	window.tiposTecnologia = [
		{ id: 1, codigo: 'Solar',     nombre: 'Solar',     iconoClass: 'fas fa-solar-panel mr-2 text-warning',  estado: 'Activo' },
		{ id: 2, codigo: 'Termica',   nombre: 'Térmica',   iconoClass: 'fas fa-industry mr-2 text-secondary',   estado: 'Activo' },
		{ id: 3, codigo: 'Eolica',    nombre: 'Eólica',    iconoClass: 'fas fa-wind mr-2 text-info',            estado: 'Activo' },
		{ id: 4, codigo: 'Hidraulica',nombre: 'Hidráulica',iconoClass: 'fas fa-water mr-2 text-primary',        estado: 'Activo' },
		{ id: 5, codigo: 'BESS',      nombre: 'BESS',      iconoClass: 'fas fa-battery-full mr-2 text-success', estado: 'Activo' },
		{ id: 6, codigo: 'Biomasa',   nombre: 'Biomasa',   iconoClass: 'fas fa-leaf mr-2 text-success',         estado: 'Activo' }
	];
}

// Catálogo de tipos de trabajo iniciales
if (typeof window.tiposTrabajo === 'undefined') {
	window.tiposTrabajo = [
		{ id: 1, codigo: 'SDCN', descripcion: 'SDCN - Solicitud de Desconexión Curso Normal', estado: 'Activo' },
		{ id: 2, codigo: 'SDCF', descripcion: 'SDCF - Solicitud de Desconexión Curso Forzoso', estado: 'Activo' },
		{ id: 3, codigo: 'SICN', descripcion: 'SICN - Solicitud de Intervención Curso Normal', estado: 'Activo' },
		{ id: 4, codigo: 'SICF', descripcion: 'SICF - Solicitud de Intervención Curso Forzoso', estado: 'Activo' },
		{ id: 5, codigo: 'IL',   descripcion: 'IL - Informe de Limitación', estado: 'Activo' },
		{ id: 6, codigo: 'MM',   descripcion: 'MM - Mantención Mayor', estado: 'Activo' },
		{ id: 7, codigo: 'SODI', descripcion: 'SODI - Solicitud de Desconexión/Intervención', estado: 'Activo' }
	];
}

// Catálogo de afectaciones iniciales
if (typeof window.afectaciones === 'undefined') {
	window.afectaciones = [
		{ id: 1, nombre: 'SSCC', estado: 'Activo' },
		{ id: 2, nombre: 'Protecciones', estado: 'Activo' },
		{ id: 3, nombre: 'Medidores', estado: 'Activo' }
	];
}

// Catálogo de tipos de equipos (valores iniciales tomados del selector del modal de Equipos)
if (typeof window.tiposEquipos === 'undefined') {
	window.tiposEquipos = [
		{ id: 1,  nombre: 'Paños', estado: 'Activo' },
		{ id: 2,  nombre: 'Transformador', estado: 'Activo' },
		{ id: 3,  nombre: 'Secciones de barra', estado: 'Activo' },
		{ id: 4,  nombre: 'Scada', estado: 'Activo' },
		{ id: 5,  nombre: 'Medidores de facturación', estado: 'Activo' },
		{ id: 6,  nombre: 'Compensadores', estado: 'Activo' },
		{ id: 7,  nombre: 'Grupo de Emergencia', estado: 'Activo' },
		{ id: 8,  nombre: 'Batería', estado: 'Activo' },
		{ id: 9,  nombre: 'Tendido de Cable', estado: 'Activo' },
		{ id: 10, nombre: 'Cargadores', estado: 'Activo' },
		{ id: 11, nombre: 'Telecomunicación', estado: 'Activo' },
		{ id: 12, nombre: 'Línea', estado: 'Activo' },
		{ id: 13, nombre: 'Otros', estado: 'Activo' }
	];
}

// ===== FUNCIONES GENERALES =====

// Función para cambiar de categoría de mantenedor
function verMantenedorCategoria(categoria, elemento) {
	// Remover clase activa de todas las filas
	$('#tabla-datos-modulos tr').removeClass('trActive');
	// Agregar clase activa al elemento clickeado
	$(elemento).closest('tr').addClass('trActive');
	
	console.log('Categoría seleccionada:', categoria);
	
	// Aquí puedes cargar diferentes mantenedores según la categoría
	if (categoria === 'Concentrador') {
		// Mostrar mantenedores del concentrador
		$('#tabla-datos').html(`
			<tr onclick="view_mantenedor('PlazoEnvio', this)" style="cursor:pointer" class="trActive">
				<th scope="row">1</th>
				<td><i class="fas fa-clock mr-2 text-warning"></i>Plazo Máximo de Envío de Solicitudes Programadas</td>
			</tr>
			<tr onclick="view_mantenedor('PlazoSODI', this)" style="cursor:pointer">
				<th scope="row">2</th>
				<td><i class="fas fa-exclamation-triangle mr-2 text-danger"></i>Plazo Máximo de Envío de Solicitudes SODI</td>
			</tr>
			<tr onclick="view_mantenedor('Empresas', this)" style="cursor:pointer">
				<th scope="row">3</th>
				<td><i class="fas fa-building mr-2 text-success"></i>Empresas Solicitantes/Receptoras</td>
			</tr>
			<tr onclick="view_mantenedor('Instalaciones', this)" style="cursor:pointer">
				<th scope="row">4</th>
				<td><i class="fas fa-map-marker-alt mr-2 text-primary"></i>Instalaciones GM</td>
			</tr>
			<tr onclick="view_mantenedor('TiposTecnologia', this)" style="cursor:pointer">
				<th scope="row">5</th>
				<td><i class="fas fa-bolt mr-2 text-warning"></i>Tipos de Tecnología</td>
			</tr>
			<tr onclick="view_mantenedor('EquiposInstalacion', this)" style="cursor:pointer">
				<th scope="row">6</th>
				<td><i class="fas fa-tools mr-2 text-info"></i>Equipos a Intervenir por Instalación</td>
			</tr>
			<tr onclick="view_mantenedor('TiposEquipos', this)" style="cursor:pointer">
				<th scope="row">7</th>
				<td><i class="fas fa-tools mr-2 text-secondary"></i>Tipos de Equipos</td>
			</tr>
			<tr onclick="view_mantenedor('Afectaciones', this)" style="cursor:pointer">
				<th scope="row">8</th>
				<td><i class="fas fa-exclamation-circle mr-2 text-danger"></i>Afectaciones</td>
			</tr>
			<tr onclick="view_mantenedor('TiposTrabajo', this)" style="cursor:pointer">
				<th scope="row">9</th>
				<td><i class="fas fa-briefcase mr-2 text-primary"></i>Tipo de trabajo</td>
			</tr>
		`);
	}
}

// Función para ver un mantenedor específico
function view_mantenedor(mantenedor, elemento) {
	// Remover clase activa de todas las filas de mantenedores
	$('#tabla-datos tr').removeClass('trActive');
	// Agregar clase activa al elemento clickeado
	if (elemento) {
		$(elemento).closest('tr').addClass('trActive');
	}
	
	// Ocultar todos los mantenedores
	$('[id^="mant"]').addClass('d-none').removeClass('activeTable');
	
	// Mostrar el mantenedor seleccionado
	if (mantenedor === 'PlazoEnvio') {
		$('#mantPlazoEnvio').removeClass('d-none').addClass('activeTable');
		cargarDatosPlazoEnvio();
	} else if (mantenedor === 'PlazoSODI') {
		$('#mantPlazoSODI').removeClass('d-none').addClass('activeTable');
		cargarDatosPlazoSODI();
	} else if (mantenedor === 'EquiposInstalacion') {
		$('#mantEquiposInstalacion').removeClass('d-none').addClass('activeTable');
		// Resetear selector
		$('#selectInstalacionEquipos').val('');
		$('#contenedorEquipos').hide();
	} else if (mantenedor === 'Empresas') {
		$('#mantEmpresas').removeClass('d-none').addClass('activeTable');
		cargarEmpresas();
	} else if (mantenedor === 'TiposEquipos') {
		$('#mantTiposEquipos').removeClass('d-none').addClass('activeTable');
		cargarTiposEquipos();
	} else if (mantenedor === 'TiposTecnologia') {
		$('#mantTiposTecnologia').removeClass('d-none').addClass('activeTable');
		cargarTiposTecnologia();
	} else if (mantenedor === 'TiposTrabajo') {
		$('#mantTiposTrabajo').removeClass('d-none').addClass('activeTable');
		cargarTiposTrabajo();
	} else if (mantenedor === 'Afectaciones') {
		$('#mantAfectaciones').removeClass('d-none').addClass('activeTable');
		cargarAfectaciones();
	} else if (mantenedor === 'Instalaciones') {
		$('#mantInstalaciones').removeClass('d-none').addClass('activeTable');
		cargarInstalaciones();
	}
	
	console.log('Mantenedor seleccionado:', mantenedor);
}

// ===== FUNCIONES PLAZO DE ENVÍO =====

function cargarDatosPlazoEnvio() {
	console.log('Cargando datos de plazo de envío...');
	
	const datosEjemplo = {
		lunes: { dias: 5, hora: '12:00' },
		martes: { dias: 5, hora: '12:00' },
		miercoles: { dias: 5, hora: '12:00' },
		jueves: { dias: 5, hora: '12:00' },
		viernes: { dias: 5, hora: '12:00' }
	};
	
	Object.keys(datosEjemplo).forEach(dia => {
		$(`#dias-${dia}`).val(datosEjemplo[dia].dias);
		$(`#hora-${dia}`).val(datosEjemplo[dia].hora);
	});
}

function guardarPlazo(dia) {
	const dias = $(`#dias-${dia}`).val();
	const hora = $(`#hora-${dia}`).val();
	
	if (!dias || !hora) {
		alert('Por favor complete todos los campos');
		return;
	}
	
	console.log(`Guardando plazo para ${dia}:`, { dias, hora });
	
	const diaCapitalizado = dia.charAt(0).toUpperCase() + dia.slice(1);
	alert(`✓ Plazo actualizado para ${diaCapitalizado}:\n${dias} días hábiles antes de las ${hora} hrs.`);
	
	const btn = event.target.closest('button');
	$(btn).prop('disabled', true).html('<i class="fas fa-check"></i>');
	setTimeout(() => {
		$(btn).prop('disabled', false).html('<i class="fas fa-save"></i>');
	}, 2000);
}

// ===== FUNCIONES PLAZO SODI =====

function cargarDatosPlazoSODI() {
	console.log('Cargando datos de plazo SODI...');
	
	const datosEjemplo = {
		'santiago-solar': { dias: 3, hora: '10:00' },
		'nueva-renca': { dias: 3, hora: '10:00' },
		'los-vientos': { dias: 3, hora: '10:00' },
		'santa-lidia': { dias: 3, hora: '10:00' },
		'ceme1': { dias: 3, hora: '10:00' }
	};
	
	Object.keys(datosEjemplo).forEach(instalacion => {
		$(`#dias-${instalacion}`).val(datosEjemplo[instalacion].dias);
		$(`#hora-${instalacion}`).val(datosEjemplo[instalacion].hora);
	});
}

function guardarPlazoSODI(instalacion) {
	const dias = $(`#dias-${instalacion}`).val();
	const hora = $(`#hora-${instalacion}`).val();
	
	if (!dias || !hora) {
		alert('Por favor complete todos los campos');
		return;
	}
	
	console.log(`Guardando plazo SODI para ${instalacion}:`, { dias, hora });
	
	const nombresInstalacion = {
		'santiago-solar': 'Santiago Solar',
		'nueva-renca': 'Nueva Renca',
		'los-vientos': 'Los Vientos',
		'santa-lidia': 'Santa Lidia',
		'ceme1': 'CEME1'
	};
	
	const nombreInstalacion = nombresInstalacion[instalacion] || instalacion;
	alert(`✓ Plazo SODI actualizado para ${nombreInstalacion}:\n${dias} días hábiles antes de las ${hora} hrs.`);
	
	const btn = event.target.closest('button');
	$(btn).prop('disabled', true).html('<i class="fas fa-check"></i>');
	setTimeout(() => {
		$(btn).prop('disabled', false).html('<i class="fas fa-save"></i>');
	}, 2000);
}

// ===== FUNCIONES EQUIPOS POR INSTALACIÓN =====

function cargarEquiposInstalacion(instalacion) {
	if (!instalacion) {
		$('#contenedorEquipos').hide();
		return;
	}
	
	const nombresInstalacion = {
		'santiago-solar': 'Santiago Solar',
		'nueva-renca': 'Nueva Renca',
		'santa-lidia': 'Santa Lidia',
		'los-vientos': 'Los Vientos',
		'ceme1': 'CEME1'
	};
	
	$('#nombreInstalacionActual').text(nombresInstalacion[instalacion]);
	$('#contenedorEquipos').show();
	
	if (!window.equiposPorInstalacion[instalacion]) {
		window.equiposPorInstalacion[instalacion] = [
			{ id: 1, nombre: 'Paños 1', tipo: 'Paños', estado: 'Activo' },
			{ id: 2, nombre: 'Transformador T1', tipo: 'Transformador', estado: 'Activo' },
			{ id: 3, nombre: 'Scada Principal', tipo: 'Scada', estado: 'Activo' }
		];
	}
	
	renderizarTablaEquipos(instalacion);
}

function renderizarTablaEquipos(instalacion) {
	const equipos = window.equiposPorInstalacion[instalacion] || [];
	let html = '';
	
	if (equipos.length === 0) {
		html = '<tr><td colspan="5" class="text-center text-muted">No hay equipos configurados para esta instalación</td></tr>';
	} else {
		equipos.forEach((equipo, index) => {
			const estadoBadge = equipo.estado === 'Activo' 
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';
			
			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td><strong>${equipo.nombre}</strong></td>
					<td>${equipo.tipo}</td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-primary" onclick="editarEquipo(${equipo.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}
	
	$('#tablaEquipos').html(html);
}

function agregarEquipo() {
	const instalacion = $('#selectInstalacionEquipos').val();
	if (!instalacion) {
		alert('Por favor seleccione una instalación primero');
		return;
	}
	
	$('#tituloModalEquipo').text('Agregar Equipo');
	$('#equipoId').val('');
	$('#instalacionActual').val(instalacion);
	$('#formEquipo')[0].reset();
	$('#modalEquipo').modal('show');
}

function editarEquipo(id) {
	const instalacion = $('#selectInstalacionEquipos').val();
	const equipo = window.equiposPorInstalacion[instalacion].find(e => e.id === id);
	
	if (!equipo) return;
	
	$('#tituloModalEquipo').text('Editar Equipo');
	$('#equipoId').val(id);
	$('#instalacionActual').val(instalacion);
	$('#nombreEquipo').val(equipo.nombre);
	$('#tipoEquipo').val(equipo.tipo);
	$('#estadoEquipo').val(equipo.estado);
	
	$('#modalEquipo').modal('show');
}

function guardarEquipo() {
	const nombreEquipo = $('#nombreEquipo').val().trim();
	const tipoEquipo = $('#tipoEquipo').val();
	const estadoEquipo = $('#estadoEquipo').val();
	const instalacion = $('#instalacionActual').val();
	const equipoId = $('#equipoId').val();
	
	if (!nombreEquipo) {
		alert('Por favor ingrese el nombre del equipo');
		return;
	}
	
	const nuevoEquipo = {
		id: equipoId ? parseInt(equipoId) : Date.now(),
		nombre: nombreEquipo,
		tipo: tipoEquipo,
		estado: estadoEquipo
	};
	
	if (!window.equiposPorInstalacion[instalacion]) {
		window.equiposPorInstalacion[instalacion] = [];
	}
	
	if (equipoId) {
		const index = window.equiposPorInstalacion[instalacion].findIndex(e => e.id === parseInt(equipoId));
		window.equiposPorInstalacion[instalacion][index] = nuevoEquipo;
	} else {
		window.equiposPorInstalacion[instalacion].push(nuevoEquipo);
	}
	
	console.log('Guardando equipo:', nuevoEquipo);
	
	$('#modalEquipo').modal('hide');
	renderizarTablaEquipos(instalacion);
	
	alert('✓ Equipo guardado correctamente');
}

function eliminarEquipo(id) {
	if (!confirm('¿Está seguro que desea eliminar este equipo?')) {
		return;
	}
	
	const instalacion = $('#selectInstalacionEquipos').val();
	window.equiposPorInstalacion[instalacion] = window.equiposPorInstalacion[instalacion].filter(e => e.id !== id);
	
	console.log('Eliminando equipo:', id);
	
	renderizarTablaEquipos(instalacion);
	alert('✓ Equipo eliminado correctamente');
}

// ===== FUNCIONES EMPRESAS =====

function cargarEmpresas() {
	console.log('Cargando empresas...');
	renderizarTablaEmpresas();
}

function renderizarTablaEmpresas() {
	let html = '';
	
	if (window.empresas.length === 0) {
		html = '<tr><td colspan="5" class="text-center text-muted">No hay empresas configuradas</td></tr>';
	} else {
		window.empresas.forEach((empresa, index) => {
			const estadoBadge = empresa.estado === 'Activo' 
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';
			
			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td><strong>${empresa.nombre}</strong></td>
					<td class="text-center"><span class="badge badge-primary">${empresa.codigo}</span></td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-primary" onclick="editarEmpresa(${empresa.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}
	
	$('#tablaEmpresas').html(html);
}

function agregarEmpresa() {
	$('#tituloModalEmpresa').text('Agregar Empresa');
	$('#empresaId').val('');
	$('#formEmpresa')[0].reset();
	$('#estadoEmpresa').val('Activo');
	$('#modalEmpresa').modal('show');
}

function editarEmpresa(id) {
	const empresa = window.empresas.find(e => e.id === id);
	
	if (!empresa) return;
	
	$('#tituloModalEmpresa').text('Editar Empresa');
	$('#empresaId').val(id);
	$('#nombreEmpresa').val(empresa.nombre);
	$('#codigoEmpresa').val(empresa.codigo);
	$('#estadoEmpresa').val(empresa.estado);
	
	$('#modalEmpresa').modal('show');
}

function guardarEmpresa() {
	const nombreEmpresa = $('#nombreEmpresa').val().trim();
	const codigoEmpresa = $('#codigoEmpresa').val().trim().toUpperCase();
	const estadoEmpresa = $('#estadoEmpresa').val();
	const empresaId = $('#empresaId').val();
	
	if (!nombreEmpresa || !codigoEmpresa) {
		alert('Por favor complete todos los campos obligatorios');
		return;
	}
	
	const nuevaEmpresa = {
		id: empresaId ? parseInt(empresaId) : Date.now(),
		nombre: nombreEmpresa,
		codigo: codigoEmpresa,
		estado: estadoEmpresa
	};
	
	if (empresaId) {
		const index = window.empresas.findIndex(e => e.id === parseInt(empresaId));
		window.empresas[index] = nuevaEmpresa;
	} else {
		window.empresas.push(nuevaEmpresa);
	}
	
	console.log('Guardando empresa:', nuevaEmpresa);
	
	$('#modalEmpresa').modal('hide');
	renderizarTablaEmpresas();
	
	alert('✓ Empresa guardada correctamente');
}

function eliminarEmpresa(id) {
	const empresa = window.empresas.find(e => e.id === id);
	
	if (!confirm(`¿Está seguro que desea eliminar la empresa "${empresa.nombre}"?`)) {
		return;
	}
	
	window.empresas = window.empresas.filter(e => e.id !== id);
	
	console.log('Eliminando empresa:', id);
	
	renderizarTablaEmpresas();
	alert('✓ Empresa eliminada correctamente');
}

// ===== FUNCIONES TIPOS DE EQUIPOS =====

function cargarTiposEquipos() {
	console.log('Cargando tipos de equipos...');
	renderizarTablaTiposEquipos();
}

function renderizarTablaTiposEquipos() {
	let html = '';

	if (!window.tiposEquipos || window.tiposEquipos.length === 0) {
		html = '<tr><td colspan="4" class="text-center text-muted">No hay tipos de equipos configurados</td></tr>';
	} else {
		window.tiposEquipos.forEach((tipo, index) => {
			const estadoBadge = tipo.estado === 'Activo'
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';

			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td><strong>${tipo.nombre}</strong></td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-secondary" onclick="editarTipoEquipo(${tipo.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}

	$('#tablaTiposEquipos').html(html);
}

function agregarTipoEquipo() {
	$('#tituloModalTipoEquipo').text('Agregar Tipo de Equipo');
	$('#tipoEquipoId').val('');
	$('#formTipoEquipo')[0].reset();
	$('#estadoTipoEquipo').val('Activo');
	$('#modalTipoEquipo').modal('show');
}

function editarTipoEquipo(id) {
	const tipo = window.tiposEquipos.find(t => t.id === id);
	if (!tipo) return;

	$('#tituloModalTipoEquipo').text('Editar Tipo de Equipo');
	$('#tipoEquipoId').val(id);
	$('#nombreTipoEquipo').val(tipo.nombre);
	$('#estadoTipoEquipo').val(tipo.estado);
	$('#modalTipoEquipo').modal('show');
}

function guardarTipoEquipo() {
	const nombreTipo = $('#nombreTipoEquipo').val().trim();
	const estadoTipo = $('#estadoTipoEquipo').val();
	const tipoId = $('#tipoEquipoId').val();

	if (!nombreTipo) {
		alert('Por favor ingrese el nombre del tipo de equipo');
		return;
	}

	const nuevoTipo = {
		id: tipoId ? parseInt(tipoId) : Date.now(),
		nombre: nombreTipo,
		estado: estadoTipo
	};

	if (!window.tiposEquipos) {
		window.tiposEquipos = [];
	}

	if (tipoId) {
		const index = window.tiposEquipos.findIndex(t => t.id === parseInt(tipoId));
		window.tiposEquipos[index] = nuevoTipo;
	} else {
		window.tiposEquipos.push(nuevoTipo);
	}

	console.log('Guardando tipo de equipo:', nuevoTipo);

	$('#modalTipoEquipo').modal('hide');
	renderizarTablaTiposEquipos();

	alert('✓ Tipo de equipo guardado correctamente');
}

function eliminarTipoEquipo(id) {
	const tipo = window.tiposEquipos.find(t => t.id === id);
	if (!tipo) return;

	if (!confirm(`¿Está seguro que desea eliminar el tipo de equipo "${tipo.nombre}"?`)) {
		return;
	}

	window.tiposEquipos = window.tiposEquipos.filter(t => t.id !== id);

	console.log('Eliminando tipo de equipo:', id);
	renderizarTablaTiposEquipos();
	alert('✓ Tipo de equipo eliminado correctamente');
}

// ===== FUNCIONES TIPOS DE TRABAJO =====

function cargarTiposTrabajo() {
	console.log('Cargando tipos de trabajo...');
	renderizarTablaTiposTrabajo();
}

function renderizarTablaTiposTrabajo() {
	let html = '';

	if (!window.tiposTrabajo || window.tiposTrabajo.length === 0) {
		html = '<tr><td colspan="5" class="text-center text-muted">No hay tipos de trabajo configurados</td></tr>';
	} else {
		window.tiposTrabajo.forEach((tipo, index) => {
			const estadoBadge = tipo.estado === 'Activo'
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';

			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td class="text-center"><span class="badge badge-primary">${tipo.codigo}</span></td>
					<td>${tipo.descripcion}</td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-primary" onclick="editarTipoTrabajo(${tipo.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}

	$('#tablaTiposTrabajo').html(html);
}

function agregarTipoTrabajo() {
	$('#tituloModalTipoTrabajo').text('Agregar Tipo de trabajo');
	$('#tipoTrabajoId').val('');
	$('#formTipoTrabajo')[0].reset();
	$('#estadoTipoTrabajo').val('Activo');
	$('#modalTipoTrabajo').modal('show');
}

function editarTipoTrabajo(id) {
	const tipo = window.tiposTrabajo.find(t => t.id === id);
	if (!tipo) return;

	$('#tituloModalTipoTrabajo').text('Editar Tipo de trabajo');
	$('#tipoTrabajoId').val(id);
	$('#codigoTipoTrabajo').val(tipo.codigo);
	$('#descripcionTipoTrabajo').val(tipo.descripcion);
	$('#estadoTipoTrabajo').val(tipo.estado);
	$('#modalTipoTrabajo').modal('show');
}

function guardarTipoTrabajo() {
	const codigo = $('#codigoTipoTrabajo').val().trim().toUpperCase();
	const descripcion = $('#descripcionTipoTrabajo').val().trim();
	const estado = $('#estadoTipoTrabajo').val();
	const tipoId = $('#tipoTrabajoId').val();

	if (!codigo || !descripcion) {
		alert('Por favor complete Código y Descripción');
		return;
	}

	const nuevoTipo = {
		id: tipoId ? parseInt(tipoId) : Date.now(),
		codigo,
		descripcion,
		estado
	};

	if (!window.tiposTrabajo) {
		window.tiposTrabajo = [];
	}

	if (tipoId) {
		const index = window.tiposTrabajo.findIndex(t => t.id === parseInt(tipoId));
		window.tiposTrabajo[index] = nuevoTipo;
	} else {
		window.tiposTrabajo.push(nuevoTipo);
	}

	console.log('Guardando tipo de trabajo:', nuevoTipo);

	$('#modalTipoTrabajo').modal('hide');
	renderizarTablaTiposTrabajo();

	alert('✓ Tipo de trabajo guardado correctamente');
}

function eliminarTipoTrabajo(id) {
	const tipo = window.tiposTrabajo.find(t => t.id === id);
	if (!tipo) return;

	if (!confirm(`¿Está seguro que desea eliminar el tipo de trabajo "${tipo.codigo} - ${tipo.descripcion}"?`)) {
		return;
	}

	window.tiposTrabajo = window.tiposTrabajo.filter(t => t.id !== id);

	console.log('Eliminando tipo de trabajo:', id);
	renderizarTablaTiposTrabajo();
	alert('✓ Tipo de trabajo eliminado correctamente');
}

// ===== FUNCIONES AFECTACIONES =====

function cargarAfectaciones() {
	console.log('Cargando afectaciones...');
	renderizarTablaAfectaciones();
}

function renderizarTablaAfectaciones() {
	let html = '';

	if (!window.afectaciones || window.afectaciones.length === 0) {
		html = '<tr><td colspan="4" class="text-center text-muted">No hay afectaciones configuradas</td></tr>';
	} else {
		window.afectaciones.forEach((afectacion, index) => {
			const estadoBadge = afectacion.estado === 'Activo'
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';

			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td><strong>${afectacion.nombre}</strong></td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-danger" onclick="editarAfectacion(${afectacion.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}

	$('#tablaAfectaciones').html(html);
}

function agregarAfectacion() {
	$('#tituloModalAfectacion').text('Agregar Afectación');
	$('#afectacionId').val('');
	$('#formAfectacion')[0].reset();
	$('#estadoAfectacion').val('Activo');
	$('#modalAfectacion').modal('show');
}

function editarAfectacion(id) {
	const afectacion = window.afectaciones.find(a => a.id === id);
	if (!afectacion) return;

	$('#tituloModalAfectacion').text('Editar Afectación');
	$('#afectacionId').val(id);
	$('#nombreAfectacion').val(afectacion.nombre);
	$('#estadoAfectacion').val(afectacion.estado);
	$('#modalAfectacion').modal('show');
}

function guardarAfectacion() {
	const nombreAfectacion = $('#nombreAfectacion').val().trim();
	const estadoAfectacion = $('#estadoAfectacion').val();
	const afectacionId = $('#afectacionId').val();

	if (!nombreAfectacion) {
		alert('Por favor ingrese el nombre de la afectación');
		return;
	}

	const nuevaAfectacion = {
		id: afectacionId ? parseInt(afectacionId) : Date.now(),
		nombre: nombreAfectacion,
		estado: estadoAfectacion
	};

	if (!window.afectaciones) {
		window.afectaciones = [];
	}

	if (afectacionId) {
		const index = window.afectaciones.findIndex(a => a.id === parseInt(afectacionId));
		window.afectaciones[index] = nuevaAfectacion;
	} else {
		window.afectaciones.push(nuevaAfectacion);
	}

	console.log('Guardando afectación:', nuevaAfectacion);

	$('#modalAfectacion').modal('hide');
	renderizarTablaAfectaciones();

	alert('✓ Afectación guardada correctamente');
}

function eliminarAfectacion(id) {
	const afectacion = window.afectaciones.find(a => a.id === id);
	if (!afectacion) return;

	if (!confirm(`¿Está seguro que desea eliminar la afectación "${afectacion.nombre}"?`)) {
		return;
	}

	window.afectaciones = window.afectaciones.filter(a => a.id !== id);

	console.log('Eliminando afectación:', id);
	renderizarTablaAfectaciones();
	alert('✓ Afectación eliminada correctamente');
}

// ===== FUNCIONES TIPOS DE TECNOLOGÍA =====

function cargarTiposTecnologia() {
	console.log('Cargando tipos de tecnología...');
	renderizarTablaTiposTecnologia();
}

function renderizarTablaTiposTecnologia() {
	let html = '';

	if (!window.tiposTecnologia || window.tiposTecnologia.length === 0) {
		html = '<tr><td colspan="7" class="text-center text-muted">No hay tipos de tecnología configurados</td></tr>';
	} else {
		window.tiposTecnologia.forEach((tipo, index) => {
			const estadoBadge = tipo.estado === 'Activo'
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';

			const iconoHtml = tipo.iconoClass
				? `<i class="${tipo.iconoClass}"></i>`
				: '';

			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td class="text-center"><span class="badge badge-info">${tipo.codigo}</span></td>
					<td>${tipo.nombre}</td>
					<td class="text-center">${iconoHtml}</td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-warning" onclick="editarTipoTecnologia(${tipo.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}

	$('#tablaTiposTecnologia').html(html);
}

function agregarTipoTecnologia() {
	$('#tituloModalTipoTecnologia').text('Agregar Tipo de Tecnología');
	$('#tipoTecnologiaId').val('');
	$('#formTipoTecnologia')[0].reset();
	$('#estadoTipoTecnologia').val('Activo');
	$('#iconoTipoTecnologia').val('');
	actualizarPreviewIconoTipoTecnologia();
	$('#modalTipoTecnologia').modal('show');
}

function editarTipoTecnologia(id) {
	const tipo = window.tiposTecnologia.find(t => t.id === id);
	if (!tipo) return;

	$('#tituloModalTipoTecnologia').text('Editar Tipo de Tecnología');
	$('#tipoTecnologiaId').val(id);
	$('#codigoTipoTecnologia').val(tipo.codigo);
	$('#nombreTipoTecnologia').val(tipo.nombre);
	$('#iconoTipoTecnologia').val(tipo.iconoClass || '');
	$('#estadoTipoTecnologia').val(tipo.estado);
	actualizarPreviewIconoTipoTecnologia();
	$('#modalTipoTecnologia').modal('show');
}

function guardarTipoTecnologia() {
	const codigo = $('#codigoTipoTecnologia').val().trim();
	const nombre = $('#nombreTipoTecnologia').val().trim();
	const iconoClass = $('#iconoTipoTecnologia').val();
	const estado = $('#estadoTipoTecnologia').val();
	const tipoId = $('#tipoTecnologiaId').val();

	if (!codigo || !nombre || !iconoClass) {
		alert('Por favor complete Código, Nombre y seleccione un Ícono');
		return;
	}

	const nuevoTipo = {
		id: tipoId ? parseInt(tipoId) : Date.now(),
		codigo,
		nombre,
		iconoClass,
		estado
	};

	if (!window.tiposTecnologia) {
		window.tiposTecnologia = [];
	}

	if (tipoId) {
		const index = window.tiposTecnologia.findIndex(t => t.id === parseInt(tipoId));
		window.tiposTecnologia[index] = nuevoTipo;
	} else {
		window.tiposTecnologia.push(nuevoTipo);
	}

	console.log('Guardando tipo de tecnología:', nuevoTipo);

	$('#modalTipoTecnologia').modal('hide');
	renderizarTablaTiposTecnologia();

	alert('✓ Tipo de tecnología guardado correctamente');
}

function actualizarPreviewIconoTipoTecnologia() {
	const iconClass = $('#iconoTipoTecnologia').val();
	const $preview = $('#previewIconTipoTecnologia');

	if (!iconClass) {
		$preview.attr('class', 'fas fa-question-circle text-muted');
		return;
	}

	$preview.attr('class', iconClass);
}

// ===== FUNCIONES PARA MANTENEDOR DE INSTALACIONES =====

// Variable global para almacenar instalaciones
if (typeof window.instalaciones === 'undefined') {
	window.instalaciones = [
		{ id: 1, nombre: 'CEME1', nombreCorto: 'CEME1', codigo: 'CEME1', estado: 'Activo', tecnologia: 'Solar' },
		{ id: 2, nombre: 'Nueva Renca', nombreCorto: 'Nueva Renca', codigo: 'NR', estado: 'Activo', tecnologia: 'Termica' },
		{ id: 3, nombre: 'Santa Lidia', nombreCorto: 'Santa Lidia', codigo: 'SL', estado: 'Activo', tecnologia: 'Termica' },
		{ id: 4, nombre: 'Los Vientos', nombreCorto: 'Los Vientos', codigo: 'LV', estado: 'Activo', tecnologia: 'Termica' },
		{ id: 5, nombre: 'Santiago Solar', nombreCorto: 'Santiago Solar', codigo: 'SS', estado: 'Activo', tecnologia: 'Solar' }
	];
}
var instalaciones = window.instalaciones;

// Función para cargar instalaciones
function cargarInstalaciones() {
	// Aquí deberías cargar desde SharePoint
	console.log('Cargando instalaciones...');
	renderizarTablaInstalaciones();
}

// Función para renderizar tabla de instalaciones
function renderizarTablaInstalaciones() {
	let html = '';
	
	if (window.instalaciones.length === 0) {
		html = '<tr><td colspan="6" class="text-center text-muted">No hay instalaciones configuradas</td></tr>';
	} else {
		window.instalaciones.forEach((instalacion, index) => {
			const estadoBadge = instalacion.estado === 'Activo' 
				? '<span class="badge badge-success">Activo</span>'
				: '<span class="badge badge-secondary">Inactivo</span>';

			// Determinar ícono según catálogo de tipos de tecnología
			let iconoTecnologia = '<i class="fas fa-industry mr-2 text-secondary"></i>';
			if (window.tiposTecnologia && instalacion.tecnologia) {
				const tipoTec = window.tiposTecnologia.find(t => t.codigo === instalacion.tecnologia);
				if (tipoTec && tipoTec.iconoClass) {
					iconoTecnologia = `<i class="${tipoTec.iconoClass}"></i>`;
				}
			}
			
			html += `
				<tr>
					<td class="text-center">${index + 1}</td>
					<td>${iconoTecnologia}<strong>${instalacion.nombre}</strong></td>
					<td class="text-center"><span class="badge badge-info">${instalacion.codigo}</span></td>
					<td class="text-center">${instalacion.tecnologia || ''}</td>
					<td class="text-center">${estadoBadge}</td>
					<td class="text-center">
						<button class="btn btn-sm btn-primary" onclick="editarInstalacion(${instalacion.id})" title="Editar">
							<i class="fas fa-edit"></i>
						</button>
					</td>
				</tr>
			`;
		});
	}
	
	$('#tablaInstalaciones').html(html);
}

// Función para agregar nueva instalación
function agregarInstalacion() {
	$('#tituloModalInstalacion').text('Agregar Instalación');
	$('#instalacionId').val('');
	$('#formInstalacion')[0].reset();
	$('#estadoInstalacion').val('Activo');
	$('#modalInstalacion').modal('show');
}

// Función para editar instalación
function editarInstalacion(id) {
	const instalacion = window.instalaciones.find(i => i.id === id);
	
	if (!instalacion) return;
	
	$('#tituloModalInstalacion').text('Editar Instalación');
	$('#instalacionId').val(id);
	$('#nombreInstalacion').val(instalacion.nombre);
	$('#codigoInstalacion').val(instalacion.codigo);
	$('#tecnologiaInstalacion').val(instalacion.tecnologia || 'Solar');
	$('#estadoInstalacion').val(instalacion.estado);
	
	$('#modalInstalacion').modal('show');
}

// Función para guardar instalación
function guardarInstalacion() {
	const nombreInstalacion = $('#nombreInstalacion').val().trim();
	const codigoInstalacion = $('#codigoInstalacion').val().trim().toUpperCase();
	const tecnologiaInstalacion = $('#tecnologiaInstalacion').val();
	const estadoInstalacion = $('#estadoInstalacion').val();
	const instalacionId = $('#instalacionId').val();
	
	if (!nombreInstalacion || !codigoInstalacion) {
		alert('Por favor complete todos los campos obligatorios');
		return;
	}
	
	const nuevaInstalacion = {
		id: instalacionId ? parseInt(instalacionId) : Date.now(),
		nombre: nombreInstalacion,
		codigo: codigoInstalacion,
		tecnologia: tecnologiaInstalacion,
		estado: estadoInstalacion
	};
	
	if (instalacionId) {
		// Editar
		const index = window.instalaciones.findIndex(i => i.id === parseInt(instalacionId));
		window.instalaciones[index] = nuevaInstalacion;
	} else {
		// Agregar
		window.instalaciones.push(nuevaInstalacion);
	}
	instalaciones = window.instalaciones;
	
	// Aquí deberías guardar en SharePoint
	console.log('Guardando instalación:', nuevaInstalacion);
	
	$('#modalInstalacion').modal('hide');
	renderizarTablaInstalaciones();
	
	alert('✓ Instalación guardada correctamente');
}

// Función para eliminar instalación
function eliminarInstalacion(id) {
	const instalacion = window.instalaciones.find(i => i.id === id);
	
	if (!confirm(`¿Está seguro que desea eliminar la instalación "${instalacion.nombre}"?`)) {
		return;
	}
	
	window.instalaciones = window.instalaciones.filter(i => i.id !== id);
	instalaciones = window.instalaciones;
	
	// Aquí deberías eliminar en SharePoint
	console.log('Eliminando instalación:', id);
	
	renderizarTablaInstalaciones();
	alert('✓ Instalación eliminada correctamente');
}

// Inicializar cuando se carga la vista
$(document).ready(function() {
	// Solo inicializar si estamos en la vista de mantenedores
	if ($('#mantPlazoEnvio').length > 0) {
		cargarDatosPlazoEnvio();
	}
});
