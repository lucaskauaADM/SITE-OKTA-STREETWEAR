const imagensCarrossel = [
  { src: "img/camisetas01.", descricao: "Trip Side" },
  { src: "img/camisetas01.jpg", descricao: "Camiseta Streetwear" },
  { src: "img/camisetas02.jpg", descricao: "Camiseta Oversized" }
];

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');

function carregarCarrossel() {
  track.innerHTML = "";
  imagensCarrossel.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('carousel-item');
    div.innerHTML = `
      <img src="${item.src}" alt="${item.descricao}">
      <div class="info">${item.descricao}</div>
    `;
    track.appendChild(div);
  });
}
carregarCarrossel();

//--------- LOGICA DO CARROSSEL
let index = 0;
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % imagensCarrossel.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + imagensCarrossel.length) % imagensCarrossel.length;
  updateCarousel();
});

// Auto-play
setInterval(() => {
  index = (index + 1) % imagensCarrossel.length;
  updateCarousel();
}, 5000);

//--------------- FILTRAR PRODUTOS POR CATEGORIA PELO MENU ---------------//
const linksMenu = document.querySelectorAll('nav ul li a');
const todasSecoes = document.querySelectorAll('section');

linksMenu.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const categoria = link.getAttribute('href').substring(1);

    todasSecoes.forEach(sec => {
      if(sec.id === categoria) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';  
      }
    });

    // rolagem suave até o topo da seção
    window.scrollTo({
      top: document.querySelector(`#${categoria}`).offsetTop - 70,
      behavior: 'smooth'
    });
  });
});
