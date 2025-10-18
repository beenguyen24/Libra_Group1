
document.addEventListener("DOMContentLoaded", () => {
  //  Hiệu ứng hover cho thẻ tin tức
  document.querySelectorAll(".news-card").forEach(card => {
      card.addEventListener("mouseenter", () => {
          card.style.transition = "all 0.3s ease";
      });
  });
  // Giỏ hàng hiển thị số lượng
let cartCount = document.querySelector(".cart-count");
let addButtons = document.querySelectorAll("button");

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.textContent.includes("Thêm vào giỏ hàng")) {
      let count = parseInt(cartCount.textContent) || 0;
      cartCount.textContent = count + 1;
    }
  });
});

  //  SLIDER BANNER CHO LIBRA
  const bannerBox = document.querySelector(".banner-box");
  if (!bannerBox) return; // nếu chưa có banner thì dừng

  const slides = bannerBox.querySelectorAll(".slide");
  const dots = bannerBox.querySelectorAll(".banner-dot");


  if (slides.length === 0) return; // không có slide thì dừng

  let currentSlide = 0;

  //  Hiển thị slide theo index
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
          if (dots[i]) dots[i].classList.toggle("active", i === index);
      });
  }

  //  Chuyển slide tiếp theo
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  //  Khi click vào dot
  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
          currentSlide = index;
          showSlide(index);
      });
  });

  // ⏱ Tự động đổi slide sau mỗi 3 giây
  setInterval(nextSlide, 3000);
});


const sections = Array.from(document.querySelectorAll('section, footer')).filter(s => s.id);
const links = Array.from(document.querySelectorAll('#index a'));

const spy = () => {
  const mid = window.scrollY + window.innerHeight / 2;
  let current = sections[0]?.id || '';
  sections.forEach(s => {
      const top = s.offsetTop - 160;
      if (mid >= top) current = s.id;
  });
  links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
};

if (links.length && sections.length) {
  window.addEventListener('scroll', spy);
  spy();
}
document.querySelectorAll('.index a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
          });
      }
  });
});

AOS.init({ duration: 1000, once: true });

// Banner slider logic
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(index);
  });
});

setInterval(nextSlide, 3000);


