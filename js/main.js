//Archivo que inicia todo
// Seleccionamos el contenedor del HTML
const planesContainer = document.getElementById('planes-container');

// Función para mostrar los planes
function renderizarPlanes() {
    // Limpiamos el contenedor por si acaso
    planesContainer.innerHTML = "";

    // Recorremos el array con un for...of o forEach (lo que viste en clase)
    for (const plan of planes) {
        // Creamos la estructura usando Backticks
        planesContainer.innerHTML += `
            <article class="plan-card">
                <h3>${plan.nombre}</h3>
                <p>${plan.detalles}</p>
                <p>Precio: $${plan.precio}</p>
                <button onclick="seleccionarPlan(${plan.id})" class="btn-select">
                    Elegir Plan
                </button>
            </article>
        `;
    }
}

// Ejecutamos la función al cargar la página
renderizarPlanes();

// Función para manejar la selección (la lógica de "borrar" y mostrar el pago)
function seleccionarPlan(id) {
    // Buscamos el plan seleccionado
    const planEncontrado = planes.find(p => p.id === id);
    
    // Ocultamos la grilla de planes
    planesContainer.classList.add('hidden');
    
    // Mostramos el contenedor de checkout y le inyectamos los datos
    const checkout = document.getElementById('checkout-container');
    checkout.classList.remove('hidden');
    
    const detalle = document.getElementById('selected-plan-details');
    detalle.innerHTML = `
        <p>Has seleccionado: <strong>${planEncontrado.nombre}</strong></p>
        <p>Total a pagar: <strong>$${planEncontrado.precio}</strong></p>
    `;
}