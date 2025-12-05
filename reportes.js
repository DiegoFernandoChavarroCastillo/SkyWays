// ===========================
// DATOS INICIALES DE REPORTES
// ===========================

let reports = [
    {
        id: 'REP-2023-001',
        title: 'Reporte Mensual Operacional - Octubre 2023',
        description: 'Análisis completo de operaciones de vuelo, ocupación y puntualidad para el mes de octubre.',
        type: 'operational',
        typeText: 'Operacional',
        period: 'monthly',
        dateGenerated: '2023-11-01',
        dateRange: '2023-10-01 al 2023-10-31',
        stats: {
            flights: 1245,
            occupancy: '84.2%',
            punctuality: '91.5%',
            cancellations: '2.3%'
        },
        author: 'Ana Torres',
        downloads: 42
    },
    {
        id: 'REP-2023-002',
        title: 'Reporte Financiero Trimestral Q3 2023',
        description: 'Análisis de ingresos, costos y rentabilidad del tercer trimestre del año.',
        type: 'financial',
        typeText: 'Financiero',
        period: 'quarterly',
        dateGenerated: '2023-10-15',
        dateRange: '2023-07-01 al 2023-09-30',
        stats: {
            revenue: '$12.5M',
            profit: '$2.8M',
            margin: '22.4%',
            growth: '8.7%'
        },
        author: 'Carlos Ruiz',
        downloads: 28
    },
    {
        id: 'REP-2023-003',
        title: 'Reporte de Mantenimiento de Aeronaves',
        description: 'Estado de mantenimiento preventivo y correctivo de la flota completa.',
        type: 'maintenance',
        typeText: 'Mantenimiento',
        period: 'monthly',
        dateGenerated: '2023-11-05',
        dateRange: '2023-10-01 al 2023-10-31',
        stats: {
            inspections: 45,
            repairs: 12,
            downtime: '3.2%',
            cost: '$185K'
        },
        author: 'Luis Hernández',
        downloads: 19
    },
    {
        id: 'REP-2023-004',
        title: 'Reporte de Rendimiento de Tripulación',
        description: 'Evaluación del desempeño y horas de vuelo de la tripulación.',
        type: 'crew',
        typeText: 'Tripulación',
        period: 'monthly',
        dateGenerated: '2023-11-03',
        dateRange: '2023-10-01 al 2023-10-31',
        stats: {
            crewMembers: 156,
            avgHours: '65.2',
            training: 24,
            compliance: '98.7%'
        },
        author: 'Elena Gomez',
        downloads: 15
    },
    {
        id: 'REP-2023-005',
        title: 'Reporte de Seguridad Operacional',
        description: 'Análisis de incidentes, cumplimiento y métricas de seguridad.',
        type: 'safety',
        typeText: 'Seguridad',
        period: 'quarterly',
        dateGenerated: '2023-10-20',
        dateRange: '2023-07-01 al 2023-09-30',
        stats: {
            incidents: 3,
            audits: 8,
            compliance: '99.2%',
            training: 156
        },
        author: 'Sofía Gómez',
        downloads: 23
    },
    {
        id: 'REP-2023-006',
        title: 'Reporte de Satisfacción del Cliente',
        description: 'Análisis de encuestas y feedback de pasajeros.',
        type: 'customer',
        typeText: 'Cliente',
        period: 'monthly',
        dateGenerated: '2023-11-02',
        dateRange: '2023-10-01 al 2023-10-31',
        stats: {
            surveys: 1250,
            satisfaction: '4.7/5.0',
            complaints: 8,
            response: '92.4%'
        },
        author: 'Miguel Ramírez',
        downloads: 31
    }
];

