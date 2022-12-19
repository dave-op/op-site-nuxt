<script setup>
const services = [
  {
    title: "Product Design",
    description:
      "UI/UX Product DesignWe design beautiful user experiences that distil complex functionality into intuitive user interfaces.",
  },
  {
    title: "Product Strategy",
    description:
      "Explore your product concept, create and test design prototypes, plan out your technical approach.",
  },
  {
    title: "Product  Development",
    description:
      "UI/UX Product DesignWe design beautiful user experiences that distil complex functionality into intuitive user interfaces.",
  },
  {
    title: "e-Learning",
    description:
      "UI/UX Product DesignWe design beautiful user experiences that distil complex functionality into intuitive user interfaces.",
  },
  {
    title: "VR/AR",
    description:
      "UI/UX Product DesignWe design beautiful user experiences that distil complex functionality into intuitive user interfaces.",
  },
];
</script>

<template>
  <div class="flex justify-center">
    <div class="w-4/5">
      <div
        class="text-6xl md:text-8xl lg:text-9xl xl:text-10xl lg:leading-48 text-[#ff8f8f] uppercase italic xl:w-3/4 py-20 xl:py-40"
      >
        Our Services
      </div>
      <div>
        <div
          v-for="(service, index) in services"
          :key="index"
          class="mb-20 flex flex-col xl:flex-row justify-between xl:space-x-10"
        >
          <div class="text-4xl sm:text-7xl uppercase italic mb-4">
            {{ service.title }}
          </div>
          <div class="sm:text-2xl font-medium max-w-[486px] font-kumbh">
            {{ service.description }}
          </div>
        </div>
        <div class="flex xl:justify-end">
          <div class="max-w-[486px] w-full">
            <Button>
              <NuxtLink to="/services">Find Out More</NuxtLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
