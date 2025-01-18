"use strict";

//global Index
let currentIndex = 0; // Hält den Index des aktuellen Bildes

//
// Bild öffnen
//

document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("main img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector("#lightboxImage");

  imgs.forEach((img, index) => {
    img.addEventListener("click", (event) => {
      currentIndex = index; // Aktuellen Index aktualisieren
      lightboxImage.src = event.target.src;
      lightbox.style.display = "flex";
    });
  });
});

//
// Navigieren mit Prev und Next
//
document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("main img");
  const lightboxImage = document.querySelector("#lightboxImage");
  const prevBtn = document.querySelector(".pfeil-links");
  const nextBtn = document.querySelector(".pfeil-rechts");

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = imgs.length - 1; // Gehe zum letzten Bild, wenn am Anfang
    }
    lightboxImage.src = imgs[currentIndex].src;
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < imgs.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Zurück zum ersten Bild, wenn am Ende
    }
    lightboxImage.src = imgs[currentIndex].src;
  });
});

//
// Lightbox Schließen
//
document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".lightbox");
  background.addEventListener("click", (e) => {
    if (e.target !== background) return;
    background.style.display = "none";
  });
});

//
// Dialog schließen
//

document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector("#lightboxImage");
    const BtnClose = document.querySelector(".dialog-schliessen-button")

    BtnClose.addEventListener("click", (e) => {
        if (e.target !== BtnClose) return;
        lightboxImage.style.display = "none";
        background.style.display = "none";
    } )
} )