// Datos para gráficos
const chartData = {
    flightsPerDay: {
        labels: ['1 Oct', '2 Oct', '3 Oct', '4 Oct', '5 Oct', '6 Oct', '7 Oct', '8 Oct', '9 Oct', '10 Oct', '11 Oct', '12 Oct', '13 Oct', '14 Oct', '15 Oct'],
        datasets: [{
            label: 'Vuelos Operados',
            data: [42, 38, 45, 47, 43, 41, 39, 44, 46, 48, 45, 47, 49, 46, 44],
            borderColor: 'var(--chart-1)',
            backgroundColor: 'rgba(19, 91, 236, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    topRoutes: {
        labels: ['MEX-JFK', 'CUN-LAX', 'GDL-MIA', 'MTY-ORD', 'SJD-YVR'],
        datasets: [{
            label: 'Vuelos',
            data: [45, 38, 32, 28, 25],
            backgroundColor: [
                'var(--chart-1)',
                'var(--chart-2)',
                'var(--chart-3)',
                'var(--chart-4)',
                'var(--chart-5)'
            ],
            borderWidth: 1
        }]
    },
    occupancyByType: {
        labels: ['Comercial', 'Carga', 'Privado', 'Charter'],
        datasets: [{
            data: [84.2, 78.5, 92.1, 88.3],
            backgroundColor: [
                'var(--chart-1)',
                'var(--chart-2)',
                'var(--chart-3)',
                'var(--chart-6)'
            ],
            borderWidth: 1
        }]
    },
    statusDistribution: {
        labels: ['Completado', 'En Ruta', 'Programado', 'Retrasado', 'Cancelado'],
        datasets: [{
            data: [65, 15, 12, 5, 3],
            backgroundColor: [
                'var(--chart-2)',
                'var(--chart-1)',
                'var(--chart-3)',
                'var(--chart-4)',
                'var(--danger)'
            ]
        }]
    },
    topAircraft: {
        labels: ['Boeing 737', 'Airbus A320', 'Boeing 787', 'Airbus A350', 'Boeing 777'],
        datasets: [{
            label: 'Horas de Vuelo',
            data: [1250, 980, 850, 720, 560],
            backgroundColor: 'var(--chart-1)',
            borderColor: 'var(--chart-1)',
            borderWidth: 1
        }]
    },
    occupancyTrend: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
        datasets: [{
            label: 'Ocupación (%)',
            data: [78.2, 79.5, 81.3, 82.7, 83.4, 82.9, 83.6, 84.1, 84.8, 85.2],
            borderColor: 'var(--chart-2)',
            backgroundColor: 'rgba(40, 167, 69, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    }
};

// ===========================
// ESTADO DE LA APLICACIÓN
// ===========================

let state = {
    isDarkMode: false,
    currentPeriod: '30d',
    dateRange: {
        start: moment().subtract(30, 'days'),
        end: moment()
    },
    activeCharts: [],
    reportFilter: 'all',
    reportsToShow: 6
};

// ===========================
// FUNCIONES DE INICIALIZACIÓN
// ===========================

function initializeCharts() {
    // Inicializar todos los gráficos
    initFlightsPerDayChart();
    initTopRoutesChart();
    initOccupancyByTypeChart();
    initStatusDistributionChart();
    initTopAircraftChart();
    initOccupancyTrendChart();
    
    // Guardar instancias de gráficos en el estado
    state.activeCharts = [
        flightsPerDayChart,
        topRoutesChart,
        occupancyByTypeChart,
        statusDistributionChart,
        topAircraftChart,
        occupancyTrendChart
    ];
}

function initFlightsPerDayChart() {
    const ctx = document.getElementById('flightsPerDayChart').getContext('2d');
    flightsPerDayChart = new Chart(ctx, {
        type: 'line',
        data: chartData.flightsPerDay,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Vuelos'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Fecha'
                    }
                }
            }
        }
    });
}

function initTopRoutesChart() {
    const ctx = document.getElementById('topRoutesChart').getContext('2d');
    topRoutesChart = new Chart(ctx, {
        type: 'bar',
        data: chartData.topRoutes,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Vuelos'
                    }
                }
            }
        }
    });
}

function initOccupancyByTypeChart() {
    const ctx = document.getElementById('occupancyByTypeChart').getContext('2d');
    occupancyByTypeChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData.occupancyByType,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

function initStatusDistributionChart() {
    const ctx = document.getElementById('statusDistributionChart').getContext('2d');
    statusDistributionChart = new Chart(ctx, {
        type: 'pie',
        data: chartData.statusDistribution,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

function initTopAircraftChart() {
    const ctx = document.getElementById('topAircraftChart').getContext('2d');
    topAircraftChart = new Chart(ctx, {
        type: 'bar',
        data: chartData.topAircraft,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Horas de Vuelo'
                    }
                }
            }
        }
    });
}

function initOccupancyTrendChart() {
    const ctx = document.getElementById('occupancyTrendChart').getContext('2d');
    occupancyTrendChart = new Chart(ctx, {
        type: 'line',
        data: chartData.occupancyTrend,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 90,
                    title: {
                        display: true,
                        text: 'Ocupación (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Mes'
                    }
                }
            }
        }
    });
}

// ===========================
// FUNCIONES DE RENDERIZADO
// ===========================

