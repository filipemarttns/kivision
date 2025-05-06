// script.js

// Função para aplicar o fade-in no conteúdo do modal com animação aprimorada
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
  overlay.style.animation = 'fadeInOverlay 0.5s ease-out';

  const modal = document.createElement('div');
  modal.style.background = '#2a2a2a';
  modal.style.padding = '3rem';
  modal.style.borderRadius = '20px';
  modal.style.color = '#fff';
  modal.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.7)';
  modal.style.transform = 'translateY(40px)';
  modal.style.opacity = '0';
  modal.style.transition = 'all 0.5s ease-out';
  modal.style.maxWidth = '650px';
  modal.style.textAlign = 'center';
  modal.innerHTML = content + 
  '<br><br><button id="closeModal" style="margin-top: 1.5rem; padding: 1rem 2rem; background: linear-gradient(45deg, #ffd369, #f5a823); border: none; color: #000; cursor: pointer; border-radius: 30px; font-size: 1.1rem; transition: transform 0.3s ease-in-out;">Fechar</button>';

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Animação suave de transição do modal
  requestAnimationFrame(() => {
    modal.style.transform = 'translateY(0)';
    modal.style.opacity = '1';
  });

  document.getElementById('closeModal').addEventListener('click', () => {
    // Adiciona transição de fade-out ao fechar
    overlay.style.opacity = '0';
    modal.style.transform = 'translateY(40px)';
    setTimeout(() => document.body.removeChild(overlay), 500);
  });
}

// Função para abrir canal com especialista
function falarComEspecialista() {
  fadeInModal('<h2 style="font-size: 2rem; font-weight: bold; color: #ffd369;">Conectando com especialista...</h2><p>Você será redirecionado em breve para a sessão exclusiva.</p>');
}

// Função para mostrar resultados com animação sofisticada
function verResultados() {
  fadeInModal('<h2 style="font-size: 2rem; font-weight: bold; color: #ffd369;">Mostrando resultados reais...</h2><p>Explore nossos cases de sucesso e como podemos transformar o seu negócio.</p>');
}

// Animação de carregamento suave para a página
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1s ease-out';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
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
    button.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
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

window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    fadeOnScrollElements.forEach((element, index) => {
      const inView = isInViewport(element);
      
      if (inView) {
        element.style.transitionDelay = `${index * 100}ms`;
        element.classList.add('fadeInOnScroll');
        element.classList.remove('fadeOutOnScroll');
      } else {
        element.classList.remove('fadeInOnScroll');
        element.classList.add('fadeOutOnScroll');
      }
    });
  }, 50);
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0;
}
