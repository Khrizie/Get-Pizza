const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
const categoryBtns = document.querySelectorAll(".category-btn");
const menuItems = document.querySelectorAll(".menu-item");
if (categoryBtns.length > 0) {
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      categoryBtns.forEach((b) =>
        b.classList.replace("border-secondary", "border-transparent"),
      );
      btn.classList.replace("border-transparent", "border-secondary");
      menuItems.forEach((item) => {
        if (item.classList.contains(category)) {
          item.classList.remove("hidden");
          item.classList.add("flex");
        } else {
          item.classList.add("hidden");
          item.classList.remove("flex");
        }
      });
    });
  });
}
const accordionHeaders = document.querySelectorAll(".accordion-header");
if (accordionHeaders.length > 0) {
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".icon");
      const isOpen = !content.classList.contains("hidden");
      
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.classList.add("hidden");
      });
      document.querySelectorAll(".accordion-header .icon").forEach((itemIcon) => {
        itemIcon.classList.remove("fa-chevron-up");
        itemIcon.classList.add("fa-chevron-down");
      });
      if (!isOpen) {
        content.classList.remove("hidden");
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });
}
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
const dots = document.querySelectorAll(".dot"); 
let currentSlide = 0;
let slideInterval;

if (slides.length > 0) {
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("hidden");
        slide.classList.add("flex"); 
        
        if(dots[i]) {
            dots[i].classList.remove("bg-gray-300");
            dots[i].classList.add("bg-primary");
        }
      } else {
        slide.classList.add("hidden");
        slide.classList.remove("flex");
        
        if(dots[i]) {
            dots[i].classList.add("bg-gray-300");
            dots[i].classList.remove("bg-primary");
        }
      }
    });
    if (prevBtn) {
      if (currentSlide === 0) {
        prevBtn.classList.add("opacity-30", "cursor-not-allowed");
      } else {
        prevBtn.classList.remove("opacity-30", "cursor-not-allowed");
      }
    }

    if (nextBtn) {
      if (currentSlide === slides.length - 1) {
        nextBtn.classList.add("opacity-30", "cursor-not-allowed");
      } else {
        nextBtn.classList.remove("opacity-30", "cursor-not-allowed");
      }
    }
  }

  function goToNextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  /*
  function resetTimer() {
    clearInterval(slideInterval); 
    slideInterval = setInterval(goToNextSlide, 5000); 
  }
  */

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToNextSlide();
      /* resetTimer(); */
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
      }
      /* resetTimer(); */
    });
  }

  if (dots.length > 0) {
      dots.forEach((dot, i) => {
          dot.addEventListener("click", () => {
              currentSlide = i;
              showSlide(currentSlide);
              /* resetTimer(); */
          });
      });
  }
  showSlide(currentSlide);

  /* slideInterval = setInterval(goToNextSlide, 5000); */
}
