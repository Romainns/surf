window.addEventListener('load', () => {
  const popup = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');
  const rejectBtn = document.getElementById('rejectCookies');

  const consent = localStorage.getItem('cookieConsent');

  // Affiche la popup seulement si aucun choix n'a encore été fait
  if (consent !== 'accepted' && consent !== 'rejected') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none'; // ← au cas où il serait visible à tort
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    popup.style.display = 'none';
  });

  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    popup.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleExtra");
    const extraContent = document.getElementById("extraContent");

    toggleButton.addEventListener("click", function () {
        const isVisible = extraContent.classList.toggle("visible");
        toggleButton.textContent = isVisible ? "Afficher moins" : "Afficher plus";
    });
});

const headerImage = document.querySelector("header img");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

if (headerImage && modal && modalImage) {
    headerImage.style.cursor = "zoom-in";
    headerImage.addEventListener("click", () => {
        modalImage.src = headerImage.src;
        modal.style.display = "flex";
    });

    modal.addEventListener("click", (e) => {
        if (e.target !== modalImage) {
            modal.style.display = "none";
        }
    });
}

const extraImages = document.querySelectorAll(".extra-item img");

extraImages.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.style.display = "flex";
    });
});

fetch('temoignages.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.temoignages-container');

    data.forEach(avis => {
      const card = document.createElement('div');
      card.classList.add('avis-card');

      card.innerHTML = `
        <p class="avis-nom">${avis.nom} - <span class="avis-date">${avis.date}</span></p>
        <p class="avis-commentaire">"${avis.commentaire}"</p>
        <p class="avis-note">Note : ${'⭐'.repeat(avis.note)}</p>
      `;

      container.appendChild(card);
    });
  });

