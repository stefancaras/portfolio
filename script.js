const $ = (query) => document.querySelector(query);

$("#stars").addEventListener("animationend", (e) => {
  e.target.style.animation = "none";
  e.target.offsetHeight; /* trigger reflow */
  e.target.style = `top: ${Math.floor(Math.random() * 300)}px;
        animation: star ${Math.random() * 2 + 1}s linear 1`;
});

window.addEventListener("scroll", (e) => {
  if ($("html").scrollTop > 50) $("#navbar").classList.add("scrolled");
  else $("#navbar").classList.remove("scrolled");
});
