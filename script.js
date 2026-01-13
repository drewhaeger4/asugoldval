const toggleBtn = document.getElementById("toggleResults");
let showing = false;

toggleBtn.addEventListener("click", () => {
  const results = document.querySelectorAll(".hiddenscore");
  results.forEach(result => {
    result.classList.toggle("blurred");
  });

  showing = !showing;
  toggleBtn.textContent = showing ? "Hide Results" : "Show Results";
});
