window.onload = () => {


  const elements = document.querySelectorAll(".hero-left, .hero-img");

  elements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";

    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 300);
  });


  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

  
    document.querySelectorAll("#mobileMenu a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });

    
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });

  }

};