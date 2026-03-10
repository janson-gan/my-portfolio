// Get current year
const currentYear = new Date().getFullYear();
// Insert into the span
document.getElementById("year").textContent = currentYear;

/* Toggle the hamburger icon */
function toggleMenu() {
  var div = document.getElementById("topNav");
  if (div.className === "top-nav") {
    div.className += " responsive";
  } else {
    div.className = "top-nav";
  }
}

/* Close menu list when screen match minimum sreen size */
const checkWidth = () => {
  const screenSize = screen.width;
  if (screenSize > 720) {
    document.getElementById("topNav").className = "top-nav";
  }
};

window.addEventListener("resize", checkWidth);
checkWidth();

const mouseClick = (e) => {
  e;
};

// Display thank you message after contact form is submitted
const form = document.getElementById("contact-form");
const tkMessage = document.getElementById("tk-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.style.display = "none";
  tkMessage.style.display = "block";
});