function renderReports() {
    const reportsGrid = document.querySelector('.reports-grid');
    const filteredReports = getFilteredReports();
    
    reportsGrid.innerHTML = filteredReports.slice(0, state.reportsToShow).map(report => `
        <div class="report-card" data-id="${report.id}">
            <div class="report-card-header">
                <div class="report-type ${report.type}">${report.typeText}</div>
                <div class="report-downloads">
                    <i class="fas fa-download"></i> ${report.downloads}
                </div>
            </div>
            <div class="report-card-body">
                <h3 class="report-title">${report.title}</h3>
                <p class="report-description">${report.description}</p>
                
                <div class="report-meta">
                    <span>Generado: ${formatDate(report.dateGenerated)}</span>
                    <span>Por: ${report.author}</span>
                </div>
                
                <div class="report-stats">
                    ${Object.entries(report.stats).map(([key, value]) => `
                        <div class="report-stat">
                            <span class="stat-value">${value}</span>
                            <span class="stat-label">${getStatLabel(key)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="report-card-footer">
                <span>Periodo: ${report.period === 'monthly' ? 'Mensual' : 
                                report.period === 'quarterly' ? 'Trimestral' : 
                                report.period === 'yearly' ? 'Anual' : report.period}</span>
                <div class="report-actions">
                    <button class="report-action-btn view" onclick="viewReportDetails('${report.id}')">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                    <button class="report-action-btn download" onclick="downloadReport('${report.id}')">
                        <i class="fas fa-download"></i> Descargar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Mostrar/Ocultar botón de cargar más
    const loadMoreBtn = document.getElementById('loadMoreReportsBtn');
    if (state.reportsToShow >= filteredReports.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
}

function getFilteredReports() {
    if (state.reportFilter === 'all') {
        return reports;
    }
    return reports.filter(report => report.type === state.reportFilter);
}

function getStatLabel(key) {
    const labels = {
        'flights': 'Vuelos',
        'occupancy': 'Ocupación',
        'punctuality': 'Puntualidad',
        'cancellations': 'Cancelaciones',
        'revenue': 'Ingresos',
        'profit': 'Utilidad',
        'margin': 'Margen',
        'growth': 'Crecimiento',
        'inspections': 'Inspecciones',
        'repairs': 'Reparaciones',
        'downtime': 'Tiempo Inactivo',
        'cost': 'Costo',
        'crewMembers': 'Tripulantes',
        'avgHours': 'Horas Promedio',
        'training': 'Capacitaciones',
        'compliance': 'Cumplimiento',
        'incidents': 'Incidentes',
        'audits': 'Auditorías',
        'surveys': 'Encuestas',
        'satisfaction': 'Satisfacción',
        'complaints': 'Quejas',
        'response': 'Respuesta'
    };
    return labels[key] || key;
}

function formatDate(dateString) {
    return moment(dateString).format('DD/MM/YYYY');
}

function updateChartsTheme() {
    const isDark = state.isDarkMode;
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const tickColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    
    state.activeCharts.forEach(chart => {
        if (chart) {
            chart.options.scales = {
                ...chart.options.scales,
                x: {
                    ...chart.options.scales?.x,
                    grid: { color: gridColor },
                    ticks: { color: tickColor }
                },
                y: {
                    ...chart.options.scales?.y,
                    grid: { color: gridColor },
                    ticks: { color: tickColor }
                }
            };
            chart.update();
        }
    });
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
    
    // Actualizar tema de gráficos
    updateChartsTheme();
}

function setPeriod(period) {
    state.currentPeriod = period;
    
    // Actualizar botones activos
    document.querySelectorAll('.period-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.period === period);
    });
    
    // Actualizar rango de fechas según el periodo
    const now = moment();
    let startDate;
    
    switch (period) {
        case '7d':
            startDate = now.clone().subtract(7, 'days');
            break;
        case '30d':
            startDate = now.clone().subtract(30, 'days');
            break;
        case '90d':
            startDate = now.clone().subtract(90, 'days');
            break;
        case 'ytd':
            startDate = moment().startOf('year');
            break;
        case 'last-year':
            startDate = moment().subtract(1, 'year').startOf('year');
            endDate = moment().subtract(1, 'year').endOf('year');
            break;
    }
    
    if (period !== 'last-year') {
        state.dateRange.start = startDate;
        state.dateRange.end = now;
    }
    
    // Actualizar el date picker
    $('#dateRangePicker').data('daterangepicker').setStartDate(state.dateRange.start);
    $('#dateRangePicker').data('daterangepicker').setEndDate(state.dateRange.end);
    
    // Simular actualización de datos
    updateChartData();
}

function updateChartData() {
    // En una aplicación real, aquí se haría una llamada a la API
    // para obtener datos actualizados según el periodo seleccionado
    
    // Simular actualización de KPI
    document.getElementById('totalFlights').textContent = getRandomNumber(1200, 1300).toLocaleString();
    document.getElementById('avgOccupancy').textContent = (getRandomNumber(82, 86) + Math.random()).toFixed(1) + '%';
    document.getElementById('punctuality').textContent = (getRandomNumber(90, 93) + Math.random()).toFixed(1) + '%';
    document.getElementById('cancellations').textContent = (getRandomNumber(1.5, 3) + Math.random()).toFixed(1) + '%';
    document.getElementById('totalRevenue').textContent = '$' + (getRandomNumber(3.8, 4.5) + Math.random()).toFixed(1) + 'M';
    
    // Mostrar mensaje de actualización
    showToast('Datos actualizados para el periodo seleccionado', 'success');
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showToast(message, type = 'info') {
    // Crear toast si no existe
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
        
        // Estilos del toast
        const style = document.createElement('style');
        style.textContent = `
            .toast-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .toast {
                padding: 12px 20px;
                border-radius: 6px;
                color: white;
                font-size: 0.875rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                animation: slideIn 0.3s ease;
            }
            .toast.success { background-color: var(--success); }
            .toast.error { background-color: var(--danger); }
            .toast.info { background-color: var(--primary); }
            .toast.warning { background-color: var(--warning); color: #000; }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Crear toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 
                          type === 'error' ? 'exclamation-circle' : 
                          type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Remover toast después de 3 segundos
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function viewReportDetails(reportId) {
    const report = reports.find(r => r.id === reportId);
    if (!report) return;
    
    const modal = document.getElementById('reportModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="display: grid; gap: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <span class="report-type ${report.type}">${report.typeText}</span>
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0;">${report.title}</h3>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 0.875rem; color: var(--text-muted-light);">ID: ${report.id}</div>
                    <div style="font-size: 0.875rem; color: var(--text-muted-light);">Generado: ${formatDate(report.dateGenerated)}</div>
                </div>
            </div>
            
            <div style="background-color: var(--bg-light); padding: 1.5rem; border-radius: 0.5rem;">
                <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Descripción</h4>
                <p style="color: var(--text-muted-light); line-height: 1.5;">${report.description}</p>
            </div>
            
            <div>
                <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 1rem;">Resumen de Métricas</h4>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                    ${Object.entries(report.stats).map(([key, value]) => `
                        <div style="background-color: var(--bg-light); padding: 1rem; border-radius: 0.5rem;">
                            <div style="font-size: 0.875rem; color: var(--text-muted-light); margin-bottom: 0.25rem;">${getStatLabel(key)}</div>
                            <div style="font-size: 1.5rem; font-weight: 700;">${value}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                <div>
                    <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Información del Reporte</h4>
                    <div style="display: grid; gap: 0.5rem;">
                        <div><strong>Periodo:</strong> ${report.period === 'monthly' ? 'Mensual' : 
                                                    report.period === 'quarterly' ? 'Trimestral' : 
                                                    report.period === 'yearly' ? 'Anual' : report.period}</div>
                        <div><strong>Rango de Fechas:</strong> ${report.dateRange}</div>
                        <div><strong>Generado por:</strong> ${report.author}</div>
                        <div><strong>Descargas:</strong> ${report.downloads}</div>
                    </div>
                </div>
                
                <div>
                    <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Acciones Disponibles</h4>
                    <div style="display: grid; gap: 0.75rem;">
                        <button class="btn-primary" style="width: 100%;" onclick="downloadReport('${report.id}')">
                            <i class="fas fa-download"></i> Descargar Reporte
                        </button>
                        <button class="btn-secondary" style="width: 100%;" onclick="shareReport('${report.id}')">
                            <i class="fas fa-share"></i> Compartir Reporte
                        </button>
                        <button class="btn-secondary" style="width: 100%;" onclick="scheduleReport('${report.id}')">
                            <i class="fas fa-calendar-plus"></i> Programar Generación
                        </button>
                    </div>
                </div>
            </div>
            
            <div style="border-top: 1px solid var(--border-light); padding-top: 1rem;">
                <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">Versiones Anteriores</h4>
                <p style="color: var(--text-muted-light);">No hay versiones anteriores de este reporte.</p>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('reportModal').classList.remove('show');
    document.getElementById('generateModal').classList.remove('show');
}

function downloadReport(reportId) {
    const report = reports.find(r => r.id === reportId);
    if (!report) return;
    
    // Simular descarga
    document.getElementById('loadingOverlay').classList.add('show');
    
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.remove('show');
        
        // Incrementar contador de descargas
        report.downloads++;
        renderReports();
        
        showToast(`Reporte "${report.title}" descargado exitosamente`, 'success');
    }, 1500);
}

function shareReport(reportId) {
    const report = reports.find(r => r.id === reportId);
    if (!report) return;
    
    // En una aplicación real, esto abriría un modal para compartir
    // o copiaría un enlace al portapapeles
    if (navigator.share) {
        navigator.share({
            title: report.title,
            text: report.description,
            url: window.location.href
        });
    } else {
        // Copiar al portapapeles
        const tempInput = document.createElement('input');
        tempInput.value = `${report.title}\n\n${report.description}\n\nID: ${report.id}`;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        showToast('Información del reporte copiada al portapapeles', 'success');
    }
}

function scheduleReport(reportId) {
    showToast('Funcionalidad de programación en desarrollo', 'info');
}

function openGenerateReport() {
    document.getElementById('generateModalTitle').textContent = 'Generar Nuevo Reporte';
    document.getElementById('reportForm').reset();
    document.getElementById('generateModal').classList.add('show');
}

function saveReport() {
    const form = document.getElementById('reportForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Mostrar loading
    document.getElementById('loadingOverlay').classList.add('show');
    
    // Simular generación de reporte
    setTimeout(() => {
        const reportName = document.getElementById('reportName').value;
        const reportType = document.getElementById('reportType').value;
        const reportPeriod = document.getElementById('reportPeriod').value;
        const dateRange = document.getElementById('reportDateRange').value;
        
        // Crear nuevo reporte
        const newReport = {
            id: `REP-${moment().format('YYYY')}-${String(reports.length + 1).padStart(3, '0')}`,
            title: reportName,
            description: document.getElementById('reportDescription').value || 'Reporte generado automáticamente.',
            type: reportType,
            typeText: getReportTypeText(reportType),
            period: reportPeriod,
            dateGenerated: moment().format('YYYY-MM-DD'),
            dateRange: dateRange,
            stats: generateRandomStats(reportType),
            author: 'Usuario Actual',
            downloads: 0
        };
        
        // Agregar al inicio de la lista
        reports.unshift(newReport);
        
        // Ocultar loading
        document.getElementById('loadingOverlay').classList.remove('show');
        
        // Cerrar modal y actualizar vista
        closeModal();
        renderReports();
        
        showToast(`Reporte "${reportName}" generado exitosamente`, 'success');
    }, 2000);
}

function getReportTypeText(type) {
    const types = {
        'operational': 'Operacional',
        'financial': 'Financiero',
        'maintenance': 'Mantenimiento',
        'crew': 'Tripulación',
        'safety': 'Seguridad',
        'customer': 'Cliente'
    };
    return types[type] || type;
}

function generateRandomStats(type) {
    const statsTemplates = {
        'operational': {
            flights: getRandomNumber(1000, 1500),
            occupancy: (getRandomNumber(80, 88) + Math.random()).toFixed(1) + '%',
            punctuality: (getRandomNumber(88, 95) + Math.random()).toFixed(1) + '%',
            cancellations: (getRandomNumber(1, 4) + Math.random()).toFixed(1) + '%'
        },
        'financial': {
            revenue: '$' + (getRandomNumber(8, 15) + Math.random()).toFixed(1) + 'M',
            profit: '$' + (getRandomNumber(1.5, 3.5) + Math.random()).toFixed(1) + 'M',
            margin: (getRandomNumber(18, 25) + Math.random()).toFixed(1) + '%',
            growth: (getRandomNumber(5, 12) + Math.random()).toFixed(1) + '%'
        },
        'maintenance': {
            inspections: getRandomNumber(30, 60),
            repairs: getRandomNumber(5, 20),
            downtime: (getRandomNumber(2, 5) + Math.random()).toFixed(1) + '%',
            cost: '$' + getRandomNumber(100, 250) + 'K'
        },
        'crew': {
            crewMembers: getRandomNumber(120, 180),
            avgHours: (getRandomNumber(60, 75) + Math.random()).toFixed(1),
            training: getRandomNumber(15, 30),
            compliance: (getRandomNumber(96, 100) + Math.random()).toFixed(1) + '%'
        },
        'safety': {
            incidents: getRandomNumber(0, 5),
            audits: getRandomNumber(5, 12),
            compliance: (getRandomNumber(97, 100) + Math.random()).toFixed(1) + '%',
            training: getRandomNumber(100, 200)
        },
        'customer': {
            surveys: getRandomNumber(1000, 1500),
            satisfaction: (getRandomNumber(4.5, 5) + Math.random()).toFixed(1) + '/5.0',
            complaints: getRandomNumber(5, 15),
            response: (getRandomNumber(85, 95) + Math.random()).toFixed(1) + '%'
        }
    };
    
    return statsTemplates[type] || statsTemplates.operational;
}

function loadMoreReports() {
    state.reportsToShow += 6;
    renderReports();
}

function updateReportFilter() {
    state.reportFilter = document.getElementById('reportTypeFilter').value;
    renderReports();
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
    
    // Inicializar date picker
    $('#dateRangePicker').daterangepicker({
        startDate: state.dateRange.start,
        endDate: state.dateRange.end,
        locale: {
            format: 'DD/MM/YYYY',
            applyLabel: 'Aplicar',
            cancelLabel: 'Cancelar',
            fromLabel: 'Desde',
            toLabel: 'Hasta',
            customRangeLabel: 'Personalizado',
            daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        },
        ranges: {
            'Hoy': [moment(), moment()],
            'Ayer': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Últimos 7 días': [moment().subtract(6, 'days'), moment()],
            'Últimos 30 días': [moment().subtract(29, 'days'), moment()],
            'Este mes': [moment().startOf('month'), moment().endOf('month')],
            'Mes pasado': [moment().subtract(1, 'month').startOf('month'), 
                          moment().subtract(1, 'month').endOf('month')]
        }
    });
    
    $('#reportDateRange').daterangepicker({
        startDate: moment().subtract(30, 'days'),
        endDate: moment(),
        locale: {
            format: 'DD/MM/YYYY',
            applyLabel: 'Aplicar',
            cancelLabel: 'Cancelar'
        }
    });
    
    // Event Listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('generateReportBtn').addEventListener('click', openGenerateReport);
    document.getElementById('loadMoreReportsBtn').addEventListener('click', loadMoreReports);
    document.getElementById('reportTypeFilter').addEventListener('change', updateReportFilter);
    
    // Period buttons
    document.querySelectorAll('.period-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setPeriod(e.target.dataset.period);
        });
    });
    
    // Chart action buttons
    document.querySelectorAll('.chart-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const chartId = e.target.closest('.chart-action-btn').dataset.chart;
            if (e.target.closest('.chart-action-btn').querySelector('.fa-download')) {
                downloadChart(chartId);
            } else {
                expandChart(chartId);
            }
        });
    });
    
    // Export options
    document.querySelectorAll('.export-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const format = btn.querySelector('span').textContent.toLowerCase();
            exportAllReports(format);
        });
    });
    
    // Modal controls
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
    document.getElementById('modalDownloadBtn').addEventListener('click', () => {
        // Implementar descarga del reporte actual
        showToast('Descarga del reporte iniciada', 'success');
        closeModal();
    });
    
    // Generate modal controls
    document.getElementById('generateModalClose').addEventListener('click', closeModal);
    document.getElementById('generateModalCancelBtn').addEventListener('click', closeModal);
    document.getElementById('generateModalSaveBtn').addEventListener('click', saveReport);
    
    // Cerrar modales al hacer clic fuera
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        });
    });
    
    // Inicializar gráficos
    setTimeout(() => {
        initializeCharts();
        renderReports();
    }, 100);
});

