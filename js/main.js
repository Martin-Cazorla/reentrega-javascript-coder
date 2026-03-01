// Lógica principal de Home

// Captura de elemnetes del DOM
const planesContainer = document.querySelector('#planes-container');

// Función para verificar el estado de la sesión
const verificarSesion = () => {
    const navAuth = document.getElementById('nav-auth');
// Trae la infode el usuario de sessionStorage 
    const usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioActivo'));

// Si hay un usuario logueado, cambia el botón de Login por su nombre
    if (usuarioActivo && navAuth) {
        navAuth.innerHTML = `
            <div class="user-info-header">
                <span class="user-tag">Hola, <strong>${usuarioActivo.nombre}</strong></span>
                <button id="btn-logout" class="btn-link">Cerrar Sesión</button>
            </div>
        `;

// Evento para cerrar sesión 
        document.getElementById('btn-logout').addEventListener('click', () => {
            sessionStorage.removeItem('usuarioActivo');
// Se recarga la página para volver al estado Invitado
            window.location.reload(); 
        });
    }
};

// Función para mostrar los planes
const mostrarPlanes = () => {
// Severifica que el contenedor exista antes de iterar
    if (!planesContainer) return;

// Recorre el array planes
    planes.forEach(plan => {
// Lógica para destacar el plan recomendado 
        const claseDestacada = plan.recomendado ? 'plan-card--destacado' : '';
        const etiquetaPop = plan.recomendado ? '<span class="badge-recomendado">MÁS ELEGIDO</span>' : '';

// HTML dinámico (crea en html las tarjetas de los 3 planes)
        const planCard = `
            <article class="plan-card ${claseDestacada}">
                ${etiquetaPop}
                <h3>${plan.nombre}</h3>
                <p class="plan-precio">$ ${plan.precio.toLocaleString('es-AR')}</p>
                
                <ul class="plan-beneficios">
                    ${plan.beneficios.map(beneficio => `<li>${beneficio}</li>`).join('')}
                </ul>

                <button class="btn-kaiju" onclick="seleccionarPlan('${plan.id}')">
                    Seleccionar
                </button>
            </article>
        `;

// Inyecta el HTML en el contenedor del DOM
        planesContainer.innerHTML += planCard;
    });
};

// Función para manejar la sellección del plan
const seleccionarPlan = (idPlan) => {
// Busca el plan específico
    const planEncontrado = planes.find(p => p.id === idPlan);

    if (planEncontrado) {
// Guardam la elección temporalmente 
        localStorage.setItem('planEn-Proceso', JSON.stringify(planEncontrado));

        const planesSection = document.getElementById('planes-section');
        const checkout = document.getElementById('checkout-container');
        const detalles = document.getElementById('selected-plan-details');

        if (planesSection && checkout && detalles) {
// Oculta la grilla y la cabecera
            document.querySelector('#planes-section h2').classList.add('hidden');
            document.getElementById('planes-container').classList.add('hidden');
            
// Para mostrar el resumen de pago
            checkout.classList.remove('hidden');

            detalles.innerHTML = `
                <div class="pago-resumen">
                    <h3>Resumen de suscripción</h3>
                    <p><strong>Plan seleccionado:</strong> ${planEncontrado.nombre}</p>
                    <p><strong>Total a abonar:</strong> $ ${planEncontrado.precio.toLocaleString('es-AR')}</p>
                    <hr style="border-color: rgba(255,255,255,0.1); margin: 1rem 0;">
                    <p style="font-size: 0.9rem; opacity: 0.7;">Transacción procesada por KaijuPay</p>
                </div>
            `;
        }
    }
};

// Lógica del botón de pagar
const btnPagar = document.getElementById('btn-pay');
if (btnPagar) {
    btnPagar.addEventListener('click', () => {
// Alerta de carga 
        Swal.fire({
            title: 'Procesando pago...',
            text: 'Estamos validando tus datos con el banco Kaiju',
            timer: 2000,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading(); 
            }
        }).then(() => {
// Segunda alerta al cumplirse la promesa 
            Swal.fire({
                title: '¡Pago Exitoso!',
                text: 'Tu suscripción está activa. Ahora crea tu cuenta.',
                icon: 'success',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#9d50bb'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'pages/login.html';
                }
            });
        });
    });
}

// Lógica del botón cancelar pago
const btnCancelar = document.getElementById('btn-back');
if (btnCancelar) {
    btnCancelar.addEventListener('click', () => {
        Swal.fire({
            title: '¿Cancelar suscripción?',
            text: "Perderás los detalles del plan seleccionado.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9d50bb',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cancelar',
            cancelButtonText: 'No, seguir con el pago'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('planEn-Proceso');
// Restaura la vista inicial
                document.getElementById('planes-container').classList.remove('hidden');
                document.querySelector('#planes-section h2').classList.remove('hidden');
                document.getElementById('checkout-container').classList.add('hidden');
                
                Swal.fire('Cancelado', 'Tu selección ha sido eliminada.', 'success');
            }
        });
    });
}

// EJECUCIÓN INICIAL
mostrarPlanes();
verificarSesion();