// ===========================
// DATOS INICIALES DE AERONAVES
// ===========================

let aircraftFleet = [
    {
        id: 'SK-7371',
        model: 'Boeing 737',
        capacity: 189,
        status: 'available',
        statusText: 'Disponible',
        icon: '✈️',
        lastFlight: '15 Oct, 2023',
        totalHours: 12500,
        manufactureDate: '2018-05-15',
        lastMaintenance: '2023-09-20',
        notes: 'Aeronave en excelente estado, última revisión completa.'
    },
    {
        id: 'SK-A3204',
        model: 'Airbus A320',
        capacity: 180,
        status: 'available',
        statusText: 'Disponible',
        icon: '✈️',
        lastFlight: '14 Oct, 2023',
        totalHours: 9800,
        manufactureDate: '2019-03-22',
        lastMaintenance: '2023-10-05',
        notes: 'Motor izquierdo recién revisado.'
    },
    {
        id: 'SK-B7872',
        model: 'Boeing 787',
        capacity: 290,
        status: 'assigned',
        statusText: 'Asignado',
        icon: '🛬',
        lastFlight: 'En vuelo',
        totalHours: 5600,
        manufactureDate: '2020-11-10',
        lastMaintenance: '2023-10-10',
        notes: 'Asignado a vuelo SW-1452 MEX-JFK.'
    },
    {
        id: 'SK-A3501',
        model: 'Airbus A350',
        capacity: 325,
        status: 'maintenance',
        statusText: 'Mantenimiento',
        icon: '🔧',
        lastFlight: '12 Oct, 2023',
        totalHours: 4200,
        manufactureDate: '2021-02-28',
        lastMaintenance: '2023-10-15',
        notes: 'Revisión de motores programada. Disponible en 3 días.'
    },
    {
        id: 'SK-7378',
        model: 'Boeing 737',
        capacity: 189,
        status: 'available',
        statusText: 'Disponible',
        icon: '✈️',
        lastFlight: '13 Oct, 2023',
        totalHours: 11200,
        manufactureDate: '2018-08-12',
        lastMaintenance: '2023-09-25',
        notes: 'Lista para asignación inmediata.'
    },
    {
        id: 'SK-A3207',
        model: 'Airbus A320',
        capacity: 180,
        status: 'assigned',
        statusText: 'Asignado',
        icon: '🛬',
        lastFlight: 'En vuelo',
        totalHours: 8900,
        manufactureDate: '2019-07-18',
        lastMaintenance: '2023-10-08',
        notes: 'Asignada a rutas regionales.'
    },
    {
        id: 'SK-B7875',
        model: 'Boeing 787',
        capacity: 290,
        status: 'available',
        statusText: 'Disponible',
        icon: '✈️',
        lastFlight: '14 Oct, 2023',
        totalHours: 3400,
        manufactureDate: '2022-01-30',
        lastMaintenance: '2023-10-12',
        notes: 'Nueva aeronave, horas bajas.'
    },
    {
        id: 'SK-7380',
        model: 'Boeing 737',
        capacity: 189,
        status: 'maintenance',
        statusText: 'Mantenimiento',
        icon: '🔧',
        lastFlight: '10 Oct, 2023',
        totalHours: 15600,
        manufactureDate: '2017-04-05',
        lastMaintenance: '2023-10-18',
        notes: 'Revisión general programada. Disponible en 5 días.'
    }
];

// ===========================
// ESTADO DE LA APLICACIÓN
// ===========================

let state = {
    isDarkMode: false,
    searchTerm: '',
    filters: {
        status: 'all',
        model: 'all'
    },
    sort: {
        field: null,
        direction: 'asc'
    },
    view: 'grid', // 'grid' or 'list'
    editingAircraft: null // null when adding, aircraft object when editing
};

// ===========================
// FUNCIONES DE FILTRADO Y ORDENAMIENTO
// ===========================

