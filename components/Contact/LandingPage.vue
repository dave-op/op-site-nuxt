<template>
  <div class="px-40 pb-40">
    <div class="flex flex-col items-end">
      <div
        class="w-1/2 text-6xl italic uppercase flex justify-between mb-10"
        v-for="(client, index) in clients"
        :key="index"
      >
        <NuxtLink to="/contact-form">{{ client }}</NuxtLink>
        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
      </div>
    </div>
  </div>
</template>

<script setup>
const clients = ["Start Up", "Growing Brands", "Corportes", "General Enquiry"];
</script>
