//Manejo de sesión y registro de usuarios

// Captura del formulatio
const loginForm = document.getElementById('login-form');

// Evento de envio de información
loginForm.addEventListener('submit', (e) => {
// Recargar la página
    e.preventDefault();
    console.log("1. Formulario enviado"); //veren la consola borrar despues de encontrar error

// Captura los datos de los inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

// Validación de ingreso 
    if (email === "" || password === "") {
        Swal.fire({
            title: 'Campos incompletos',
            text: 'Por favor, completa tu email y contraseña.',
            icon: 'warning',
            confirmButtonColor: '#9d50bb'
        });
        return; 
    }

// Logica de usuarios en LocalStorage
// Funcion para obtenemos los usuarios ya registrados o crear un array vacío si no hay ninguno
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosKaiju')) || [];

// Busqueda para verificar si el email ingresado ya existe
    const usuarioEncontrado = usuariosRegistrados.find(user => user.email === email);

    if (usuarioEncontrado) {
        console.log("2. Usuario encontrado, validando...");// ver en la consola borrar despues de encontrar el error
// Si el usuario ya existe, validamos la contraseña
        if (usuarioEncontrado.password === password) {
            iniciarSesion(usuarioEncontrado);
        } else {
            Swal.fire('Error', 'La contraseña es incorrecta.', 'error');
        }
    } else {
        console.log("2. Usuario nuevo, registrando...");// ver en la consola luego borrar al encontrar el error
// Si el usuario no existe, lo registramos automáticamente
        const nuevoUsuario = {
            email: email,
            password: password,
            nombre: email.split('@')[0] 
        };

        usuariosRegistrados.push(nuevoUsuario);
        localStorage.setItem('usuariosKaiju', JSON.stringify(usuariosRegistrados));

        Swal.fire({
                    title: '¡Cuenta creada!',
                    text: `Bienvenido a KaijuStream, ${nuevoUsuario.nombre}`,
                    icon: 'success',
                    confirmButtonColor: '#9d50bb'
                }).then((result) => {
// Solo se redirecciona si el usuario interactúa con la alerta
                    if (result.isConfirmed) {
                        iniciarSesion(nuevoUsuario);
                    }
                });
            }
});

// Funcion para iniciar seción y redireccionar a catalogo.html
const iniciarSesion = (usuario) => {
    console.log("3. Iniciando sesión para:", usuario.nombre);//ver en la consola y borrar al encontrar el error
// Se guard al usuario en sessionStorage para saber quién está navegando
    sessionStorage.setItem('usuarioActivo', JSON.stringify(usuario));
    
// Envia al usuario al catálogo
    window.location.href = 'catalogo.html';
};