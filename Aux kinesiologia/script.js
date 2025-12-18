const serviciosCard = document.querySelector(".servicios");

serviciosCard.addEventListener("click", () => {
    serviciosCard.classList.toggle("abierta");
});

const titulosServicios = document.querySelectorAll(
    ".uñasencarnadas h4, .micosis h4, .empanadas h4"
);

titulosServicios.forEach(titulo => {
    titulo.addEventListener("click", (e) => {
        e.stopPropagation();

        const servicioActual = titulo.parentElement;

        // cerrar los otros
        document.querySelectorAll(
            ".uñasencarnadas, .micosis, .empanadas"
        ).forEach(servicio => {
            if (servicio !== servicioActual) {
                servicio.classList.remove("abierto");
            }
        });

        // abrir/cerrar el actual
        servicioActual.classList.toggle("abierto");
    });
});