// ===========================
// FUNCIONES GLOBALES
// ===========================

window.viewReportDetails = viewReportDetails;
window.downloadReport = downloadReport;
window.closeModal = closeModal;

// Funciones auxiliares
function downloadChart(chartId) {
    const chart = state.activeCharts.find(c => c.canvas.id === `${chartId}Chart`);
    if (chart) {
        const link = document.createElement('a');
        link.download = `${chartId}-${moment().format('YYYY-MM-DD')}.png`;
        link.href = chart.toBase64Image();
        link.click();
        showToast('Gráfico descargado exitosamente', 'success');
    }
}

function expandChart(chartId) {
    showToast('Vista expandida en desarrollo', 'info');
}

function exportAllReports(format) {
    document.getElementById('loadingOverlay').classList.add('show');
    
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.remove('show');
        showToast(`Exportando todos los reportes en formato ${format.toUpperCase()}...`, 'success');
        
        // Simular exportación
        setTimeout(() => {
            showToast(`Exportación completada. Archivo descargado.`, 'success');
        }, 1000);
    }, 1500);
}

// ===========================
// DATOS MEDIOAMBIENTALES
// ===========================

let environmentalData = {
    carbonFootprint: {
        current: 2450, // ton CO₂
        previous: 2780,
        breakdown: {
            flights: 1850,
            operations: 350,
            infrastructure: 250
        },
        targetReduction: 15 // % reducción anual
    },
    fuelEfficiency: {
        current: 4.2, // L/100km·pax
        previousYear: 4.56,
        monthlyConsumption: 4800000, // litros
        savingsVsTarget: 3.5 // %
    },
    carbonOffset: {
        percentage: 85, // %
        annualTarget: 100,
        programs: {
            trees: 45000,
            renewableEnergy: true,
            carbonCredits: 1250
        }
    },
    ecoFleet: {
        percentage: 42, // %
        composition: {
            a320neo: 25,
            b737max: 17,
            other: 58
        },
        target2025: 60
    }
};

