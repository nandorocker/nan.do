document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    var isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
    } else {
      menu.classList.remove("flex");
      menu.classList.add("hidden");
    }
  });
});
