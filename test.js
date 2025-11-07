document.addEventListener("DOMContentLoaded", function () {
  // ===== Service Slider ===== //
  const serviceSlider = document.querySelector(".service-slider");
  const leftBtn = document.querySelector(".services .left-btn");
  const rightBtn = document.querySelector(".services .right-btn");
  const scrollAmount = 350;

  if (serviceSlider && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      serviceSlider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
    rightBtn.addEventListener("click", () => {
      serviceSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  // ===== Hero Slider ===== //
  const slides = document.querySelectorAll(".hero-slide");
  const heroLeftBtn = document.querySelector(".hero-btn.left-btn");
  const heroRightBtn = document.querySelector(".hero-btn.right-btn");
  let heroIndex = 0;

  function showHeroSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    if (slides[index]) slides[index].classList.add("active");
  }

  if (slides.length > 0 && heroLeftBtn && heroRightBtn) {
    heroLeftBtn.addEventListener("click", () => {
      heroIndex = (heroIndex - 1 + slides.length) % slides.length;
      showHeroSlide(heroIndex);
    });

    heroRightBtn.addEventListener("click", () => {
      heroIndex = (heroIndex + 1) % slides.length;
      showHeroSlide(heroIndex);
    });

    setInterval(() => {
      heroIndex = (heroIndex + 1) % slides.length;
      showHeroSlide(heroIndex);
    }, 5000);
  }

  // ===== Testimonial Slider ===== //
  const testimonials = document.querySelectorAll(".testimonial-slider .testimonial");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.remove("active", "prev", "next");
      if (i === index) {
        t.classList.add("active");
      } else if (i === (index - 1 + testimonials.length) % testimonials.length) {
        t.classList.add("prev");
      } else if (i === (index + 1) % testimonials.length) {
        t.classList.add("next");
      }
    });
  }

  if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }
});
