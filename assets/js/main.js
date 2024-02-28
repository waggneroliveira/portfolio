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
    
            setTimeout(() => {
                const aboutRightLeftDivs = document.querySelectorAll(
                    '.about__right, .about__left, .project_category__title, .project__link, .project__list, .contact__left, .contact__right'
                    );
            
                aboutRightLeftDivs.forEach((div) => {
                    div.classList.add('boxAnimate', 'animate');
                });
            }, 1000);
            
        });
    });
    
    sidebar(); // CHAMA A FUNCAO SIDEBAR
});