// ===========================
// FUNCIONES DE RENDERIZADO MEDIOAMBIENTAL
// ===========================

function renderEnvironmentalStats() {
    // Actualizar huella de carbono
    document.getElementById('carbonFootprint').textContent = 
        environmentalData.carbonFootprint.current.toLocaleString();
    
    // Actualizar eficiencia de combustible
    document.getElementById('fuelEfficiency').textContent = 
        environmentalData.fuelEfficiency.current.toFixed(1);
    
    // Actualizar compensación
    document.getElementById('carbonOffset').textContent = 
        environmentalData.carbonOffset.percentage;
    
    // Actualizar flota ecológica
    document.getElementById('ecoFleet').textContent = 
        environmentalData.ecoFleet.percentage;
    
    // Calcular y actualizar cambios
    updateEnvironmentalChanges();
    
    // Actualizar detalles de desglose
    updateBreakdownDetails();
}

function updateEnvironmentalChanges() {
    const carbonReduction = ((environmentalData.carbonFootprint.previous - 
                             environmentalData.carbonFootprint.current) / 
                             environmentalData.carbonFootprint.previous * 100).toFixed(0);
    
    const fuelImprovement = ((environmentalData.fuelEfficiency.previousYear - 
                             environmentalData.fuelEfficiency.current) / 
                             environmentalData.fuelEfficiency.previousYear * 100).toFixed(0);
    
    // Actualizar textos de cambio
    document.querySelectorAll('.carbon-change span').forEach(el => {
        el.textContent = `${carbonReduction}% menos que el mes anterior`;
    });
    
    document.querySelectorAll('.fuel-change span').forEach(el => {
        el.textContent = `${fuelImprovement}% más eficiente que 2022`;
    });
}

