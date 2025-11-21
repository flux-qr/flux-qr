// Mobile nav toggling
const navBtn = document.getElementById("navMenuBtn");
const mobileNav = document.getElementById("mobileNav");

if (navBtn && mobileNav) {
  navBtn.addEventListener("click", () => {
    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "flex";
    }
  });
}

function closeMobileNav() {
  if (mobileNav) mobileNav.style.display = "none";
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact → WhatsApp Link
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const business = document.getElementById("contactBusiness").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  // Yahan tum apna main WhatsApp number daalo (country code + number without +)
  const fulxWhatsApp = "919009300004"; 

  let text = `*FulxQR Website Lead*%0A`;
  text += `Name: ${encodeURIComponent(name)}%0A`;
  text += `WhatsApp: ${encodeURIComponent(phone)}%0A`;
  if (business) {
    text += `Business Type: ${encodeURIComponent(business)}%0A`;
  }
  if (message) {
    text += `%0AMessage: ${encodeURIComponent(message)}%0A`;
  }

  const url = `https://wa.me/${fulxWhatsApp}?text=${text}`;
  window.open(url, "_blank");

  return false;
}
