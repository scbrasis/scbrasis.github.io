document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    let slideWidth;
    let currentSlideIndex = 0;

    // Função para atualizar a visibilidade dos botões de navegação
    const updateButtonVisibility = () => {
        // Esconde o botão 'anterior' se estiver no primeiro slide
        if (currentSlideIndex === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block'; // Ou 'inline-block' dependendo do seu estilo
        }

        // Esconde o botão 'próximo' se estiver no último slide
        if (currentSlideIndex === slides.length - 1) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block'; // Ou 'inline-block'
        }
    };

    // Função para definir a posição de todos os slides
    const setSlidePosition = () => {
        slideWidth = slides[0].getBoundingClientRect().width;

        // Note: slide.style.left é geralmente usado com posicionamento absoluto.
        // Como você está usando transform translateX, esta linha não é estritamente necessária
        // para o funcionamento da rolagem, mas não causa problemas se mantida.
        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        });

        carouselTrack.style.transform = 'translateX(-' + (slideWidth * currentSlideIndex) + 'px)';

        // Atualiza a visibilidade dos botões após o movimento
        updateButtonVisibility();
    };

    // Inicializa as posições dos slides e a largura, e a visibilidade dos botões
    setSlidePosition();

    // Recalcula a largura e a posição ao redimensionar a janela
    window.addEventListener('resize', setSlidePosition);

    // Listener para o botão 'próximo'
    nextButton.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            carouselTrack.style.transform = 'translateX(-' + (slideWidth * currentSlideIndex) + 'px)';
            updateButtonVisibility(); // Atualiza a visibilidade após o clique
        }
    });

    // Listener para o botão 'anterior'
    prevButton.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            carouselTrack.style.transform = 'translateX(-' + (slideWidth * currentSlideIndex) + 'px)';
            updateButtonVisibility(); // Atualiza a visibilidade após o clique
        }
    });

    // Navegação com setas do teclado
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            nextButton.click();
        } else if (event.key === 'ArrowLeft') {
            prevButton.click();
        }
    });
});