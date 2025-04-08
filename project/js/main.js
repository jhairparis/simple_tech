(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Función para verificar si hay un usuario logueado
    function checkLoggedInUser() {
        // Obtener el usuario actual del localStorage (si existe)
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        
        // Obtener el botón de login
        const loginBtn = document.querySelector('a.btn.btn-inline-body[href="login.html"]');
        
        // Si hay un usuario logueado y existe el botón de login
        if (currentUser && loginBtn) {
            // Crear el HTML para el dropdown del usuario
            const userDropdown = document.createElement('div');
            userDropdown.className = 'nav-item dropdown';
            userDropdown.innerHTML = `
                <a href="#" class="nav-link dropdown-toggle btn btn-inline-body py-2 px-4 ms-2" data-bs-toggle="dropdown">
                    <i class="fas fa-user me-2"></i>${currentUser.nombre}
                </a>
                <div class="dropdown-menu border-0 m-0">
                    <a href="#" id="btnLogout" class="dropdown-item">Cerrar sesión</a>
                </div>
            `;
            
            // Reemplazar el botón de login con el dropdown del usuario
            loginBtn.parentNode.replaceChild(userDropdown, loginBtn);
            
            // Agregar event listener para el botón de logout
            setTimeout(() => {
                document.getElementById('btnLogout').addEventListener('click', function(e) {
                    e.preventDefault();
                    // Eliminar el usuario actual del localStorage
                    localStorage.removeItem("currentUser");
                    // Recargar la página
                    window.location.reload();
                });
            }, 100);
        }
    }

    // Ejecutar cuando el documento esté listo
    $(document).ready(function() {
        checkLoggedInUser();
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);

