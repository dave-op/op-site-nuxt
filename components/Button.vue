<template>
  <button
    class="rounded-full py-4 bg-pink-1 italic px-8 text-2xl uppercase text-white"
    @mouseover="onEnter"
    @mouseleave="onLeave"
  >
    <slot />
  </button>
</template>

<script>
import { gsap } from "gsap";

export default {
  methods: {
    onEnter({ currentTarget }) {
      gsap.to(currentTarget, { scale: 1.2 });
    },
    onLeave({ currentTarget }) {
      gsap.to(currentTarget, { scale: 1 });
    }
  },
};
</script>
