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
  <div class="px-[180px]">
    <div
      class="text-10xl leading-48 text-[#ff8f8f] uppercase italic w-3/4 py-40"
    >
      Our Services
    </div>
    <div>
      <div
        v-for="(service, index) in services"
        :key="index"
        class="mb-20 flex justify-between"
      >
        <div class="text-7xl uppercase italic">{{ service.title }}</div>
        <div class="text-2xl font-medium max-w-[486px]">
          {{ service.description }}
        </div>
      </div>
      <div class="flex justify-end">
        <div class="max-w-[486px] w-full">
          <Button>Find Out More</Button>
        </div>
      </div>
    </div>
  </div>
</template>
