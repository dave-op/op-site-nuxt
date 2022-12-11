<script setup>
const companies = ["Google", "KFC", "Google", "KFC", "Google"];
</script>

<template>
  <div>
    <div class="px-[280px] pt-40 mb-20">
      <div class="font-bold mb-4 text-2xl">Trusted by great companies</div>
      <div class="flex justify-between">
        <div
          v-for="(company, index) in companies"
          :key="index"
          class="text-7xl text-[#ff8f8f]"
        >
          {{ company }}
        </div>
      </div>
    </div>
    <div class="mx-10 h-[800px] bg-gray-1"></div>
  </div>
</template>
