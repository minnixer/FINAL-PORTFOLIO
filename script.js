
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmation").classList.remove("hidden");
    this.reset();
  
    setTimeout(() => {
      document.getElementById("confirmation").classList.add("hidden");
    }, 4000);
  });
  
  // Smooth scroll navigation
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Click animation for cards
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousedown", () => {
      card.style.transform = "scale(0.95)";
    });
    card.addEventListener("mouseup", () => {
      card.style.transform = "scale(1)";
    });
  });
  
  console.log("Script loaded and running!");