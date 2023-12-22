document.querySelector("#stars").addEventListener("animationend", (e) => {
  e.target.style.animation = "none";
  e.target.offsetHeight; /* trigger reflow */
  e.target.style = `top: ${Math.floor(Math.random() * 300)}px;
        animation: star ${Math.random() * 2 + 1}s linear 1`;
});
