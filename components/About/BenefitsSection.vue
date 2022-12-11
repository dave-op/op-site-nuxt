<template>
  <div class="bg-white text-black">
    <div class="p-48 bg-pink-1 text-white">
      <div class="text-6xl leading-tight font-bold mb-20">
        “Working with Original people., has helped us deliver creatively on
        multiple projects through the years. Their work has always been
        fantastic, and we hope to work with them in the future.”
      </div>
      <div class="text-2xl font-bold">Kasper Vardrup</div>
      <div class="text-lg">Founder and Partner at GLPG</div>
    </div>
    <div class="p-48">
      <div
        class="uppercase italic text-[135px] leading-8.5 text-[#ff8f8f] w-3/4 mb-20"
      >
        Why partner with us?
      </div>
      <div class="grid grid-cols-2 gap-20">
        <div v-for="(benefit, index) in benefits" :key="index">
          <div class="text-7xl uppercase italic mb-10">{{ benefit.name }}</div>
          <div class="text-2xl font-medium">{{ benefit.description }}</div>
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
