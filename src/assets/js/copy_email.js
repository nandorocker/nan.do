const emailUser = "talk";
const emailDomain = "nan.do";

document.getElementById("email").textContent = `${emailUser}@${emailDomain}`;

function copyEmail() {
  const copiedMessage = document.getElementById("copied-message");

  navigator.clipboard
    .writeText(`${emailUser}@${emailDomain}`)
    .then(() => {
      // Show the overlay message
      copiedMessage.classList.remove("opacity-0");
      copiedMessage.classList.add("opacity-80");

      // Hide the message after a short delay
      setTimeout(() => {
        copiedMessage.classList.remove("opacity-80");
        copiedMessage.classList.add("opacity-0");
      }, 1500); // Message will show for 1.5 seconds
    })
    .catch((err) => console.error("Failed to copy: ", err));
}
