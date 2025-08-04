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
const textForTooltipTheme = document.getElementById("textForTooltip");
const bb8TooltipContainer = document.getElementById("themeBox");
const elementosParaAlterar = document.querySelectorAll(
  "html, body, nav, h1, h2, h3, p, li, a, .h3-cont, .p-main, .p-info2v-lf, .p-info2v, .circle, .moon-icon, .sun-icon, .a-menu, .a-menu, .a-contri, .bb8, .p-esportes, #liBox, #linkExternoIcon, #linkIcon, #gitHubIcon"
);

const burgerIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

const burgerLightSrc = "/assets/images/icons/menu-light-icon.svg";
const burgerDarkSrc = "/assets/images/icons/menu-dark-icon.svg";
const closeLightSrc = "/assets/images/icons/close-light-icon.svg";
const closeDarkSrc = "/assets/images/icons/close-dark-icon.svg";

const isMobileView = () => window.matchMedia("(max-width: 768px)").matches;

const externLinkIcons = document.querySelectorAll(".extern-link-icon");
const githubAlpelixIcon = document.getElementById("githubAlpelix");
const linkAlpelixIcon = document.getElementById("linkAlpelix");
const githubAndreyIcon = document.getElementById("githubAndrey");
const linkAndreyIcon = document.getElementById("linkAndrey");
const githubGabrielIcon = document.getElementById("githubGabriel");
const linkGabrielIcon = document.getElementById("linkGabriel");
const githubDuarteIcon = document.getElementById("githubDuarte");
const linkDuarteIcon = document.getElementById("linkDuarte");
const githubMiguelIcon = document.getElementById("githubMiguel");
const linkMiguelIcon = document.getElementById("linkMiguel");
const githubMisaelIcon = document.getElementById("githubMisael");
const linkMisaelIcon = document.getElementById("linkMisael");

const linkSumarioIcon = document.getElementById("linkSumario");

let isScrolledIntoMain = false;

const handleHeaderIcons = () => {
  if (isMobileView()) {
    return;
  }

  const isDarkMode = themeToggle.checked;

  if (isDarkMode) {
    burgerIcon.src = burgerLightSrc;
    closeIcon.src = closeLightSrc;
  } else {
    if (isScrolledIntoMain) {
      burgerIcon.src = burgerDarkSrc;
      closeIcon.src = closeDarkSrc;
    } else {
      burgerIcon.src = burgerLightSrc;
      closeIcon.src = closeLightSrc;
    }
  }
};

if (mainSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isScrolledIntoMain = !entry.isIntersecting;
        
        handleHeaderIcons();
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -100% 0px",
    }
  );

  // Inicia a observação do elemento <main>.
  observer.observe(mainSection);
}

//     if (themeToggle.checked) {
//       burgerIcon.src = burgerLightSrc;
//       closeIcon.src = closeLightSrc;
//     } else {
//       if (window.scrollY > 80) {
//         burgerIcon.src = burgerDarkSrc;
//         closeIcon.src = closeDarkSrc;
//       } else {
//         burgerIcon.src = burgerLightSrc;
//         closeIcon.src = closeLightSrc;
//       }
//     }
//   } else {
//     // On desktop, ensure light icons if dark mode is off
//     if (!themeToggle.checked) {
//       burgerIcon.src = burgerLightSrc;
//       closeIcon.src = closeLightSrc;
//     } // If dark mode is on for desktop, the general theme logic should handle it via CSS. // We assume no specific dark icon on scroll for desktop here.
//   }
// };

