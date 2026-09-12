const root = document.documentElement;

const themeToggle =
  document.getElementById("theme-toggle");

const menuToggle =
  document.getElementById("menu-toggle");

const nav =
  document.getElementById("nav");


/* Theme */

const savedTheme =
  localStorage.getItem("theme");

if (savedTheme) {
  root.dataset.theme = savedTheme;
} else if (
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  root.dataset.theme = "dark";
}


themeToggle.addEventListener(
  "click",
  () => {

    const nextTheme =
      root.dataset.theme === "dark"
        ? "light"
        : "dark";

    root.dataset.theme =
      nextTheme;

    localStorage.setItem(
      "theme",
      nextTheme
    );

  }
);


/* Mobile menu */

menuToggle.addEventListener(
  "click",
  () => {

    nav.classList.toggle(
      "open"
    );

  }
);


nav.querySelectorAll("a").forEach(
  link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "open"
        );

      }
    );

  }
);


/* Paper-image fallback */

document
  .querySelectorAll(".paper-media img")
  .forEach(img => {

    img.addEventListener(
      "error",
      () => {

        img.closest(
          ".paper-media"
        ).classList.add(
          "is-missing"
        );

      }
    );

  });


/* Reveal animation */

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    revealObserver.observe(
      element
    );

  });


/* Scroll spy */

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navLinks =
  [...document.querySelectorAll(
    ".nav a"
  )];


const sectionObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            !entry.isIntersecting
          ) {
            return;
          }

          navLinks.forEach(
            link => {

              link.classList.toggle(
                "active",
                link.getAttribute("href") ===
                `#${entry.target.id}`
              );

            }
          );

        }
      );

    },
    {
      rootMargin:
        "-25% 0px -65% 0px"
    }
  );


sections.forEach(
  section => {

    sectionObserver.observe(
      section
    );

  }
);


/* Footer year */

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();
