const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
    navLinks.classList.remove('show');
  });
});

const animateOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;
    if (sectionTop < triggerPoint) {
      section.classList.add('show-section');
    }
  });
};

// Adicionar a chamada para a animação na primeira carga
animateOnScroll(); // Executa a animação logo após carregar o script
window.addEventListener('scroll', animateOnScroll);

// Selecionar todos os itens da galeria e o lightbox
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Adicionar evento de clique a cada imagem da galeria
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = item.src;
  });
});

// Fechar o lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Fechar o lightbox ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});
