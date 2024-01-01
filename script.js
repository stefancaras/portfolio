// document.querySelector("#stars").addEventListener("animationend", (e) => {
//   e.target.style.animation = "none";
//   e.target.offsetHeight; /* trigger reflow */
//   e.target.style = `top: ${Math.random() * 30}vh;
//         right: ${Math.random() * 200 + 8}px;
//         animation: falling-star ${Math.random() + 0.5}s linear 1`;
// });

window.addEventListener("scroll", () => {
  if (document.querySelector("html").scrollTop > 50)
    document.querySelector("#navbar").classList.add("scrolled");
  else document.querySelector("#navbar").classList.remove("scrolled");
});
