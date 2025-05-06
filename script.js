function fadeInModal(content) {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 1000;
  overlay.style.animation = 'fadeIn 0.4s ease-out';

  const modal = document.createElement('div');
  modal.style.background = '#1f1f1f';
  modal.style.padding = '2rem';
  modal.style.borderRadius = '10px';
  modal.style.color = '#fff';
  modal.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
  modal.style.transform = 'translateY(30px)';
  modal.style.opacity = '0';
  modal.style.transition = 'all 0.4s ease-out';
  modal.innerHTML = content + '<br><br><button id="closeModal" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #ffd369; border: none; color: #000; cursor: pointer; border-radius: 5px;">Fechar</button>';

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    modal.style.transform = 'translateY(0)';
    modal.style.opacity = '1';
  });

  document.getElementById('closeModal').addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => document.body.removeChild(overlay), 300);
  });
}

function falarComEspecialista() {
  fadeInModal('<h2>Abrindo canal com especialista...</h2><p>Você será redirecionado em breve.</p>');
}

function verResultados() {
  fadeInModal('<h2>Mostrando resultados reais...</h2><p>Veja nossos cases e soluções transformadoras.</p>');
}

window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.8s ease-out';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});