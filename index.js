const formulario = document.getElementById("formulario-datos");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorEdad = document.getElementById("error-edad");
const errorPais = document.getElementById("error-pais");
const errorTerminoCondiciones = document.getElementById("error-terminos-condiciones");

formulario.addEventListener("submit", (e) => {

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = Number(document.getElementById("edad").value);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos-condiciones");

    // Nombre: exactamente 5 letras
    if (!/^[A-Za-z]{5}$/.test(nombre)) {
        e.preventDefault();

        errorNombre.textContent = "El nombre debe tener 5 letras" ;
        return;
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        e.preventDefault();
        errorEmail.textContent = "Ingrese un email válido." ;
        return;
    
    }

    // Edad
    if (edad < 18 || edad > 60) {
        e.preventDefault();

        errorEdad.textContent = "La edad debe estar entre 18 y 60 años." ;
        return;
    }

    // País
    if (pais === "") {
        e.preventDefault();

        errorPais.textContent = "Debe seleccionar un país." ;
        return;
    }

    // Términos
    if (!terminos.checked) {
        e.preventDefault();

        errorTerminoCondiciones.textContent = "Debe aceptar los términos y condiciones." ;
        return;
    }

});