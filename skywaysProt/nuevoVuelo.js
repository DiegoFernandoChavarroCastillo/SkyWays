// ===========================
// DATOS DE AERONAVES
// ===========================

let aircraftFleet = [
    {
        id: 'SK-7371',
        model: 'Boeing 737',
        capacity: 189,
        status: 'available',
        statusText: 'Disponible',
        icon: '✈️'
    },
    {
        id: 'SK-A3204',
        model: 'Airbus A320',
        capacity: 180,
        status: 'available',
        statusText: 'Disponible',
        icon: '✈️'
    },
    {
        id: 'SK-B7872',
        model: 'Boeing 787',
        capacity: 290,
        status: 'assigned',
        statusText: 'Asignado',
        icon: '🛬'
    },
    {
        id: 'SK-A3501',
        model: 'Airbus A350',
        capacity: 325,
        status: 'maintenance',
        statusText: 'Mantenimiento',
        icon: '🔧'
    },
    {
        id: 'SK-7378',
        model: 'Boeing 737',
        capacity: 189,
        status: 'available',
        statusText: 'Disponible',
        icon: '✈️'
    },
    {
        id: 'SK-A3207',
        model: 'Airbus A320',
        capacity: 180,
        status: 'assigned',
        statusText: 'Asignado',
        icon: '🛬'
    },
    {
        id: 'SK-B7875',
        model: 'Boeing 787',
        capacity: 290,
        status: 'available',
        statusText: 'Disponible',
        icon: '✈️'
    },
    {
        id: 'SK-7380',
        model: 'Boeing 737',
        capacity: 189,
        status: 'maintenance',
        statusText: 'Mantenimiento',
        icon: '🔧'
    }
];

// ===========================
// ESTADO DE LA APLICACIÓN
// ===========================

let state = {
    isDarkMode: false,
    selectedAircraft: null,
    fleetSearchTerm: '',
    formData: {},
    availableAircraft: []
};

// ===========================
// VALIDACIÓN DEL FORMULARIO
// ===========================

const validators = {
    origin: (value) => {
        if (!value) return 'El aeropuerto de origen es requerido';
        return null;
    },
    destination: (value, formData) => {
        if (!value) return 'El aeropuerto de destino es requerido';
        if (value === formData.origin) return 'El destino debe ser diferente al origen';
        return null;
    },
    departureDate: (value) => {
        if (!value) return 'La fecha de salida es requerida';
        const date = new Date(value);
        const now = new Date();
        if (date < now) return 'La fecha de salida debe ser futura';
        return null;
    },
    arrivalDate: (value, formData) => {
        if (!value) return 'La fecha de llegada es requerida';
        if (!formData.departureDate) return null;
        const departure = new Date(formData.departureDate);
        const arrival = new Date(value);
        if (arrival <= departure) return 'La fecha de llegada debe ser posterior a la salida';
        return null;
    },
    flightType: (value) => {
        if (!value) return 'El tipo de vuelo es requerido';
        return null;
    },
    responsible: (value) => {
        if (!value) return 'El responsable es requerido';
        return null;
    }
};

