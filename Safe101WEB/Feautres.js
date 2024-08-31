document.addEventListener("DOMContentLoaded", (event) => {
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  setInterval(updateClock, 1000); // Update the clock every second
  updateClock(); // Initial call to set the clock immediately on page load
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("geolocation-btn")
    .addEventListener("click", function () {
      window.location.href = "https://www.google.com/maps";
    });

  document
    .getElementById("contacts-btn")
    .addEventListener("click", function () {
      window.location.href = "contacts.html";
    });

  document
    .getElementById("surveillance-btn")
    .addEventListener("click", function () {
      window.location.href =
        "https://snazzymaps.com/style/72543/assassins-creed-iv";
    });
  document
    .getElementById("hotspot-alert-btn")
    .addEventListener("click", function () {
      window.location.href =
        "https://snazzymaps.com/style/72543/assassins-creed-iv";
    });
  document
    .getElementById("alert-attention-btn")
    .addEventListener("click", function () {
      window.location.href =
        "https://snazzymaps.com/style/72543/assassins-creed-iv";
    });
});