function updateBreakdownDetails() {
    // Actualizar desglose de huella de carbono
    const breakdownItems = document.querySelectorAll('.breakdown-value');
    if (breakdownItems.length >= 3) {
        breakdownItems[0].textContent = `${environmentalData.carbonFootprint.breakdown.flights} t`;
        breakdownItems[1].textContent = `${environmentalData.carbonFootprint.breakdown.operations} t`;
        breakdownItems[2].textContent = `${environmentalData.carbonFootprint.breakdown.infrastructure} t`;
    }
    
    // Actualizar estadísticas de combustible
    const fuelStats = document.querySelectorAll('.fuel-stat .stat-value');
    if (fuelStats.length >= 2) {
        const liters = environmentalData.fuelEfficiency.monthlyConsumption;
        fuelStats[0].textContent = `${(liters / 1000000).toFixed(1)}M L`;
        fuelStats[1].textContent = `+${environmentalData.fuelEfficiency.savingsVsTarget}%`;
    }
    
    // Actualizar porcentajes de flota
    const fleetPercentages = document.querySelectorAll('.type-percent');
    if (fleetPercentages.length >= 2) {
        fleetPercentages[0].textContent = `${environmentalData.ecoFleet.composition.a320neo}%`;
        fleetPercentages[1].textContent = `${environmentalData.ecoFleet.composition.b737max}%`;
    }
}

