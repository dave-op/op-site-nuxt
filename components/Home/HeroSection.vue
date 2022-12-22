<template>
  <div class="py-10 md:py-20 lg:py-40 flex justify-center overflow-hidden">
    <div class="w-3/4">
      <div class="font-bold mb-4 lg:text-2xl font-kumbh">
        A digital Product Studio Based In Soho, London
      </div>
      <div class="flex md:justify-between md:items-center flex-col md:flex-row">
        <div class="text-2xl md:text-4xl lg:text-7xl text-[#ff8f8f] uppercase italic lg:leading-tight mb-14">
          Transforming Ideas Into Incredible Digital Products
        </div>
        <div class="relative w-fit font-kumbh">
          <svg width="200" height="200" viewBox="0 0 400 400" class="wrapper">
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
          <Button
            class="h-[56px] w-[56px] flex justify-center items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-1 py-0"
          >
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="2xs" />
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
});
</script>
