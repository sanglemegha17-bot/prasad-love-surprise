function openLetter() {
  window.location.href = "letter.html";
}

const container = document.querySelector(".floating-hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  heart.classList.add("heart");
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
