document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. SYSTEM INITIALIZER PRELOADER CLOSURE
  // ==========================================
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.opacity = "0";
      setTimeout(() => { loader.style.visibility = "hidden"; }, 600);
    });
    
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 2000);
  }

  // ==========================================
  // 2. TEXT TYPEWRITER ENGINE
  // ==========================================
  const typingSpan = document.getElementById("typing");
  if (typingSpan) {
    const roles = [
      "Data Analyst",
      "Power BI Developer",
      "Python Automation Engineer",
      "Business Intelligence Specialist"
    ];
    let roleIdx = 0, charIdx = 0;
    let isDeleting = false;

    function executeTypecycle() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        typingSpan.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typingSpan.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
      }

      let dynamicSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentRole.length) {
        dynamicSpeed = 1800; 
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        dynamicSpeed = 400; 
      }

      setTimeout(executeTypecycle, dynamicSpeed);
    }
    executeTypecycle();
  }

  // ==========================================
  // 3. MOTION VECTOR INTERACTIVE FLUID MICROCURSOR
  // ==========================================
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  if (dot && ring) {
    window.addEventListener("mousemove", (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      ring.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, { duration: 120, fill: "forwards" });
    });

    document.querySelectorAll("a, button, .btn, .stat-card, .skill-tags span, .project-card, .certificate-card, .contact-item").forEach(item => {
      item.addEventListener("mouseenter", () => ring.classList.add("active"));
      item.addEventListener("mouseleave", () => ring.classList.remove("active"));
    });
  }

  // ==========================================
  // 4. METRIC PROGRESS HORIZON & SCROLL REVEALS
  // ==========================================
  const progressBar = document.getElementById("progress-bar");
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        if (entry.target.classList.contains("stat-card")) {
          triggerNumericalCounter(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".section, .stat-card, .skill-category, .project-card, .certificate-card, .contact-item").forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  window.addEventListener("scroll", () => {
    const top = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0 && progressBar) {
      progressBar.style.width = `${(top / height) * 100}%`;
    }
  });

  // ==========================================
  // 5. MATH ENGINE: TIME-BASED NUMERICAL STAT COUNTERS
  // ==========================================
  function triggerNumericalCounter(card) {
    const textTarget = card.querySelector(".counter");
    if (!textTarget || textTarget.classList.contains("counted")) return;

    textTarget.classList.add("counted");
    const parsedTarget = parseInt(textTarget.getAttribute("data-target"), 10);
    let startVal = 0;
    const runtime = 1500; 
    const paceStep = parsedTarget / (runtime / 16);

    function computeFrame() {
      startVal += paceStep;
      if (startVal < parsedTarget) {
        textTarget.textContent = Math.floor(startVal);
        requestAnimationFrame(computeFrame);
      } else {
        textTarget.textContent = parsedTarget;
      }
    }
    requestAnimationFrame(computeFrame);
  }

  // ==========================================
  // 6. RADAR ANALYSIS RECONSTRUCTION (CLEANED)
  // ==========================================
  const canvasTarget = document.getElementById("skillChart");
  if (canvasTarget) {
    Chart.defaults.color = "#94A3B8";
    Chart.defaults.font.family = "'Poppins', sans-serif";

    new Chart(canvasTarget, {
      type: "radar",
      data: {
        labels: ["Python Core", "SQL Ecosystem", "Power BI Dev", "Excel Analytics", "Data Wrangling & ETL", "Web Engine Core"],
        datasets: [{
          label: "Core Matrix Competency (%)",
          data: [90, 85, 88, 90, 86, 70],
          backgroundColor: "rgba(99, 102, 241, 0.15)",
          borderColor: "#6366F1",
          pointBackgroundColor: "#8B5CF6",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#6366F1",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: "rgba(255, 255, 255, 0.08)" },
            grid: { color: "rgba(255, 255, 255, 0.08)" },
            pointLabels: { color: "#F1F5F9", font: { size: 12, weight: "500" } },
            ticks: { display: false },
            suggestedMin: 0,
            suggestedMax: 100
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // ==========================================
  // 7. RESPONSIVE LAYER HEADER TOGGLES
  // ==========================================
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const subIcon = menuBtn.querySelector("i");
      subIcon.className = navLinks.classList.contains("active") ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.querySelector("i").className = "fa-solid fa-bars";
      });
    });
  }

  // ==========================================
  // 8. KINETIC PARTICLES GLOW LAYER GENERATION
  // ==========================================
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 40, density: { enable: true, value_area: 900 } },
        color: { value: "#6366F1" },
        shape: { type: "circle" },
        opacity: { value: 0.15, random: true },
        size: { value: 2.5, random: true },
        line_linked: {
          enable: true, distance: 160, color: "#8B5CF6", opacity: 0.06, width: 1
        },
        move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
      },
      interactivity: { detect_on: "canvas", events: { resize: true } },
      retina_detect: true
    });
  }
});