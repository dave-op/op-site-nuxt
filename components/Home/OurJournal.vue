<script setup>
const journals = [
  {
    src: "e-learning",
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
  <div class="px-[140px]">
    <div class="font-bold mb-10 text-2xl">Our studio thoughts</div>
    <div
      class="text-10xl leading-48 text-[#ff8f8f] uppercase italic w-2/4 mb-10"
    >
      Our Journal
    </div>
    <div class="grid grid-cols-3 gap-10">
      <div v-for="(journal, index) in journals" :key="index">
        <div class="mb-10">
          <img
            :src="images[journal.src]"
            alt=""
            style="height: 710px; width: 477px"
          />
        </div>
        <div class="text-[#ff8f8f] text-2xl uppercase italic mb-5">
          {{ journal.title }}
        </div>
        <div class="text-3.5xl font-medium leading-tight">
          {{ journal.description }}
        </div>
      </div>
    </div>
    <div class="py-40 flex justify-center items-center">
      <Button>Read More</Button>
    </div>
  </div>
</template>
