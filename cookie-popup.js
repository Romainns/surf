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
