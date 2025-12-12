// Cookie Consent Manager
document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookie-consent");
  if (!cookieConsent) return;

  const acceptButton = document.getElementById("cookie-accept");
  const rejectButton = document.getElementById("cookie-reject");

  const CONSENT_KEY = "cookieConsent"; // "granted" | "denied"
  const LEGACY_KEY = "consentGranted"; // "true" | "false"

  function getConsentChoice() {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "granted" || value === "denied") return value;

    // Migrate legacy storage key if present.
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy === "true") {
      localStorage.setItem(CONSENT_KEY, "granted");
      return "granted";
    }
    if (legacy === "false") {
      localStorage.setItem(CONSENT_KEY, "denied");
      return "denied";
    }
    return null;
  }

  function setConsentChoice(choice) {
    localStorage.setItem(CONSENT_KEY, choice);
    // Keep legacy key in sync to avoid surprises elsewhere.
    localStorage.setItem(LEGACY_KEY, choice === "granted" ? "true" : "false");
  }

  function updateGtagConsent(choice) {
    const value = choice === "granted" ? "granted" : "denied";

    // BaseLayout initializes gtag + sets default consent; we just update it.
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_user_data: value,
        ad_personalization: value,
        ad_storage: value,
        analytics_storage: value,
      });
      return;
    }

    // Fallback: queue into dataLayer (gtag may load async).
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("consent", "update", {
      ad_user_data: value,
      ad_personalization: value,
      ad_storage: value,
      analytics_storage: value,
    });
  }

  function hideBanner(animated) {
    if (!animated) {
      cookieConsent.style.display = "none";
      return;
    }

    cookieConsent.style.opacity = "0";
    cookieConsent.style.transform = "translateY(100%)";
    setTimeout(() => {
      cookieConsent.style.display = "none";
    }, 300);
  }

  // If the user already made a choice, hide banner and apply it.
  const existingChoice = getConsentChoice();
  if (existingChoice) {
    hideBanner(false);
    updateGtagConsent(existingChoice);
  }

  if (acceptButton) {
    acceptButton.addEventListener("click", function () {
      setConsentChoice("granted");
      hideBanner(true);
      updateGtagConsent("granted");
    });
  }

  if (rejectButton) {
    rejectButton.addEventListener("click", function () {
      setConsentChoice("denied");
      hideBanner(true);
      updateGtagConsent("denied");
    });
  }
});
