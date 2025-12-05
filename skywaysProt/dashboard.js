// ===========================
// DATOS INICIALES
// ===========================

let stats = {
    scheduled: 152,
    scheduledTrend: 8,
    rescheduled: 12,
    rescheduledTrend: -3,
    conflicts: 3,
    conflictsTrend: -1,
    availability: { current: 85, total: 100 },
    availabilityTrend: 5,
    alerts: 5,
    alertsTrend: 2
};

let flights = [
    {
        id: 'SKW721',
        origin: 'JFK',
        destination: 'LAX',
        departureTime: '14:30',
        status: 'on-time',
        statusText: 'En Horario',
        aircraft: 'Boeing 737-800',
        gate: 'B24',
        passengers: 156,
        capacity: 189
    },
    {
        id: 'SKW448',
        origin: 'ORD',
        destination: 'MIA',
        departureTime: '15:00',
        status: 'delayed',
        statusText: 'Retrasado',
        delay: '45 min',
        aircraft: 'Airbus A320',
        gate: 'C12',
        passengers: 142,
        capacity: 180
    },
    {
        id: 'SKW815',
        origin: 'SFO',
        destination: 'DEN',
        departureTime: '16:15',
        status: 'on-time',
        statusText: 'En Horario',
        aircraft: 'Boeing 787',
        gate: 'A05',
        passengers: 201,
        capacity: 290
    },
    {
        id: 'SKW303',
        origin: 'ATL',
        destination: 'BOS',
        departureTime: '17:00',
        status: 'cancelled',
        statusText: 'Cancelado',
        reason: 'Condiciones meteorológicas',
        aircraft: 'Airbus A350',
        gate: '-',
        passengers: 0,
        capacity: 325
    },
    {
        id: 'SKW112',
        origin: 'LAX',
        destination: 'SEA',
        departureTime: '18:30',
        status: 'on-time',
        statusText: 'En Horario',
        aircraft: 'Boeing 737-800',
        gate: 'D15',
        passengers: 178,
        capacity: 189
    },
    {
        id: 'SKW567',
        origin: 'MIA',
        destination: 'JFK',
        departureTime: '19:45',
        status: 'on-time',
        statusText: 'En Horario',
        aircraft: 'Airbus A320',
        gate: 'E22',
        passengers: 165,
        capacity: 180
    }
];

let notifications = [
    { 
        id: 1, 
        message: 'Vuelo SKW448 retrasado 45 minutos', 
        time: '5 min ago', 
        type: 'warning', 
        read: false 
    },
    { 
        id: 2, 
        message: 'Mantenimiento completado en N901SW', 
        time: '15 min ago', 
        type: 'success', 
        read: false 
    },
    { 
        id: 3, 
        message: 'Nueva asignación de tripulación para SKW721', 
        time: '30 min ago', 
        type: 'info', 
        read: true 
    },
    { 
        id: 4, 
        message: 'Vuelo SKW303 cancelado - Condiciones meteorológicas', 
        time: '1 hour ago', 
        type: 'danger', 
        read: false 
    },
    { 
        id: 5, 
        message: 'Aeronave XA-SKY disponible para asignación', 
        time: '2 hours ago', 
        type: 'info', 
        read: true 
    }
];

// ===========================
// ESTADO DE LA APLICACIÓN
// ===========================

let searchTerm = '';
let isDarkMode = false;

// ===========================
// FUNCIONES DE RENDERIZADO
// ===========================

