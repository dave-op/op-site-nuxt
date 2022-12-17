<template>
  <div class="pt-10 md:pt-20 lg:pt-40 flex justify-center overflow-hidden">
    <div class="w-3/4">
      <div class="font-bold mb-4 lg:text-2xl font-kumbh">
        A digital Product Studio Based In Soho, London
      </div>
      <div class="flex md:justify-between md:items-center mb-10 flex-col md:flex-row">
        <div class="text-2xl md:text-4xl lg:text-7xl text-[#ff8f8f] uppercase italic">
          Transforming Ideas Into Incredible Digital Products
        </div>
        <div class="relative w-fit">
          <svg width="300" height="300" viewBox="0 0 600 600" class="wrapper">
            <path
              id="multiarc"
              d="M 150, 300 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
              fill="transparent"
            />
            <text
              font-size="40"
              font-weight="700"
              fill="white"
              dy="-20"
              textLength="930"
            >
              <textPath id="multiarcText" href="#multiarc" class="text">
                START NEW PROJECT &#8226; START NEW PROJECT &#8226;
              </textPath>
            </text>
          </svg>
          <Button
            class="h-[84px] w-[84px] flex justify-center items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          >
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </Button>
        </div>
      </div>
      <Button>OUR STUDIO</Button>
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
