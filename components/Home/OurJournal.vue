<script setup>
const journals = [
  {
    src: "e-learning-journal",
    title: "E-Learning",
    description: "Developing of an client-first e-Learning platform",
  },
  {
    src: "network-rail-app",
    title: "Network Rail App",
    description: "How to re-imagine the learning experience",
  },
  {
    src: "discovery",
    title: "Discovery",
    description: "Best practices for an all-encompassing discovery",
  },
];
import { filename } from "pathe/utils";

const glob = import.meta.glob("~/assets/**/*.png", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>

<template>
  <div class="flex justify-center">
    <div class="w-4/5">
      <div class="font-bold mb-10 text-2xl font-kumbh">Our studio thoughts</div>
      <div
        class="text-6xl md:text-8xl lg:text-9xl xl:text-10xl lg:leading-48 text-[#ff8f8f] uppercase italic xl:w-2/4 mb-10"
      >
        Our Journal
      </div>
      <div class="grid xl:grid-cols-3 gap-10">
        <div v-for="(journal, index) in journals" :key="index">
          <div class="mb-10">
            <img
              :src="images[journal.src]"
              alt=""
              style="width: 100%;"
            />
          </div>
          <div class="text-[#ff8f8f] text-2xl uppercase italic mb-5">
            {{ journal.title }}
          </div>
          <div class="text-3.5xl font-medium leading-tight font-kumbh">
            {{ journal.description }}
          </div>
        </div>
      </div>
      <div class="py-20 lg:py-40 flex justify-center items-center">
        <Button>Read More</Button>
      </div>
    </div>
  </div>
</template>
