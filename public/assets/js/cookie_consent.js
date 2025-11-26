// Cookie Consent Manager
document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookie-consent");
  const grantButton = document.getElementById("cookie-accept");

  // Check if consent was previously granted
  function hasConsent() {
    return localStorage.getItem("consentGranted") === "true";
  }

  // Hide cookie banner if consent was previously granted
  if (hasConsent()) {
    cookieConsent.style.display = "none";
    initializeAnalytics();
  }

  // Handle grant button click
  grantButton.addEventListener("click", function () {
    // Store consent
    localStorage.setItem("consentGranted", "true");

    // Hide banner with animation
    cookieConsent.style.opacity = "0";
    cookieConsent.style.transform = "translateY(100%)";
    setTimeout(() => {
      cookieConsent.style.display = "none";
    }, 300);

    // Update Google Analytics consent
    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });

    // Initialize analytics if not already done
    initializeAnalytics();
  });

  // Initialize Google Analytics
  function initializeAnalytics() {
    // Only initialize if not already loaded
    if (!window.gtagInitialized) {
      window.gtagInitialized = true;

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];

      // Load gtag.js script
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src =
        "https://www.googletagmanager.com/gtag/js?id=G-ZW8YK10J0Q";

      // Set default consent state
      const consentState = hasConsent() ? "granted" : "denied";

      // Configure gtag
      window.gtag = function () {
        dataLayer.push(arguments);
      };
      gtag("js", new Date());
      gtag("config", "G-ZW8YK10J0Q", {
        ad_storage: consentState,
        analytics_storage: consentState,
        ad_user_data: consentState,
        ad_personalization: consentState,
      });

      // Add script to page
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode.insertBefore(gtagScript, firstScript);
    }
  }
});
