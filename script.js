fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error));

// fullscreen image functionality
document.querySelectorAll(".fullscreen-img").forEach((img) => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("fullscreen-overlay");

    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.alt = img.alt;

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});
