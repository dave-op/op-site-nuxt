<template>
  <div class="py-10 md:py-20 lg:py-40 flex justify-center overflow-hidden">
    <div class="w-3/4">
      <div class="font-bold mb-4 lg:text-2xl font-kumbh">
        A digital Product Studio Based In Soho, London
      </div>
      <div
        class="flex justify-between items-center flex-col md:flex-row gap-20 max-md:mb-20"
      >
        <div
          class="text-2xl md:text-4xl lg:text-7xl text-[#ff8f8f] uppercase italic lg:leading-tight md:mb-14"
        >
          Transforming Ideas Into Incredible Digital Products
        </div>
        <div class="cta-div">
          <Button
            class="w-[160px] h-[160px] flex justify-center items-center cta-button"
          >
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 400 400"
                class="wrapper"
              >
                <path
                  id="multiarc"
                  d="M 100, 200 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                  fill="transparent"
                />
                <text
                  font-size="30"
                  font-weight="400"
                  fill="white"
                  textLength="624"
                >
                  <textPath id="multiarcText" href="#multiarc" class="text">
                    START NEW PROJECT &#8226; START NEW PROJECT &#8226;
                  </textPath>
                </text>
              </svg>
            </div>
          </Button>
        </div>
      </div>
      <Button class="py-6 px-14">OUR STUDIO</Button>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

onMounted(() => {
  gsap.set(".wrapper", {
    xPercent: 0,
    yPercent: 0,
    x: 0,
    y: 0,
    transformOrigin: "center",
  });
  gsap.to(".wrapper", { rotation: 360, ease: "none", repeat: -1, duration: 6 });
  gsap.to("#multiarcText", {
    rotation: -360,
    ease: "none",
    repeat: -1,
    duration: 6,
  });

  const cta_div = document.querySelector(".cta-div");
  let original_div = cta_div.getBoundingClientRect();

  cta_div.addEventListener("mousemove", moveCircle);
  cta_div.addEventListener("mouseleave", leaveCircle);
  window.addEventListener("resize", resizeWindow);

  function resizeWindow(e) {
    original_div = cta_div.getBoundingClientRect();
  }

  function leaveCircle(e) {
    gsap.to(".wrapper, .cta-button", {
      duration: 0.3,
      x: 0,
      y: 0,
      scale: 1,
    });
  }

  function moveCircle(e) {
    callParallax(e);
  }

  function callParallax(e) {
    parallaxIt(e, ".cta-button", 80);
  }

  function parallaxIt(e, target, movement) {
    var relX = e.pageX - original_div.left;
    var relY = e.pageY - original_div.top;

    gsap.to(target, {
      duration: 0.3,
      x: ((relX - 100) / 200) * movement,
      y: ((relY - 100) / 200) * movement,
      ease: "power2",
    });
  }
});
</script>
