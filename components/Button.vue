<template>
  <button
    class="rounded-full py-6 italic px-12 text-2xl uppercase text-white border border-white hover:border-[#ff8f8f] relative overflow-hidden z-10"
    @mouseenter="onEnter"
  >
    <span
      class="w-0 h-0 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-full -z-[1] bg-pink-1"
    ></span>
    <slot />
  </button>
</template>

<style>
span {
  transition: 0.5s;
}

button:hover span {
  width: 100%;
  height: 100%;
}
</style>
