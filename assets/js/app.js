/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
const smoothScrollTo = (endX, endY, duration) => {
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
};

const getScrollTopByHref = (element) => {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
};

const scrollToIdOnClick = (event) => {
  event.preventDefault();
  const NAV_BAR_HEIGHT = 82.5;
  const to = getScrollTopByHref(event.target) - NAV_BAR_HEIGHT;
  smoothScrollTo(0, to);
};

const closeMenu = () => {
  document.querySelector(".menu .menu__btn").checked = false;
};

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(
    '.menu .menu__options li a[href^="#"]'
  );
  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });

  document
    .querySelector('.menu .menu__logo[href^="#"]')
    .addEventListener("click", (event) => {
      event.preventDefault();
      const element =
        event.target.nodeName.toLowerCase() === "a"
          ? event.target
          : event.target.parentElement;
      const to = getScrollTopByHref(element);
      smoothScrollTo(0, to);
    });

  const menuLinks = document.querySelectorAll(".js-close-menu");
  menuLinks.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});
