const NavBar = {
  /**
   * Smooth scroll animation
   * @param {int} endX: destination x coordinate
   * @param {int} endY: destination y coordinate
   * @param {int} duration: animation duration in ms
   */
  smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  },

  getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  },

  scrollToIdOnClick(element, height) {
    const to = this.getScrollTopByHref(element) - height;
    this.smoothScrollTo(0, to);
  },

  closeMenu() {
    document.querySelector(".menu .menu__btn").checked = false;
  },
};

const App = {
  handleScrollable(event) {
    event.preventDefault();
    const NAV_BAR_HEIGHT = 82.5;
    NavBar.scrollToIdOnClick(event.target, NAV_BAR_HEIGHT);
    NavBar.closeMenu();
  },

  handleClosure(event) {
    !document.querySelector("nav").contains(event.target) && NavBar.closeMenu();
  },

  init() {
    const menuItems = document.querySelectorAll(
      '.menu .menu__options li a[href^="#"]'
    );
    menuItems.forEach((item) =>
      item.addEventListener("click", this.handleScrollable)
    );

    document
      .querySelector('.menu .menu__logo[href^="#"]')
      .addEventListener("click", (event) => {
        event.preventDefault();
        const element =
          event.target.nodeName.toLowerCase() === "a"
            ? event.target
            : event.target.parentElement;
        NavBar.scrollToIdOnClick(element, 0);
        NavBar.closeMenu();
      });

    window.addEventListener("click", this.handleClosure);
    window.addEventListener("focusin", this.handleClosure);
  },
};

document.addEventListener("DOMContentLoaded", () => App.init());
