const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
  
});





// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Développeur python" ,"Data Engineer ", "Data Analyst"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
  fadeOut: false,        // Pour désactiver le fondu
fadeOutClass: 'typed-fade-out',
fadeOutDelay: 500,     // Délai avant le fondu
});

// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
  let response
  type === "skills" ?
      response = await fetch("skills.json")
      :
      response = await fetch("./projects/projects.json")
  const data = await response.json();
  return data;
}





document.addEventListener('DOMContentLoaded', function() {
  // Filtrage des projets
  const filterButtons = document.querySelectorAll('.filter__btn');
  const projectCards = document.querySelectorAll('.portfolio__card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Retirer la classe active de tous les boutons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Ajouter la classe active au bouton cliqué
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Animation au défilement
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.portfolio__card, .stat__card, .portfolio__card2');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.8;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate');
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Exécuter au chargement initial
});



document.addEventListener('DOMContentLoaded', function() {
  // Vérifiez si la largeur de l'écran est inférieure à 576px (mobile)
  if (window.innerWidth <= 576) {
    const cards = document.querySelectorAll('.timeline__card');
    
    cards.forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('expanded');
      });
    });
  }
});