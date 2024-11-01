// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("opacity-0");
    mybutton.classList.add("opacity-40");
    mybutton.style.pointerEvents = "auto"; // Make button interactive when visible
  } else {
    mybutton.classList.remove("opacity-40");
    mybutton.classList.add("opacity-0");
    mybutton.style.pointerEvents = "none"; // Prevent interactions when hidden
  }
};

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  mybutton.blur(); // Remove focus from the button after clicking
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

// Run the scroll function on initial load to determine the button's visibility
scrollFunction();