function validateField(fieldName, value) {
    const formData = getFormData();
    const validator = validators[fieldName];
    
    if (!validator) return null;
    
    return validator(value, formData);
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}Error`);
    const formGroup = field.closest('.form-group');
    
    if (message) {
        errorElement.textContent = message;
        formGroup.classList.add('error');
        formGroup.classList.remove('success');
    } else {
        errorElement.textContent = '';
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
    }
}

function validateForm() {
    const formData = getFormData();
    let isValid = true;
    
    Object.keys(validators).forEach(fieldName => {
        const value = formData[fieldName];
        const error = validateField(fieldName, value);
        
        if (error) {
            showFieldError(fieldName, error);
            isValid = false;
        } else {
            showFieldError(fieldName, null);
        }
    });
    
    return isValid;
}

// ===========================
// FUNCIONES DE FORMULARIO
// ===========================

function getFormData() {
    return {
        origin: document.getElementById('origin').value,
        destination: document.getElementById('destination').value,
        departureDate: document.getElementById('departureDate').value,
        arrivalDate: document.getElementById('arrivalDate').value,
        flightType: document.getElementById('flightType').value,
        responsible: document.getElementById('responsible').value,
        aircraft: document.getElementById('aircraft').value,
        notes: document.getElementById('notes').value
    };
}

function clearForm() {
    document.getElementById('flightForm').reset();
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error', 'success');
    });
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    state.selectedAircraft = null;
    document.getElementById('aircraft').disabled = true;
}

function calculateFlightDuration(departure, arrival) {
    const diff = new Date(arrival) - new Date(departure);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

// ===========================
// FUNCIONES DE FLOTA
// ===========================

function getFilteredFleet() {
    const term = state.fleetSearchTerm.toLowerCase();
    return aircraftFleet.filter(aircraft => 
        aircraft.id.toLowerCase().includes(term) ||
        aircraft.model.toLowerCase().includes(term)
    );
}

function renderFleet() {
    const fleetList = document.getElementById('fleetList');
    const filtered = getFilteredFleet();
    
    fleetList.innerHTML = filtered.map(aircraft => `
        <div class="fleet-item ${state.selectedAircraft === aircraft.id ? 'selected' : ''}" 
             onclick="selectAircraft('${aircraft.id}')"
             data-status="${aircraft.status}">
            <div class="fleet-info">
                <span class="fleet-icon">${aircraft.icon}</span>
                <div class="fleet-details">
                    <h4>${aircraft.model}</h4>
                    <p>${aircraft.id} / ${aircraft.capacity} Pasajeros</p>
                </div>
            </div>
            <div class="fleet-status">
                <span class="status-dot ${aircraft.status}"></span>
                <span class="status-text ${aircraft.status}">${aircraft.statusText}</span>
            </div>
        </div>
    `).join('');
    
    updateFleetStats();
}

function updateFleetStats() {
    const available = aircraftFleet.filter(a => a.status === 'available').length;
    const assigned = aircraftFleet.filter(a => a.status === 'assigned').length;
    const maintenance = aircraftFleet.filter(a => a.status === 'maintenance').length;
    
    document.getElementById('availableCount').textContent = available;
    document.getElementById('assignedCount').textContent = assigned;
    document.getElementById('maintenanceCount').textContent = maintenance;
}

function selectAircraft(aircraftId) {
    const aircraft = aircraftFleet.find(a => a.id === aircraftId);
    
    if (aircraft.status !== 'available') {
        alert(`La aeronave ${aircraft.id} no está disponible (${aircraft.statusText})`);
        return;
    }
    
    state.selectedAircraft = aircraftId;
    document.getElementById('aircraft').value = aircraftId;
    renderFleet();
}

// ===========================
// CONSULTAR DISPONIBILIDAD
// ===========================

function checkAvailability() {
    const formData = getFormData();
    
    // Validar campos necesarios
    if (!formData.origin || !formData.destination || !formData.departureDate || !formData.arrivalDate) {
        alert('Por favor complete origen, destino y fechas antes de consultar disponibilidad.');
        return;
    }
    
    // Mostrar loading
    document.getElementById('loadingOverlay').classList.add('show');
    
    // Simular consulta a API
    setTimeout(() => {
        const available = aircraftFleet.filter(a => a.status === 'available');
        state.availableAircraft = available;
        
        // Habilitar selector de aeronaves
        const aircraftSelect = document.getElementById('aircraft');
        aircraftSelect.disabled = false;
        aircraftSelect.innerHTML = `
            <option value="">Seleccione aeronave disponible</option>
            ${available.map(a => `
                <option value="${a.id}">${a.model} - ${a.id} (${a.capacity} pax)</option>
            `).join('')}
        `;
        
        // Ocultar loading
        document.getElementById('loadingOverlay').classList.remove('show');
        
        // Mostrar modal con resultados
        showAvailabilityModal(available);
    }, 1500);
}

function showAvailabilityModal(available) {
    const modal = document.getElementById('availabilityModal');
    const modalBody = document.getElementById('availabilityModalBody');
    
    if (available.length === 0) {
        modalBody.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">😔</div>
                <h3>No hay aeronaves disponibles</h3>
                <p style="color: var(--text-muted-light); margin-top: 0.5rem;">
                    No se encontraron aeronaves disponibles para las fechas seleccionadas.
                </p>
            </div>
        `;
    } else {
        modalBody.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <p style="color: var(--text-muted-light);">
                    Se encontraron <strong>${available.length}</strong> aeronaves disponibles para tu vuelo:
                </p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${available.map(a => `
                    <div class="fleet-item" onclick="selectAircraftFromModal('${a.id}')">
                        <div class="fleet-info">
                            <span class="fleet-icon">${a.icon}</span>
                            <div class="fleet-details">
                                <h4>${a.model}</h4>
                                <p>${a.id} / ${a.capacity} Pasajeros</p>
                            </div>
                        </div>
                        <button class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.75rem;">
                            Seleccionar
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    modal.classList.add('show');
}

function selectAircraftFromModal(aircraftId) {
    selectAircraft(aircraftId);
    document.getElementById('availabilityModal').classList.remove('show');
}

// ===========================
// PROPUESTA AUTOMÁTICA
// ===========================

function generateAutoProposal() {
    const formData = getFormData();
    
    // Validar campos básicos
    if (!formData.origin || !formData.destination) {
        alert('Por favor complete al menos origen y destino para generar una propuesta automática.');
        return;
    }
    
    // Mostrar loading
    document.getElementById('loadingOverlay').classList.add('show');
    
    // Simular generación de propuesta
    setTimeout(() => {
        // Encontrar aeronave disponible óptima
        const available = aircraftFleet.filter(a => a.status === 'available');
        const optimalAircraft = available[Math.floor(Math.random() * available.length)];
        
        // Generar fechas sugeridas (mañana a las 10:00 AM)
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(10, 0, 0, 0);
        
        const arrival = new Date(tomorrow);
        arrival.setHours(arrival.getHours() + 3); // 3 horas de vuelo
        
        // Autocompletar formulario
        document.getElementById('departureDate').value = formatDateTimeLocal(tomorrow);
        document.getElementById('arrivalDate').value = formatDateTimeLocal(arrival);
        document.getElementById('flightType').value = 'comercial';
        document.getElementById('responsible').value = 'Ana Torres';
        
        // Asignar aeronave
        if (optimalAircraft) {
            selectAircraft(optimalAircraft.id);
            document.getElementById('aircraft').disabled = false;
            document.getElementById('aircraft').innerHTML = `
                <option value="${optimalAircraft.id}" selected>
                    ${optimalAircraft.model} - ${optimalAircraft.id} (${optimalAircraft.capacity} pax)
                </option>
            `;
        }
        
        document.getElementById('loadingOverlay').classList.remove('show');
        
        alert('✨ Propuesta automática generada exitosamente. Revise los datos y ajuste si es necesario.');
    }, 1500);
}

function formatDateTimeLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

// ===========================
// ENVIAR FORMULARIO
// ===========================

function submitForm(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        alert('⚠️ Por favor corrija los errores en el formulario antes de continuar.');
        return;
    }
    
    const formData = getFormData();
    
    // Mostrar loading
    document.getElementById('loadingOverlay').classList.add('show');
    
    // Simular envío a servidor
    setTimeout(() => {
        // Generar ID de vuelo
        const flightId = `SW-${Math.floor(1000 + Math.random() * 9000)}`;
        
        // Ocultar loading
        document.getElementById('loadingOverlay').classList.remove('show');
        
        // Mostrar modal de éxito
        const duration = calculateFlightDuration(formData.departureDate, formData.arrivalDate);
        document.getElementById('successMessage').innerHTML = `
            El vuelo <strong>${flightId}</strong> ha sido creado exitosamente.<br>
            Ruta: <strong>${formData.origin} → ${formData.destination}</strong><br>
            Duración estimada: <strong>${duration}</strong>
        `;
        document.getElementById('successModal').classList.add('show');
        
        // Limpiar formulario
        clearForm();
    }, 1500);
}

// ===========================
// FUNCIONES DE TEMA
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
    
    // Renderizar flota
    renderFleet();
    
    // Event Listeners - Tema
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Event Listeners - Formulario
    document.getElementById('flightForm').addEventListener('submit', submitForm);
    document.getElementById('cancelBtn').addEventListener('click', () => {
        if (confirm('¿Está seguro que desea cancelar? Se perderán los datos ingresados.')) {
            clearForm();
            window.location.href = 'listaVuelos.html';
        }
    });
    
    // Event Listeners - Acciones
    document.getElementById('checkAvailabilityBtn').addEventListener('click', checkAvailability);
    document.getElementById('autoProposalBtn').addEventListener('click', generateAutoProposal);
    
    // Event Listeners - Búsqueda de flota
    document.getElementById('fleetSearch').addEventListener('input', (e) => {
        state.fleetSearchTerm = e.target.value;
        renderFleet();
    });
    
    // Event Listeners - Validación en tiempo real
    const fieldsToValidate = ['origin', 'destination', 'departureDate', 'arrivalDate', 'flightType', 'responsible'];
    fieldsToValidate.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        field.addEventListener('blur', () => {
            const error = validateField(fieldName, field.value);
            showFieldError(fieldName, error);
        });
        
        field.addEventListener('input', () => {
            const formGroup = field.closest('.form-group');
            if (formGroup.classList.contains('error')) {
                const error = validateField(fieldName, field.value);
                showFieldError(fieldName, error);
            }
        });
    });
    
    // Event Listeners - Modal de éxito
    document.getElementById('viewListBtn').addEventListener('click', () => {
        window.location.href = 'listaVuelos.html';
    });
    
    document.getElementById('createAnotherBtn').addEventListener('click', () => {
        document.getElementById('successModal').classList.remove('show');
    });
    
    // Event Listeners - Modal de disponibilidad
    document.getElementById('availabilityModalClose').addEventListener('click', () => {
        document.getElementById('availabilityModal').classList.remove('show');
    });
    
    // Cerrar modales al hacer clic fuera
    document.getElementById('availabilityModal').addEventListener('click', (e) => {
        if (e.target.id === 'availabilityModal') {
            document.getElementById('availabilityModal').classList.remove('show');
        }
    });
    
    // Establecer fecha mínima (hoy)
    const now = new Date();
    const minDateTime = formatDateTimeLocal(now);
    document.getElementById('departureDate').min = minDateTime;
    document.getElementById('arrivalDate').min = minDateTime;
});

// ===========================
// FUNCIONES GLOBALES
// ===========================

window.selectAircraft = selectAircraft;
window.selectAircraftFromModal = selectAircraftFromModal;