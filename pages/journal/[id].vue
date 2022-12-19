<template>
  <div class="bg-white min-h-screen text-[#130f20]">
    <div
      :style="{ backgroundImage: `url(${image})` }"
      class="text-white bg-cover bg-no-repeat"
    >
      <div class="bg-black/20">
        <AppHeader />
        <BlogHeroSection />
      </div>
    </div>
    <BlogLandingPage />
    <BlogPreviousBlog />
    <div class="bg-purple-1 text-white">
      <AppFooter />
    </div>
  </div>
</template>

<script>
import currentBlogImg from "assets/images/blog/bg-current-blog.png";
export default {
  data() {
    return {
      image: currentBlogImg,
    };
  },
};
</script>
