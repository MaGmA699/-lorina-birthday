function showSurprise() {
  const surprise = document.getElementById("surprise");

  surprise.classList.remove("hidden");

  createHearts();

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.zIndex = "10";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    heart.animate(
      [
        {
          transform: "translateY(0)",
          opacity: 1
        },
        {
          transform: "translateY(-100vh)",
          opacity: 0
        }
      ],
      {
        duration: 3000 + Math.random() * 2000,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
