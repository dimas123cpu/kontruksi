document.addEventListener("DOMContentLoaded", function () {
  // 1. DEFINISI VARIABEL (Hanya sekali saja)
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sideMenu = document.getElementById("sideMenu");
  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");
  // 2. LOGIKA HAMBURGER MENU (BUKA/TUTUP)
  if (hamburgerBtn && sideMenu && closeBtn) {
    hamburgerBtn.addEventListener("click", () => {
      if (window.innerWidth <= 992) {
        sideMenu.style.width = "85%"; // Lebar HP
      } else {
        sideMenu.style.width = "300px"; // Lebar Laptop
      }
    });

    closeBtn.addEventListener("click", () => {
      sideMenu.style.width = "0";
    });

    // Tutup menu jika klik di area hitam (overlay)
    window.addEventListener("click", (e) => {
      if (e.target === sideMenu) {
        sideMenu.style.width = "0";
      }
    });
  }
  // 3. LOGIKA SUB-MENU DI DALAM HAMBURGER (HP)
  document.querySelectorAll(".mobile-dropbtn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownContent = this.nextElementSibling;
      const icon = this.querySelector("i");

      // Toggle buka/tutup konten
      dropdownContent.classList.toggle("open");

      // Toggle rotasi ikon plus/caret
      if (icon) {
        icon.classList.toggle("rotate-icon");
        icon.classList.toggle("fa-caret-up");
      }

      // Tutup dropdown lain agar tidak menumpuk
      document.querySelectorAll(".mobile-drop-content").forEach((other) => {
        if (other !== dropdownContent) {
          other.classList.remove("open");
          const otherIcon = other.previousElementSibling.querySelector("i");
          if (otherIcon) {
            otherIcon.classList.remove("rotate-icon", "fa-caret-up");
          }
        }
      });
    });
  });

  // 4. LOGIKA PENCARIAN (SEARCH)
  const keywordsMap = {
    sipil: "#sipil",
    konstruksi: "#sipil",
    cleaning: "#cleaning",
    kebersihan: "#cleaning",
    rawat: "#maintenance",
    gedung: "#maintenance",
    profil: "#about-profile",
    sejarah: "#about-profile",
    kontak: "#contact",
    hubungi: "#contact",
    klien: "#portfolio",
  };

  function executeSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === "") return;

    let found = false;
    for (let key in keywordsMap) {
      if (query.includes(key)) {
        const target = document.querySelector(keywordsMap[key]);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          found = true;
          break;
        }
      }
    }

    if (!found) alert("Informasi tidak ditemukan.");
    searchInput.classList.remove("active");
    searchInput.value = "";
  }

  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", () => {
      searchInput.classList.toggle("active");
      if (searchInput.classList.contains("active")) searchInput.focus();
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") executeSearch();
    });
  }

  // 5. ANIMASI SCROLL (FADE IN)
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section-grid").forEach((sec) => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(20px)";
    sec.style.transition = "all 0.6s ease-out";
    observer.observe(sec);
  });

  // 6. LOGIKA KLIK SUB-MENU HP
  const dropBtns = document.querySelectorAll(".mobile-dropbtn");
  dropBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const content = this.nextElementSibling;
      const icon = this.querySelector("i");
      const isOpen = content.classList.contains("show");

      // Tutup semua sub-menu lain
      document.querySelectorAll(".mobile-drop-content").forEach((el) => {
        el.classList.remove("show");
        el.style.display = "none";
      });
      document.querySelectorAll(".mobile-dropbtn i").forEach((i) => {
        i.style.transform = "rotate(0deg)";
      });

      // Buka menu jika belum terbuka
      if (!isOpen) {
        content.classList.add("show");
        content.style.display = "block";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });

  // 7. TUTUP MENU SAAT KLIK DI LUAR
  window.addEventListener("click", (e) => {
    if (sideMenu.style.width !== "0px" && sideMenu.style.width !== "") {
      if (!sideMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        sideMenu.style.width = "0";
      }
    }
  });

  // 8. TUTUP MENU DENGAN TOMBOL ESCAPE
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      sideMenu.style.width = "0";
    }
  });
});
// 9. UBAH WARNA NAVBAR SAAT SCROLL
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Akhir script.js
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".partnerSwiper", {
    // ... kode konfigurasi Anda ...
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
// NAVBAR HOME PAGE
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
