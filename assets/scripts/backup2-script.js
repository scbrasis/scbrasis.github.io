/*
let theme = document.getElementById('theme')
let elementosParaAlterar = document.querySelectorAll('body, a, .h3-cont, .contribuidores, .p-main, .p-info2v-lf, .p-info2v, .circle, .moon-icon, .sun-icon, .a-menu, #liBox');

theme.addEventListener('click', () => {
    theme.classList.toggle('dark')
    elementosParaAlterar.forEach(elemento => {
        elemento.classList.toggle('dark');
    });
});
*/

const themeToggle = document.getElementById("theme");
const elementosParaAlterar = document.querySelectorAll(
  "html, body, nav, h1, h2, p, li, a, .h3-cont, .p-main, .p-info2v-lf, .p-info2v, .circle, .moon-icon, .sun-icon, .a-menu, .a-menu, .a-contri, .bb8, #liBox"
);

// Função que aplica o tema
function aplicarTema(tema) {
  if (tema === "dark") {
    themeToggle.classList.add("dark");
    elementosParaAlterar.forEach((el) => el.classList.add("dark"));
  } else {
    themeToggle.classList.remove("dark");
    elementosParaAlterar.forEach((el) => el.classList.remove("dark"));
  }
}

// Verifica o tema salvo ao carregar
document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  aplicarTema(temaSalvo || "light"); // se não tiver nada, usa claro
});

// Alterna o tema e salva no localStorage
themeToggle.addEventListener("click", () => {
  const novoTema = themeToggle.classList.contains("dark") ? "light" : "dark";
  aplicarTema(novoTema);
  localStorage.setItem("tema", novoTema);
});

/////////////////////////////////////////////////////////////////////

// --- Manter o NAV fixo apenas no desktop ---
const mainContent = document.querySelector("main");
const nav = document.querySelector("nav");
const themeBox = document.getElementById("themeBox");
const logoLink = document.getElementById("logoIFSCa"); // link das logos

function isMobile() {
  return window.innerWidth <= 768;
}

window.addEventListener("scroll", () => {
  if (!isMobile()) {
    if (window.scrollY > 180) { 
      nav.classList.add("nav-fixo");
      if (themeBox) themeBox.classList.add("theme-box-fixo");
      if (logoLink) logoLink.classList.add("logo-fixo");
      if (mainContent) {
        mainContent.style.paddingTop = '60px';
      }
    } else {
      nav.classList.remove("nav-fixo");
      if (themeBox) themeBox.classList.remove("theme-box-fixo");
      if (logoLink) logoLink.classList.remove("logo-fixo");
      if (mainContent) {
        mainContent.style.paddingTop = '0';
      }
    }
  }
});

//   if (!isMobile()) {
//     // Só fixa no desktop
//     if (window.scrollY > 180) {
//       nav.classList.add("nav-fixo");
//       if (themeBox) themeBox.classList.add("theme-box-fixo");
//       if (logoLink) logoLink.classList.add("logo-fixo");
//     } else {
//       nav.classList.remove("nav-fixo");
//       if (themeBox) themeBox.classList.remove("theme-box-fixo");
//       if (logoLink) logoLink.classList.remove("logo-fixo");
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  nav.classList.remove("nav-fixo");
  if (themeBox) themeBox.classList.remove("theme-box-fixo");
  if (logoLink) logoLink.classList.remove("logo-fixo");
});

/////////////////////////////////////////////////////////////////////

// --- MENU MOBILE SLIDE DIREITA ---
const openMenu = document.getElementById("openIcon");
const closeMenu = document.getElementById("closeIcon");
const backBlur = document.querySelector(".back-blur");

function toggleMenuMobile() {
  nav.classList.toggle("menu-aberto");
  backBlur.classList.toggle("ativo");

  // Alterna entre o ícone de abrir e fechar
  if (nav.classList.contains("menu-aberto")) {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
  } else {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }
}

// Evento para abrir o menu
openMenu.addEventListener("click", () => {
  if (isMobile()) toggleMenuMobile();
});

// Evento para fechar o menu ao clicar no X ou no fundo
if (backBlur) {
  backBlur.addEventListener("click", () => {
    if (isMobile()) toggleMenuMobile();
  });
}

closeMenu.addEventListener("click", () => {
  if (isMobile()) toggleMenuMobile();
});

// Remove o menu aberto ao redimensionar a janela
window.addEventListener("resize", () => {
  if (!isMobile()) {
    nav.classList.remove("menu-aberto");
    if (backBlur) backBlur.classList.remove("ativo");
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }
});

/////////////////////////////////////////////////////////////////////

// --- Transição suave dos elementos ao aparecer ---
const elementosAnimarCima = document.querySelectorAll(".animar-ao-rolar-cima");
const elementosAnimarBaixo = document.querySelectorAll(
  ".animar-ao-rolar-baixo"
);

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("aparecendo");
      } else {
        entrada.target.classList.remove("aparecendo");
      }
    });
  },
  {
    threshold: 0.05, ///////////////////////////////////////////////////////////////////////////////// ou 0.1
  }
);

elementosAnimarCima.forEach((el) => observer.observe(el));
elementosAnimarBaixo.forEach((el) => observer.observe(el));

/////////////////////////////////////////////////////////////////////

// --- Seta de rolagem para o topo e rodapé ---
document.addEventListener('DOMContentLoaded', function () {
  const arrow = document.getElementById('scrollArrow');
  const arrowImg = document.getElementById('arrowImg');
  const contribuidores = document.querySelector('.contribuidores');
  let hideTimeout = null;

  function updateArrowDirection() {
    if (window.scrollY > 500) {
      // Aponta para cima
      arrow.href = '#top';
      arrowImg.style.transform = 'rotate(0deg)';
      arrow.setAttribute('aria-label', 'Ir para o topo');
    } else {
      // Aponta para baixo
      arrow.href = '#cFooter';
      arrowImg.style.transform = 'rotate(180deg)';
      arrow.setAttribute('aria-label', 'Ir para o rodapé');
    }
  }

  function updateArrowPosition() {
    if (!contribuidores) return;
    const windowHeight = window.innerHeight;
    const contribRect = contribuidores.getBoundingClientRect();
    const arrowHeight = arrow.offsetHeight;

    // Detecta mobile
    const isMobile = window.innerWidth <= 768;
    const offset = isMobile ? 40 : 50;

    // Distância do bottom da janela até o topo do .contribuidores
    const distanceFromBottom = windowHeight - contribRect.top;

    // Se a seta ficaria sobre o .contribuidores, sobe ela
    if (distanceFromBottom > 0) {
      arrow.style.bottom = (distanceFromBottom + offset) + 'px';
    } else {
      arrow.style.bottom = isMobile ? '20px' : '20px';
    }
  }

  function handleMobileOpacity() {
    if (window.innerWidth > 768) {
      arrow.style.opacity = '1';
      return;
    }
    arrow.style.opacity = '1';
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      arrow.style.opacity = '0.05';
    }, 2000); // 2 segundos parado
  }

  window.addEventListener('scroll', function () {
    updateArrowDirection();
    updateArrowPosition();
    handleMobileOpacity();
  });

  window.addEventListener('resize', function () {
    updateArrowPosition();
    handleMobileOpacity();
  });

  // Inicialização
  updateArrowDirection();
  updateArrowPosition();
  handleMobileOpacity();
});