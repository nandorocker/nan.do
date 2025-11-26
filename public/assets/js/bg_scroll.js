class BgScroll {
  constructor(element) {
    this.element = element;
    this.sections = this.element.querySelectorAll("section, footer");
    this.observeSection = this.observeSection.bind(this);
    this.init();
  }

  observeSection(entries) {
    const backgroundElement = document.getElementById("background");

    entries.forEach((entry) => {
      // console.log(
      //   "Observed entry:",
      //   entry.target.id,
      //   "isIntersecting:",
      //   entry.isIntersecting
      // );
      if (entry.isIntersecting && entry.target.dataset.bgClass) {
        if (entry.isIntersecting && entry.target.dataset.bgClass) {
          // Remove all bg classes
          backgroundElement.classList.forEach((className) => {
            if (className.startsWith("bg-")) {
              backgroundElement.classList.remove(className);
            }
          });
          // Add the proper bg class if it exists
          backgroundElement.classList.add(entry.target.dataset.bgClass);
          // console.log("Added class:", entry.target.dataset.bgClass);
        }
        // console.log("Added class:", entry.target.dataset.bgClass);
      }
    });
  }

  init() {
    const observer = new IntersectionObserver(this.observeSection, {
      rootMargin: "-50% 0% -50% 0%",
    });
    this.sections.forEach((section) => {
      observer.observe(section);
    });
  }
}

// Init BgScroll
const el = document.querySelector("[data-bg-scroll]");
new BgScroll(el);
