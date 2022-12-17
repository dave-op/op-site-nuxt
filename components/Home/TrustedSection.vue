<script setup>
const companies = ["Google", "KFC", "Google", "KFC", "Google"];
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-3/4 pt-10 md:pt-20 lg:pt-40 mb-20">
      <div class="font-bold mb-4 lg:text-2xl font-kumbh">Trusted by great companies</div>
      <div class="flex justify-between flex-wrap">
        <div
          v-for="(company, index) in companies"
          :key="index"
          class="text-7xl text-[#ff8f8f] p-2"
        >
          {{ company }}
        </div>
      </div>
    </div>
    <div class="mx-10 h-[800px] bg-gray-1" style="width: -webkit-fill-available;"></div>
  </div>
</template>