// Função que aplica o tema
function aplicarTema(tema) {
  if (tema === "dark") {
    elementosParaAlterar.forEach((el) => el.classList.add("dark"));
    if (themeToggle) {
      themeToggle.checked = true;
    }

    if (textForTooltipTheme) {
      textForTooltipTheme.textContent = "<- Light theme 💡";
    }

    externLinkIcons.forEach((icon) => {
      icon.src = icon.src.replace(
        "extern-link-dark-icon.svg",
        "extern-link-light-icon.svg"
      );
    });
    if (githubAlpelixIcon)
      githubAlpelixIcon.src = githubAlpelixIcon.src.replace(
        "github-dark-icon.svg",
        "github-light-icon.svg"
      );
    if (linkAlpelixIcon)
      linkAlpelixIcon.src = linkAlpelixIcon.src.replace(
        "link-dark-icon.svg",
        "link-light-icon.svg"
      );
    if (githubAndreyIcon)
      githubAndreyIcon.src = githubAndreyIcon.src.replace(
        "github-dark-icon.svg",
        "github-light-icon.svg"
      );
    if (linkAndreyIcon)
      linkAndreyIcon.src = linkAndreyIcon.src.replace(
        "link-dark-icon.svg",
        "link-light-icon.svg"
      );
    if (githubGabrielIcon)
      githubGabrielIcon.src = githubGabrielIcon.src.replace(
        "github-dark-icon.svg",
        "github-light-icon.svg"
      );
    if (linkGabrielIcon)
      linkGabrielIcon.src = linkGabrielIcon.src.replace(
        "link-dark-icon.svg",
        "link-light-icon.svg"
      );
    if (githubDuarteIcon)
      githubDuarteIcon.src = githubDuarteIcon.src.replace(
        "github-dark-icon.svg",
        "github-light-icon.svg"
      );
    if (linkDuarteIcon)
      linkDuarteIcon.src = linkDuarteIcon.src.replace(
        "link-dark-icon.svg",
        "link-light-icon.svg"
      );
    if (githubMiguelIcon)
      githubMiguelIcon.src = githubMiguelIcon.src.replace(
        "github-dark-icon.svg",
        "github-light-icon.svg"
      );
    if (linkMiguelIcon)
      linkMiguelIcon.src = linkMiguelIcon.src.replace(
        "link-dark-icon.svg",
        "link-light-icon.svg"
      );
    if (githubMisaelIcon)
      githubMisaelIcon.src = githubMisaelIcon.src.replace(
        "github-dark-icon.svg",
        "github-light-icon.svg"
      );
    if (linkMisaelIcon)
      linkMisaelIcon.src = linkMisaelIcon.src.replace(
        "link-dark-icon.svg",
        "link-light-icon.svg"
      );
    if (linkSumarioIcon)
      linkSumarioIcon.src = linkSumarioIcon.src.replace(
        "link-dark-icon.svg",
        "link-light-icon.svg"
      );
  } else {
    elementosParaAlterar.forEach((el) => el.classList.remove("dark"));
    if (themeToggle) {
      themeToggle.checked = false;
    }

    if (textForTooltipTheme) {
      textForTooltipTheme.textContent = "Dark theme 🌙 ->";
    }

    externLinkIcons.forEach((icon) => {
      icon.src = icon.src.replace(
        "extern-link-light-icon.svg",
        "extern-link-dark-icon.svg"
      );
    });
    if (githubAlpelixIcon)
      githubAlpelixIcon.src = githubAlpelixIcon.src.replace(
        "github-light-icon.svg",
        "github-dark-icon.svg"
      );
    if (linkAlpelixIcon)
      linkAlpelixIcon.src = linkAlpelixIcon.src.replace(
        "link-light-icon.svg",
        "link-dark-icon.svg"
      );
    if (githubAndreyIcon)
      githubAndreyIcon.src = githubAndreyIcon.src.replace(
        "github-light-icon.svg",
        "github-dark-icon.svg"
      );
    if (linkAndreyIcon)
      linkAndreyIcon.src = linkAndreyIcon.src.replace(
        "link-light-icon.svg",
        "link-dark-icon.svg"
      );
    if (githubGabrielIcon)
      githubGabrielIcon.src = githubGabrielIcon.src.replace(
        "github-light-icon.svg",
        "github-dark-icon.svg"
      );
    if (linkGabrielIcon)
      linkGabrielIcon.src = linkGabrielIcon.src.replace(
        "link-light-icon.svg",
        "link-dark-icon.svg"
      );
    if (githubDuarteIcon)
      githubDuarteIcon.src = githubDuarteIcon.src.replace(
        "github-light-icon.svg",
        "github-dark-icon.svg"
      );
    if (linkDuarteIcon)
      linkDuarteIcon.src = linkDuarteIcon.src.replace(
        "link-light-icon.svg",
        "link-dark-icon.svg"
      );
    if (githubMiguelIcon)
      githubMiguelIcon.src = githubMiguelIcon.src.replace(
        "github-light-icon.svg",
        "github-dark-icon.svg"
      );
    if (linkMiguelIcon)
      linkMiguelIcon.src = linkMiguelIcon.src.replace(
        "link-light-icon.svg",
        "link-dark-icon.svg"
      );
    if (githubMisaelIcon)
      githubMisaelIcon.src = githubMisaelIcon.src.replace(
        "github-light-icon.svg",
        "github-dark-icon.svg"
      );
    if (linkMisaelIcon)
      linkMisaelIcon.src = linkMisaelIcon.src.replace(
        "link-light-icon.svg",
        "link-dark-icon.svg"
      );
    if (linkSumarioIcon)
      linkSumarioIcon.src = linkSumarioIcon.src.replace(
        "link-light-icon.svg",
        "link-dark-icon.svg"
      );
  }
}

