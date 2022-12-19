<template>
  <div class="bg-white text-black">
    <ProjectStatement />
    <div class="p-10 md:p-20 lg:p-30 xl:p-48">
      <div
        class="uppercase italic text-6xl md:text-8xl lg:text-[135px] lg:leading-8.5 text-[#ff8f8f] w-3/4 mb-20"
      >
        Why partner with us?
      </div>
      <div class="grid xl:grid-cols-2 gap-20">
        <div v-for="(benefit, index) in benefits" :key="index">
          <div
            class="text-5xl md:text-6xl lg:text-7xl uppercase italic mb-10 max-sm:break-all"
          >
            {{ benefit.name }}
          </div>
          <div class="text-2xl font-medium font-kumbh">
            {{ benefit.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const benefits = [
  {
    name: "We love what we do.",
    description:
      "Ask anyone, we love what we do. We’re passionate about our craft and we’ve proven our ability to generate real results, helping clients to grow, attract and retain customers.",
  },
  {
    name: "We build partnerships.",
    description:
      "We don’t ‘win’ clients. We build partnerships. Every project is a process of close and constant collaboration, always communicating progress and sharing ideas.",
  },
  {
    name: "We're user-first.",
    description:
      "We provide the solution your customers need, not necessarily the one you think you want. We’ll challenge a brief to ensure everything we do is built around them.",
  },
  {
    name: "We deliver results.",
    description:
      "We actively use digital tools and proven working methodologies to deliver projects in an engaging and efficient way. There’s no process bloat",
  },
];
</script>
