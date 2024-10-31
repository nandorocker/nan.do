class BgScroll {
  constructor(element) {
    this.element = element;
    this.sections = this.element.querySelectorAll("section, footer");
    this.observeSection = this.observeSection.bind(this);
    this.init();
  }

  observeSection(entries) {
    entries.forEach((entry) => {
      // console.log(
      //   "Observed entry:",
      //   entry.target.id,
      //   "isIntersecting:",
      //   entry.isIntersecting
      // );
      if (entry.isIntersecting && entry.target.dataset.bgClass) {
        // Remove all bg classes
        this.element.classList.forEach((className) => {
          if (className.startsWith("bg-")) {
            this.element.classList.remove(className);
            // console.log("Added class:", entry.target.dataset.bgClass);
          }
        });
        // Add the proper bg class
        this.element.classList.add(entry.target.dataset.bgClass);
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
