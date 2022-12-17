<template>
  <div>
    <img :src="images[url]" alt="" style="width: 100%;" />
    <div class="px-4 sm:px-10 relative -top-[25px] sm:-top-[30px] xl:-top-[40px]">
      <div class="text-[#ff8f8f] text-5xl sm:text-6xl xl:text-7xl uppercase italic mb-10 break-all">
        {{ name }}
      </div>
      <div class="text-2xl sm:text-3xl xl:text-3.5xl sm:leading-tight font-medium">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
import { filename } from "pathe/utils";

const glob = import.meta.glob("~/assets/**/*.png", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

export default {
  props: ["url", "name", "description"],
  data() {
    return {
      images
    }
  }
};
</script>