// function aplicarTema(tema) {
//   if (tema === "dark") {
//     elementosParaAlterar.forEach((el) => el.classList.add("dark"));

//     if (themeToggle) {
//       themeToggle.checked = true;
//     }
//   } else {
//     elementosParaAlterar.forEach((el) => el.classList.remove("dark"));

//     if (themeToggle) {
//       themeToggle.checked = false;
//     }
//   }
// }

themeToggle.addEventListener("change", () => {
  // 'themeToggle.checked' já reflete o novo estado da checkbox após o clique
  if (themeToggle.checked) {
    aplicarTema("dark");
    localStorage.setItem("theme", "dark");
  } else {
    aplicarTema("light");
    localStorage.setItem("theme", "light");
  }
  handleHeaderIcons();
});

// Verifica o tema salvo ao carregar
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    aplicarTema(savedTheme); // Isso irá definir o tema e também o estado 'checked' do BB-8
  } else {
    // Se nenhum tema estiver salvo, aplique o tema padrão (claro)
    aplicarTema("light");
  }
  handleHeaderIcons();
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
        mainContent.style.paddingTop = "0px";
      }
      handleHeaderIcons();
    } else {
      nav.classList.remove("nav-fixo");
      if (themeBox) themeBox.classList.remove("theme-box-fixo");
      if (logoLink) logoLink.classList.remove("logo-fixo");
      if (mainContent) {
        mainContent.style.paddingTop = "0";
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
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
  } else {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    handleHeaderIcons();
  }
});

/////////////////////////////////////////////////////////////////////

// --- Transição suave dos elementos ao aparecer ---
const elementosAnimarCima = document.querySelectorAll(".animar-ao-rolar-cima");
const elementosAnimarBaixo = document.querySelectorAll(
  ".animar-ao-rolar-baixo"
);

// const observer = new IntersectionObserver(
//   (entradas) => {
//     entradas.forEach((entrada) => {
//       if (entrada.isIntersecting) {
//         entrada.target.classList.add("aparecendo");
//       } else {
//         entrada.target.classList.remove("aparecendo");
//       }
//     });
//   },
//   {
//     rootMargin: '0px 0px -100px 0px',
//     threshold: 0.05 ///////////////////////////////////////////////////////////////////////////////// ou 0.1
//   }
// );

const timeouts = new Map();

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      // Obtenha o elemento
      const el = entrada.target;

      if (entrada.isIntersecting) {
        // Se o elemento entrou na tela, cancele qualquer timeout de remoção
        if (timeouts.has(el)) {
          clearTimeout(timeouts.get(el));
          timeouts.delete(el);
        }
        el.classList.add("aparecendo");
      } else {
        // Se o elemento saiu da tela, agende a remoção da classe com um atraso
        const timeoutId = setTimeout(() => {
          el.classList.remove("aparecendo");
          timeouts.delete(el);
        }, 1000); // Atraso de 100ms para evitar o tremor

        timeouts.set(el, timeoutId);
      }
    });
  },
  {
    threshold: 0.05, // Um valor pequeno ainda funciona bem com o debounce
  }
);

elementosAnimarCima.forEach((el) => observer.observe(el));
elementosAnimarBaixo.forEach((el) => observer.observe(el));

/////////////////////////////////////////////////////////////////////
const textForTooltipArrow = document.getElementById("textForTooltipArrow");
const arrowContainer = document.getElementById("scrollArrow");