// ===========================
// SIMULACIÓN DE DATOS EN TIEMPO REAL (MEDIOAMBIENTAL)
// ===========================

function simulateEnvironmentalUpdates() {
    // Actualizar datos medioambientales cada 30 segundos
    setInterval(() => {
        // Simular pequeñas variaciones en la huella de carbono
        environmentalData.carbonFootprint.current = 
            Math.max(2300, environmentalData.carbonFootprint.current + 
            (Math.random() * 20 - 10)); // ±10 toneladas
        
        // Simular mejora gradual en eficiencia
        environmentalData.fuelEfficiency.current = 
            Math.max(3.8, environmentalData.fuelEfficiency.current - 
            (Math.random() * 0.02)); // Mejora gradual
        
        // Simular aumento en compensación
        if (environmentalData.carbonOffset.percentage < 100) {
            environmentalData.carbonOffset.percentage = 
                Math.min(100, environmentalData.carbonOffset.percentage + 
                (Math.random() * 0.1));
        }
        
        // Simular crecimiento de flota ecológica
        if (environmentalData.ecoFleet.percentage < 60) {
            environmentalData.ecoFleet.percentage = 
                Math.min(60, environmentalData.ecoFleet.percentage + 
                (Math.random() * 0.05));
        }
        
        // Actualizar la interfaz
        renderEnvironmentalStats();
        
    }, 30000); // Cada 30 segundos
    
    // Actualizar consumo mensual de combustible cada minuto
    setInterval(() => {
        const baseConsumption = 4800000; // 4.8M litros base
        const variation = Math.random() * 50000 - 25000; // ±25,000 litros
        environmentalData.fuelEfficiency.monthlyConsumption = 
            Math.max(4600000, baseConsumption + variation);
        
        updateBreakdownDetails();
    }, 60000);
}

// ===========================
// FUNCIONES ADICIONALES
// ===========================

function showEnvironmentalAlert(type, message) {
    const alertTypes = {
        carbon: { icon: '🌍', color: '#3498db' },
        fuel: { icon: '⛽', color: '#f1c40f' },
        sustainability: { icon: '🌱', color: '#2ecc71' },
        fleet: { icon: '✈️', color: '#9b59b6' }
    };
    
    const alertType = alertTypes[type] || alertTypes.carbon;
    
    // Crear notificación
    const notification = {
        id: Date.now(),
        message: message,
        time: 'Ahora',
        type: 'environment',
        icon: alertType.icon,
        read: false
    };
    
    // Agregar a notificaciones
    notifications.unshift(notification);
    
    // Mantener solo las últimas 10 notificaciones
    if (notifications.length > 10) {
        notifications = notifications.slice(0, 10);
    }
    
    renderNotifications();
    
    // Mostrar toast de alerta
    showEnvironmentalToast(message, alertType.color);
}

