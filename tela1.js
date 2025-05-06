// Função para abrir o pop-up com animação fluída e impacto visual profundo
function abrirPopup(src, title, description) {
    const popup = document.getElementById('popup');
    const img = document.getElementById('popup-img');
    const titleElement = document.getElementById('popup-title');
    const descriptionElement = document.getElementById('popup-description');

    if (!popup || !img || !titleElement || !descriptionElement) {
        console.error("Elemento do pop-up não encontrado no DOM.");
        return;
    }

    // Atualiza os conteúdos do pop-up com animação de transição
    img.src = src;
    titleElement.textContent = title;
    descriptionElement.textContent = description;

    // Exibe o pop-up com um efeito visual de transformação suave
    popup.classList.add('aberto');
    popup.style.transform = 'scale(1.05)';
    popup.style.opacity = 1;
    popup.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.5s ease-out';

    // Detalhes da animação de zoom no pop-up
    setTimeout(() => {
        popup.style.transform = 'scale(1)';
    }, 100);
}

// Função para fechar o pop-up com animação de saída
function fecharPopup() {
    const popup = document.getElementById('popup');
    if (!popup) {
        console.error("Elemento do pop-up não encontrado no DOM.");
        return;
    }

    popup.classList.remove('aberto');
    popup.style.transform = 'scale(0.9)';
    popup.style.opacity = 0;
    popup.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-in';
}

// Animação de hover nos projetos com destaque dinâmico e descrição fluída
document.addEventListener("DOMContentLoaded", function () {
    const projetos = document.querySelectorAll('.projeto');
    if (!projetos) {
        console.error("Nenhum projeto encontrado no DOM.");
        return;
    }

    projetos.forEach(projeto => {
        projeto.addEventListener('mouseenter', function () {
            // Aumenta o zoom na imagem
            const img = this.querySelector('img');
            if (img) {
                img.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
                img.style.transform = 'scale(1.1)';
            }

            // Aumenta o tamanho do projeto e cria um brilho fluído nas bordas
            this.style.transition = 'transform 0.4s ease-out, box-shadow 0.4s ease-out, z-index 0.3s ease-in-out';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 12px 45px rgba(0, 123, 255, 0.7)';
            this.style.zIndex = '2';

            // Aplica o desfoque suave nos outros projetos
            projetos.forEach(otherProjeto => {
                if (otherProjeto !== this) {
                    otherProjeto.style.transition = 'filter 0.4s ease-out';
                    otherProjeto.style.filter = 'blur(4px)';
                }
            });

            // Anima a descrição para que ela apareça suavemente
            const descricao = this.querySelector('.descricao');
            if (descricao) {
                descricao.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
                descricao.style.opacity = '1';
                descricao.style.transform = 'translateY(0)';
            }
        });

        projeto.addEventListener('mouseleave', function () {
            // Retorna ao estado inicial
            const img = this.querySelector('img');
            if (img) {
                img.style.transition = 'transform 0.4s ease-out';
                img.style.transform = 'scale(1)';
            }

            // Remove o zoom e brilho do projeto
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.zIndex = '1';

            // Remove o desfoque dos outros projetos
            projetos.forEach(otherProjeto => {
                otherProjeto.style.filter = 'none';
            });

            // Oculta a descrição suavemente
            const descricao = this.querySelector('.descricao');
            if (descricao) {
                descricao.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                descricao.style.opacity = '0';
                descricao.style.transform = 'translateY(20px)';
            }
        });
    });

    // Animação avançada de parallax para scroll suave e fluído
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const projetosSection = document.querySelector('.projetos-section');
        if (projetosSection) {
            // Parallax fluído, suave e desacelerado com profundidade
            projetosSection.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            projetosSection.style.transition = 'transform 0.2s ease-out';
        }
    });

    // Animação de introdução dos projetos com delay progressivo e efeito suave de fade-in
    const projetosIntro = document.querySelectorAll('.projeto');
    projetosIntro.forEach((projeto, index) => {
        // Introdução progressiva dos projetos com efeito fade-in e transformações
        setTimeout(() => {
            projeto.classList.add('projeto-animado');
            projeto.style.transition = `transform 0.8s ease-out, opacity 0.5s ease-out`;
            projeto.style.transform = 'translateY(0)';
            projeto.style.opacity = '1';
        }, index * 150); // Delay progressivo para adicionar dinamismo
    });

    // Interação de clique nos projetos para abrir o pop-up
    const projetoLinks = document.querySelectorAll('.projeto');
    projetoLinks.forEach(projeto => {
        projeto.addEventListener('click', function (event) {
            event.preventDefault();
            const img = this.querySelector('img');
            const title = this.querySelector('.projeto-titulo').textContent;
            const description = this.querySelector('.descricao').textContent;
            if (img && title && description) {
                abrirPopup(img.src, title, description);
            }
        });
    });
});
// Função para voltar para a tela index.html
function voltarParaPaginaInicial() {
    window.location.href = "inicio.html"; // Redireciona para o arquivo index.html
}