function getFilteredAircraft() {
    let filtered = [...aircraftFleet];

    // Filtro de búsqueda
    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase();
        filtered = filtered.filter(aircraft =>
            aircraft.id.toLowerCase().includes(term) ||
            aircraft.model.toLowerCase().includes(term)
        );
    }

    // Filtro de estado
    if (state.filters.status !== 'all') {
        filtered = filtered.filter(aircraft => aircraft.status === state.filters.status);
    }

    // Filtro de modelo
    if (state.filters.model !== 'all') {
        filtered = filtered.filter(aircraft => aircraft.model === state.filters.model);
    }

    // Ordenamiento
    if (state.sort.field) {
        filtered.sort((a, b) => {
            let valueA, valueB;
            
            switch (state.sort.field) {
                case 'id':
                    valueA = a.id;
                    valueB = b.id;
                    break;
                case 'model':
                    valueA = a.model;
                    valueB = b.model;
                    break;
                case 'capacity':
                    valueA = a.capacity;
                    valueB = b.capacity;
                    break;
                case 'status':
                    valueA = a.status;
                    valueB = b.status;
                    break;
                default:
                    return 0;
            }
            
            if (valueA < valueB) return state.sort.direction === 'asc' ? -1 : 1;
            if (valueA > valueB) return state.sort.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    return filtered;
}

function updateStats() {
    const total = aircraftFleet.length;
    const available = aircraftFleet.filter(a => a.status === 'available').length;
    const assigned = aircraftFleet.filter(a => a.status === 'assigned').length;
    const maintenance = aircraftFleet.filter(a => a.status === 'maintenance').length;

    document.getElementById('totalAircraft').textContent = total;
    document.getElementById('availableAircraft').textContent = available;
    document.getElementById('inFlightAircraft').textContent = assigned;
    document.getElementById('maintenanceAircraft').textContent = maintenance;
}

// ===========================
// FUNCIONES DE RENDERIZADO
// ===========================

function renderAircraft() {
    const filtered = getFilteredAircraft();
    const gridView = document.getElementById('aircraftGrid');
    const listBody = document.getElementById('aircraftListBody');

    // Actualizar contador de resultados
    document.getElementById('resultsCount').textContent = 
        `Mostrando ${filtered.length} de ${aircraftFleet.length} aeronaves`;

    // Renderizar vista de cuadrícula
    if (state.view === 'grid') {
        gridView.innerHTML = filtered.map(aircraft => `
            <div class="aircraft-card" data-id="${aircraft.id}">
                <div class="aircraft-card-header">
                    <div class="aircraft-info">
                        <h3>${aircraft.id}</h3>
                        <p class="aircraft-model">${aircraft.model}</p>
                    </div>
                    <div class="aircraft-icon">${aircraft.icon}</div>
                </div>
                <div class="aircraft-card-body">
                    <div class="aircraft-details">
                        <div class="detail-item">
                            <span class="detail-label">Capacidad</span>
                            <span class="detail-value">${aircraft.capacity} pasajeros</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Último vuelo</span>
                            <span class="detail-value">${aircraft.lastFlight}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Horas totales</span>
                            <span class="detail-value">${aircraft.totalHours.toLocaleString()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Estado</span>
                            <div class="aircraft-status">
                                <span class="status-dot ${aircraft.status}"></span>
                                <span class="status-text ${aircraft.status}">${aircraft.statusText}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aircraft-card-footer">
                    <button class="card-action-btn view" onclick="viewAircraftDetails('${aircraft.id}')">
                        Ver detalles
                    </button>
                    <button class="card-action-btn edit" onclick="editAircraft('${aircraft.id}')">
                        Editar
                    </button>
                </div>
            </div>
        `).join('');
    } else {
        // Renderizar vista de lista
        listBody.innerHTML = filtered.map(aircraft => `
            <div class="list-row" data-id="${aircraft.id}">
                <div class="list-column">
                    <span class="list-id">${aircraft.id}</span>
                    <span class="list-model">${aircraft.model}</span>
                </div>
                <div class="list-column">${aircraft.capacity} pax</div>
                <div class="list-column">
                    <div class="aircraft-status">
                        <span class="status-dot ${aircraft.status}"></span>
                        <span class="status-text ${aircraft.status}">${aircraft.statusText}</span>
                    </div>
                </div>
                <div class="list-column">${aircraft.lastFlight}</div>
                <div class="list-column">${aircraft.totalHours.toLocaleString()}</div>
                <div class="list-column">
                    <button class="list-action-btn" onclick="viewAircraftDetails('${aircraft.id}')" title="Ver detalles">
                        👁️
                    </button>
                    <button class="list-action-btn" onclick="editAircraft('${aircraft.id}')" title="Editar">
                        ✏️
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function renderActiveFilters() {
    const container = document.getElementById('activeFilters');
    const filters = [];
    
    if (state.filters.status !== 'all') {
        const labels = {
            'available': 'Disponible',
            'assigned': 'Asignado',
            'maintenance': 'Mantenimiento'
        };
        filters.push({ type: 'status', label: `Estado: ${labels[state.filters.status]}` });
    }
    
    if (state.filters.model !== 'all') {
        filters.push({ type: 'model', label: `Modelo: ${state.filters.model}` });
    }
    
    container.innerHTML = filters.map(filter => `
        <div class="filter-tag">
            <span>${filter.label}</span>
            <span class="filter-tag-remove" onclick="removeFilter('${filter.type}')">&times;</span>
        </div>
    `).join('');
}

// ===========================
// FUNCIONES DE INTERACCIÓN
// ===========================

function toggleTheme() {
    state.isDarkMode = !state.isDarkMode;
    document.body.classList.toggle('dark');
    
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    themeIcon.textContent = state.isDarkMode ? '☀️' : '🌙';
    themeText.textContent = state.isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
    
    localStorage.setItem('darkMode', state.isDarkMode);
}

function toggleDropdown(btnId, menuId) {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    
    // Cerrar otros dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m.id !== menuId) {
            m.classList.remove('show');
        }
    });
    document.querySelectorAll('.filter-btn').forEach(b => {
        if (b.id !== btnId) {
            b.classList.remove('open');
        }
    });
    
    btn.classList.toggle('open');
    menu.classList.toggle('show');
}

function setFilter(type, value) {
    state.filters[type] = value;
    renderAircraft();
    renderActiveFilters();
    
    // Actualizar UI del dropdown
    document.querySelectorAll(`[data-filter="${type}"]`).forEach(item => {
        item.classList.toggle('active', item.dataset.value === value);
    });
}

function removeFilter(type) {
    state.filters[type] = 'all';
    renderAircraft();
    renderActiveFilters();
    
    // Actualizar UI del dropdown
    document.querySelectorAll(`[data-filter="${type}"]`).forEach(item => {
        item.classList.toggle('active', item.dataset.value === 'all');
    });
}

function clearAllFilters() {
    state.filters = {
        status: 'all',
        model: 'all'
    };
    state.searchTerm = '';
    document.getElementById('searchInput').value = '';
    
    // Actualizar todos los dropdowns
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.toggle('active', item.dataset.value === 'all');
    });
    
    renderAircraft();
    renderActiveFilters();
}

function updateSearch(value) {
    state.searchTerm = value;
    renderAircraft();
}

function changeView(view) {
    state.view = view;
    
    document.getElementById('gridViewBtn').classList.toggle('active', view === 'grid');
    document.getElementById('listViewBtn').classList.toggle('active', view === 'list');
    
    document.getElementById('aircraftGrid').classList.toggle('hidden', view !== 'grid');
    document.getElementById('aircraftList').classList.toggle('hidden', view !== 'list');
    
    renderAircraft();
}

function viewAircraftDetails(aircraftId) {
    const aircraft = aircraftFleet.find(a => a.id === aircraftId);
    if (!aircraft) return;
    
    const modal = document.getElementById('aircraftModal');
    const modalBody = document.getElementById('modalBody');
    
    const statusColors = {
        'available': 'success',
        'assigned': 'danger',
        'maintenance': 'warning'
    };
    
    modalBody.innerHTML = `
        <div style="display: grid; gap: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                <div style="font-size: 3rem;">${aircraft.icon}</div>
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem;">${aircraft.id}</h3>
                    <p style="color: var(--text-muted-light);">${aircraft.model}</p>
                </div>
                <div style="margin-left: auto;">
                    <span class="status-badge ${aircraft.status}">${aircraft.statusText}</span>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                <div class="detail-card">
                    <div style="color: var(--text-muted-light); font-size: 0.875rem; margin-bottom: 0.5rem;">Capacidad</div>
                    <div style="font-size: 1.5rem; font-weight: 700;">${aircraft.capacity} pasajeros</div>
                </div>
                
                <div class="detail-card">
                    <div style="color: var(--text-muted-light); font-size: 0.875rem; margin-bottom: 0.5rem;">Horas totales</div>
                    <div style="font-size: 1.5rem; font-weight: 700;">${aircraft.totalHours.toLocaleString()}</div>
                </div>
                
                <div class="detail-card">
                    <div style="color: var(--text-muted-light); font-size: 0.875rem; margin-bottom: 0.5rem;">Último vuelo</div>
                    <div style="font-size: 1.125rem; font-weight: 600;">${aircraft.lastFlight}</div>
                </div>
                
                <div class="detail-card">
                    <div style="color: var(--text-muted-light); font-size: 0.875rem; margin-bottom: 0.5rem;">Fecha fabricación</div>
                    <div style="font-size: 1.125rem; font-weight: 600;">${formatDate(aircraft.manufactureDate)}</div>
                </div>
                
                <div class="detail-card">
                    <div style="color: var(--text-muted-light); font-size: 0.875rem; margin-bottom: 0.5rem;">Último mantenimiento</div>
                    <div style="font-size: 1.125rem; font-weight: 600;">${formatDate(aircraft.lastMaintenance)}</div>
                </div>
            </div>
            
            ${aircraft.notes ? `
                <div style="border-top: 1px solid var(--border-light); padding-top: 1rem;">
                    <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Notas</h4>
                    <p style="color: var(--text-muted-light); line-height: 1.5;">${aircraft.notes}</p>
                </div>
            ` : ''}
        </div>
        
        <style>
            .detail-card {
                background-color: var(--bg-light);
                padding: 1rem;
                border-radius: 0.5rem;
            }
            body.dark .detail-card {
                background-color: rgba(30, 41, 59, 0.5);
            }
            .status-badge {
                display: inline-flex;
                align-items: center;
                padding: 0.5rem 1rem;
                border-radius: 9999px;
                font-size: 0.875rem;
                font-weight: 600;
            }
            .status-badge.available {
                background-color: var(--success-light);
                color: var(--success);
            }
            .status-badge.assigned {
                background-color: var(--danger-light);
                color: var(--danger);
            }
            .status-badge.maintenance {
                background-color: var(--warning-light);
                color: var(--warning);
            }
        </style>
    `;
    
    modal.classList.add('show');
}

function formatDate(dateString) {
    if (!dateString) return 'No disponible';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function closeModal() {
    document.getElementById('aircraftModal').classList.remove('show');
    document.getElementById('editAircraftModal').classList.remove('show');
}

function addNewAircraft() {
    state.editingAircraft = null;
    document.getElementById('editModalTitle').textContent = 'Nueva Aeronave';
    document.getElementById('aircraftForm').reset();
    document.getElementById('editAircraftModal').classList.add('show');
}

function editAircraft(aircraftId) {
    const aircraft = aircraftFleet.find(a => a.id === aircraftId);
    if (!aircraft) return;
    
    state.editingAircraft = aircraft;
    document.getElementById('editModalTitle').textContent = `Editar ${aircraft.id}`;
    
    // Llenar formulario con datos de la aeronave
    document.getElementById('aircraftId').value = aircraft.id;
    document.getElementById('aircraftModel').value = aircraft.model;
    document.getElementById('aircraftCapacity').value = aircraft.capacity;
    document.getElementById('aircraftStatus').value = aircraft.status;
    document.getElementById('aircraftManufactureDate').value = aircraft.manufactureDate || '';
    document.getElementById('aircraftHours').value = aircraft.totalHours || '';
    document.getElementById('aircraftLastMaintenance').value = aircraft.lastMaintenance || '';
    document.getElementById('aircraftNotes').value = aircraft.notes || '';
    
    document.getElementById('editAircraftModal').classList.add('show');
}

function saveAircraft() {
    const form = document.getElementById('aircraftForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Mostrar loading
    document.getElementById('loadingOverlay').classList.add('show');
    
    // Simular guardado
    setTimeout(() => {
        const aircraftData = {
            id: document.getElementById('aircraftId').value,
            model: document.getElementById('aircraftModel').value,
            capacity: parseInt(document.getElementById('aircraftCapacity').value),
            status: document.getElementById('aircraftStatus').value,
            statusText: getStatusText(document.getElementById('aircraftStatus').value),
            icon: getAircraftIcon(document.getElementById('aircraftModel').value, document.getElementById('aircraftStatus').value),
            lastFlight: state.editingAircraft ? state.editingAircraft.lastFlight : 'Nuevo',
            totalHours: parseInt(document.getElementById('aircraftHours').value) || 0,
            manufactureDate: document.getElementById('aircraftManufactureDate').value || null,
            lastMaintenance: document.getElementById('aircraftLastMaintenance').value || null,
            notes: document.getElementById('aircraftNotes').value || ''
        };
        
        if (state.editingAircraft) {
            // Actualizar aeronave existente
            const index = aircraftFleet.findIndex(a => a.id === state.editingAircraft.id);
            if (index !== -1) {
                aircraftFleet[index] = aircraftData;
            }
        } else {
            // Agregar nueva aeronave
            aircraftFleet.push(aircraftData);
        }
        
        // Ocultar loading
        document.getElementById('loadingOverlay').classList.remove('show');
        
        // Cerrar modal y actualizar vista
        closeModal();
        updateStats();
        renderAircraft();
        
        alert(state.editingAircraft ? 'Aeronave actualizada exitosamente' : 'Aeronave agregada exitosamente');
    }, 1000);
}

function getStatusText(status) {
    const statusMap = {
        'available': 'Disponible',
        'assigned': 'Asignado',
        'maintenance': 'Mantenimiento'
    };
    return statusMap[status] || 'Desconocido';
}

function getAircraftIcon(model, status) {
    const statusIcons = {
        'available': '✈️',
        'assigned': '🛬',
        'maintenance': '🔧'
    };
    return statusIcons[status] || '✈️';
}

function deleteAircraft() {
    if (!state.editingAircraft) return;
    
    if (confirm(`¿Está seguro que desea eliminar la aeronave ${state.editingAircraft.id}? Esta acción no se puede deshacer.`)) {
        // Mostrar loading
        document.getElementById('loadingOverlay').classList.add('show');
        
        // Simular eliminación
        setTimeout(() => {
            const index = aircraftFleet.findIndex(a => a.id === state.editingAircraft.id);
            if (index !== -1) {
                aircraftFleet.splice(index, 1);
            }
            
            // Ocultar loading
            document.getElementById('loadingOverlay').classList.remove('show');
            
            // Cerrar modal y actualizar vista
            closeModal();
            updateStats();
            renderAircraft();
            
            alert('Aeronave eliminada exitosamente');
        }, 1000);
    }
}

// ===========================
// INICIALIZACIÓN
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Cargar tema guardado
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        state.isDarkMode = true;
        document.body.classList.add('dark');
        document.getElementById('themeIcon').textContent = '☀️';
        document.getElementById('themeText').textContent = 'Modo Claro';
    }
    
    // Actualizar estadísticas iniciales
    updateStats();
    
    // Renderizar aeronaves
    renderAircraft();
    renderActiveFilters();
    
    // Event Listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('searchInput').addEventListener('input', (e) => updateSearch(e.target.value));
    document.getElementById('addAircraftBtn').addEventListener('click', addNewAircraft);
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);
    document.getElementById('gridViewBtn').addEventListener('click', () => changeView('grid'));
    document.getElementById('listViewBtn').addEventListener('click', () => changeView('list'));
    
    // Dropdowns
    document.getElementById('statusFilterBtn').addEventListener('click', () => 
        toggleDropdown('statusFilterBtn', 'statusFilterMenu'));
    document.getElementById('modelFilterBtn').addEventListener('click', () => 
        toggleDropdown('modelFilterBtn', 'modelFilterMenu'));
    
    // Filter items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            const value = e.target.dataset.value;
            setFilter(filter, value);
            
            // Cerrar dropdown
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('open'));
        });
    });
    
    // Modal controls
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
    document.getElementById('modalDeleteBtn').addEventListener('click', deleteAircraft);
    document.getElementById('modalEditBtn').addEventListener('click', () => {
        if (state.editingAircraft) {
            editAircraft(state.editingAircraft.id);
        }
    });
    
    // Edit modal controls
    document.getElementById('editModalClose').addEventListener('click', closeModal);
    document.getElementById('editModalCancelBtn').addEventListener('click', closeModal);
    document.getElementById('editModalSaveBtn').addEventListener('click', saveAircraft);
    
    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('open'));
        }
    });
    
    // Cerrar modales al hacer clic fuera
    document.getElementById('aircraftModal').addEventListener('click', (e) => {
        if (e.target.id === 'aircraftModal') {
            closeModal();
        }
    });
    
    document.getElementById('editAircraftModal').addEventListener('click', (e) => {
        if (e.target.id === 'editAircraftModal') {
            closeModal();
        }
    });
});

// ===========================
// FUNCIONES GLOBALES
// ===========================

window.viewAircraftDetails = viewAircraftDetails;
window.editAircraft = editAircraft;
window.removeFilter = removeFilter;