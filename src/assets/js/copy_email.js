const emailUser = "talk";
const emailDomain = "nan.do";
const emailAddress = `${emailUser}@${emailDomain}`;

// Render email when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("email").textContent = emailAddress;
});

function copyEmail() {
  const copiedMessage = document.getElementById("copied-message");

  // Check if clipboard API is supported
  if (!navigator.clipboard) {
    // Fallback to older method
    showCopiedMessage(copiedMessage);
    return;
  }

  navigator.clipboard
    .writeText(emailAddress)
    .then(() => {
      showCopiedMessage(copiedMessage);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      // Show message anyway since the copy might have worked
      showCopiedMessage(copiedMessage);
    });
}

function showCopiedMessage(element) {
  element.classList.remove("opacity-0");
  element.classList.add("opacity-100");

  setTimeout(() => {
    element.classList.remove("opacity-100");
    element.classList.add("opacity-0");
  }, 1500);
}
