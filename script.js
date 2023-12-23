const $ = (query) => document.querySelector(query);

$("#stars").addEventListener("animationend", (e) => {
  e.target.style.animation = "none";
  e.target.offsetHeight; /* trigger reflow */
  e.target.style = `top: ${Math.random() * 30}vh;
        animation: star ${Math.random() + 0.5}s linear 1`;
});

window.addEventListener("scroll", () => {
  if ($("html").scrollTop > 50) $("#navbar").classList.add("scrolled");
  else $("#navbar").classList.remove("scrolled");
});
