<template>
  <div>
    <img :src="images[url]" alt="" style="width: 100%" class="transition hover:grayscale duration-500" />
    <div
      class="px-4 sm:px-10 relative -top-[25px] sm:-top-[30px] xl:-top-[40px]"
    >
      <div :class="customPadding">
        <div
          class="text-[#ff8f8f] text-5xl sm:text-6xl xl:text-7xl uppercase italic mb-14 max-2xl:break-all"
        >
          {{ name }}
        </div>
        <div
          class="text-2xl sm:text-3xl xl:text-3.5xl xl:leading-normal font-medium font-kumbh"
        >
          {{ description }}
        </div>
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
  props: ["url", "name", "description", "customPadding"],
  data() {
    return {
      images,
    };
  },
};
</script>
