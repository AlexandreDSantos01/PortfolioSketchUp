particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#d4af37"  // cor dourada das partículas
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3,       // opacidade das partículas (mais transparente)
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,     // habilita os raios entre partículas
      distance: 150,
      color: "#d4af37", // cor dourada dos raios
      opacity: 0.2,     // opacidade dos raios (mais transparente)
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});