function showEnvironmentalToast(message, color) {
    // Crear toast específico para alertas medioambientales
    const toast = document.createElement('div');
    toast.className = 'environment-toast';
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: ${color};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideUp 0.3s ease;
        max-width: 300px;
    `;
    
    toast.innerHTML = `
        <i class="fas fa-leaf" style="font-size: 1.2rem;"></i>
        <div style="flex: 1;">
            <div style="font-weight: 600; margin-bottom: 2px;">Actualización Ambiental</div>
            <div style="font-size: 0.875rem;">${message}</div>
        </div>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(toast);
    
    // Remover automáticamente después de 5 segundos
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
    
    // Añadir estilos de animación si no existen
    if (!document.querySelector('#environment-toast-styles')) {
        const style = document.createElement('style');
        style.id = 'environment-toast-styles';
        style.textContent = `
            @keyframes slideUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideDown {
                from { transform: translateY(0); opacity: 1; }
                to { transform: translateY(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===========================
// FUNCIONES DE GENERACIÓN DE REPORTES MEDIOAMBIENTALES
// ===========================

function generateEnvironmentalReport() {
    const report = {
        title: 'Reporte de Sostenibilidad - ' + new Date().toLocaleDateString('es-ES'),
        timestamp: new Date().toISOString(),
        data: {
            carbonFootprint: environmentalData.carbonFootprint,
            fuelEfficiency: environmentalData.fuelEfficiency,
            carbonOffset: environmentalData.carbonOffset,
            ecoFleet: environmentalData.ecoFleet
        },
        summary: generateEnvironmentalSummary(),
        recommendations: generateEnvironmentalRecommendations()
    };
    
    return report;
}

function generateEnvironmentalSummary() {
    const carbonReduction = ((environmentalData.carbonFootprint.previous - 
                             environmentalData.carbonFootprint.current) / 
                             environmentalData.carbonFootprint.previous * 100).toFixed(1);
    
    const fuelImprovement = ((environmentalData.fuelEfficiency.previousYear - 
                             environmentalData.fuelEfficiency.current) / 
                             environmentalData.fuelEfficiency.previousYear * 100).toFixed(1);
    
    return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h3 style="color: #2c3e50;">Resumen de Sostenibilidad</h3>
            <p><strong>Huella de Carbono:</strong> ${environmentalData.carbonFootprint.current.toLocaleString()} ton CO₂ (${carbonReduction}% reducción)</p>
            <p><strong>Eficiencia de Combustible:</strong> ${environmentalData.fuelEfficiency.current} L/100km·pax (${fuelImprovement}% mejora)</p>
            <p><strong>Compensación:</strong> ${environmentalData.carbonOffset.percentage}% de la huella compensada</p>
            <p><strong>Flota Ecológica:</strong> ${environmentalData.ecoFleet.percentage}% de aeronaves de bajo consumo</p>
        </div>
    `;
}

function generateEnvironmentalRecommendations() {
    const recommendations = [];
    
    if (environmentalData.carbonFootprint.current > 2000) {
        recommendations.push("Considerar rutas más eficientes para reducir la huella de carbono");
    }
    
    if (environmentalData.fuelEfficiency.current > 4.0) {
        recommendations.push("Optimizar procedimientos de taxi y aproximación para ahorrar combustible");
    }
    
    if (environmentalData.carbonOffset.percentage < 90) {
        recommendations.push("Aumentar inversión en programas de compensación de carbono");
    }
    
    if (environmentalData.ecoFleet.percentage < 50) {
        recommendations.push("Acelerar renovación de flota con aeronaves más eficientes");
    }
    
    return recommendations;
}

// ===========================
// INICIALIZACIÓN ACTUALIZADA
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
    
    // Renderizar estadísticas medioambientales
    renderEnvironmentalStats();

    // Configurar event listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('notificationBtn').addEventListener('click', toggleNotifications);
    document.getElementById('markAllRead').addEventListener('click', markAllAsRead);
    document.getElementById('searchInput').addEventListener('input', (e) => {
        updateSearch(e.target.value);
    });
    
    // Nuevo: Botón para generar reporte medioambiental
    document.getElementById('generateEnvironmentalReportBtn')?.addEventListener('click', () => {
        const report = generateEnvironmentalReport();
        console.log('Reporte Medioambiental:', report);
        alert('Reporte medioambiental generado. Ver consola para detalles.');
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
    
    // Iniciar simulación de datos medioambientales
    simulateEnvironmentalUpdates();
    
    // Simular alertas medioambientales periódicas
    setInterval(() => {
        const alerts = [
            "🚀 Nueva aeronave A320neo añadida a la flota ecológica",
            "📉 Huella de carbono reducida en un 2% este mes",
            "🌳 5,000 árboles adicionales plantados en programa de compensación",
            "⛽ Eficiencia de combustible mejorada en rutas transatlánticas"
        ];
        
        const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
        const alertTypes = ['carbon', 'fuel', 'sustainability', 'fleet'];
        const randomType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
        
        showEnvironmentalAlert(randomType, randomAlert);
    }, 120000); // Cada 2 minutos
});