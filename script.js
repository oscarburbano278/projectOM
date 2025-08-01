
const fncion = "01082025";


function askForPas() {
    let pasGuess = prompt("¡Para acceder a esta sorpresa, ingresa la contraseña!");
    if (pasGuess !== fncion) {
        alert("Contraseña incorrecta. ¡Inténtalo de nuevo!");
        askForPas(); // Vuelve a solicitar la contraseña
    }
}

// Llama a la función de contraseña antes de que se cargue la página
askForPas();

document.addEventListener('DOMContentLoaded', () => {

     // Muestra el contenido de la página después de que la contraseña sea correcta
    document.body.style.display = 'flex';

    // Lógica para el carrusel de la página principal
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide();
    }

    showSlide();
    setInterval(nextSlide, 3000);


    // Lógica para el botón de música
    const music = document.getElementById('background-music');
    const playMusicBtn = document.getElementById('playMusicBtn');

    playMusicBtn.onclick = () => {
        if (music.paused) {
            music.play();
            playMusicBtn.textContent = 'Música en reproducción';
        } else {
            music.pause();
            playMusicBtn.textContent = 'Reproducir Música';
        }
    }

    // --- Lógica para el primer modal ---
    const modal1 = document.getElementById('imageModal');
    const openBtn1 = document.getElementById('openModalBtn');
    const closeBtn1 = document.querySelector('.close-btn');

    openBtn1.onclick = () => {
        modal1.style.display = 'block';
        showModal1Images();
    }

    closeBtn1.onclick = () => {
        modal1.style.display = 'none';
    }
    
    // --- Lógica para el segundo modal ---
    const modal2 = document.getElementById('surpriseModal');
    const openBtn2 = document.getElementById('openSurpriseModalBtn');
    const closeBtn2 = document.querySelector('.close-surprise-btn');

    openBtn2.onclick = () => {
        // Pausar la música y actualizar el botón cuando se abre este modal
        music.pause();
        playMusicBtn.textContent = 'Reproducir Música';
        
        modal2.style.display = 'block';
        showModal2Images();
    }

    closeBtn2.onclick = () => {
        modal2.style.display = 'none';
    }

    // Cerrar modales al hacer clic fuera
    window.onclick = (event) => {
        if (event.target == modal1) {
            modal1.style.display = 'none';
        }
        if (event.target == modal2) {
            modal2.style.display = 'none';
        }
    }

    // Lógica para la galería del primer modal
    function showModal1Images() {
        const images = document.querySelectorAll('.modal-gallery img');
        let index = 0;

        function showNextImage() {
            images.forEach(img => img.classList.remove('active'));
            images[(index) % images.length].classList.add('active');
            index++;
            setTimeout(showNextImage, 3000);
        }
        showNextImage();
    }

    // Lógica para la galería del segundo modal con controles manuales
    function showModal2Images() {
        const items = document.querySelectorAll('.surprise-item');
        const prevBtn = document.querySelector('#surpriseModal .prev-btn');
        const nextBtn = document.querySelector('#surpriseModal .next-btn');
        let currentIndex = 0;

        function updateGallery() {
            items.forEach((item, index) => {
                item.classList.remove('active');
                if (index === currentIndex) {
                    item.classList.add('active');
                }
            });
        }

        function goToPrev() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateGallery();
        }

        function goToNext() {
            currentIndex = (currentIndex + 1) % items.length;
            updateGallery();
        }

        updateGallery();
        prevBtn.addEventListener('click', goToPrev);
        nextBtn.addEventListener('click', goToNext);
    }
});