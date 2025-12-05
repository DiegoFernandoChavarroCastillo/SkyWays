// ===========================
// DATOS INICIALES DE TRIPULACIÓN
// ===========================

let crewMembers = [
    {
        id: 'CREW-001',
        firstName: 'Ana',
        lastName: 'Torres',
        fullName: 'Ana Torres',
        email: 'ana.torres@skyways.com',
        phone: '+52 55 1234 5678',
        role: 'piloto',
        roleText: 'Piloto',
        rank: 'capitan',
        rankText: 'Capitán',
        license: 'B737',
        additionalLicenses: ['A320', 'B787'],
        flightHours: 12500,
        status: 'available',
        statusText: 'Disponible',
        base: 'MEX',
        nextFlight: 'SW-1452 - 15 Oct, 08:30',
        hireDate: '2018-03-15',
        medicalExpiry: '2024-06-30',
        lastMedical: '2023-12-15',
        bloodType: 'A+',
        allergies: 'Ninguna',
        medicalNotes: 'Examen médico anual completado'
    },
    {
        id: 'CREW-002',
        firstName: 'Carlos',
        lastName: 'Ruiz',
        fullName: 'Carlos Ruiz',
        email: 'carlos.ruiz@skyways.com',
        phone: '+52 55 9876 5432',
        role: 'copiloto',
        roleText: 'Copiloto',
        rank: 'primer_oficial',
        rankText: 'Primer Oficial',
        license: 'A320',
        additionalLicenses: ['B737'],
        flightHours: 8500,
        status: 'assigned',
        statusText: 'Asignado',
        base: 'CUN',
        nextFlight: 'En vuelo - SW-2109',
        hireDate: '2019-07-22',
        medicalExpiry: '2024-08-15',
        lastMedical: '2023-11-20',
        bloodType: 'O+',
        allergies: 'Penicilina',
        medicalNotes: 'Requiere certificado médico cada 6 meses'
    },
    {
        id: 'CREW-003',
        firstName: 'Elena',
        lastName: 'Gomez',
        fullName: 'Elena Gomez',
        email: 'elena.gomez@skyways.com',
        phone: '+52 55 4567 8901',
        role: 'sobrecargo',
        roleText: 'Sobrecargo',
        rank: 'jefe',
        rankText: 'Jefe de Cabina',
        license: 'B737',
        additionalLicenses: ['A320', 'B787'],
        flightHours: 3200,
        status: 'available',
        statusText: 'Disponible',
        base: 'MEX',
        nextFlight: 'SW-8843 - 16 Oct, 13:45',
        hireDate: '2020-11-10',
        medicalExpiry: '2024-05-20',
        lastMedical: '2023-10-05',
        bloodType: 'B-',
        allergies: 'Ninguna',
        medicalNotes: 'Certificado de primeros auxilios vigente'
    },
    {
        id: 'CREW-004',
        firstName: 'Luis',
        lastName: 'Hernández',
        fullName: 'Luis Hernández',
        email: 'luis.hernandez@skyways.com',
        phone: '+52 55 2345 6789',
        role: 'piloto',
        roleText: 'Piloto',
        rank: 'capitan',
        rankText: 'Capitán',
        license: 'B787',
        additionalLicenses: ['A350'],
        flightHours: 15600,
        status: 'resting',
        statusText: 'Descanso',
        base: 'JFK',
        nextFlight: 'Disponible en 2 días',
        hireDate: '2016-05-18',
        medicalExpiry: '2024-07-10',
        lastMedical: '2023-09-25',
        bloodType: 'AB+',
        allergies: 'Nueces',
        medicalNotes: 'Examen de visión programado para Diciembre'
    },
    {
        id: 'CREW-005',
        firstName: 'Sofía',
        lastName: 'Gómez',
        fullName: 'Sofía Gómez',
        email: 'sofia.gomez@skyways.com',
        phone: '+52 55 3456 7890',
        role: 'sobrecargo',
        roleText: 'Sobrecargo',
        rank: 'senior',
        rankText: 'Senior',
        license: 'A320',
        additionalLicenses: ['B737'],
        flightHours: 4200,
        status: 'vacation',
        statusText: 'Vacaciones',
        base: 'LAX',
        nextFlight: 'Regresa 25 Oct',
        hireDate: '2021-02-28',
        medicalExpiry: '2024-09-05',
        lastMedical: '2023-08-15',
        bloodType: 'O-',
        allergies: 'Ninguna',
        medicalNotes: ''
    },
    {
        id: 'CREW-006',
        firstName: 'Miguel',
        lastName: 'Ramírez',
        fullName: 'Miguel Ramírez',
        email: 'miguel.ramirez@skyways.com',
        phone: '+52 55 5678 9012',
        role: 'ingeniero',
        roleText: 'Ingeniero de Vuelo',
        rank: 'senior',
        rankText: 'Senior',
        license: 'A350',
        additionalLicenses: ['B787', 'B777'],
        flightHours: 8900,
        status: 'available',
        statusText: 'Disponible',
        base: 'MIA',
        nextFlight: 'SW-3121 - 16 Oct, 18:00',
        hireDate: '2018-09-12',
        medicalExpiry: '2024-04-30',
        lastMedical: '2023-07-20',
        bloodType: 'A-',
        allergies: 'Latex',
        medicalNotes: 'Requiere guantes sin latex'
    },
    {
        id: 'CREW-007',
        firstName: 'María',
        lastName: 'Fernández',
        fullName: 'María Fernández',
        email: 'maria.fernandez@skyways.com',
        phone: '+52 55 6789 0123',
        role: 'copiloto',
        roleText: 'Copiloto',
        rank: 'segundo_oficial',
        rankText: 'Segundo Oficial',
        license: 'B737',
        additionalLicenses: ['A320'],
        flightHours: 3200,
        status: 'assigned',
        statusText: 'Asignado',
        base: 'MEX',
        nextFlight: 'En vuelo - SW-4489',
        hireDate: '2022-01-15',
        medicalExpiry: '2024-11-15',
        lastMedical: '2023-06-10',
        bloodType: 'B+',
        allergies: 'Ninguna',
        medicalNotes: ''
    },
    {
        id: 'CREW-008',
        firstName: 'Javier',
        lastName: 'Martínez',
        fullName: 'Javier Martínez',
        email: 'javier.martinez@skyways.com',
        phone: '+52 55 7890 1234',
        role: 'piloto',
        roleText: 'Piloto',
        rank: 'primer_oficial',
        rankText: 'Primer Oficial',
        license: 'A320',
        additionalLicenses: ['B737', 'B787'],
        flightHours: 6800,
        status: 'available',
        statusText: 'Disponible',
        base: 'CUN',
        nextFlight: 'SW-5050 - 17 Oct, 09:15',
        hireDate: '2019-11-30',
        medicalExpiry: '2024-03-25',
        lastMedical: '2023-05-18',
        bloodType: 'O+',
        allergies: 'Penicilina',
        medicalNotes: 'Historial médico completo'
    }
];