function renderStats() {
    const statsGrid = document.getElementById('statsGrid');
    
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-header">
                <span class="stat-title">Vuelos programados</span>
            </div>
            <div class="stat-footer">
                <span class="stat-value">${stats.scheduled}</span>
                <span class="stat-trend ${stats.scheduledTrend >= 0 ? 'positive' : 'negative'}">
                    ${stats.scheduledTrend >= 0 ? '↑' : '↓'} ${Math.abs(stats.scheduledTrend)}%
                </span>
            </div>
        </div>
        
        <div class="stat-card">
            <div class="stat-header">
                <span class="stat-title">Vuelos reprogramados</span>
            </div>
            <div class="stat-footer">
                <span class="stat-value">${stats.rescheduled}</span>
                <span class="stat-trend ${stats.rescheduledTrend >= 0 ? 'positive' : 'negative'}">
                    ${stats.rescheduledTrend >= 0 ? '↑' : '↓'} ${Math.abs(stats.rescheduledTrend)}%
                </span>
            </div>
        </div>
        
        <div class="stat-card warning">
            <div class="stat-header">
                <span class="stat-title">Vuelos en conflicto</span>
            </div>
            <div class="stat-footer">
                <span class="stat-value">${stats.conflicts}</span>
                <span class="stat-trend ${stats.conflictsTrend >= 0 ? 'positive' : 'negative'}">
                    ${stats.conflictsTrend >= 0 ? '↑' : '↓'} ${Math.abs(stats.conflictsTrend)}%
                </span>
            </div>
        </div>
        
        <div class="stat-card">
            <div class="stat-header">
                <span class="stat-title">Disponibilidad de aeronaves</span>
            </div>
            <div class="stat-footer">
                <span class="stat-value">${stats.availability.current}/${stats.availability.total}</span>
                <span class="stat-trend ${stats.availabilityTrend >= 0 ? 'positive' : 'negative'}">
                    ${stats.availabilityTrend >= 0 ? '↑' : '↓'} ${Math.abs(stats.availabilityTrend)}%
                </span>
            </div>
        </div>
        
        <div class="stat-card danger">
            <div class="stat-header">
                <span class="stat-title">Alertas del sistema</span>
            </div>
            <div class="stat-footer">
                <span class="stat-value">${stats.alerts}</span>
                <span class="stat-trend ${stats.alertsTrend >= 0 ? 'positive' : 'negative'}">
                    ${stats.alertsTrend >= 0 ? '↑' : '↓'} ${Math.abs(stats.alertsTrend)}%
                </span>
            </div>
        </div>
    `;
}

function renderFlights() {
    const tbody = document.getElementById('flightsTableBody');
    const filteredFlights = flights.filter(flight =>
        flight.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Actualizar contador
    document.getElementById('flightCount').textContent = 
        `${filteredFlights.length} de ${flights.length} vuelos`;

    tbody.innerHTML = filteredFlights.map(flight => `
        <tr>
            <td><strong>${flight.id}</strong></td>
            <td>${flight.origin} → ${flight.destination}</td>
            <td>${flight.departureTime}</td>
            <td>${flight.aircraft}</td>
            <td>
                <div class="occupancy-bar">
                    <div class="occupancy-progress">
                        <div class="occupancy-fill" style="width: ${(flight.passengers / flight.capacity) * 100}%"></div>
                    </div>
                    <span class="occupancy-text">${flight.passengers}/${flight.capacity}</span>
                </div>
            </td>
            <td>
                <span class="status-badge ${flight.status}">
                    ${flight.statusText}
                </span>
                ${flight.delay ? `<div style="font-size: 0.75rem; margin-top: 0.25rem; color: var(--text-muted-light);">${flight.delay}</div>` : ''}
            </td>
            <td>
                <button class="action-btn" onclick="viewFlightDetails('${flight.id}')">
                    Ver Detalles
                </button>
            </td>
        </tr>
    `).join('');
}

function renderNotifications() {
    const notificationList = document.getElementById('notificationList');
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notificationBadge');

    // Actualizar badge
    badge.textContent = unreadCount;
    if (unreadCount === 0) {
        badge.classList.add('hidden');
    } else {
        badge.classList.remove('hidden');
    }

    // Renderizar lista
    notificationList.innerHTML = notifications.map(notif => `
        <div class="notification-item ${notif.read ? '' : 'unread'}" 
             onclick="markAsRead(${notif.id})">
            <p>${notif.message}</p>
            <span>${notif.time}</span>
        </div>
    `).join('');
}

// ===========================
// FUNCIONES DE INTERACCIÓN
// ===========================

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark');
    
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    themeText.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
    
    // Guardar preferencia
    localStorage.setItem('darkMode', isDarkMode);
}

function toggleNotifications() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('show');
}

function markAsRead(id) {
    const notification = notifications.find(n => n.id === id);
    if (notification) {
        notification.read = true;
        renderNotifications();
    }
}

function markAllAsRead() {
    notifications.forEach(n => n.read = true);
    renderNotifications();
}

function viewFlightDetails(flightId) {
    // Aquí podrías redirigir a la página de detalles
    console.log(`Ver detalles del vuelo: ${flightId}`);
    alert(`Abriendo detalles del vuelo ${flightId}...`);
    // window.location.href = `detallesVuelo.html?id=${flightId}`;
}

function updateSearch(value) {
    searchTerm = value;
    renderFlights();
}

function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// ===========================
// SIMULACIÓN DE DATOS EN TIEMPO REAL
// ===========================

function simulateRealTimeUpdates() {
    // Actualizar estadísticas cada 10 segundos
    setInterval(() => {
        stats.scheduled += Math.floor(Math.random() * 3) - 1;
        stats.conflicts = Math.max(0, stats.conflicts + Math.floor(Math.random() * 2) - 1);
        stats.alerts = Math.max(0, stats.alerts + Math.floor(Math.random() * 3) - 1);
        renderStats();
    }, 10000);

    // Actualizar ocupación de vuelos cada 15 segundos
    setInterval(() => {
        flights.forEach(flight => {
            if (flight.status === 'on-time' && flight.passengers < flight.capacity) {
                const change = Math.floor(Math.random() * 5);
                flight.passengers = Math.min(flight.capacity, flight.passengers + change);
            }
        });
        renderFlights();
    }, 15000);

    // Simular nueva notificación cada 30 segundos
    setInterval(() => {
        const messages = [
            'Nuevo vuelo programado: SKW999',
            'Cambio de puerta para vuelo SKW721',
            'Tripulación asignada a vuelo SKW815',
            'Mantenimiento programado completado',
            'Actualización de estado de vuelo'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        notifications.unshift({
            id: Date.now(),
            message: randomMessage,
            time: 'Ahora',
            type: 'info',
            read: false
        });
        
        // Mantener solo las últimas 10 notificaciones
        if (notifications.length > 10) {
            notifications = notifications.slice(0, 10);
        }
        
        renderNotifications();
    }, 30000);
}

// ===========================
// EVENT LISTENERS
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Cargar preferencia de tema
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        isDarkMode = true;
        document.body.classList.add('dark');
        document.getElementById('themeIcon').textContent = '☀️';
        document.getElementById('themeText').textContent = 'Modo Claro';
    }

    // Renderizar contenido inicial
    renderStats();
    renderFlights();
    renderNotifications();
    updateTime();

    // Configurar event listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('notificationBtn').addEventListener('click', toggleNotifications);
    document.getElementById('markAllRead').addEventListener('click', markAllAsRead);
    document.getElementById('searchInput').addEventListener('input', (e) => {
        updateSearch(e.target.value);
    });

    // Cerrar panel de notificaciones al hacer clic fuera
    document.addEventListener('click', (e) => {
        const panel = document.getElementById('notificationPanel');
        const btn = document.getElementById('notificationBtn');
        
        if (!panel.contains(e.target) && !btn.contains(e.target)) {
            panel.classList.remove('show');
        }
    });

    // Actualizar reloj cada segundo
    setInterval(updateTime, 1000);

    // Iniciar simulación de tiempo real
    simulateRealTimeUpdates();
});

// ===========================
// FUNCIONES GLOBALES (para onclick en HTML)
// ===========================

window.viewFlightDetails = viewFlightDetails;
window.markAsRead = markAsRead;