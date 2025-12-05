// ===========================
// DATOS INICIALES
// ===========================

let allFlights = [
    {
        id: 'SW-1452',
        route: 'MEX - JFK',
        origin: 'MEX',
        destination: 'JFK',
        date: '15 Oct, 2023',
        dateObj: new Date('2023-10-15'),
        time: '08:30 AM',
        aircraft: 'Boeing 787 / XA-SWA',
        responsible: 'Carlos Pérez',
        status: 'scheduled',
        statusText: 'Programado'
    },
    {
        id: 'SW-2109',
        route: 'CUN - LAX',
        origin: 'CUN',
        destination: 'LAX',
        date: '15 Oct, 2023',
        dateObj: new Date('2023-10-15'),
        time: '11:00 AM',
        aircraft: 'Airbus A320 / XA-SWB',
        responsible: 'Ana Rodríguez',
        status: 'in-route',
        statusText: 'En ruta'
    },
    {
        id: 'SW-8843',
        route: 'GDL - MIA',
        origin: 'GDL',
        destination: 'MIA',
        date: '16 Oct, 2023',
        dateObj: new Date('2023-10-16'),
        time: '01:45 PM',
        aircraft: 'Boeing 737 / XA-SWC',
        responsible: 'Luis Hernández',
        status: 'delayed',
        statusText: 'Retrasado'
    },
    {
        id: 'SW-3121',
        route: 'MTY - ORD',
        origin: 'MTY',
        destination: 'ORD',
        date: '16 Oct, 2023',
        dateObj: new Date('2023-10-16'),
        time: '06:00 PM',
        aircraft: 'Boeing 787 / XA-SWA',
        responsible: 'Sofía Gómez',
        status: 'cancelled',
        statusText: 'Cancelado'
    },
    {
        id: 'SW-5050',
        route: 'SJD - YVR',
        origin: 'SJD',
        destination: 'YVR',
        date: '17 Oct, 2023',
        dateObj: new Date('2023-10-17'),
        time: '09:15 AM',
        aircraft: 'Airbus A320 / XA-SWB',
        responsible: 'Mario Méndez',
        status: 'scheduled',
        statusText: 'Programado'
    },
    {
        id: 'SW-7721',
        route: 'JFK - LAX',
        origin: 'JFK',
        destination: 'LAX',
        date: '17 Oct, 2023',
        dateObj: new Date('2023-10-17'),
        time: '02:30 PM',
        aircraft: 'Boeing 737 / XA-SWC',
        responsible: 'Carlos Pérez',
        status: 'scheduled',
        statusText: 'Programado'
    },
    {
        id: 'SW-4489',
        route: 'LAX - MEX',
        origin: 'LAX',
        destination: 'MEX',
        date: '17 Oct, 2023',
        dateObj: new Date('2023-10-17'),
        time: '05:00 PM',
        aircraft: 'Airbus A320 / XA-SWB',
        responsible: 'Ana Rodríguez',
        status: 'in-route',
        statusText: 'En ruta'
    },
    {
        id: 'SW-9012',
        route: 'MEX - CUN',
        origin: 'MEX',
        destination: 'CUN',
        date: '18 Oct, 2023',
        dateObj: new Date('2023-10-18'),
        time: '07:00 AM',
        aircraft: 'Boeing 787 / XA-SWA',
        responsible: 'Luis Hernández',
        status: 'scheduled',
        statusText: 'Programado'
    },
    {
        id: 'SW-6734',
        route: 'MIA - JFK',
        origin: 'MIA',
        destination: 'JFK',
        date: '18 Oct, 2023',
        dateObj: new Date('2023-10-18'),
        time: '11:30 AM',
        aircraft: 'Boeing 737 / XA-SWC',
        responsible: 'Sofía Gómez',
        status: 'completed',
        statusText: 'Completado'
    },
    {
        id: 'SW-2345',
        route: 'ORD - LAX',
        origin: 'ORD',
        destination: 'LAX',
        date: '18 Oct, 2023',
        dateObj: new Date('2023-10-18'),
        time: '03:15 PM',
        aircraft: 'Airbus A320 / XA-SWB',
        responsible: 'Mario Méndez',
        status: 'delayed',
        statusText: 'Retrasado'
    }
];