// --- Seta de rolagem para o topo e rodapé ---
document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.getElementById("scrollArrow");
  const arrowImg = document.getElementById("arrowImg");
  const contribuidores = document.querySelector(".contribuidores");
  let hideTimeout = null;

  function updateArrowDirection() {
    if (window.scrollY > 1200) {
      // Aponta para cima
      arrow.href = "#top";
      arrowImg.style.transform = "rotate(0deg)";
      arrow.setAttribute("aria-label", "Ir para o topo");
      textForTooltipArrow.textContent = "↑ Ir para o topo da página";
    } else {
      // Aponta para baixo
      arrow.href = "#cFooter";
      arrowImg.style.transform = "rotate(180deg)";
      arrow.setAttribute("aria-label", "Ir para o rodapé");
      textForTooltipArrow.textContent = "Ir para o fim da página ↓";
    }
  }

  function updateArrowPosition() {
    if (!contribuidores) return;
    const windowHeight = window.innerHeight;
    const contribRect = contribuidores.getBoundingClientRect();

    // Lógica de offset para mobile e desktop
    const isMobile = window.innerWidth <= 768;
    const offset = isMobile ? 20 : 50;

    // Distância do bottom da janela até o topo do .contribuidores
    const distanceFromBottom = windowHeight - contribRect.top;

    // Lógica para a posição vertical, que se aplica a ambos (mobile e desktop)
    if (distanceFromBottom > 0) {
      arrow.style.bottom = distanceFromBottom + offset + "px";
    } else {
      arrow.style.bottom = "20px";
    }

    // Lógica para a posição horizontal, que muda entre mobile e desktop
    if (isMobile) {
      // No mobile, a seta fica na direita por padrão, mas centraliza quando sobe
      if (distanceFromBottom > 0) {
        arrow.style.right = "";
        arrow.style.left = "50%";
        arrow.style.transform = "translateX(-50%)";
      } else {
        arrow.style.right = "20px";
        arrow.style.left = "";
        arrow.style.transform = "";
      }
    } else {
      // No desktop, a seta fica sempre na direita
      arrow.style.right = "20px";
      arrow.style.left = "";
      arrow.style.transform = "";
    }

    // const isMobile = window.innerWidth <= 768;
    // const offset = isMobile ? 20 : 50;

    // // Distância do bottom da janela até o topo do .contribuidores
    // const distanceFromBottom = windowHeight - contribRect.top;

    // // Se a seta ficaria sobre o .contribuidores, sobe ela
    // if (distanceFromBottom > 0) {
    //   arrow.style.bottom = distanceFromBottom + offset + "px";
    //   arrow.style.right = ""; // Remove a posição da direita
    //   arrow.style.left = "50%"; // Centraliza a seta
    //   arrow.style.transform = "translateX(-50%)"; // Ajusta a centralização
    // } else {
    //   // Posição padrão: na lateral direita
    //   arrow.style.bottom = isMobile ? "20px" : "20px";
    //   arrow.style.right = isMobile ? "20px" : "20px"; // Mantém na lateral direita
    //   arrow.style.left = ""; // Remove a posição da esquerda
    //   arrow.style.transform = ""; // Remove a transformação para não interferir
    // }
    // if (distanceFromBottom > 0) {
    //   arrow.style.bottom = (distanceFromBottom + offset) + 'px';
    // } else {
    //   arrow.style.bottom = isMobile ? '20px' : '20px';
    // }
  }

  function handleMobileOpacity() {
    if (window.innerWidth > 768) {
      arrow.style.opacity = "1";
      arrow.style.pointerEvents = "auto";
      return;
    }

    arrow.style.opacity = "1";
    arrow.style.pointerEvents = "auto";

    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      arrow.style.opacity = "0.05";
      arrow.style.pointerEvents = "none";
    }, 2000); // 2 segundos parado
  }

  window.addEventListener("scroll", function () {
    updateArrowDirection();
    updateArrowPosition();
    handleMobileOpacity();
  });

  window.addEventListener("resize", function () {
    updateArrowPosition();
    handleMobileOpacity();
    handleHeaderIcons();
  });

  // Inicialização
  updateArrowDirection();
  updateArrowPosition();
  handleMobileOpacity();
  tooltipCont();
  tooltipHome();
});

////////////////////////////////////////////////////////////////////////////

const textForTooltipNameAlpelix = document.getElementById(
  "textForTooltipNameAlpelix"
);
const textForTooltipNameAndrey = document.getElementById(
  "textForTooltipNameAndrey"
);
const textForTooltipNameAraujo = document.getElementById(
  "textForTooltipNameAraujo"
);
const textForTooltipNameDuarte = document.getElementById(
  "textForTooltipNameDuarte"
);
const textForTooltipNameMiguel = document.getElementById(
  "textForTooltipNameMiguel"
);
const textForTooltipNameMisael = document.getElementById(
  "textForTooltipNameMisael"
);
const aContribuidores = document.getElementsByClassName(".a-contri");

function tooltipCont() {
  textForTooltipNameAlpelix.textContent = "GitHub de alpelixlima";
  textForTooltipNameAndrey.style.width = "60%";
  textForTooltipNameAndrey.textContent = "GitHub de Drr3y";
  textForTooltipNameAraujo.textContent = "GitHub de Gabriel03032008";
  textForTooltipNameDuarte.textContent = "GitHub de zxDuarte1";
  textForTooltipNameMiguel.textContent = "GitHub de zMiguel151z";
  textForTooltipNameMisael.textContent = "GitHub de MisaelTRBIFRN";
}

const textForTooltipInicio = document.getElementById("textForTooltipHome");
const aHome = document.getElementsByClassName(".a-home");

function tooltipHome() {
  textForTooltipInicio.textContent = "Voltar ao início";
}
