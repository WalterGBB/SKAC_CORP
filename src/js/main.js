// Añade un efecto de scroll al navbar
window.addEventListener('scroll', function () {
    // Selecciona el elemento con la clase 'navbar-custom'
    const navbar = document.querySelector('.navbar-custom');

    // Si la cantidad de scroll vertical es mayor a 50 píxeles
    if (window.scrollY > 50) { // Cambia 50 a la cantidad de scroll que prefieras
        // Añade la clase 'scrolled' al navbar
        navbar.classList.add('scrolled');
    } else {
        // Remueve la clase 'scrolled' del navbar si el scroll es menor o igual a 50 píxeles
        navbar.classList.remove('scrolled');
    }
});

// Añade un efecto para cambiar las imágenes del carrusel dependiendo del tamaño de la pantalla
document.addEventListener("DOMContentLoaded", function () {
    // Función para actualizar las fuentes de las imágenes del carrusel
    function updateImageSources() {
        // Selecciona todas las imágenes dentro de los elementos de carrusel dentro de la clase 'cta'
        const carouselItems = document.querySelectorAll(".cta .carousel-item img");

        // Si el ancho de la ventana es menor a 769 píxeles
        if (window.innerWidth < 769) {
            // Para cada imagen en el carrusel
            carouselItems.forEach(function (img, index) {
                // Cambia la fuente de la imagen a una versión pequeña
                img.src = "carrusel-" + (index + 1) + "-small.png"; // Cambia a las imágenes pequeñas
            });
        } else {
            // Para cada imagen en el carrusel
            carouselItems.forEach(function (img, index) {
                // Cambia la fuente de la imagen a una versión grande
                img.src = "carrusel-" + (index + 1) + ".png"; // Cambia a las imágenes grandes
            });
        }
    }

    // Ejecuta la función al cargar la página
    updateImageSources();
    // Ejecuta la función al redimensionar la ventana
    window.addEventListener("resize", updateImageSources);
});