// Datos de horarios para la vista de calendario
let scheduleData = {
    currentWeek: new Date('2023-10-16'),
    assignments: [
        { crewId: 'CREW-002', flight: 'SW-2109', date: '2023-10-16', role: 'copiloto', start: '11:00', end: '14:00' },
        { crewId: 'CREW-007', flight: 'SW-4489', date: '2023-10-17', role: 'copiloto', start: '17:00', end: '20:00' },
        { crewId: 'CREW-004', flight: 'SW-1452', date: '2023-10-15', role: 'piloto', start: '08:30', end: '12:30' },
        { crewId: 'CREW-001', flight: 'SW-1452', date: '2023-10-15', role: 'piloto', start: '08:30', end: '12:30' },
        { crewId: 'CREW-003', flight: 'SW-8843', date: '2023-10-16', role: 'sobrecargo', start: '13:45', end: '16:45' },
        { crewId: 'CREW-006', flight: 'SW-3121', date: '2023-10-16', role: 'ingeniero', start: '18:00', end: '22:00' },
        { crewId: 'CREW-008', flight: 'SW-5050', date: '2023-10-17', role: 'piloto', start: '09:15', end: '13:15' }
    ]
};

// ===========================
// ESTADO DE LA APLICACIÓN
// ===========================

let state = {
    isDarkMode: false,
    searchTerm: '',
    filters: {
        role: 'all',
        status: 'all',
        license: 'all'
    },
    view: 'crew', // 'crew' or 'schedule'
    displayMode: 'grid', // 'grid' or 'list' (solo para vista de tripulación)
    editingCrew: null,
    editingTab: 'personal',
    currentWeek: new Date('2023-10-16')
};

// ===========================
// FUNCIONES DE FILTRADO Y ORDENAMIENTO
// ===========================

function getFilteredCrew() {
    let filtered = [...crewMembers];

    // Filtro de búsqueda
    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase();
        filtered = filtered.filter(crew =>
            crew.id.toLowerCase().includes(term) ||
            crew.firstName.toLowerCase().includes(term) ||
            crew.lastName.toLowerCase().includes(term) ||
            crew.fullName.toLowerCase().includes(term) ||
            crew.roleText.toLowerCase().includes(term) ||
            crew.email.toLowerCase().includes(term)
        );
    }

    // Filtro de rol
    if (state.filters.role !== 'all') {
        filtered = filtered.filter(crew => crew.role === state.filters.role);
    }

    // Filtro de estado
    if (state.filters.status !== 'all') {
        filtered = filtered.filter(crew => crew.status === state.filters.status);
    }

    // Filtro de licencia
    if (state.filters.license !== 'all') {
        filtered = filtered.filter(crew => 
            crew.license === state.filters.license || 
            (crew.additionalLicenses && crew.additionalLicenses.includes(state.filters.license))
        );
    }

    return filtered;
}

