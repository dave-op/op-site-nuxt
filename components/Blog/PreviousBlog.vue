<template>
  <div
    class="bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div
      class="bg-black/60 px-10 md:px-20 lg:px-40 py-60 md:py-80"
    >
      <div class="md:text-2xl font-bold font-kumbh mb-4 text-[#ff8f8f]">
        Previous Blog
      </div>
      <div
        class="text-4xl md:text-6xl lg:text-7xl uppercase italic lg:w-2/3 mb-20 text-white"
      >
        How to re-imagine the learning experience
      </div>
      <div class="md:text-2xl font-bold font-kumbh text-black">
        Let’s build your startup, together
      </div>
    </div>
  </div>
</template>

<script>
import previousBlog from "assets/images/blog/bg-prev-blog.png";
export default {
  data() {
    return {
      image: previousBlog,
    };
  },
};
</script>
