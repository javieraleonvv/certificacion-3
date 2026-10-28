document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mostrar alerta al hacer clic en "¿Cómo funciona?"
    const enlaceComoFunciona = document.getElementById("como-funciona");
    if (enlaceComoFunciona) {
        enlaceComoFunciona.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Esta plataforma te permite enviar abrazos virtuales a tus amigos y familiares para mantenerte conectado sin importar la distancia.");
        });
    }

    // 2. Incrementar la cantidad de abrazos para cada persona
    const botonesAbrazo = document.querySelectorAll(".btn-abrazo");
    botonesAbrazo.forEach((boton) => {
        boton.addEventListener("click", () => {
            const idPersona = boton.getAttribute("data-id");
            const contadorElemento = document.getElementById(`abrazos-${idPersona}`);

            if (contadorElemento) {
                let cantidadActual = parseInt(contadorElemento.textContent, 10);
                contadorElemento.textContent = cantidadActual + 1;
            }
        });
    });

    // 3. Eliminar la sección de cookies al hacer clic en "Aceptar"
    const btnAceptarCookies = document.getElementById("btn-aceptar-cookies");
    const seccionCookies = document.getElementById("seccion-cookies");

    if (btnAceptarCookies) {
        btnAceptarCookies.addEventListener("click", () => {
            if (seccionCookies) {
                seccionCookies.remove();
            }
        });
    }
});