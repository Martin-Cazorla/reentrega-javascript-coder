/** Lógica principal de la Home*/

// Captura de elementos del DOM
const planesContainer = document.querySelector('#planes-container');

// Función para mostrar planes

// Función para recorre el array 'planes'
const mostrarPlanes = () => {
    planes.forEach(plan => {
// variable para la clase CSS de plan recomendado
        const claseDestacada = plan.recomendado ? 'plan-card--destacado' : '';
        const etiquetaPop = plan.recomendado ? '<span class="badge-recomendado">MÁS ELEGIDO</span>' : '';
// HTML dinámico (genera la estructura de los 3 planes)
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

// Inyectamos el HTML en el contenedor del DOM
        planesContainer.innerHTML += planCard;
    });
};

// Funcion para manejar la selección
const seleccionarPlan = (idPlan) => {
    const planEncontrado = planes.find(p => p.id === idPlan);

    if (planEncontrado) {
//Guarda el plan en LocalStorage 
        localStorage.setItem('planEn-Proceso', JSON.stringify(planEncontrado));

// Oculta la grilla de planes para mostramos el checkout 
        document.getElementById('planes-section').classList.add('hidden'); 
        const checkout = document.getElementById('checkout-container');
        checkout.classList.remove('hidden');

// Renderiza los detalles del plan en el checkout
        const detalles = document.getElementById('selected-plan-details');
        detalles.innerHTML = `
            <div class="pago-resumen">
                <h3>Resumen de suscripción</h3>
                <p><strong>Plan:</strong> ${planEncontrado.nombre}</p>
                <p><strong>Total a pagar:</strong> $ ${planEncontrado.precio.toLocaleString('es-AR')}</p>
                <hr>
                <p>Simulación de pago segura vía KaijuPay</p>
            </div>
        `;
    }
};

// Lógica del botón Pagar
document.getElementById('btn-pay').addEventListener('click', () => {
// Proceso de carga 
    Swal.fire({
        title: 'Procesando pago...',
        text: 'Estamos validando tus datos con el banco Kaiju',
        timer: 2000,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
    }).then(() => {
// Una vez que termina el timer 
        Swal.fire({
            title: '¡Pago Exitoso!',
            text: 'Tu suscripción está activa. Ahora crea tu cuenta.',
            icon: 'success',
            confirmButtonText: 'Continuar'
        }).then(() => {
            window.location.href = 'pages/login.html';
        });
    });
});

// EJECUCIÓN INICIAL
// Función para mostrar los planes apenas carga el archivo
mostrarPlanes();


