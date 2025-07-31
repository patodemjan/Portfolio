fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });


document.querySelectorAll('.fullscreen-img').forEach(img => {
    img.addEventListener('click', () => {
      // Vytvor fullscreen overlay
      const overlay = document.createElement('div');
      overlay.classList.add('fullscreen-overlay');

      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.alt = img.alt;

      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);

      // Po kliknutí sa zavrie
      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });