gsap.registerPlugin(ScrollTrigger);


const introTl = gsap.timeline();

introTl
  .to(".intro img", {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
  })
  .to(".intro img", {
    scale: 1.1,
    duration: 0.6,
    ease: "power2.inOut",
  })
  .to(".intro img", {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    ease: "power2.in",
  })
  .to(".intro", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      document.querySelector(".intro").style.display = "none";
    },
  })
  .from(".Hero .ptext p", {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(".Hero .ptext h1", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
  }, "-=0.4")
  .from(".Hero .ptext button", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power3.out",
  }, "-=0.3");


gsap.from(".Section1 .sec1Question", {
  scrollTrigger: { trigger: ".Section1", start: "top 80%" },
  opacity: 0,
  x: -80,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".Section1 .sec1Image img", {
  scrollTrigger: { trigger: ".Section1", start: "top 80%" },
  opacity: 0,
  x: 80,
  duration: 1,
  ease: "power3.out",
  delay: 0.2,
});

gsap.from(".sec2Question", {
  scrollTrigger: { trigger: ".Section2", start: "top 80%" },
  opacity: 0,
  x: 80,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".sec2IT", {
  scrollTrigger: { trigger: ".Section2", start: "top 80%" },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.2,
});


gsap.from(".sec3Question h1", {
  scrollTrigger: { trigger: ".sec3Question", start: "top 85%" },
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power4.out",
});

gsap.from(".sec3Question p, .sec3Question .sec3pp", {
  scrollTrigger: { trigger: ".sec3Question", start: "top 85%" },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power3.out",
  stagger: 0.15,
  delay: 0.3,
});


const cards = [
  ".sec3QuestionHumana",
  ".sec3QuestionAgua",
  ".sec3QuestionSolo",
  ".sec3QuestionAr",
];

cards.forEach((card) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 85%" },
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(`${card} h1`, {
    scrollTrigger: { trigger: card, start: "top 80%" },
    opacity: 0,
    x: -40,
    duration: 0.9,
    ease: "power3.out",
    delay: 0.2,
  });

  gsap.from(`${card} .sec3Content img`, {
    scrollTrigger: { trigger: card, start: "top 75%" },
    opacity: 0,
    x: 60,
    duration: 1,
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.from(`${card} .sec3Content p`, {
    scrollTrigger: { trigger: card, start: "top 75%" },
    opacity: 0,
    x: -40,
    duration: 1,
    ease: "power3.out",
    delay: 0.3,
  });
});


gsap.from(".sec4Question", {
  scrollTrigger: { trigger: ".Section4", start: "top 80%" },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".sec4Images > div", {
  scrollTrigger: { trigger: ".sec4Images", start: "top 85%" },
  opacity: 0,
  y: 40,
  duration: 0.7,
  ease: "power3.out",
  stagger: 0.15,
});


gsap.from(".sec5Question", {
  scrollTrigger: { trigger: ".Section5", start: "top 80%" },
  opacity: 0,
  x: -60,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".sec5Text", {
  scrollTrigger: { trigger: ".Section5", start: "top 80%" },
  opacity: 0,
  x: 60,
  duration: 1,
  ease: "power3.out",
  delay: 0.2,
});

gsap.from(".conclusao", {
  scrollTrigger: { trigger: ".conclusao", start: "top 85%" },
  opacity: 0,
  scale: 0.95,
  duration: 1,
  ease: "power3.out",
});


gsap.from(".foot", {
  scrollTrigger: { trigger: "footer", start: "top 90%" },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out",
});


const btn = document.querySelector(".Hero button");

if (btn) {
  btn.addEventListener("click", () => {
    document.querySelector("#Section1").scrollIntoView({
      behavior: "smooth",
    });
  });
}