function fadeInModal(content) {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 1000;
  overlay.style.animation = 'fadeInOverlay 0.6s ease-in-out';

  const modal = document.createElement('div');
  modal.style.background = '#2a2a2a';
  modal.style.padding = '3rem';
  modal.style.borderRadius = '20px';
  modal.style.color = '#fff';
  modal.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.7)';
  modal.style.transform = 'translateY(0)';
  modal.style.opacity = '1';
  modal.style.transition = 'all 0.6s ease-out';
  modal.style.maxWidth = '650px';
  modal.style.textAlign = 'center';

  modal.innerHTML = content + 
    '<br><br><button id="closeModal" style="margin-top: 1.5rem; padding: 1rem 2rem; background: linear-gradient(45deg,rgb(0, 8, 119),rgb(2, 8, 63)); border: none; color: #000; cursor: pointer; border-radius: 30px; font-size: 1.1rem; transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;">Fechar</button>' +
    '<br><br><button id="goToServices" style="margin-top: 1.5rem; padding: 1rem 2rem; background: linear-gradient(45deg,rgb(9, 31, 128),rgb(2, 8, 63)); border: none; color: #fff; cursor: pointer; border-radius: 30px; font-size: 1.1rem;">Conheça nossos serviços!</button>';

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Ativa animações nos elementos visíveis no momento
  triggerFadeElements();  // <= Chama a função que já está no seu código

  document.getElementById('closeModal').addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => document.body.removeChild(overlay), 600);
  });

  document.getElementById('goToServices').addEventListener('click', () => {
    window.location.href = 'tela2.html';
  });
}


function falarComEspecialista() {
  fadeInModal('<h2 style="font-size: 2rem; font-weight: bold; color:rgb(9, 31, 128);">Conectando com especialista...</h2><p>Você será redirecionado em breve para a sessão exclusiva.</p>');
  setTimeout(() => {
    window.location.href = "https://wa.me/31991059582";
  }, 10);
}

function verResultados() {
  fadeInModal('<h2 style="font-size: 2rem; font-weight: bold; color:rgb(9, 31, 128);">Mostrando resultados reais...</h2><p>Explore nossos cases de sucesso e como podemos transformar o seu negócio.</p>');

  setTimeout(() => {
    window.location.href = "https://wa.me/31991059582";
  }, 10);
}

// Animação de carregamento suave para a página
window.addEventListener('load', () => {
  // Garantir que a página carregue com visibilidade total
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 1s ease-out';

  // Garantir que os textos no cabeçalho apareçam de imediato
  const headerElements = document.querySelectorAll('.header-text');
  headerElements.forEach((element) => {
    element.style.opacity = '1'; // Assegura que os elementos de texto são visíveis ao carregar
    element.style.transition = 'opacity 1s ease-out';
  });

  // Aumenta a visibilidade dos elementos de forma mais geral
  const visibleElements = document.querySelectorAll('.fade-in-scroll');
  visibleElements.forEach((element) => {
    element.classList.add('fadeInOnScroll'); // Aplica a classe que ativa a animação de fade
  });

  // Remove animações com base no estado de carregamento
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });

  triggerFadeElements(); // Ativa animações nos elementos visíveis no load
});


// Função para animar o texto conforme o usuário rola a página
const fadeElements = document.querySelectorAll('.scroll-fade');
const focusElements = document.querySelectorAll('.scroll-focus');

window.addEventListener('scroll', () => {
  fadeElements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('fadeInOnScroll');
    }
  });

  focusElements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('focusOnScroll');
    }
  });
});

// Função para verificar se o elemento está visível na tela
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Animação de hover aprimorada nos botões
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)'; // Mais suave na sombra
  });
  
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = 'none';
  });
});

// Efeito de foco com transição suave ao rolar
const scrollElements = document.querySelectorAll('.scroll-element');
scrollElements.forEach(el => {
  el.classList.add('scroll-fade');
});

document.addEventListener('scroll', () => {
  scrollElements.forEach(el => {
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.9) {
      el.classList.add('scroll-focus');
    }
  });
});

const fadeOnScrollElements = document.querySelectorAll('.fade-in-scroll');
let scrollTimeout;

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 1s ease-out';

  const headerElements = document.querySelectorAll('.header-text');
  headerElements.forEach((element) => {
    element.style.opacity = '1';
    element.style.transition = 'opacity 1s ease-out';
  });

  const visibleElements = document.querySelectorAll('.fade-in-scroll');
  visibleElements.forEach((element) => {
    element.classList.add('fadeInOnScroll');
  });

  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });

  // 🔥 AQUI O FIX
  setTimeout(() => {
    triggerFadeElements(); // Segunda chamada quando o DOM estiver 100%
  }, 300);
});

// Forçar scroll para o topo ao recarregar a página
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Função para acionar animação para os elementos visíveis no load
function triggerFadeElements() {
  const fadeOnScrollElements = document.querySelectorAll('.fade-in-scroll');

  fadeOnScrollElements.forEach((element, index) => {
    const inView = isInViewport(element);

    if (inView) {
      element.style.transitionDelay = `${index * 150}ms`; // Delay ajustado para melhorar a fluidez
      element.classList.add('fadeInOnScroll');
      element.classList.remove('fadeOutOnScroll');
    } else {
      element.classList.remove('fadeInOnScroll');
      element.classList.add('fadeOutOnScroll');
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const sobreLink = document.querySelector('a[href="#sobre-nos"]');
  const inicioLink = document.querySelector('a[href="#inicio"]');
  const modal = document.getElementById('sobre-modal');

  if (sobreLink && modal) {
    sobreLink.addEventListener('click', (e) => {
      e.preventDefault();
      abrirModal();
    });
  }

  if (inicioLink && modal) {
    inicioLink.addEventListener('click', (e) => {
      e.preventDefault();
      fecharModal();
    });
  }
});


function abrirModal() {
  const modal = document.getElementById('sobre-modal');
  modal.classList.add('modal-show');
  modal.classList.remove('modal-hide');
}

function fecharModal() {
  const modal = document.getElementById('sobre-modal');
  modal.classList.remove('modal-show');
  modal.classList.add('modal-hide');

  // Espera o fim da animação pra esconder
  setTimeout(() => {
    if (modal.classList.contains('modal-hide')) {
      modal.style.display = 'none';
    }
  }, 500); // tempo igual ao da animação CSS
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInOnScroll');
      entry.target.classList.remove('fadeOutOnScroll');
    } else {
      entry.target.classList.remove('fadeInOnScroll');
      entry.target.classList.add('fadeOutOnScroll');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  // Elementos que têm as classes de fade
  const faders = document.querySelectorAll('.fade-in-scroll, .scroll-fade, .scroll-focus');

  // Opções do Intersection Observer
  const appearOptions = {
    threshold: 0.1,  // A partir de 10% de visibilidade, ele vai ativar o efeito
    rootMargin: "0px 0px -100px 0px"  // Isso faz o efeito ser acionado um pouco antes do elemento entrar na tela
  };

  // O IntersectionObserver
  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;  // Se o elemento não estiver visível, não faz nada

      entry.target.classList.add('fadeInOnScroll');  // Adiciona o efeito quando o elemento entrar na tela
      entry.target.classList.remove('fadeOutOnScroll');  // Remove o efeito de saída se ele estiver na tela
      observer.unobserve(entry.target);  // Para de observar o elemento depois que ele entrou na tela
    });
  }, appearOptions);

  // Inicializa a observação de todos os elementos
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
