const aImgsMain = document.getElementById("aImgsMain");

function isMobile() {
  return window.innerWidth <= 768;
}

function mudarSize() {
    if (isMobile()) {
      aImgsMain.style.fontSize = '11px';  
    } else {
      aImgsMain.style.fontSize = '16px';
    }
}

mudarSize();