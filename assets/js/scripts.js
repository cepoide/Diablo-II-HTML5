(function() {
  const classImgSrc = {
    amazon: "assets/img/char-amazon.png",
    barbarian: "assets/img/char-barbarian.png",
    necromancer: "assets/img/char-necromancer.png",
    paladin: "assets/img/char-paladin.png",
    sorceress: "assets/img/char-sorceress.png"
  };

  const mainImg = document.getElementById("main-char");

  window.showChar = function(name) {
    if (classImgSrc[name]) {
      mainImg.src = classImgSrc[name];
    }
  };
})();


/* ==== OVER THUMBNAILS ==== */

(function () {
  const FROM_SUFFIX = '-off.png';
  const TO_SUFFIX   = '-ovr.png';

  const thumbs = document.querySelectorAll('.thumbnail-overlays img.thumb-swap');
  thumbs.forEach(img => {
    const offSrc = img.getAttribute('src');
    const ovrSrc = img.dataset.ovr || offSrc.replace(FROM_SUFFIX, TO_SUFFIX);

    const pre = new Image();
    pre.src = ovrSrc;

    const toOvr = () => { img.src = ovrSrc; };
    const toOff = () => { img.src = offSrc; };

    img.addEventListener('mouseenter', toOvr);
    img.addEventListener('mouseleave', toOff);
    img.addEventListener('focus', toOvr);
    img.addEventListener('blur', toOff);
  });
})();