function updateStats() {
    const total = crewMembers.length;
    const available = crewMembers.filter(c => c.status === 'available').length;
    const assigned = crewMembers.filter(c => c.status === 'assigned').length;
    const resting = crewMembers.filter(c => c.status === 'resting').length;
    const vacation = crewMembers.filter(c => c.status === 'vacation').length;

    document.getElementById('totalCrew').textContent = total;
    document.getElementById('availableCrew').textContent = available;
    document.getElementById('onFlightCrew').textContent = assigned;
    document.getElementById('restingCrew').textContent = resting;
    document.getElementById('vacationCrew').textContent = vacation;
}

// ===========================
// FUNCIONES DE RENDERIZADO
// ===========================

function renderCrew() {
    const filtered = getFilteredCrew();
    const gridView = document.getElementById('crewGrid');
    const listBody = document.getElementById('crewListBody');

    // Actualizar contador de resultados
    document.getElementById('resultsCount').textContent = 
        `Mostrando ${filtered.length} de ${crewMembers.length} miembros`;

    // Renderizar vista de cuadrícula
    if (state.displayMode === 'grid') {
        gridView.innerHTML = filtered.map(crew => `
            <div class="crew-card" data-id="${crew.id}">
                <div class="crew-card-header">
                    <div class="crew-avatar">${getInitials(crew.firstName, crew.lastName)}</div>
                    <div class="crew-info">
                        <h3>${crew.fullName}</h3>
                        <p class="crew-role">${crew.roleText} • ${crew.rankText}</p>
                        <p class="crew-id">${crew.id}</p>
                    </div>
                </div>
                <div class="crew-card-body">
                    <div class="crew-details">
                        <div class="detail-item">
                            <span class="detail-label">Licencia Principal</span>
                            <span class="detail-value">${getLicenseText(crew.license)}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Horas de Vuelo</span>
                            <span class="detail-value">${crew.flightHours.toLocaleString()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Base</span>
                            <span class="detail-value">${getBaseText(crew.base)}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Email</span>
                            <span class="detail-value" style="font-size: 0.75rem;">${crew.email}</span>
                        </div>
                    </div>
                    <div class="crew-status ${crew.status}">
                        <div class="status-indicator">
                            <span class="status-dot ${crew.status}"></span>
                            <span class="status-text ${crew.status}">${crew.statusText}</span>
                        </div>
                        <div class="next-flight">${crew.nextFlight}</div>
                    </div>
                </div>
                <div class="crew-card-footer">
                    <button class="card-action-btn view" onclick="viewCrewDetails('${crew.id}')">
                        Ver detalles
                    </button>
                    <button class="card-action-btn edit" onclick="editCrew('${crew.id}')">
                        Editar
                    </button>
                </div>
            </div>
        `).join('');
    } else {
        // Renderizar vista de lista
        listBody.innerHTML = filtered.map(crew => `
            <div class="list-row" data-id="${crew.id}">
                <div class="list-column">
                    <div class="crew-list-info">
                        <div class="list-avatar">${getInitials(crew.firstName, crew.lastName)}</div>
                        <div class="list-names">
                            <h4>${crew.fullName}</h4>
                            <p>${crew.id}</p>
                        </div>
                    </div>
                </div>
                <div class="list-column">${crew.roleText}</div>
                <div class="list-column">${getLicenseText(crew.license)}${crew.additionalLicenses && crew.additionalLicenses.length > 0 ? ` +${crew.additionalLicenses.length}` : ''}</div>
                <div class="list-column">${crew.flightHours.toLocaleString()}</div>
                <div class="list-column">
                    <div class="status-indicator">
                        <span class="status-dot ${crew.status}"></span>
                        <span class="status-text ${crew.status}">${crew.statusText}</span>
                    </div>
                </div>
                <div class="list-column">${crew.nextFlight}</div>
                <div class="list-column">
                    <button class="list-action-btn" onclick="viewCrewDetails('${crew.id}')" title="Ver detalles">
                        👁️
                    </button>
                    <button class="list-action-btn" onclick="editCrew('${crew.id}')" title="Editar">
                        ✏️
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function renderSchedule() {
    const scheduleTable = document.getElementById('scheduleTable');
    const weekStart = new Date(state.currentWeek);
    const weekDays = [];
    
    // Generar array de días de la semana
    for (let i = 0; i < 7; i++) {
        const day = new Date(weekStart);
        day.setDate(day.getDate() + i);
        weekDays.push(day);
    }
    
    // Actualizar título de la semana
    const title = document.getElementById('scheduleTitle');
    const startDate = weekDays[0];
    const endDate = weekDays[6];
    title.textContent = `Semana del ${formatDate(startDate)} al ${formatDate(endDate)}, ${startDate.getFullYear()}`;
    
    // Obtener todos los miembros de tripulación
    const crewList = getFilteredCrew();
    
    // Generar tabla de horarios
    let scheduleHTML = `
        <div class="schedule-grid">
            <div class="schedule-header-cell">Tripulante</div>
    `;
    
    // Encabezados de días
    weekDays.forEach(day => {
        scheduleHTML += `
            <div class="schedule-day-header">
                <div>${getDayName(day)}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted-light);">${day.getDate()}/${day.getMonth() + 1}</div>
            </div>
        `;
    });
    
    // Filas de tripulantes
    crewList.forEach(crew => {
        scheduleHTML += `
            <div class="schedule-header-cell" style="text-align: left; justify-content: flex-start; padding-left: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div class="list-avatar" style="width: 1.5rem; height: 1.5rem; font-size: 0.625rem;">${getInitials(crew.firstName, crew.lastName)}</div>
                    <div>
                        <div style="font-size: 0.875rem; font-weight: 600;">${crew.fullName}</div>
                        <div style="font-size: 0.7rem; color: var(--text-muted-light);">${crew.roleText}</div>
                    </div>
                </div>
            </div>
        `;
        
        // Celdas de cada día
        weekDays.forEach(day => {
            const dateStr = formatDate(day, 'YYYY-MM-DD');
            const assignments = scheduleData.assignments.filter(a => a.crewId === crew.id && a.date === dateStr);
            const crewStatus = crew.status;
            
            let cellHTML = '';
            let cellClass = crewStatus;
            
            assignments.forEach(assignment => {
                cellHTML += `
                    <div class="schedule-flight">${assignment.flight}</div>
                    <div class="schedule-time">${assignment.start} - ${assignment.end}</div>
                `;
                cellClass = 'assigned';
            });
            
            if (assignments.length === 0) {
                if (crewStatus === 'available') {
                    cellHTML = '<div style="font-size: 0.75rem; color: var(--text-muted-light);">Disponible</div>';
                } else if (crewStatus === 'assigned') {
                    cellHTML = '<div style="font-size: 0.75rem; color: var(--text-muted-light);">Asignado</div>';
                } else if (crewStatus === 'resting') {
                    cellHTML = '<div style="font-size: 0.75rem; color: var(--text-muted-light);">Descanso</div>';
                } else if (crewStatus === 'vacation') {
                    cellHTML = '<div style="font-size: 0.75rem; color: var(--text-muted-light);">Vacaciones</div>';
                }
            }
            
            scheduleHTML += `
                <div class="schedule-cell ${cellClass}" onclick="openScheduleAssignment('${crew.id}', '${dateStr}')">
                    ${cellHTML}
                </div>
            `;
        });
    });
    
    scheduleHTML += '</div>';
    scheduleTable.innerHTML = scheduleHTML;
}

function renderActiveFilters() {
    const container = document.getElementById('activeFilters');
    const filters = [];
    
    if (state.filters.role !== 'all') {
        const labels = {
            'piloto': 'Piloto',
            'copiloto': 'Copiloto',
            'sobrecargo': 'Sobrecargo',
            'ingeniero': 'Ingeniero'
        };
        filters.push({ type: 'role', label: `Rol: ${labels[state.filters.role]}` });
    }
    
    if (state.filters.status !== 'all') {
        const labels = {
            'available': 'Disponible',
            'assigned': 'Asignado',
            'resting': 'Descanso',
            'vacation': 'Vacaciones'
        };
        filters.push({ type: 'status', label: `Estado: ${labels[state.filters.status]}` });
    }
    
    if (state.filters.license !== 'all') {
        const labels = {
            'B737': 'Boeing 737',
            'A320': 'Airbus A320',
            'B787': 'Boeing 787',
            'A350': 'Airbus A350'
        };
        filters.push({ type: 'license', label: `Licencia: ${labels[state.filters.license]}` });
    }
    
    container.innerHTML = filters.map(filter => `
        <div class="filter-tag">
            <span>${filter.label}</span>
            <span class="filter-tag-remove" onclick="removeFilter('${filter.type}')">&times;</span>
        </div>
    `).join('');
}

// ===========================
// FUNCIONES DE UTILIDAD
// ===========================

function getInitials(firstName, lastName) {
    return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
}

function getLicenseText(licenseCode) {
    const licenses = {
        'B737': 'B737',
        'A320': 'A320',
        'B787': 'B787',
        'A350': 'A350',
        'B777': 'B777'
    };
    return licenses[licenseCode] || licenseCode;
}

function getBaseText(baseCode) {
    const bases = {
        'MEX': 'MEX',
        'CUN': 'CUN',
        'JFK': 'JFK',
        'LAX': 'LAX',
        'MIA': 'MIA'
    };
    return bases[baseCode] || baseCode;
}

function formatDate(date, format = 'DD/MM/YYYY') {
    if (!date) return '';
    
    const d = new Date(date);
    if (format === 'YYYY-MM-DD') {
        return d.toISOString().split('T')[0];
    }
    
    return d.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function getDayName(date) {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[date.getDay()];
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
    if (state.view === 'crew') {
        renderCrew();
    } else {
        renderSchedule();
    }
    renderActiveFilters();
    
    // Actualizar UI del dropdown
    document.querySelectorAll(`[data-filter="${type}"]`).forEach(item => {
        item.classList.toggle('active', item.dataset.value === value);
    });
}

function removeFilter(type) {
    state.filters[type] = 'all';
    if (state.view === 'crew') {
        renderCrew();
    } else {
        renderSchedule();
    }
    renderActiveFilters();
    
    // Actualizar UI del dropdown
    document.querySelectorAll(`[data-filter="${type}"]`).forEach(item => {
        item.classList.toggle('active', item.dataset.value === 'all');
    });
}

function clearAllFilters() {
    state.filters = {
        role: 'all',
        status: 'all',
        license: 'all'
    };
    state.searchTerm = '';
    document.getElementById('searchInput').value = '';
    
    // Actualizar todos los dropdowns
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.toggle('active', item.dataset.value === 'all');
    });
    
    if (state.view === 'crew') {
        renderCrew();
    } else {
        renderSchedule();
    }
    renderActiveFilters();
}

function updateSearch(value) {
    state.searchTerm = value;
    if (state.view === 'crew') {
        renderCrew();
    } else {
        renderSchedule();
    }
}

function changeView(view) {
    state.view = view;
    
    document.getElementById('crewViewBtn').classList.toggle('active', view === 'crew');
    document.getElementById('scheduleViewBtn').classList.toggle('active', view === 'schedule');
    
    document.getElementById('crewGrid').classList.toggle('hidden', view !== 'crew');
    document.getElementById('crewList').classList.toggle('hidden', view !== 'crew');
    document.getElementById('scheduleView').classList.toggle('hidden', view !== 'schedule');
    
    // Mostrar controles de vista solo en modo tripulación
    document.querySelector('.view-controls').classList.toggle('hidden', view !== 'crew');
    
    if (view === 'crew') {
        renderCrew();
    } else {
        renderSchedule();
    }
}

function changeDisplayMode(mode) {
    state.displayMode = mode;
    
    document.getElementById('gridViewBtn').classList.toggle('active', mode === 'grid');
    document.getElementById('listViewBtn').classList.toggle('active', mode === 'list');
    
    document.getElementById('crewGrid').classList.toggle('hidden', mode !== 'grid');
    document.getElementById('crewList').classList.toggle('hidden', mode !== 'list');
    
    renderCrew();
}

function viewCrewDetails(crewId) {
    const crew = crewMembers.find(c => c.id === crewId);
    if (!crew) return;
    
    const modal = document.getElementById('crewModal');
    const modalBody = document.getElementById('modalBody');
    
    // Configurar botón de edición
    state.editingCrew = crew;
    
    modalBody.innerHTML = `
        <div style="display: grid; gap: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                <div class="crew-avatar" style="width: 5rem; height: 5rem; font-size: 2rem;">${getInitials(crew.firstName, crew.lastName)}</div>
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem;">${crew.fullName}</h3>
                    <p style="color: var(--text-muted-light);">${crew.roleText} • ${crew.rankText}</p>
                    <p style="color: var(--text-muted-light); font-size: 0.875rem;">${crew.id}</p>
                </div>
                <div style="margin-left: auto;">
                    <span class="status-badge ${crew.status}">${crew.statusText}</span>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                <div class="info-section">
                    <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Información de Contacto</h4>
                    <div style="display: grid; gap: 0.5rem;">
                        <div><strong>Email:</strong> ${crew.email}</div>
                        <div><strong>Teléfono:</strong> ${crew.phone || 'No disponible'}</div>
                        <div><strong>Base:</strong> ${getBaseText(crew.base)}</div>
                    </div>
                </div>
                
                <div class="info-section">
                    <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Información Profesional</h4>
                    <div style="display: grid; gap: 0.5rem;">
                        <div><strong>Licencia Principal:</strong> ${getLicenseText(crew.license)}</div>
                        <div><strong>Licencias Adicionales:</strong> ${crew.additionalLicenses && crew.additionalLicenses.length > 0 ? crew.additionalLicenses.map(l => getLicenseText(l)).join(', ') : 'Ninguna'}</div>
                        <div><strong>Horas de Vuelo:</strong> ${crew.flightHours.toLocaleString()}</div>
                        <div><strong>Fecha Contratación:</strong> ${formatDate(crew.hireDate)}</div>
                    </div>
                </div>
                
                <div class="info-section">
                    <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Información Médica</h4>
                    <div style="display: grid; gap: 0.5rem;">
                        <div><strong>Vencimiento Médico:</strong> ${formatDate(crew.medicalExpiry)}</div>
                        <div><strong>Último Examen:</strong> ${formatDate(crew.lastMedical) || 'No disponible'}</div>
                        <div><strong>Tipo de Sangre:</strong> ${crew.bloodType || 'Desconocido'}</div>
                        <div><strong>Alergias:</strong> ${crew.allergies || 'Ninguna'}</div>
                    </div>
                </div>
                
                <div class="info-section">
                    <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Próxima Asignación</h4>
                    <div style="display: grid; gap: 0.5rem;">
                        <div><strong>Próximo Vuelo:</strong> ${crew.nextFlight}</div>
                        <div><strong>Estado Actual:</strong> ${crew.statusText}</div>
                    </div>
                </div>
            </div>
            
            ${crew.medicalNotes ? `
                <div style="border-top: 1px solid var(--border-light); padding-top: 1rem;">
                    <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Notas Médicas</h4>
                    <p style="color: var(--text-muted-light); line-height: 1.5;">${crew.medicalNotes}</p>
                </div>
            ` : ''}
        </div>
        
        <style>
            .info-section {
                background-color: var(--bg-light);
                padding: 1rem;
                border-radius: 0.5rem;
            }
            body.dark .info-section {
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
            .status-badge.resting {
                background-color: var(--resting-light);
                color: var(--resting);
            }
            .status-badge.vacation {
                background-color: var(--vacation-light);
                color: var(--vacation);
            }
        </style>
    `;
    
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('crewModal').classList.remove('show');
    document.getElementById('editCrewModal').classList.remove('show');
    document.getElementById('scheduleModal').classList.remove('show');
}

function addNewCrew() {
    state.editingCrew = null;
    state.editingTab = 'personal';
    
    document.getElementById('editModalTitle').textContent = 'Nuevo Miembro';
    document.getElementById('crewForm').reset();
    
    // Resetear pestañas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === 'personal') {
            btn.classList.add('active');
        }
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === 'personalTab') {
            content.classList.add('active');
        }
    });
    
    document.getElementById('editCrewModal').classList.add('show');
}

function editCrew(crewId) {
    const crew = crewMembers.find(c => c.id === crewId);
    if (!crew) return;
    
    state.editingCrew = crew;
    state.editingTab = 'personal';
    
    document.getElementById('editModalTitle').textContent = `Editar ${crew.fullName}`;
    
    // Resetear pestañas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === 'personal') {
            btn.classList.add('active');
        }
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === 'personalTab') {
            content.classList.add('active');
        }
    });
    
    // Llenar formulario con datos del tripulante
    document.getElementById('crewId').value = crew.id;
    document.getElementById('crewFirstName').value = crew.firstName;
    document.getElementById('crewLastName').value = crew.lastName;
    document.getElementById('crewEmail').value = crew.email;
    document.getElementById('crewPhone').value = crew.phone || '';
    document.getElementById('crewBirthDate').value = '';
    document.getElementById('crewNationality').value = '';
    document.getElementById('crewAddress').value = '';
    
    document.getElementById('crewRole').value = crew.role;
    document.getElementById('crewRank').value = crew.rank || '';
    document.getElementById('crewLicense').value = crew.license;
    document.getElementById('crewFlightHours').value = crew.flightHours || '';
    document.getElementById('crewHireDate').value = crew.hireDate || '';
    document.getElementById('crewStatus').value = crew.status;
    document.getElementById('crewBase').value = crew.base || '';
    
    // Licencias adicionales
    document.querySelectorAll('input[name="additionalLicenses"]').forEach(checkbox => {
        checkbox.checked = crew.additionalLicenses && crew.additionalLicenses.includes(checkbox.value);
    });
    
    document.getElementById('crewMedicalExpiry').value = crew.medicalExpiry || '';
    document.getElementById('crewLastMedical').value = crew.lastMedical || '';
    document.getElementById('crewBloodType').value = crew.bloodType || '';
    document.getElementById('crewAllergies').value = crew.allergies || '';
    document.getElementById('crewMedicalNotes').value = crew.medicalNotes || '';
    
    document.getElementById('editCrewModal').classList.add('show');
}

function saveCrew() {
    const form = document.getElementById('crewForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Mostrar loading
    document.getElementById('loadingOverlay').classList.add('show');
    
    // Simular guardado
    setTimeout(() => {
        // Obtener licencias adicionales seleccionadas
        const additionalLicenses = [];
        document.querySelectorAll('input[name="additionalLicenses"]:checked').forEach(checkbox => {
            additionalLicenses.push(checkbox.value);
        });
        
        const crewData = {
            id: document.getElementById('crewId').value,
            firstName: document.getElementById('crewFirstName').value,
            lastName: document.getElementById('crewLastName').value,
            fullName: `${document.getElementById('crewFirstName').value} ${document.getElementById('crewLastName').value}`,
            email: document.getElementById('crewEmail').value,
            phone: document.getElementById('crewPhone').value || null,
            role: document.getElementById('crewRole').value,
            roleText: getRoleText(document.getElementById('crewRole').value),
            rank: document.getElementById('crewRank').value || null,
            rankText: getRankText(document.getElementById('crewRank').value),
            license: document.getElementById('crewLicense').value,
            additionalLicenses: additionalLicenses,
            flightHours: parseInt(document.getElementById('crewFlightHours').value) || 0,
            status: document.getElementById('crewStatus').value,
            statusText: getStatusText(document.getElementById('crewStatus').value),
            base: document.getElementById('crewBase').value || null,
            nextFlight: state.editingCrew ? state.editingCrew.nextFlight : 'Sin asignación',
            hireDate: document.getElementById('crewHireDate').value || null,
            medicalExpiry: document.getElementById('crewMedicalExpiry').value || null,
            lastMedical: document.getElementById('crewLastMedical').value || null,
            bloodType: document.getElementById('crewBloodType').value || null,
            allergies: document.getElementById('crewAllergies').value || null,
            medicalNotes: document.getElementById('crewMedicalNotes').value || null
        };
        
        if (state.editingCrew) {
            // Actualizar tripulante existente
            const index = crewMembers.findIndex(c => c.id === state.editingCrew.id);
            if (index !== -1) {
                crewMembers[index] = crewData;
            }
        } else {
            // Agregar nuevo tripulante
            crewMembers.push(crewData);
        }
        
        // Ocultar loading
        document.getElementById('loadingOverlay').classList.remove('show');
        
        // Cerrar modal y actualizar vista
        closeModal();
        updateStats();
        
        if (state.view === 'crew') {
            renderCrew();
        } else {
            renderSchedule();
        }
        
        alert(state.editingCrew ? 'Tripulante actualizado exitosamente' : 'Tripulante agregado exitosamente');
    }, 1000);
}

function getRoleText(role) {
    const roles = {
        'piloto': 'Piloto',
        'copiloto': 'Copiloto',
        'sobrecargo': 'Sobrecargo',
        'ingeniero': 'Ingeniero de Vuelo',
        'jefe': 'Jefe de Cabina'
    };
    return roles[role] || role;
}

function getRankText(rank) {
    const ranks = {
        'capitan': 'Capitán',
        'primer_oficial': 'Primer Oficial',
        'segundo_oficial': 'Segundo Oficial',
        'senior': 'Senior',
        'junior': 'Junior'
    };
    return ranks[rank] || '';
}

function getStatusText(status) {
    const statusMap = {
        'available': 'Disponible',
        'assigned': 'Asignado',
        'resting': 'Descanso',
        'vacation': 'Vacaciones',
        'training': 'En Entrenamiento'
    };
    return statusMap[status] || 'Desconocido';
}

function deleteCrew() {
    if (!state.editingCrew) return;
    
    if (confirm(`¿Está seguro que desea eliminar al tripulante ${state.editingCrew.fullName}? Esta acción no se puede deshacer.`)) {
        // Mostrar loading
        document.getElementById('loadingOverlay').classList.add('show');
        
        // Simular eliminación
        setTimeout(() => {
            const index = crewMembers.findIndex(c => c.id === state.editingCrew.id);
            if (index !== -1) {
                crewMembers.splice(index, 1);
            }
            
            // Ocultar loading
            document.getElementById('loadingOverlay').classList.remove('show');
            
            // Cerrar modal y actualizar vista
            closeModal();
            updateStats();
            
            if (state.view === 'crew') {
                renderCrew();
            } else {
                renderSchedule();
            }
            
            alert('Tripulante eliminado exitosamente');
        }, 1000);
    }
}

function changeTab(tab) {
    state.editingTab = tab;
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `${tab}Tab`);
    });
}

function changeWeek(direction) {
    const week = new Date(state.currentWeek);
    week.setDate(week.getDate() + (direction * 7));
    state.currentWeek = week;
    renderSchedule();
}

function openScheduleAssignment(crewId, date) {
    const crew = crewMembers.find(c => c.id === crewId);
    if (!crew) return;
    
    document.getElementById('scheduleModalTitle').textContent = `Asignar Vuelo a ${crew.fullName}`;
    document.getElementById('scheduleDate').value = date;
    
    // Llenar selector de tripulantes
    const crewSelect = document.getElementById('scheduleCrew');
    crewSelect.innerHTML = `<option value="${crewId}" selected>${crew.fullName} (${crew.roleText})</option>`;
    
    document.getElementById('scheduleModal').classList.add('show');
}

function saveSchedule() {
    const form = document.getElementById('scheduleForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Mostrar loading
    document.getElementById('loadingOverlay').classList.add('show');
    
    // Simular guardado
    setTimeout(() => {
        const scheduleData = {
            crewId: document.getElementById('scheduleCrew').value,
            flight: document.getElementById('scheduleFlight').value,
            date: document.getElementById('scheduleDate').value,
            role: document.getElementById('scheduleRole').value,
            start: document.getElementById('scheduleStart').value,
            end: document.getElementById('scheduleEnd').value,
            notes: document.getElementById('scheduleNotes').value || ''
        };
        
        // Agregar a los datos de horarios
        // En una aplicación real, esto se guardaría en una base de datos
        alert(`Asignación guardada exitosamente para ${scheduleData.crewId} en vuelo ${scheduleData.flight}`);
        
        // Ocultar loading
        document.getElementById('loadingOverlay').classList.remove('show');
        
        // Cerrar modal
        closeModal();
        
        // Actualizar vista de calendario
        renderSchedule();
    }, 1000);
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
    
    // Renderizar vista inicial
    renderCrew();
    renderActiveFilters();
    
    // Event Listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('searchInput').addEventListener('input', (e) => updateSearch(e.target.value));
    document.getElementById('addCrewBtn').addEventListener('click', addNewCrew);
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);
    document.getElementById('crewViewBtn').addEventListener('click', () => changeView('crew'));
    document.getElementById('scheduleViewBtn').addEventListener('click', () => changeView('schedule'));
    document.getElementById('gridViewBtn').addEventListener('click', () => changeDisplayMode('grid'));
    document.getElementById('listViewBtn').addEventListener('click', () => changeDisplayMode('list'));
    document.getElementById('prevWeekBtn').addEventListener('click', () => changeWeek(-1));
    document.getElementById('nextWeekBtn').addEventListener('click', () => changeWeek(1));
    
    // Dropdowns
    document.getElementById('roleFilterBtn').addEventListener('click', () => 
        toggleDropdown('roleFilterBtn', 'roleFilterMenu'));
    document.getElementById('statusFilterBtn').addEventListener('click', () => 
        toggleDropdown('statusFilterBtn', 'statusFilterMenu'));
    document.getElementById('licenseFilterBtn').addEventListener('click', () => 
        toggleDropdown('licenseFilterBtn', 'licenseFilterMenu'));
    
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
    document.getElementById('modalDeleteBtn').addEventListener('click', deleteCrew);
    document.getElementById('modalEditBtn').addEventListener('click', () => {
        if (state.editingCrew) {
            editCrew(state.editingCrew.id);
        }
    });
    
    // Edit modal controls
    document.getElementById('editModalClose').addEventListener('click', closeModal);
    document.getElementById('editModalCancelBtn').addEventListener('click', closeModal);
    document.getElementById('editModalSaveBtn').addEventListener('click', saveCrew);
    
    // Schedule modal controls
    document.getElementById('scheduleModalClose').addEventListener('click', closeModal);
    document.getElementById('scheduleModalCancelBtn').addEventListener('click', closeModal);
    document.getElementById('scheduleModalSaveBtn').addEventListener('click', saveSchedule);
    
    // Tab controls
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            changeTab(e.target.dataset.tab);
        });
    });
    
    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('open'));
        }
    });
    
    // Cerrar modales al hacer clic fuera
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        });
    });
});

// ===========================
// FUNCIONES GLOBALES
// ===========================

window.viewCrewDetails = viewCrewDetails;
window.editCrew = editCrew;
window.removeFilter = removeFilter;
window.openScheduleAssignment = openScheduleAssignment;