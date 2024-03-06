document.addEventListener('DOMContentLoaded', function() {
    // Función para redireccionar a la página de error anterior
    function redirectToAnotherErrorPage() {
        var mainErrorPage = document.getElementById('main-error-page');
        var anotherErrorPage = document.getElementById('another-error-page');
        var redirectBtn = document.getElementById('redirect-btn');

        // Oculta la primera página de error
        mainErrorPage.style.display = 'none';
        // Muestra la segunda página de error
        anotherErrorPage.style.display = 'block';
        // Oculta el botón
        redirectBtn.style.display = 'none';
    }

    // Agrega un listener al botón para redireccionar al hacer clic
    var redirectBtn = document.getElementById('redirect-btn');
    redirectBtn.addEventListener('click', redirectToAnotherErrorPage);
});
