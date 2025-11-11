const text = document.querySelector(".text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web Designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Frontend Developer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

function onScroll() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
 });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === #${currentSection}) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
document.addEventListener("DOMContentLoaded", onScroll); 


document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll(".bar span").forEach(bar => {
    let width = 0;
    
    let target = parseInt(bar.getAttribute("data-percent"));
    
    let interval = setInterval(() => {
      if (width >= target) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + "%";
        
        bar.textContent = width + "%"; 
      }
    }, 15);
  });
 });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === #${currentSection}) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
document.addEventListener("DOMContentLoaded", onScroll); 


document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll(".bar span").forEach(bar => {
    let width = 0;
    
    let target = parseInt(bar.getAttribute("data-percent"));
    
    let interval = setInterval(() => {
      if (width >= target) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + "%";
        
        bar.textContent = width + "%"; 
      }
    }, 15);
  });
document.querySelectorAll(".circle").forEach(circle => {
    let percent = parseInt(circle.getAttribute("data-percent"));
    let start = 0;
    let inner = circle.querySelector(".inner-circle");
    
    let interval = setInterval(() => {
      if (start >= percent) {
        clearInterval(interval);
      } else {
        start++;
        circle.style.background = conic-gradient(#00e5ff ${start * 3.6}deg, #1a2a3d ${start * 3.6}deg);
        inner.textContent = start + "%";
      }
    }, 20); 
  });
});


const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    
    cards.forEach(c => c.classList.remove('active'));
    
    card.classList.add('active');
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully 😊");
  form.reset();
});