// ===========================
// ESTADO DE LA APLICACIÓN
// ===========================

let state = {
    isDarkMode: false,
    searchTerm: '',
    filters: {
        date: 'all',
        status: 'all',
        airport: 'all'
    },
    sort: {
        field: null,
        direction: 'asc'
    },
    view: 'table', // 'table' or 'card'
    pagination: {
        currentPage: 1,
        itemsPerPage: 10
    }
};

// ===========================
// FUNCIONES DE FILTRADO Y ORDENAMIENTO
// ===========================

function getFilteredFlights() {
    let filtered = [...allFlights];

    // Filtro de búsqueda
    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase();
        filtered = filtered.filter(flight =>
            flight.id.toLowerCase().includes(term) ||
            flight.route.toLowerCase().includes(term) ||
            flight.aircraft.toLowerCase().includes(term) ||
            flight.responsible.toLowerCase().includes(term)
        );
    }

    // Filtro de fecha
    if (state.filters.date !== 'all') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        filtered = filtered.filter(flight => {
            const flightDate = new Date(flight.dateObj);
            flightDate.setHours(0, 0, 0, 0);
            
            switch (state.filters.date) {
                case 'today':
                    return flightDate.getTime() === today.getTime();
                case 'tomorrow':
                    const tomorrow = new Date(today);
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    return flightDate.getTime() === tomorrow.getTime();
                case 'week':
                    const weekLater = new Date(today);
                    weekLater.setDate(weekLater.getDate() + 7);
                    return flightDate >= today && flightDate <= weekLater;
                default:
                    return true;
            }
        });
    }

    // Filtro de estado
    if (state.filters.status !== 'all') {
        filtered = filtered.filter(flight => flight.status === state.filters.status);
    }

    // Filtro de aeropuerto
    if (state.filters.airport !== 'all') {
        filtered = filtered.filter(flight =>
            flight.origin === state.filters.airport ||
            flight.destination === state.filters.airport
        );
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
                case 'route':
                    valueA = a.route;
                    valueB = b.route;
                    break;
                case 'date':
                    valueA = a.dateObj;
                    valueB = b.dateObj;
                    break;
                case 'time':
                    valueA = a.time;
                    valueB = b.time;
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

function getPaginatedFlights() {
    const filtered = getFilteredFlights();
    const start = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
    const end = start + state.pagination.itemsPerPage;
    return filtered.slice(start, end);
}

function getTotalPages() {
    const filtered = getFilteredFlights();
    return Math.ceil(filtered.length / state.pagination.itemsPerPage);
}

// ===========================
// FUNCIONES DE RENDERIZADO
// ===========================

function renderFlights() {
    const tableBody = document.getElementById('flightsTableBody');
    const cardView = document.getElementById('cardView');
    const flights = getPaginatedFlights();

    if (state.view === 'table') {
        tableBody.innerHTML = flights.map(flight => `
            <tr>
                <td><strong>${flight.id}</strong></td>
                <td>${flight.route}</td>
                <td>${flight.date}</td>
                <td>${flight.time}</td>
                <td>${flight.aircraft}</td>
                <td>${flight.responsible}</td>
                <td>
                    <span class="status-badge ${flight.status}">
                        ${flight.statusText}
                    </span>
                </td>
                <td>
                    <button class="action-btn" onclick="viewFlightDetails('${flight.id}')" title="Ver más">
                        ⋮
                    </button>
                </td>
            </tr>
        `).join('');
    } else {
        cardView.innerHTML = flights.map(flight => `
            <div class="flight-card" onclick="viewFlightDetails('${flight.id}')">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 0.25rem;">${flight.id}</h3>
                        <p style="color: var(--text-muted-light); font-size: 0.875rem;">${flight.route}</p>
                    </div>
                    <span class="status-badge ${flight.status}">${flight.statusText}</span>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.875rem;">
                    <div>
                        <p style="color: var(--text-muted-light);">Fecha</p>
                        <p style="font-weight: 500;">${flight.date}</p>
                    </div>
                    <div>
                        <p style="color: var(--text-muted-light);">Hora</p>
                        <p style="font-weight: 500;">${flight.time}</p>
                    </div>
                    <div>
                        <p style="color: var(--text-muted-light);">Aeronave</p>
                        <p style="font-weight: 500;">${flight.aircraft}</p>
                    </div>
                    <div>
                        <p style="color: var(--text-muted-light);">Responsable</p>
                        <p style="font-weight: 500;">${flight.responsible}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    updateResultsCount();
    renderPagination();
}

function updateResultsCount() {
    const filtered = getFilteredFlights();
    const start = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage + 1;
    const end = Math.min(start + state.pagination.itemsPerPage - 1, filtered.length);
    
    document.getElementById('resultsCount').textContent = 
        `Mostrando ${filtered.length > 0 ? start : 0}-${end} de ${filtered.length} vuelos`;
    
    document.getElementById('paginationInfo').textContent = 
        `Mostrando ${start}-${end} de ${filtered.length} resultados`;
}

function renderPagination() {
    const totalPages = getTotalPages();
    const currentPage = state.pagination.currentPage;
    const numbersContainer = document.getElementById('paginationNumbers');
    
    // Botones anterior/siguiente
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages || totalPages === 0;
    
    // Números de página
    let pages = [];
    if (totalPages <= 7) {
        pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
        if (currentPage <= 4) {
            pages = [1, 2, 3, 4, 5, '...', totalPages];
        } else if (currentPage >= totalPages - 3) {
            pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
    }
    
    numbersContainer.innerHTML = pages.map(page => {
        if (page === '...') {
            return '<span style="padding: 0 0.5rem;">...</span>';
        }
        return `
            <button class="page-number ${page === currentPage ? 'active' : ''}" 
                    onclick="goToPage(${page})">
                ${page}
            </button>
        `;
    }).join('');
}

function renderActiveFilters() {
    const container = document.getElementById('activeFilters');
    const filters = [];
    
    if (state.filters.date !== 'all') {
        const labels = {
            'today': 'Hoy',
            'tomorrow': 'Mañana',
            'week': 'Esta semana'
        };
        filters.push({ type: 'date', label: `Fecha: ${labels[state.filters.date]}` });
    }
    
    if (state.filters.status !== 'all') {
        const labels = {
            'scheduled': 'Programado',
            'in-route': 'En ruta',
            'delayed': 'Retrasado',
            'cancelled': 'Cancelado',
            'completed': 'Completado'
        };
        filters.push({ type: 'status', label: `Estado: ${labels[state.filters.status]}` });
    }
    
    if (state.filters.airport !== 'all') {
        filters.push({ type: 'airport', label: `Aeropuerto: ${state.filters.airport}` });
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
    state.pagination.currentPage = 1;
    renderFlights();
    renderActiveFilters();
    
    // Actualizar UI del dropdown
    document.querySelectorAll(`[data-filter="${type}"]`).forEach(item => {
        item.classList.toggle('active', item.dataset.value === value);
    });
}

function removeFilter(type) {
    state.filters[type] = 'all';
    state.pagination.currentPage = 1;
    renderFlights();
    renderActiveFilters();
    
    // Actualizar UI del dropdown
    document.querySelectorAll(`[data-filter="${type}"]`).forEach(item => {
        item.classList.toggle('active', item.dataset.value === 'all');
    });
}

function clearAllFilters() {
    state.filters = {
        date: 'all',
        status: 'all',
        airport: 'all'
    };
    state.searchTerm = '';
    document.getElementById('searchInput').value = '';
    state.pagination.currentPage = 1;
    
    // Actualizar todos los dropdowns
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.toggle('active', item.dataset.value === 'all');
    });
    
    renderFlights();
    renderActiveFilters();
}

function updateSearch(value) {
    state.searchTerm = value;
    state.pagination.currentPage = 1;
    renderFlights();
}

function sortBy(field) {
    if (state.sort.field === field) {
        state.sort.direction = state.sort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        state.sort.field = field;
        state.sort.direction = 'asc';
    }
    
    // Actualizar UI de botones de ordenamiento
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.classList.remove('asc', 'desc');
        if (btn.dataset.sort === field) {
            btn.classList.add(state.sort.direction);
        }
    });
    
    renderFlights();
}

function changeView(view) {
    state.view = view;
    
    document.getElementById('tableViewBtn').classList.toggle('active', view === 'table');
    document.getElementById('cardViewBtn').classList.toggle('active', view === 'card');
    
    document.getElementById('tableView').classList.toggle('hidden', view !== 'table');
    document.getElementById('cardView').classList.toggle('hidden', view !== 'card');
    
    renderFlights();
}

function goToPage(page) {
    state.pagination.currentPage = page;
    renderFlights();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextPage() {
    if (state.pagination.currentPage < getTotalPages()) {
        goToPage(state.pagination.currentPage + 1);
    }
}

function prevPage() {
    if (state.pagination.currentPage > 1) {
        goToPage(state.pagination.currentPage - 1);
    }
}

function viewFlightDetails(flightId) {
    const flight = allFlights.find(f => f.id === flightId);
    if (!flight) return;
    
    const modal = document.getElementById('flightModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="display: grid; gap: 1.5rem;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div>
                    <p style="color: var(--text-muted-light); font-size: 0.875rem; margin-bottom: 0.25rem;">ID de Vuelo</p>
                    <p style="font-weight: 600; font-size: 1.125rem;">${flight.id}</p>
                </div>
                <div>
                    <p style="color: var(--text-muted-light); font-size: 0.875rem; margin-bottom: 0.25rem;">Estado</p>
                    <span class="status-badge ${flight.status}">${flight.statusText}</span>
                </div>
            </div>
            <div style="border-top: 1px solid var(--border-light); padding-top: 1rem;">
                <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 1rem;">Información del Vuelo</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: var(--text-muted-light);">Ruta:</span>
                        <span style="font-weight: 500;">${flight.route}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: var(--text-muted-light);">Fecha:</span>
                        <span style="font-weight: 500;">${flight.date}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: var(--text-muted-light);">Hora:</span>
                        <span style="font-weight: 500;">${flight.time}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: var(--text-muted-light);">Aeronave:</span>
                        <span style="font-weight: 500;">${flight.aircraft}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: var(--text-muted-light);">Responsable:</span>
                        <span style="font-weight: 500;">${flight.responsible}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('flightModal').classList.remove('show');
}

function createNewFlight() {
    window.location.href = 'nuevoVuelo.html';
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
    
    // Event Listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('searchInput').addEventListener('input', (e) => updateSearch(e.target.value));
    document.getElementById('createFlightBtn').addEventListener('click', createNewFlight);
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);
    document.getElementById('tableViewBtn').addEventListener('click', () => changeView('table'));
    document.getElementById('cardViewBtn').addEventListener('click', () => changeView('card'));
    document.getElementById('prevBtn').addEventListener('click', prevPage);
    document.getElementById('nextBtn').addEventListener('click', nextPage);
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
    
    // Dropdowns
    document.getElementById('dateFilterBtn').addEventListener('click', () => 
        toggleDropdown('dateFilterBtn', 'dateFilterMenu'));
    document.getElementById('statusFilterBtn').addEventListener('click', () => 
        toggleDropdown('statusFilterBtn', 'statusFilterMenu'));
    document.getElementById('airportFilterBtn').addEventListener('click', () => 
        toggleDropdown('airportFilterBtn', 'airportFilterMenu'));
    
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
    
    // Sort buttons
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => sortBy(btn.dataset.sort));
    });
    
    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('open'));
        }
    });
    
    // Cerrar modal al hacer clic fuera
    document.getElementById('flightModal').addEventListener('click', (e) => {
        if (e.target.id === 'flightModal') {
            closeModal();
        }
    });
    
    // Renderizado inicial
    renderFlights();
    renderActiveFilters();
});

// ===========================
// FUNCIONES GLOBALES
// ===========================

window.viewFlightDetails = viewFlightDetails;
window.removeFilter = removeFilter;
window.goToPage = goToPage;