import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitType from "split-type";

const tl = gsap.timeline();

tl.fromTo(".header__row", { y: -100 }, { y: 0, duration: 0.4 });
tl.fromTo(
  ".hero__subtitle",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4 }
);
const heroTitle = new SplitType("#hero__title");
tl.fromTo(".char", { y: 200 }, { y: 0, stagger: 0.08 });
tl.fromTo(
  ".title1_hero span",
  { color: "#000" },
  { color: "#9ea080", duration: 0.4 }
);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

if (window.matchMedia("(max-width: 850px)").matches) {
  gsap.fromTo(
    ".hero__image_overlay",
    { y: 0 },
    {
      y: "100%",
      scrollTrigger: {
        trigger: ".hero__image",
        start: "top 30%",
        end: "center 30%",
        scrub: true,
        once: true,
      },
    }
  );
} else {
  gsap.fromTo(
    ".hero__image_overlay",
    { y: 0 },
    {
      y: "100%",
      scrollTrigger: {
        trigger: ".hero__image",
        start: "top center",
        end: "center center",
        scrub: true,
        once: true,
      },
    }
  );
}

if (window.matchMedia("(max-width: 850px)").matches) {
  gsap.fromTo(
    ".about__title",
    { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "30% center",
        scrub: true,
        once: true,
      },
    }
  );
} else {
  gsap.fromTo(
    ".about__title",
    { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "center bottom",
        scrub: true,
        once: true,
      },
    }
  );
}
gsap.fromTo(
  ".about__subtitle",
  { y: "100%", opacity: 0 },
  {
    y: "0%",
    opacity: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "center center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".about__button",
  { x: "100%", opacity: 0 },
  {
    x: "0%",
    opacity: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "center 70%",
      end: "bottom bottom",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".person__image",
  { y: "100%", opacity: 0 },
  {
    y: "0%",
    opacity: 1,
    scrollTrigger: {
      trigger: ".person",
      start: "top center",
      end: "center center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".person__by",
  { marginRight: 10 },
  {
    marginRight: 330,
    scrollTrigger: {
      trigger: ".person",
      start: "top center",
      end: "center center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".person__its",
  { marginRight: 10 },
  {
    marginRight: 300,
    scrollTrigger: {
      trigger: ".person",
      start: "top center",
      end: "60% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".person__way",
  { marginLeft: "50%" },
  {
    marginLeft: "0%",
    scrollTrigger: {
      trigger: ".person",
      start: "top center",
      end: "40% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work__overlay_image-one",
  { x: "0" },
  {
    x: "100%",
    scrollTrigger: {
      trigger: ".work__wrapper_image-one",
      start: "top center",
      end: "70% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work__overlay_image-two",
  { y: "0" },
  {
    y: "101%",
    scrollTrigger: {
      trigger: ".work__wrapper_image-two",
      start: "top center",
      end: "70% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work__overlay_image-three",
  { y: "0" },
  {
    y: "101%",
    scrollTrigger: {
      trigger: ".work__wrapper_image-three",
      start: "top center",
      end: "70% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work__overlay_image-four",
  { y: "0" },
  {
    y: "101%",
    scrollTrigger: {
      trigger: ".work__wrapper_image-four",
      start: "top center",
      end: "70% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work__wrapper_subtitle",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".work__wrapper_subtitle ",
      start: "top center",
      end: "70% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work__overlay_image-five",
  { y: "0" },
  {
    y: "101%",
    scrollTrigger: {
      trigger: ".work__wrapper_image-five",
      start: "top center",
      end: "70% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work__overlay_image-six",
  { y: "0" },
  {
    y: "101%",
    scrollTrigger: {
      trigger: ".work__wrapper_image-six",
      start: "top center",
      end: "70% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work__wrapper_button",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".work__wrapper_button",
      start: "top center",
      end: "center center",
      once: true,
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".contact__title",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "top center",
      end: "center bottom",
      once: true,
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".contact__image",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "top center",
      end: "center center",
      once: true,
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".contact__subtitle",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".contact__subtitle",
      start: "top center",
      end: "center center",
      once: true,
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".footer",
      start: "top bottom",
      end: "center bottom",
      once: true,
      scrub: true,
      //   markers: true,
    },
  }
);
