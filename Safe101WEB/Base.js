// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}

// Add event listener to the hamburger menu
document
  .querySelector(".hamburger-menu img")
  .addEventListener("click", toggleSidebar);

// Add event listener to the close button
document.querySelector(".close-sidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("show");
});

// Close the sidebar if clicked outside
document.addEventListener("click", (event) => {
  const sidebar = document.getElementById("sidebar");
  if (
    event.target.closest(".hamburger-menu") === null &&
    !event.target.closest(".sidebar")
  ) {
    sidebar.classList.remove("show");
  }
});

// Open Sidebar
document.getElementById("profile-pic").addEventListener("click", function () {
  document.getElementById("sidebar-right").classList.add("open");
});








// Close Sidebar
document.getElementById("close-sidebar").addEventListener("click", function () {
  document.getElementById("sidebar-right").classList.remove("open");
});
function logout() {
  window.location.href = "LoginPage.html";
}
