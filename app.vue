<template>
  <div class="cursor-none">
    <NuxtPage />
    <div
      class="cursor absolute top-0 left-0 pointer-events-none mix-blend-exclusion z-[60]"
    >
      <svg width="60" height="60">
        <circle cx="30" cy="30" r="20" fill="white"></circle>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  const circle = document.querySelector(".cursor");
  const links = document.querySelectorAll("a");
  const buttons = document.querySelectorAll("button");
  let yMousePos = 0;

  window.addEventListener("mousemove", moveCircle);
  window.addEventListener("scroll", moveMouseAsScroll);
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.set(circle, {
    xPercent: -50,
    yPercent: -50,
  });

  function moveCircle(e) {
    yMousePos = e.pageY - window.scrollY;
    gsap.set(circle, {
      x: e.pageX,
      y: e.pageY,
    });
  }

  function moveMouseAsScroll() {
    gsap.set(circle, {
      y: window.scrollY + yMousePos,
    });
  }

  ScrollTrigger.create({

  })

  function linkAnimIn() {
    gsap.to(circle, {
      duration: 0.3,
      scale: 1.8,
    });
  }

  function linkAnimOut() {
    gsap.to(circle, {
      duration: 0.3,
      scale: 1,
    });
  }

  links.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      linkAnimIn();
    });
    link.addEventListener("mouseout", (e) => {
      linkAnimOut();
    });
  });

  buttons.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      linkAnimIn();
    });
    link.addEventListener("mouseout", (e) => {
      linkAnimOut();
    });
  });
});
</script>
