// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
//   Ketika Menu Diklik
document.querySelector("#Pilihan").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Tutup menu klik dimana saja
const Pilihan = document.querySelector("#Pilihan");

document.addEventListener("click", function (e) {
  if (!Pilihan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
