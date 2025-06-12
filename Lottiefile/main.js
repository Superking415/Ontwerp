// Lottie scroll-animatie
LottieInteractivity.create({
  player: '#firstLottie',
  mode: 'scroll',
  container: '.scroll-container',
  actions: [
    {
      visibility: [0, 1],
      type: 'seek',
      frames: [0, 500]
    }
  ]
});

// Statistiekenbalken animeren bij load
window.addEventListener('load', () => {
  document.querySelectorAll('.fill').forEach(el => {
    const target = parseInt(el.getAttribute('data-value'));
    let current = 0;
    const step = () => {
      current += 1;
      if (current <= target) {
        el.style.width = current + '%';
        el.innerText = current + '%';
        requestAnimationFrame(step);
      }
    };
    step();
  });
});

// SwiperJS carousel
const swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  }
});
