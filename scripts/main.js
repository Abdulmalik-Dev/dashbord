let navbar = document.querySelector(".navbar"),
  rightSection = document.querySelector(".right");

navbar.addEventListener("click", () => {
  // To Remove The Navbar Icon And Add The X Mark
  navbar.classList.toggle("fa-bars");
  navbar.classList.toggle("fa-xmark");

  if (navbar.classList.contains("fa-xmark")) {
    navbar.style.color = "white";
    // Appear The Nav
    rightSection.classList.add("show");
  } else {
    navbar.style.color = "rebeccapurple";
    // Hide The Nav
    rightSection.classList.remove("show");
  }
});
