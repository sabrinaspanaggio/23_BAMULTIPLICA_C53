// Para enviar el formulario de contacto //
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Verificar si los campos obligatorios están completos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false; // Evita que el formulario se envíe
    }

    // Si la validación es exitosa, envia el formulario
    enviarformulario();
    return true;
}

function enviarformulario() {
    alert('El formulario se envió correctamente');
}

//Interactividad responsive menú
_toggle.onclick = () =>{
    _items.classList.toggle("open")
}


//Interactividad cards en Página de Productos

function mostrarInformacion(card8) {
    var contenido = card8.querySelector('.card-content');

    if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
    } else {
        contenido.style.display = 'none';
    }
}