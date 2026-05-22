const navbar =
document.getElementById("navbar");

let lastScroll =
window.pageYOffset;

/* NAVBAR */

window.addEventListener(
  "scroll",
  () => {

    const currentScroll =
    window.pageYOffset;

    if(currentScroll <= 120){

      navbar.classList.remove(
        "scrolled"
      );

      navbar.classList.remove(
        "show"
      );

    }

    else if(
      currentScroll >
      lastScroll + 8
    ){

      navbar.classList.remove(
        "show"
      );

    }

    else if(
      currentScroll <
      lastScroll - 8
    ){

      navbar.classList.add(
        "scrolled"
      );

      navbar.classList.add(
        "show"
      );

    }

    lastScroll =
    currentScroll;

  }
);

/* VIDEO CARD REVEAL */

const cards =
document.querySelectorAll(
  ".video-card"
);

const observer =
new IntersectionObserver(

  entries => {

    entries.forEach(
      entry => {

        if(entry.isIntersecting){

          entry.target.classList.add(
            "active"
          );

        }

      }
    );

  },

  {
    threshold:0.15
  }

);

cards.forEach(
  card => {
    observer.observe(card);
  }
);

/* LOADER */

window.addEventListener(
  "load",
  () => {

    const loader =
    document.querySelector(
      ".loader-wrapper"
    );

    if(loader){

      setTimeout(() => {

        loader.classList.add(
          "hidden"
        );

      }, 700);

    }

  }
);

/* HERO */

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "loaded"
    );

  }
);