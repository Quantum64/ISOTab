function updateClock() {
  const offset = new Date().getTimezoneOffset() * 60000;
  document.getElementById("time").innerText = new Date(
    Date.now() - offset
  ).toISOString();
}

function initClock() {
  updateClock();
  window.setInterval(() => updateClock(), 1);
}

window.addEventListener("DOMContentLoaded", (event) => {
  initClock();
});
