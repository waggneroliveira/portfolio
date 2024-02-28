document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#image-carousel', {
		perPage: 8,
        arrows:false,
        autoplay:true,
        loop:true,
        pagination: true,
		breakpoints: {
			640: {
				perPage: 1,
			},
		},
    }).mount();


    document.addEventListener('DOMContentLoaded', function () {
        new Splide( '#card-carousel', {
              perPage    : 2,
              breakpoints: {
                  640: {
                      perPage: 1,
                  },
              },
        }).mount();
    });

    setTimeout(function() {
        var bannerButton = document.querySelector('.banner__button');
        bannerButton.classList.remove('hidden');
    }, 8000);

    document.querySelectorAll('nav .menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
    
            // Calcula a posição de rolagem com uma compensação de 20 pixels para parar acima da seção
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
    
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
    
            // setTimeout(() => {
            //     const aboutRightLeftDivs = document.querySelectorAll(
            //         '.about__right, .about__left, .project_category__title, .project__link, .project__list, .contact__left, .contact__right'
            //         );
            
            //     aboutRightLeftDivs.forEach((div) => {
            //         div.classList.remove('boxAnimate', 'animate');
            //     });
            // }, 1000);
            
            
        });
    });

    // Função para remover as classes quando a largura da tela for menor ou igual a 500
    function removeClassesOnSmallScreen() {
        const screenWidth = window.innerWidth;
        const aboutRightLeftDivs = document.querySelectorAll(
            '.about__right, .about__left, .project_category__title, .project__link, .project__list, .contact__left, .contact__right'
        );

        if (screenWidth <= 500) {
            aboutRightLeftDivs.forEach((div) => {
                div.classList.remove('boxAnimate', 'animate');
            });
        }
    }

    // Chama a função para remover as classes quando a página é carregada
    removeClassesOnSmallScreen();

    // Adiciona um ouvinte de evento de redimensionamento da janela para verificar e remover as classes quando a tela for redimensionada
    window.addEventListener('resize', removeClassesOnSmallScreen);

    
    sidebar(); // CHAMA A FUNCAO SIDEBAR
});
