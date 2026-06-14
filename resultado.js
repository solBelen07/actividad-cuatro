const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get("nombre");
const email = parametros.get("email");
const edad = parametros.get("edad");
const pais = parametros.get("pais");

const datos = document.getElementById("datos");

datos.innerHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>País:</strong> ${pais}</p>
`;